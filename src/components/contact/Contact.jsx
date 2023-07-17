import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact">
        <div className="container">
            <div className="top">
                <h1>Contact</h1>
            </div>
            <form>

              <div >
                <label>Name</label>
                <input type="name"placeholder='Enter your name' className='name'/>
              </div>

              <div>
                <label>Email</label>
                <input type="email" placeholder='Enter your email' />
              </div>

              <div>
                <label>message</label>
                <textarea  placeholder='Enter your message' cols="30" rows="15"></textarea>
              </div>
              <div className='button'>
                  <button className='btn btn-dark'>Submit</button>

 
              </div>

            </form>
        </div>
    </div>
   
  )
}
export default Contact

