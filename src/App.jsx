import './App.css'
import { useState } from 'react'
import Login from './components/Login'
import TicketBookingForm from './components/TicketBookingForm';

function App() {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleData = (username) => {
    setUsername(username);
    setIsLoggedIn(true);
  }

  return (
    <div className="App">
      <Login onGetData={handleData}/>
      <TicketBookingForm username={username} isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
