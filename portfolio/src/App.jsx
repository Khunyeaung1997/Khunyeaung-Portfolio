import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";

import Contacts from "./components/contacts/Contacts";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu"

import { useTranslation, Trans } from 'react-i18next';



function App() {





 const [menuOpen,setMenuOpen] =useState(false)
   return (
    <div className="app">
    <Topbar menuOpen ={menuOpen} setMenuOpen ={setMenuOpen} />
    <Menu menuOpen ={menuOpen} setMenuOpen ={setMenuOpen}/>


    <div className="sections">
      
      <Intro/>
      
      <Skills/>
      
      <Portfolio/>
      
      <Contacts/>
    </div>
     
    </div>
  );
}

export default App;
