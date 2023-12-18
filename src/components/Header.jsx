import React from 'react'
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
    const product = useSelector(store => store.cart)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img className='me-1 mb-' src="images/myntra_logo.webp" alt="" /><strong>Myntra</strong>
                </Link>
                <Link to={'/cart'} type="button" className="btn btn-danger position-relative fs-6 me-2 ms-3 mt-lg-0 mt-3" hidden>
                    <BsCartCheckFill />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{product.length}
                    </span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 me-auto mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="#">Men</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Women</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">Kids</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                User
                            </Link>
                            <ul className="dropdown-menu bg-dark">
                                <li><Link className="dropdown-item bg-dark" to="#">Update Profile</Link></li>
                                <li><Link className="dropdown-item bg-dark" to="#">Orders</Link></li>
                                <li><Link className="dropdown-item bg-dark" to="#">Address</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 w-75 w-sm-25" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                    <Link to={'/cart'} type="button" className="btn btn-danger position-relative fs-6 me-2 ms-3 mt-lg-0 mt-3">
                        <BsCartCheckFill />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{product.length}
                        </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header