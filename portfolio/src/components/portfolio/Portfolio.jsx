import React from 'react'
import "./portfolio.scss"

import { useTranslation, Trans } from 'react-i18next';



const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Japan' }
}

export default function Portfolio() {

  const { t, i18n } = useTranslation();

  return (
    <div className = "portfolio" id= "portfolio">
      <h1><span></span>Portfolios<span></span></h1>
      {/* <ul>
        <li className="active" >Small Projects</li>  //switch from small pro to mid
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
      </ul> */}
        <div className="container">
          <div className="item">
            <img 
            src="../assets/calculator.png">

            </img>
            <h3 className='tracker'>Calculator</h3>
            
          </div>
          
          <div className="item">
            <img 
            src="../assets/expense tracker.png">

            </img>
            <h3 className='tracker'>Expense Tracker</h3>
           
            
          </div>

          <div className="item">
            <img 
            src="../assets/stopwatch.png">

            </img>
            <h3 className='tracker'>Stopwatch</h3>
            
          </div>

          <div className="item">
            <img 
            src="../assets/todolist.jpg">

            </img>
            <h3 className='tracker'>Todo List</h3>
            
          </div>

          <div className="item">
            <img 
            src="../assets/clock.png">

            </img>
            <h3 className='tracker'>Clock</h3>
            
          </div>

          <div className="item">
            <img 
            src="../assets/tictactoe.png">

            </img>
            <h3 className='tracker'>Tic Tac Toe</h3>
            
          </div>
        </div>
        <h5 className="trying">
          <Trans i18nKey="description.part5">
          </Trans></h5>
        <a href="#contacts" className="portfolio_arrow">
          <img src="./assets/down.png"></img>
        </a>
    </div>
  )
}
