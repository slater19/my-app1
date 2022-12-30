import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Profile } from './components/Profile/Profile'
import { Search } from './components/Search/Search'
import { Notification } from './components/Notification/Notification'
import { Message } from './Messages/Message'
// import { Profilehistory } from './components/Profilehistory'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Search/> */}
      {/* <Notification/> */}
      <Message/>
    </div>
  )
}

export default App
