import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './shared/menu'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Home from './pages/Home'
import ManageTicket from './pages/ManageTicket'
import Checkticket from './pages/CheckTicket'
import Setting from './pages/Setting'


function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/manageticket' element={<ManageTicket/>} />
               <Route path='/checkticket' element={<Checkticket/>} />
               <Route path='/setting' element={<Setting/>} />
                  
             
              </Routes>             
          </BrowserRouter>
    </div>
  );
}

export default App;
