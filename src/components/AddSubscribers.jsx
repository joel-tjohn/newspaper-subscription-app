import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const AddSubscribers = () => {
    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       
                        <Title />
                        <Navbar/>
                     
                        <h4 class="display-4" ><u>Add Subscriber</u></h4>
                        <br /><br />

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subscriber Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" />
                            </div>



                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">District</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Village Office / Muncipality</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name="" id="" className="form-control" />
                            </div>

                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <button className="btn btn-dark">Submit</button>

                            </div>
                        </div>



                    </div>



                </div>
            </div>
        </div>



    )
}

export default AddSubscribers