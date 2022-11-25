import React from 'react'
import "./topbar.scss"

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Japan' }
};


export default function Topbar({menuOpen, setMenuOpen}) {

  const { t, i18n } = useTranslation();

  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {/* <span className='my'>My</span>  */}
            <span>Portfolio</span></a>


          <div className='lang'>
          {Object.keys(lngs).map((lng) => (
            <button className='langButton' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>


          <div className="leftItemContainer">

         
          <div className="leftItem">
          <i class="fa-solid fa-phone" id="icon"></i>
          <span>+95 9965411332</span>
          </div>

          <div className="leftItem">
          <i class="fa-solid fa-envelope" id="icon" ></i>
          <span>kkhun531@gmail.com</span>
          </div>

          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen) }>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>

        
    </div>
  )
}
