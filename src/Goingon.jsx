import React from 'react';
import "./goingon.css"
import Violet from './Violet';



function Goingon() {
  
    return (

        <div id='goingon' style={{ backgroundColor: "#652EA2" }} className='mt-0'>
            <Violet/>
        
            <h1 className='text-center py-4 text-white'>What's Going On Teletubbyland</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img src="../public/goingon1.jpg" alt="event1" className='img-fluid rounded-5 mb-3' />
                        <p className='fw-bold' style={{ color: "yellow" }}>27 January 2025</p>
                        <h4 style={{ color: "white" }}>Listen to the Teletubbies' Music!</h4>
                        <p style={{ color: "white" }}>It’s time to sing and dance with the Teletubbies! </p>
                        <button className='btn btn-outline-warning rounded rounded-pill'>Read more</button>
                    </div>
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-5">
                        <div>
                            <p className='fw-bold' style={{ color: "yellow" }}>2 April 2025</p>
                            <div className="d-flex justify-content-between gap-3">
                                <div className="col-md-4">
                                    <img src="../public/goingon2.jpg" alt="event1" className='img-fluid rounded-5 mb-3 w-md-25' />
                                </div>
                                <div className="col-md-8">
                                    <h4 style={{ color: "white" }}>Set Sail with the Teletubbies for Pride!</h4>
                                    <p style={{ color: "white" }}>The Teletubbies took to the water to join the NYC Ferry for a Pride-themed event! </p>
                                    <button className='btn btn-outline-warning rounded rounded-pill'>Read more</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='fw-bold' style={{ color: "yellow" }}>24 January 2025</p>
                            <div className="d-flex justify-content-between gap-3">
                                <div className="col-md-4">
                                    <img src="../public/goingon3.jpg" alt="event1" className='img-fluid rounded-5 mb-3 w-md-25' />
                                </div>
                                <div className="col-md-8">
                                    <h4 style={{ color: "white" }}>Teletubbies Activities</h4>
                                    <p style={{ color: "white" }}>Looking for fun ways to keep your little ones busy? These Teletubby-themed kids activities are packed with colour, creativity, and tubby-tastic fun! </p>
                                    <button className='btn btn-outline-warning rounded rounded-pill'>Read more</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='fw-bold' style={{ color: "yellow" }}>10 January 2025</p>
                            <div className="d-flex justify-content-between gap-3">
                                <div className="col-md-4 col-sm-12">
                                    <img src="../public/goingon4.jpg" alt="event1" className='img-fluid rounded-5 mb-3 w-md-25' />
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <h4 style={{ color: "white" }}>Plan a Tubby-Themed Party!</h4>
                                    <p style={{ color: "white" }}>It’s party time in Teletubbyland! </p>
                                    <button className='btn btn-outline-warning rounded rounded-pill'>Read more</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Goingon