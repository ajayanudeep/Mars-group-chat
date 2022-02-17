import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Chatroom from "./components/Chatroom";
function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Navigate to='/Home' />}></Route>
          <Route path ='/Home' element={<Header />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/chatroom/:roomname' element={<Chatroom />}></Route>
        </Routes>
    </div>
    </Router>
  );
}

export default App;
