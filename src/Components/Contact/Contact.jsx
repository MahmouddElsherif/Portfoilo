import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {




  render() {
    return <>

    <div className="contactComponent p-5 text-center">

      <h2>CONATCT SECTION</h2>

      </div>

      <form  className='container edit p-4' >
        <div className='formDesign   mx-auto'>
        <label className='designlabel' htmlFor="userName " >UserName: </label>
        
        <input className='form-control  mb-3' placeholder='UserName' type="text" id='userName' />
        
        </div>





        <div className='formDesign   mx-auto'>
        <label className='designlabel' htmlFor="userAge : " >userAge : </label>
        
        <input className='form-control  mb-3' placeholder='userAge :' type="number" id='userAge :' />
        
        </div>




        <div className='formDesign   mx-auto'>
        <label className='designlabel' htmlFor="userEmail : " >userEmail : </label>
        
        <input className='form-control  mb-3' placeholder='userEmail :' type="email" id='userEmail :' />
        
        </div>


        <div className='formDesign   mx-auto'>
        <label className='designlabel' htmlFor="userPassword  : " >userPassword  : </label>
        
        <input className='form-control mb-3 ' placeholder='userPassword  :' type="email" id='userPassword  :' />
        <button className='btn px-3 py-2' type='button' >Send Message</button>
        
        </div>


      </form>

    </>
  }
}
