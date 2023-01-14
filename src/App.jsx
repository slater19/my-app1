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
// import Login from './components/Login/Login'

function App() {
// console.log(countryNames);
  // const [count, setCount] = useState(0)
// let location=useLocation();
// console.log(location.pathname);

// if(location.pathname.match('/ScanName'))
//        { 
// return(
//   <ScanName/>
// )
//        }
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
