import React, { useState } from 'react';

function DeleteEvent({ mockEvents, setMockEvents }) {
  const [deleteEventId, setDeleteEventId] = useState('');
  const deleteEvent = (e) => {
    e.preventDefault();
    // I want to filter mockEvents state from a sibling using the deleteEventId state 
    mockEvents = (mockEvents.filter(event => event.id != deleteEventId));
    console.log(deleteEventId);
    console.log(mockEvents);
    setDeleteEventId('');
  }
  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#">
        <fieldset>
          <label>Event ID</label>
          <input type="number" min="1" id="delete-event-id" value={deleteEventId} onChange={(e) => setDeleteEventId(e.target.value)}/>
        </fieldset>
        <input type="submit" value="Delete Event" onClick={(e) => deleteEvent(e)}/>
      </form>
    </div>
  )
}
export default DeleteEvent