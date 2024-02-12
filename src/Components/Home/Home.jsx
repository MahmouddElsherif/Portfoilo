import React, { Component } from 'react'
import myImage from '../../imgs/avataaars.svg'
import './Home.css'


export default class Home extends Component {
  render() {
    return <>
    
    <div className="homeComponent p-5  text-white">

    <div className="myDivImage mb-5">
    <img src={ myImage } className='w-100' alt="Carton" />
    </div>
    <h2 className='m-4 fw-bold fs-1 h2Design position-relative '>START FRAMEWORK</h2>
    <p className=' styleP fs-6 fw-bold '>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    
    
    
    
    </>
  }
}
