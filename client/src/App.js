import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './landingpage';
import PostView from './postview';
import Form from './form';
import React from 'react'
function App() {
  return (
    <BrowserRouter>
<Routes>
<Route exact path="/" element={<LandingPage/>}></Route>
<Route path="/postview" element={<PostView/>}></Route>
<Route path="/form" element={<Form/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
