import React from 'react'


function Follow() {
    return (
        <div>
            <div style={{ backgroundColor: "#652EA2" }}>
                <h1 className='text-white text-center mb-5 pt-5'>Follow Us On Social</h1>
                <div className='text-white d-flex justify-content-center gap-4 pb-5'>
                    <i className="fa-brands fa-tiktok fa-3x"></i>
                    <i className="fa-brands fa-instagram  fa-3x"></i>
                    <i className="fa-brands fa-youtube  fa-3x"></i>
                    <i className="fa-brands fa-square-facebook  fa-3x"></i>
                </div>
            </div>
            <div className='row mt-0'>
                <div className="col-sm-6 col-lg-3 p-0 mt-0">
                    <img className='img-fluid w-100 ' src="../public/follow1.jpg" alt="" />
                </div>
                <div className="col-sm-6 col-lg-3 p-0">
                    <img className='img-fluid w-100' src="../public/follow2.jpg" alt="" />
                </div>
                <div className="col-sm-6 col-lg-3 p-0">
                    <img className='img-fluid w-100' src="../public/follow3.jpg" alt="" />
                </div>
                <div className="col-sm-6 col-lg-3 p-0">
                    <img className='img-fluid w-100' src="../public/follow4.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Follow