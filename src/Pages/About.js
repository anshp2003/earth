import React from 'react'
import { Outlet, Link }  from 'react-router-dom'

export default function About() {
  return (
    <> 

<div className=' container-fluid p-0  bgimg3 '>


    <div className='h220'></div>


    <h1 className='f70 text-center gr'>WHO ARE WE?</h1>
    <div className='h220'></div>

    
    </div>

<br/>
<br/>
<br/>
<br/>




    <div className=' container'></div>
    <div className=' container'></div>
    <div className=' container p-md-5'>

      <div className=' row'>

      <div className='col-md-6'>
      <div className='col-md-12'>

      <img src="../img/Our-Mission-min-1024x762.jpg" alt="" className=' col-md-10 col-12' />
      </div>
      </div>
      <div className='col-md-6'>


        <h1 className='mt-3 mt-md-5 '>
        OUR MISSION
        </h1>
        <p className=' fs-5 mt-4'>Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do.</p>

      <br/>
      <p className=" fs-5 ">I wish you the best of luck with your business, enjoy the adventure.</p>
      </div>

    


      </div>
    </div>
    <br/>
    <br/>
    <div className=' container-fluid p-0 bgimg2  text-center'>

<div className='h200'></div>

<h1>Give the Gift of a Postcard</h1>

<p>Give the gift of a lasting memory with a postcard

</p>
<button className=' btn btn-lg btn-success col-md-2 col-6'>Purchase A Postcard</button>


<div className='h200'></div>

</div>
<br/>
<br/>

<div className=' container'>
        <div className=' container p-md-5'>



          <div className=' row '>
            <div className=' col-md-4 text-center bdr'>
              <div className=' row ps-md-5'>
                <div className=' col-md-2'>
                  <button className='cwh bg-success rounded-5 border-0  col-md-12 mt-md-2'><i className="fa fa-lock fs-3 " aria-hidden="true"></i></button>

                </div>
                <div className=' col-md-10 text-md-start '>
                  <span className=' '>SECURE PAYMENT
                  </span>
                  <p className=''>All our payments our SSL secured

                  </p>
                </div>
              </div>


            </div>
            <div className=' col-md-4 bdl text-center'>

              <div className=' row ps-md-5'>
                <div className=' col-md-2'>
                  <button className='cwh bg-success rounded-5 border-0  col-md-12 mt-2'><i className="fa fa-lock fs-2    " aria-hidden="true"></i></button>

                </div>
                <div className=' col-md-10 text-md-start '>
                  <span className=' '>SECURE PAYMENT
                  </span>
                  <p className=''>All our payments our SSL secured

                  </p>
                </div>
              </div>
            </div>
            <div className=' col-md-4 bdl text-center'>

              <div className=' row ps-md-5'>
                <div className=' col-md-2'>
                  <button className='cwh bg-success rounded-5 border-0  col-md-12 mt-2'>
                    <i className="fa fa-lock fs-3    " aria-hidden="true"></i></button>

                </div>
                <div className=' col-md-10 text-md-start '>
                  <span className=' '>SECURE PAYMENT
                  </span>
                  <p className=''>All our payments our SSL secured

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     <br/>
<hr/>   

<div className=' container '>
<div className=' container p-md-4 '>



  <div className=' row p-0 m-0'>

    <div className=' col-md-4 text-center text-md-start p-0 m-0'>
    <div className=' row '>
      <div className=' col-md-2 mt-4 mt-md-0' >
      <Link to="/" className=' text-dark text-decoration-none'>Home</Link>

      </div>
      <div className=' col-md-2 mt-4 mt-md-0'>
      <Link to="/About" className='text-dark text-decoration-none'>About</Link>

      </div>
      <div className=' col-md-2 mt-4 mt-md-0'>
      <Link to="/Shop" className='text-dark text-decoration-none'>Shop</Link>
      

      </div>
      <div className=' col-md-2 mt-4 mt-md-0 '>
      <Link to="/Contact" className='text-dark text-decoration-none'>Contact</Link>
      

      </div>
          </div>
    </div>
    <div className=' col-md-4 text-center mt-4 mt-md-0 '>

    <img src="img/EARTH-STORE.png" alt="" className='col-md-6 col-5' />
    </div>
    <div className=' col-md-4 text-center mt-4 mt-md-0 ' >

    <p className='fs-6 '>Copyright © 2024 Planet Earth Store

</p>

    </div>
  </div>

  </div>
  </div>

    </>



  )
}
