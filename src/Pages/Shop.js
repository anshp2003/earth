import React from 'react'
import { Outlet, Link }  from 'react-router-dom'

export default function Shop() {
    return (
        <>


            <br />

            <hr />

            <div className=' container'>
                <div className=' container'>
                    <div className=' container p-md-5'>

                        <div className=' row'>

                            <div className='col-md-4 '>

                                <input type="text " style={{ height: 50 }} placeholder='Search Products... ' className=' col-md-6 col-12 ps-2' />
                                <button style={{ height: 50 }} className='ms-md-2 cwh bgg'><i className="fa fa-search " aria-hidden="true"></i>
                                </button>


                                <h3 className=' mt-md-5'>Filter by price
                                </h3>

                                <input type="range" />



                                <h5 className='gr'>Categories
                                </h5>
                                <p className="ms-md-2">  Postcards(6)
                                </p>


                                <p className='ms-md-2'>Posters(6)
                                </p>
                            </div>
                            <div className='col-md-8 bdl'>
                                <div className=' container  ps-md-5'>
                                    <p>Home / Shop
                                    </p>

                                    <h1 className='gr'>Shop</h1>



                                    <span>Showing all 12 results</span>

                                   <span> <select className=' float-end  gr '>

                                        <option value="" key="" >default sorting</option>
                                        <option value="" key="">default sorting</option>
                                        <option value="" key="">default sorting</option>
                                        <option value="" key="">default sorting</option>
                                        <option value="" key="">default sorting</option>
                                        <option value="" key="">default sorting</option>
                                    </select>
                                    </span>
                                    
                                        <div className=' row mt-5' >
                                            <div className=' col-md-4 col-12'>
                                                <img src="../img/Poster1-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>

                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster2-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster3-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>

                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster4-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster5-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster6-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster1-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster2-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster1-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster3-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster3-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>
                                            <div className=' col-md-4 col-12'>
                                            <img src="../img/Poster3-1000x1000.jpg" alt="" className=' col-md-12 col-12' />
                                                <p className=' p-0 m-0'>
                                                    Posters

                                                </p>
                                                <h4 className=' '>
                                                    Posters V3

                                                </h4>
                                                <p>$23.99</p>
                                            </div>

                                        </div>
                                    

                                        <br/>
                        <br/>

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
