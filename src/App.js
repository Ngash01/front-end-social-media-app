import './App.css';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import ProfilePage from './pages/profilePage/ProfilePage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div className='blur' style={{top:"-18px", right:'0'}}></div>
      <div className='blur' style={{top:"16rem", left: '-8rem'}}></div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path="/register" element={<Auth/>}/>
          <Route path="/login" element={<Login/>}/>

        </Routes>
      </Router>
    </div>
  );
} 

export default App;



