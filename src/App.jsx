import React, { useContext, useEffect } from 'react'
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom"

import DashBoard  from "./components/Dashboard.jsx"  
import Login from './components/Login.jsx'
import AddNewAdmin from './components/AddNewAdmin.jsx'
import AddNewDoctor from './components/AddNewDoctor.jsx'
import Messages from './components/Messages.jsx'
import Doctors from './components/Doctors.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Context} from "./main.jsx"
import "./App.css"
import Sidebar from './components/Sidebar.jsx'
function App() {

  const {isAuthenticated , setIsAuthenticated , setUser} = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        // setAdmin(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        // setAdmin({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
    <Router>
    <Sidebar  ></Sidebar>
      <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/doctor/addnew" element={<AddNewDoctor/>}/>
        <Route path="/admin/addnew" element={<AddNewAdmin/>}/>
        <Route path="/messages" element={<Messages/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
      </Routes>
      <ToastContainer position='top-center'/>
    </Router>
    
    </>
  )
}

export default App