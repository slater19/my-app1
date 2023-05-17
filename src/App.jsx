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
import { Setting } from './components/Setting/Setting'
import ExampleTrackChild  from './components/StylingComponents/Switch'
import Redirect from './components/Redirect/Redirect'
import Otp from './components/Otp/Otp'
import Registration from './components/Registration/Registration'
import Chat from './components/chat/Chat'
import CardView from './components/CardBank/CardView'
import { Inbox1 } from './components/Inbox/Inbox1'
import Conncection from './components/Connections/Conncection'




 
 
function App() {

  return (
    <div>
    
      
   {/*  {/*   {/* <Profile/> */}
      {/* <Search/> */}
      {/* <Notification/> */}
      {/* <Message/> */}
      {/* <Feed/> */}
      {/* <BasicModal/> */}
      {/* <Share/> */}
        {/* <Inbox/> */}
        {/* <ScanCards/> */}
        {/* <ScanName/> */}
        {/* <ScanWebsite/> */}
        {/* <ScanLand/> */}
        {/* <ScanEmail/> */}
        {/* <ScanDesig/> */}
        {/* <ScanCountry/> */}
        {/* <Setting/> */}
        {/* <ExampleTrackChild/> */} 
           <Routes>
             
          <Route exact path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/meetings" element={<Meetings />} />
          
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
          <Route path={"/settings"} element={<Setting/>}></Route>
          <Route path="/otp" element={<Otp/>} />

          <Route path={"/redirect"} element={<Redirect/>}></Route>
          <Route path={"/myshop"} element={<Redirect/>}></Route>
          <Route path={"/design"} element={<Redirect/>}></Route>
          <Route path={"/templates"} element={<Redirect/>}></Route>
          <Route path={"/myenqueries"} element={<Redirect/>}></Route>
          <Route path={"/cardwizard"} element={<Redirect/>}></Route>
 
      <Route path={"/Inbox"} element={<Inbox/>}></Route>
         <Route path="/home" element={<Home />} />
         <Route path="/conncection" element={<Conncection />} />
         <Route path="/sendcard" element={<SendCard />} />
          <Route path="/mycards" element={<MyCards />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/message" element={<Message />} />
          <Route path="/cardbank" element={<CardBank />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/cardview" element={<CardView />} />
          <Route path={"/Inbox1"} element={<Inbox1/>}></Route>
        </Routes>   
    </div>
  )
}
export default App
