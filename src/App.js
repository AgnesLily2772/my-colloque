import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
const App = () => {
  return(
   <div>
        <Router>
        <Routes>
            <Header/>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" exact element={<Home/>}/>
        </Routes>
        </Router>
   </div>
  );
};

export default App;