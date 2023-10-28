import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Stake from "./pages/Stake";
import Discover from "./pages/Discover";
import Me from "./pages/Me";
import Play from "./pages/Play";
import Chat from "./pages/Chat";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Stake" element={<Home/>}/>
        <Route path="/Discover" element={<Home/>}/>
        <Route path="/Me" element={<Home/>}/>
        <Route path="/Play" element={<Home/>}/>
        <Route path="/Chat" element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>


      </Routes>

    </div>
  );
};

export default App;
