import React, { Component } from 'react'
import './Portfolio.css'
import img1 from '../../imgs/poert1.png'
import img2 from '../../imgs/port2.png'
import img3 from '../../imgs/port3.png'

export default class Portfolio extends Component {
  render() {

    return <>

    <div className="portfolioComponent p-5">
      <h2 className='PortfolioTitle' >PORTFOLIO COMPONENT</h2>
    </div>

    <div className="container p-5">
      <div className="row g-2">
        <div className="col-md-4 p-3  p-3 " >
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img1} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>


        <div className="col-md-4 p-3  ">
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img2} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>


        <div className="col-md-4 p-3  ">
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img3} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>


        <div className="col-md-4 p-3  ">
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img1} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>


        <div className="col-md-4 p-3  ">
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img2} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>


        <div className="col-md-4 p-3  ">
          <div className="innerDivPorfolio  ">
          <div className="innerImgStyle  position-relative">
            <img src={img3} className='w-100' alt="img1" />

            <div className="layer d-flex justify-content-center align-items-center">
            <div className="styleIconPotrfolio d-flex align-items-center justify-content-center">
            <i className='fa-solid fa-plus fa-7x text-white' ></i>
            </div>
          </div>

          </div>
          
          </div>
        </div>



        
      </div>
    </div>
    
    
    
    
    
    
    
    </>
  }
}
