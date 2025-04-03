import React from 'react'
import BlueStar from './BlueStar'
import './watch.css'


function Watch() {
    return (
        <div className='row'>
            <div id="watch" className="col-md-6 col-sm-12">
                <BlueStar/>
                <img className='img-fluid' src="../public/watch.jpg" alt="" />
            </div>
            <div className="col-md-6 col-sm-12 text-center">
                <div className='h-100 w-50 mx-auto d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='fw-bold mt-3' style={{ color: "#652EA2" }}>Where To Watch</h3>
                    <p>Enter a wondrous world and discover where to watch the Teletubbies</p>
                    <button className='btn btn-outline-primary btn-bg-transparent rounded rounded-pill mb-3' style={{
                        borderStyle: "solid",
                        borderColor: "#652EA2", color: "#652EA2"
                    }}>Watch Now</button>
                </div>
            </div>
            
        </div>
    )
}

export default Watch