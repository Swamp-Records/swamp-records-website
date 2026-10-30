import { Client } from "@notionhq/client";
import { getEventsFromDB } from './eventParser';

export const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

export async function getEvents() { return await getEventsFromDB(notion); }