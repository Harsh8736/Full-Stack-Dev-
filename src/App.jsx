import React from 'react'
import { useState } from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Mainlayout from './component/Mainlayout';
import Registration from './component/Registration';
import Login from './component/Login';


function App() {
  const [store, setStore] = useState("");
    return (
    <div>
       {JSON.stringify(store)}
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Mainlayout/>} >
       <Route path="/login" element={<Login/>}/>
       <Route path="/registration" element={<Registration regData={setStore}/>}/>
       </Route>
       </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App