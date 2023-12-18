import React from 'react'

const Footer = () => {
    return (
        <div className="container-fluid bg-dark">
            <footer>
                <div className="row py-4 d-flex justify-content-between">
                    <div className="col-6 col-md-2 mb- d-flex justify-content-end">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-6 offset-md-1 mt-5 text-white fw-bold">
                        <form>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-end py-4 border-top">
                    <p className='text-white text-end'>© 2023 Company, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer