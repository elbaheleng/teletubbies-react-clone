import React from 'react'
import Greenflower from './Greenflower'
import "./shop.css"


function Shop() {
  return (
    <div className='row'>
        <div className="col-md-6 col-sm-12 text-center">
            <div className='h-100 w-50 mx-auto d-flex flex-column justify-content-center align-items-center'>
                <h3 className='fw-bold mt-3' style={{color: "#652EA2"}}>Shop The Teletubbies</h3>
                <p>Explore our exciting range of Teletubbies products designed for fans of all ages. Shop, share, and spread the love with our latest collections.</p>
                <button className='btn btn-outline-primary btn-bg-transparent rounded rounded-pill mb-3' style={{borderStyle: "solid",
  borderColor:"#652EA2", color : "#652EA2"}}>Shop Now</button>
            </div>
        </div>
        <div  id='shop' className="col-md-6 col-sm-12">
          <Greenflower/>
            <img className='img-fluid' src="../public/shop.jpg" alt="" />
        </div>
    </div>
  )
}

export default Shop