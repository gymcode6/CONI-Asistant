//import { useState } from 'react'
import  Asistant  from './components/Asistant'
import {Route, Routes } from 'react-router-dom';
//import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Home from './pages/Home';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';

import './styles/App.css'

function App() {
  /*const [change, setChange] = useState(false)*/

  return (
      <div className="App">
          {/* <SwitchTransition>
            <CSSTransition
            classNames="fade" 
            timeout={10000}> */}
              <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path='/asistant' element={<Asistant/>}/>
              </Routes>
            {/* </CSSTransition>
          </SwitchTransition> */}
      </div>
  )
}



export default App;

