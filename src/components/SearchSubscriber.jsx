import React from 'react'
import Title from './Title'
import Navbar from './Navbar'

const SearchSubscriber = () => {
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <Title />
                        <Navbar/>

                        <h4 class="display-4" ><u>Search Subscriber</u></h4>
                        <br /><br />

                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Search With Name</label>
                                <input type="text" className="form-control" />


                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Search With District</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <button className="btn btn-dark">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSubscriber