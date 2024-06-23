import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <div className=' container-fluid p-0  bgimg1 '>

        <div className='h220'></div>


        <center>
          <h1 className=' f70 '>
            EARTH
          </h1>

          <h1 className=''>
            MULTIPURPOSE STORE
          </h1>

          <button className=' btn btn-lg btn-success col-md-2 col-5'>Shop Now</button>
        </center>

        <div className='h220'></div>

      </div>
      <div className=' container '>
        <div className=' container  p-md-5'>

          <div className=' row '>

            <div className=' col-md-4'>
              <img src="../img/Poster4-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
              <p className=' p-0 m-0'>
                Posters

              </p>
              <h4 className=' '>
                Posters V1

              </h4>
              <p>$23.99</p>
            </div>
            <div className=' col-md-4'>
              <img src="../img/Poster5-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
              <p className=' p-0 m-0'>
                Posters

              </p>
              <h4 className=' '>
                Posters V2

              </h4>
              <p>$23.99</p>
            </div>
            <div className=' col-md-4'>
              <img src="../img/Poster6-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
              <p className=' p-0 m-0'>
                Posters

              </p>
              <h4 className=' '>
                Posters V3

              </h4>
              <p>$23.99</p>
            </div>

          </div>
        </div>
      </div>

      <br />

      <hr />
      <div className=' container'>
        <div className=' container p-md-5'>
          <h1>What Our Customers Say</h1>

          <br />
          <br />
          <div className=' row '>

            <div className=' col-md-4 col-12 mt-2  mt-md-0'>
              <i className="fa fa-quote-left fs-2" aria-hidden="true" ></i>
              <p className=' fs-5 mt-3'>Fast shipping and excellent customer
                service. The product was even better
                than expected. I will definitely be a
                returning customer.


              </p>


              <img src="../img/earth-store-testimonial-avatar-img.jpeg" alt="" className=' col-md-1 rounded-5 col-1' />
              <h6 className=' mt-2'>JENNIFER LEWIS
              </h6>
            </div>
            <div className=' col-md-4 col-12 mt-2  mt-md-0'>
              <i className="fa fa-quote-left fs-2" aria-hidden="true" ></i>
              <p className=' fs-5 mt-3'>Fast shipping and excellent customer
                service. The product was even better
                than expected. I will definitely be a
                returning customer.


              </p>


              <img src="../img/earth-store-testimonial-avatar-img.jpeg" alt="" className=' col-md-1 rounded-5 col-1' />
              <h6 className=' mt-2'>JENNIFER LEWIS
              </h6>
            </div>
            <div className=' col-md-4 col-12  mt-md-0'>
              <i className="fa fa-quote-left fs-2" aria-hidden="true" ></i>
              <p className=' fs-5 mt-3'>Fast shipping and excellent customer
                service. The product was even better
                than expected. I will definitely be a
                returning customer.


              </p>


              <img src="../img/earth-store-testimonial-avatar-img.jpeg" alt="" className=' col-md-1 rounded-5 col-1 ' />
              <h6 className=' mt-2'>JENNIFER LEWIS
              </h6>
            </div>



          </div>

        </div>
      </div>

      <br />

      <div className=' container-fluid p-0 bgimg2  text-center'>

        <div className='h200'></div>

        <h1>Give the Gift of a Postcard</h1>

        <p>Give the gift of a lasting memory with a postcard

        </p>
        <button className=' btn btn-lg btn-success col-md-2 col-6'>Purchase A Postcard</button>


        <div className='h200'></div>

      </div>
      <br />
      <br />

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
      <br />
      <br />
      <br />
      <hr />

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
