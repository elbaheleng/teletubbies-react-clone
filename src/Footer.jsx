import React from 'react'


function Footer() {
  return (
    <div className='container'>
        <div className="row mt-3">
            <div className="col-md-7 col-sm-12 mb-3">
                <img className='mt-0' src="../public/logo_teletubbies.jpg" width={150} alt="" />
            </div>
            <div className="col-md-5 col-sm-12 mb-3">
                <div className='d-flex flex-wrap gap-3'>
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/TW_footer.jpg" alt="" />
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/DI_footer.jpg" alt="" />
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/LA_footer.jpg" alt="" />
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/PO_footer.jpg" alt="" />
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/NN_footer.jpg" alt="" />
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/SUN_footer.jpg" alt=""/>
                    <img className='rounded rounded-circle bg-body-secondary' height={50} width={50} src="../public/CR_footer.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="d-none d-sm-block col-md-8 my-3">
                <p>Teletubbies is a brand that inspires joy, discovery, and self-expression with iconic characters that break the fourth wall and invite audiences into their wonder-filled world. This special world is wrapped in the embrace of belonging, where you are celebrated for being yourself.  Kidults love the pop culture resonance, and toddlers love the connection that Teletubbies offers.</p>
                <span><a href="" className='me-3 fw-bold' style={{textDecoration: "none", color:"black"}}>About</a></span>
                <span><a href="" className='me-3 fw-bold'  style={{textDecoration: "none", color:"black"}}>Watch</a></span>
                <span><a href="" className='fw-bold'  style={{textDecoration: "none", color:"black"}}>Lifestyle</a></span>

            </div>
            <div className="col-md-4 my-3">
            <div className='d-flex justify-content-center gap-4 pb-5'>
                    <i className="fa-brands fa-tiktok fa-2x"></i>
                    <i className="fa-brands fa-instagram  fa-2x"></i>
                    <i className="fa-brands fa-youtube  fa-2x"></i>
                    <i class="fa-brands fa-square-facebook  fa-2x"></i>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 col-sm-12">
                <p >Teletubbies characters and logo © 2024 and TM DHX Worldwide Limited. Licensed by DHX Worldwide Limited. All rights reserved.</p>
            </div>
            <div className="col-md-4 col-sm-12">
                <span><a href="" className='me-3' style={{textDecoration: "none", color:"black"}}>Privacy & Cookies Policy</a></span>
                <span><a href=""  style={{textDecoration: "none", color:"black"}}>Terms of Use</a></span>
            </div>
        </div>
    </div>
  )
}

export default Footer