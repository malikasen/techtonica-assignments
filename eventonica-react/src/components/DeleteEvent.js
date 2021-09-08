import React, { useState } from 'react';

function DeleteEvent() {
  const [deleteEventId, setDeleteEventId] = useState('');
  const deleteEvent = (e) => {
    e.preventDefault();
    // I want to filter mockEvents state from a sibling using the deleteEventId state 
    setDeleteEventId('');
  }
  return (
    <div>
      <h3>Delete Event</h3>
      <form id="delete-event" action="#">
        <fieldset>
          <label>Event ID</label>
          <input type="number" min="1" id="delete-event-id" value={(e) => setDeleteEventId(e.target.value)}/>
        </fieldset>
        <input type="submit" onClick={(e) => deleteEvent(e)}/>
      </form>
    </div>
  )
}
export default DeleteEvent