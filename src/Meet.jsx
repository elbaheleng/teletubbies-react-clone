import React from 'react'


function Meet() {
    return (
        <div id='goingon' style={{ backgroundColor: "#652EA2" }} className='mt-0 text-center'>
            <h1 className='text-center py-4 text-white'>Meet The Teletubbies</h1>

            <div className="row">
                <div className="col-md-3 col-sm-12 mb-3 text-center">
                    <img className='img-fluid rounded-4 mb-3' src="../public/tinkywinky.jpg" alt="" />
                    <p><button className='btn btn-outline-light btn-bg-transparent rounded rounded-pill'>Tinkywinky</button></p>
                    
                </div>
                <div className="col-md-3 col-sm-12 mb-3 text-center  ">
                    <img className='img-fluid rounded-4 mb-3' src="../public/dipsy.jpg" alt="" />
                    <p><button className='btn btn-outline-light btn-bg-transparent rounded rounded-pill'>Dipsy</button></p>
                </div>
                <div className="col-md-3 col-sm-12 mb-2 text-center">
                    <img className='img-fluid rounded-4 mb-3' src="../public/laalaa.jpg" alt="" />
                    <p><button className='btn btn-outline-light btn-bg-transparent rounded rounded-pill'>Laalaa</button></p>
                </div>
                <div className="col-md-3 col-sm-12 mb-3 text-center">
                    <img className='img-fluid rounded-4 mb-3' src="../public/po.jpg" alt="" />
                    <p><button className='btn btn-outline-light btn-bg-transparent rounded rounded-pill'>Poo</button></p>
                </div>
            </div>

            <button className='btn btn-outline-warning rounded rounded-pill text-center mb-3'>Meet Everyone</button>

        </div>
    )
}

export default Meet