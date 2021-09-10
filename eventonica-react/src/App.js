import './App.css';
import React, { useState } from 'react'
import calendarImg from './calendar.png'
import Footer from './components/Footer'
import Users from './components/Users'
import Events from './components/Events'
import DeleteEvent from './components/DeleteEvent'
import FindEvent from './components/FindEvent'



function App() {
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
  return (
    <div className="App">
      <header>
        <img src={calendarImg} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <main>
        <div className="user-and-events">
          <Users />

          <section className="event-management">
           <Events mockEvents={mockEvents} setMockEvents={setMockEvents} /> 
          </section>
        </div>

        <DeleteEvent mockEvents={mockEvents} setMockEvents={setMockEvents} />

        <aside className="search-toolbar">
          <FindEvent mockEvents={mockEvents} setMockEvents={setMockEvents} />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
