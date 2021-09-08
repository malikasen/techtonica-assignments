import React, { useState } from 'react';

function FindEvent() {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const findEvent = (e) => {
    e.preventDefault();
    // I need to iterate through mockEvents state and search for the object with my date or category
    setDate('');
    setCategory('');
  }
  return (
    <div>
      <h3>Find Events</h3>
      <form id="search" action="#">
        <fieldset>
          <label htmlFor="date-search">Date</label>
          <input type="text" id="date-search" placeholder="YYYY-MM-DD" value={(e) => setDate(e.target.value)}/>
        </fieldset>
        <fieldset>
          <label htmlFor="category-search">Category</label>
          <input type="text" id="category-search" value={(e) => setCategory(e.target.value)}/>
        </fieldset>

        <input type="submit" value="Search" onClick={(e) => findEvent(e)}/>
      </form>
    </div>
  )
}
export default FindEvent