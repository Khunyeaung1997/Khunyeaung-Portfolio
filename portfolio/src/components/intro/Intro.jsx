// import React, { useEffect, useRef } from 'react'
import "./intro.scss";
// import { init } from 'ityped'
// import { useEffect , useRef } from "react";



import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Japan' }
}


export default function Intro() {
  // const textCopy = useRef()

  // useEffect(()=>{
  //   init(textCopy.current, { showCursor: false, strings: ['Use with React.js!', 'Yeah!' ] })
  // },[])

  const { t, i18n } = useTranslation();

  return (
    <div className = "intro" id="intro">
      <div className="wrapper">

        <div className="left">

       

          <h1>
          <Trans i18nKey="description.part1">
          </Trans>
          </h1>

          <h2>
            <Trans i18nKey="description.part2"> 
          </Trans>
          </h2>

          <h3>
              <Trans i18nKey="description.part3"> 
              </Trans>
            <span className="junior">  Junior Web Developer</span>           
          </h3>
        </div>

        <div className="right">
          <div className="imageContainer">
          <img src="./assets/profile1.jpg" alt=''></img>
          </div>  
        </div>


        <a href="#skills">
          <img src="./assets/down.png" alt=''></img>
        </a>
      </div>

      
        
      
      
    </div>
  )
}
