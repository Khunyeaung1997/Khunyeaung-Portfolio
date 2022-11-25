import { useState } from 'react'
import "./contacts.scss"

export default function Contacts() {
  const [message,setMessage] = useState(false)
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    
  }


  return (
    <div className = "contacts" id= "contacts">
      <div className="left">
      
        <img src="../assets/shake.svg" alt="" />
      </div>
      <div className="right">
       
      <h2>Contacts</h2>
        <form  onSubmit={handleSubmit} >
          <input type="email" placeholder='Email'/>
          <textarea name=""placeholder="Message me"></textarea>
          <button type='submit'>Send</button>
          {message && <span>Thanks, i'll  reply  ASAP !</span>}
        </form>
       
        
        
      </div>
        
    </div>
  )
}
