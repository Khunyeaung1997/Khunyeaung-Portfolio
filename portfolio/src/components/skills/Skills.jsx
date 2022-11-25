import React from 'react'
import "./skills.scss"

import { useTranslation, Trans } from 'react-i18next';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Japan' }
}


export default function Skills() {

  const { t, i18n } = useTranslation();
  
  return (
    <div className="skills" id="skills">
        <h1>Skills</h1>
        <div className="wrapper">
            <div className="left">
                <h5>About Me</h5>
                <p><Trans i18nKey="description.part4"> 
              </Trans>
                </p>
            </div>
            <div className="right">
                <h5>Skills</h5>
                

            <div className="skillContainer">
              <div className="skillIcon">
                <h4 className='htmlText'>HTML</h4>
                  <div class="progress">
                   <div class="progress-bar w-50 bg-lightdanger"  role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>

              <div className="skillIcon">
                <h4 className='cssText'>CSS</h4>
                  <div class="progress">
                   <div class="progress-bar w-50 bg-lightdanger"  role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>

              <div className="skillIcon">
                <h4 className='javascriptText'>Javascript</h4>
                  <div class="progress">
                   <div class="progress-bar w-75 bg-lightdanger"  role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>

              <div className="skillIcon">
                <h4 className='reactText'>React</h4>
                  <div class="progress">
                   <div class="progress-bar w-25 bg-lightdanger"  role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
              </div>

              
              
            </div>

            <a href="#portfolio" className="portfolio_arrow">
          <img src="./assets/down.png"></img>
                </a>

            

             
                  
                      

            </div>
    
           

        </div>

        
    </div>
    

        
  )
}
