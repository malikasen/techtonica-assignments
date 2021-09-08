import './App.css';
import calendarImg from './calendar.png'
import Footer from './components/Footer'
import Users from './components/Users'
import Events from './components/Events'
import DeleteEvent from './components/DeleteEvent'
import FindEvent from './components/FindEvent'


function App() {
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
           <Events /> 
          </section>
        </div>

        <DeleteEvent />

        <aside className="search-toolbar">
          <FindEvent />
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default App;
