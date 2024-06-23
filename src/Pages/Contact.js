import React from 'react'
import { Outlet, Link }  from 'react-router-dom'

export default function Contact() {
    return (
        <>

            <div className=' container-fluid p-0  bgimg4 '>

                <div className='h220'></div>


                <center>
                    <h1 className=' f70 gr'>
                        Contact Us
                    </h1>




                </center>

                <div className='h220'></div>

            </div>
            <br />

            <div className=' container'>
                <div className=' container'>

                    <div className=' container p-md-5'>


                        <div className=' row'>

                            <div className=' col-md-6 col-12 text-center text-md-start'>

                                <h2>Get In Touch
                                    Name </h2>

                                <div className=' box p-md-5'>

                                    <br />
                                    <form>
                                        <input type="text"
                                            placeholder="Your Name" className=' col-md-12 col-12' />

                                        <input type="number"
                                            placeholder="Your Number" className=' col-md-12 mt-4 col-12' />


                                        <input type="Email"
                                            placeholder="Your Email" className=' col-md-12 mt-4 col-12' />

                                        <textarea cols="34.5" rows="5" className='mt-4 col-md-12 col-12'
                                            placeholder="Message"></textarea>
                                        <button className='bg-success mt-4 rounded-5 col-12 col-md-4 border-0 cwh p-md-2'>SEND
                                            NOW</button>

                                    </form>
                                </div>
                            </div>
                            <div className=' col-md-6 ps-md-5 '>



                                <h2 className=' mt-5 mt-md-0 text-center text-md-start'>Talk To Us
                                </h2>


                                <div className=' row mt-5'>
                                    <div className=' col-md-1'>
                                    <button className=' bgg cwh rounded-5 border fs-4'><i
								className="fa fa-envelope " aria-hidden="true"></i></button>

                                    </div>
                                    <div className=' col-md-11'>
						<p className='  fs-5'>Email </p>

						<p className='  fs-5'>something@tyler.com</p>

                                    </div>
                                    
                                    <div className=' col-md-1'>
                                    <button className=' bgg cwh rounded-5 border  fs-4'><i
								className="fa fa-phone  " aria-hidden="true"></i></button>

                                    </div>
                                    <div className=' col-md-11'>
						<p className=' fs-5'>PHONE NUMBER
 </p>

						<p className=' fs-5'>656544445</p>

                                    </div>
                
                                    <div className=' col-md-1'>
                                    <button className=' bgg cwh rounded-5 border fs-3'><i
								className="fa fa-map-marker " aria-hidden="true"></i></button>

                                    </div>
                                    <div className=' col-md-11'>
						<p className=' fs-5'>Address </p>

						<p className=' fs-5'>a/24 fksndfjsndjgvjksdbvhsgfvgbsdkjgfskdgbf</p>

                                    </div>

                                    <div className=' col-md-1'>

                                    </div>
                                    <div className=' col-md-11 text-center'>
						<h3 className=' mt-3'>FOLLOW US:</h3>
						<button className='cwh bgg rounded-5  border-0 fs-5 '><i
							className="fa fa-facebook" aria-hidden="true" ></i></button>
						<button className='cwh bgg rounded-5  border-0 fs-5 ms-2'><i
								className="fa fa-twitter-square" aria-hidden="true" ></i></button>
						<button className='cwh bgg rounded-5  border-0 fs-5 ms-2'><i
								className="fa fa-play" aria-hidden="true" ></i> </button>
						<button className='cwh bgg rounded-5  border-0 fs-5 ms-2'><i
								className="fa fa-linkedin" aria-hidden="true"></i></button>
                                    </div>
                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </div>

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
