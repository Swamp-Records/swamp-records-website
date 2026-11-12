export interface Team {
  name: string;
  roles: string[];
  note?: string;
}

export const teams: Team[] = [
  {
    name: 'Artist Teams / Campaigns',
    roles: ['Media', 'PR', 'Graphics', 'Merch', 'Booking', 'Content', 'Research/Analytics', 'Strategy'],
  },
  {
    name: 'Booking',
    roles: ['Talent Buyer', 'Partnerships/Outreach', 'Day of Show (DOS)', 'Logistics', 'Production'],
  },
  { name: 'Business', roles: ['Business Team Member'] },
  { name: 'DEI', roles: ['DEI Team Member'] },
  { name: 'Development', roles: ['Web Developer', 'Web Designer', 'Automations Developer'] },
  { name: 'DSP', roles: ['DSP Team Member'] },
  { name: 'Marketing', roles: ['Street Team', 'Graphic Design', 'Short Form Content'] },
  { name: 'Media', roles: ['Photographer', 'Videographer'] },
];