import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Chatroom from "./components/Chatroom";
import Login from "./components/Login";
import Roomcreation from "./components/Roomcreation";
import Profile from "./components/Profile";
import PrivateRoute from "./components/Private";
import {AuthProvider} from './context/AuthContext';
import { useState } from "react";
function App() {
  const [searchterm,setSearchterm] = useState('');
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar setterm={setSearchterm} />
          <Routes>
            <Route path='/' element={<Navigate to='/Home' />}></Route>
            <Route element={<PrivateRoute />}>
              <Route path ='/Home' element={<Header topic={searchterm} />}></Route>
            </Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/chatroom/:roomname' element={<Chatroom />}></Route>
            <Route path='/createroom' element={<Roomcreation />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
