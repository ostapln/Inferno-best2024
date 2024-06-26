 
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Register from './pages/auth/register/Register'
import Login from './pages/auth/login/Login'
import HomePage from './pages/home/HomePage'
 
 
import { Profile } from './pages/profile/Profile'
import Settings from './pages/profile/settings/Settings'
import HistoryProfile from './pages/profile/history/HistoryProfile'
import Password from './pages/profile/Password'
import UserLayout from './layouts/UserLayout'
import CreateNeeds from './pages/needs-help/CreateNeeds'
import PostNeeds from './pages/needs-help/PostNeeds'
import NeedsHelps from './pages/needs-help/NeedsHelps'
 
function App() {
 

  return (
    <>
      
 
    <div>
      <Routes>

        <Route path="/" element={<DefaultLayout />}  >
        <Route index element={<HomePage />} />
           {/*  <Route path="needs" element={<NeedsHelps />} />*/}
          <Route path="reg" element={<Register />} /> 
          <Route path="log" element={<Login />} />

          {/* <Route path="profile" element={<ProfileWho />}> 
          <Route index element={<Settings />}  />
          <Route path="/profile/history" element={<History />} />
          <Route path="/profile/password" element={<Password />} />
          
          </Route>
          <Route path="profileHelp" element={<ProfileHelp/>}> 
          <Route index element={<Settings />}  />
          <Route path="/profileHelp/history" element={<History />} />
          <Route path="/profileHelp/password" element={<Password />} />
 
          </Route>
          <Route path="add" element={<CreateNeeds/>}> 
          </Route>
          <Route path="post" element={<     PostNeeds/>}> 
          </Route>
          <Route path="edit" element={<EditNeeds/>}>  
          </Route>*/}
        </Route>
       
         <Route path="/profile" element={<Profile />}   >
         <Route index element={<Settings />}   />
         <Route path="/profile/history" element={<HistoryProfile />} />
          <Route path="/profile/password" element={<Password />} />
         </Route>
         <Route path="/userlayout" element={<UserLayout />}   >
         <Route index element={<CreateNeeds />}   />
 
         <Route path="/userlayout/post" element={<PostNeeds />} />
      

         </Route>   <Route path="/needs" element={<NeedsHelps />} />
      </Routes>
    </div>
    </>
  )
}

export default App
