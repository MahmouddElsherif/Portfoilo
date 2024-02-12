import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return <>
    
    <div className=" FooterDesign p-5">
      <div className="row p-5">
        <div className="col-md-4">
          <div className="div1OfFooter text-white text-center">
          <h3 className='fw-bold'>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
          </div>
        </div>



        <div className="col-md-4">
          <div className="div2OfFooter text-white text-center">
          <h3 className='fw-bold'>AROUND THE WEB</h3>
          <div className="socialmedia d-flex justify-content-center align-items-center ">
            <div className="innerOfSocialMedia">
              <i className='fa-brands fa-facebook' ></i>
            </div>

            <div className="innerOfSocialMedia">
              <i className='fa-brands fa-twitter' ></i>
            </div>

            <div className="innerOfSocialMedia">
              <i className='fa-brands fa-linkedin' ></i>
            </div>

            <div className="innerOfSocialMedia">
              <i className='fa-solid fa-globe' ></i>
            </div>
          </div>
          </div>
        </div>




        <div className="col-md-4">
          <div className="div3OfFooter text-white text-center">
          <h3 className='fw-bold'>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
    </div>

    <div className="copyRights text-center text-white p-3">
      <p className='fs-6' >Copyright &copy; Your Website 2021</p>
    </div>
    </>
  }
}
