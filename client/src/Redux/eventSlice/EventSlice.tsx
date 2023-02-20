import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { AppThunk } from "../hooks";
import type { EventSliseState, Event } from "./EventType";

const initialState: EventSliseState = {
  events: [],
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    visualEvent: (state, action: PayloadAction<Event[]>) => ({
      ...state,
      events: action.payload,
    }),
    addEvent: (state, action: PayloadAction<Event>) => {
      state.events.push(action.payload);
    },
    deleteEvent: (state, action: PayloadAction<number>) => ({
      ...state,
      events: state.events.filter((event) => event.id !== action.payload),
    }),
  },
});

export const { visualEvent, addEvent, deleteEvent } = eventSlice.actions;

export const visualEventsThunk = (): AppThunk => (dispatch) => {
    try {
        
    } catch (error) {
        
    }
  axios<Event[]>("/event")
    .then((res) => dispatch(visualEvent(res.data)))
    .catch((err) => console.log("hi"));
};

export const addEventThunk =
  (formInput: { title: string }): AppThunk =>
  (dispatch) => {
    axios
      .post<Event>("/event", formInput)
      .then((res) => dispatch(addEvent(res.data)))
      .catch(console.log);
  };

export const deleteEventThunk =
  (id: number): AppThunk =>
  (dispatch) => {
    axios
      .delete<Event>(`/event/${id}`)
      .then(() => dispatch(deleteEvent(id)))
      .catch(console.log);
  };

export default eventSlice.reducer;
