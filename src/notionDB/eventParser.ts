import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from './notion';

export interface EventObj {
    id: string;
    name: string;
    artists: string;
    date: string;
    time: string;
    location: string;
    ticketLink: string;
    imageUrl: string;
    description: string;
}

//parses the event from Notion into EventObj format
const parseEventPage = (page: PageObjectResponse) => {
    //get all properties
    const props = page.properties;

    //split it into the individual properties for the event
    const nameProp = props.name;
    const artistsProp = props["artist(s)"];
    const dateProp = props.date;
    const timeProp = props.time;
    const locationProp = props.location;
    const ticketLinkProp = props["ticket link"];
    const imageUrlProp = props["event image"];
    const descriptionProp = props["addt. details (opt)"];

    //create a variable for each property of the event
    let name = ''; let artists = ''; let date = ''; let time = ''; let location = ''; let ticketLink = ''; let imageUrl = ''; let description = '';

    //check the type of each property to make sure it matches the expected format before extracting the value
    //if there isn't a value in the property, it will just be an empty string
    if (nameProp.type == 'title') {name = nameProp.title?.[0]?.plain_text || '';}
    if (artistsProp.type == 'rich_text') {artists = artistsProp.rich_text?.[0]?.plain_text || '';}
    if (dateProp.type == 'date') {date = dateProp.date?.start || '';}
    if (timeProp.type == 'rich_text') {time = timeProp.rich_text?.[0]?.plain_text || '';}
    if (locationProp.type == 'rich_text') {location = locationProp.rich_text?.[0]?.plain_text || '';}
    if (ticketLinkProp.type == 'url') {ticketLink = ticketLinkProp.url || '';}
    //get the image url, if there is none, it will just show the swamp records logo
    if (imageUrlProp.type == 'rich_text') {
        imageUrl = imageUrlProp.rich_text?.[0]?.plain_text || '/circle-logo-white.png';
    }
    if (descriptionProp.type == 'rich_text') {description = descriptionProp.rich_text?.[0]?.plain_text || '';}

    //finally, return the values
    return { id: page.id, name, artists, date, time, location, ticketLink, imageUrl, description };
};

export const getEventsFromDB = async (client: any) => {
    //query the dataase for all the events
    const response = await notion.dataSources.query({
        data_source_id: process.env.NOTION_DATA_SOURCE_ID!,
    });

    //store the rows into a variable for easier iteration
    const eventRows = response.results;

    //create a list to push all the eventObjs into
    const events: EventObj[] = [];

    //loop through the event rows and parse each one into an EventObj + push it to the list
    for (const eventRow of eventRows) {
        if (eventRow.object == 'page' && 'properties' in eventRow) {
            const parsedEvent = parseEventPage(eventRow);
            events.push(parsedEvent);
        }
    }

    //return the list
    return events;
}