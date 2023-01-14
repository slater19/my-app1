import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
 import { Profile } from './components/Profile/Profile'
 import { Search } from './components/Search/Search'
 import { Notification } from './components/Notification/Notification'
 import { Message } from './components/Messages/Message'
 import { Feed } from './components/Feed/Feed'
// import BasicModal from './components/StylingComponents/Modal'
import { Share } from './components/Share/Share'
import { Inbox } from './components/Inbox/Inbox'
 import { ScanCards } from './components/ScanCards/ScanCards'
 import {Route,Routes, useLocation} from 'react-router-dom'
 import { ScanName } from './components/ScanCards/ScanName'
// import {BrowserRouter} from 'react-router-dom'
 import { ScanCompany} from './components/ScanCards/ScanCompany'
 import { ScanWebsite } from './components/ScanCards/ScanWebsite'
import { ScanDesig } from './components/ScanCards/ScanDesig'
 import { ScanCountry } from './components/ScanCards/ScanCountry'
//  import { Profilehistory } from './components/Profilehistory'
//  import countries from "countries-list"
import { ScanEmail } from './components/ScanCards/ScanEmail'
 import { ScanLand } from './components/ScanCards/ScanLand'
 import Login from './components/Login/Login'
 import Home from './components/Home/Home'
 import Meetings from './components/Meetings/Meetings'
 import CardBank from './components/CardBank/CardBank'
 import SendCard from './components/SendCard/SendCard'
 import MyCards from './components/MyCards/MyCards'
 import QrScanner from './components/QrScanner/QrScanner'
 
 

function App() {

  return (
    <div className="App">
      {/* <Profile/> */}
      {/* <Search/> */}
      {/* <Notification/> */}
      {/* <Message/> */}
      {/* <Feed/> */}
      {/* <BasicModal/> */}
      {/* <Share/> */}
        {/* <Inbox/> */}
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/cardbank" element={<CardBank />} />
          <Route path="/sendcard" element={<SendCard />} />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/qrscanner" element={<QrScanner />} />
          
          

          <Route path={"/ScanName"} element={<ScanName/>}></Route>
          <Route path={"/ScanCards"} element={<ScanCards/>}></Route>
          <Route path={"/ScanCompany"} element={<ScanCompany/>}></Route>
          <Route path={"/ScanWebsite"} element={<ScanWebsite/>}></Route>
          <Route path={"/ScanDesig"} element={<ScanDesig/>}></Route>
          <Route path={"/ScanCountry"} element={<ScanCountry/>}></Route>
          <Route path={"/ScanEmail"} element={<ScanEmail/>}></Route>
          <Route path={"/ScanLand"} element={<ScanLand/>}></Route>
          <Route path={"/Profile"} element={<Profile/>}></Route>
          <Route path={"/Search"} element={<Search/>}></Route>
          <Route path={"/Notification"} element={<Notification/>}></Route>
          <Route path={"/Message"} element={<Message/>}></Route>
          <Route path={"/Feed"} element={<Feed/>}></Route>
          <Route path={"/Share"} element={<Share/>}></Route>
          <Route path={"/Inbox"} element={<Inbox/>}></Route>
        </Routes>
    </div>
  )
}

export default App
