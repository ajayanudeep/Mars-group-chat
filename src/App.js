import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Chatroom from "./components/Chatroom";
import Login from "./components/Login";
import Roomcreation from "./components/Roomcreation";
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Navigate to='/Home' />}></Route>
          <Route path ='/Home' element={<Header />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chatroom/:roomname' element={<Chatroom />}></Route>
          <Route path='/createroom' element={<Roomcreation />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
