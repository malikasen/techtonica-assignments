import React, { useState, useReducer } from 'react';

const initialState = {
  id: "",
  name: "",
  date: null,
  description: "",
  category: "",
  maxAttendees: 10,
  image: "",
};

const reducer = (state, action) => {
  console.log(action, "this is the action");
  switch (action.type) {
    case "editName":
      console.log("Logged if the editName action is being dispatched")
      return { ...state, name: action.payload };

    case "editDescription":
      return { ...state, description: action.payload };

    case "editCategory":
      return { ...state, category: action.payload };

    default:
      return state;
  }
};

function Events() {
  const event1 = {
    id: 1,
    name: "Birthday",
    date: "2021-09-01",
    description: "A birthday party for my best friend",
    category: "Celebration",
  };
  
  const event2 = {
    id: 2,
    name: "Graduation",
    date: "2021-08-01",
    description: "The class of 2021 graduates from East High",
    category: "Education",
  };
  
  const event3 = {
    id: 3,
    name: "JS Study Session",
    date: "2021-10-01",
    description: "A chance to practice Javascript interview questions",
    category: "Education",
  };
  const [mockEvents, setMockEvents] = useState([event1, event2, event3])
  // const EventForm = () => {
    // const [event, setEvent] = useState({})
    const [state, dispatch] = useReducer(reducer, initialState);
    
  //   return <div>...</div>;
  // };
  const addEvent = (e) => {
    e.preventDefault();
    // I want to use event state to store an object with new event detail in order to add it
    // to mock Events later
    // setEvent({name: state.name, date: state.date, description: state.description, category: state.description})
    setMockEvents([...mockEvents, 
      {name: state.name, date: state.date, description: state.description, category: state.description}]);
    // I want to use initialState to clear up input boxes onSubmit
  }
  return (
    <div>
      <h2>Event Management</h2>
      <div>
        <h3>All Events</h3>
        <ul id="events-list">
          {mockEvents.map((event) => {
            return <li key={event.id}>name: {event.name}, date: {event.date}, description: {event.description}, category: {event.category}</li>
          })}
          <li>...</li>
        </ul>

        <h3>Add Event</h3>
        <form id="add-event" action="#">
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-event-name"
              placeholder="Virtual corgi meetup"
              value={state.name}
              onChange={(e) =>
              dispatch({
                type: "editName",
                payload: e.target.value
              })}
            />
          </fieldset>
          <fieldset>
            <label>Category</label>
            <input
              type="text"
              id="add-event-category"
              placeholder=""
              value={state.category}
              onChange={(e) =>
              dispatch({
                type: "editCategory",
                payload: e.target.value
              })}
            />
          </fieldset>
          <fieldset>
            <label>Description</label>
            <input
              type="text"
              id="add-event-description"
              placeholder="Event information"
              value={state.description}
              onChange={(e) =>
              dispatch({
                type: "editDescription",
                payload: e.target.value
              })}
            />
          </fieldset>
          <input type="submit" value="Add Event" onClick={(e) => addEvent(e)}/>
        </form>
      </div>
    </div>
  )
}
export default Events