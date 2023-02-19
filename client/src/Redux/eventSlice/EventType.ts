export type Event = {
  id: number;
  name: string;
  date: string;
  comment: string;
  userid: number;
};

export type EventSliseState = {
  events: Event[];
};

export default EventSliseState;
