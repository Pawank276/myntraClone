import React from 'react'
import { Link } from 'react-router-dom';
const EmptyMsg = () => {
    return (<>
        <div className="col-6">
            <h3 className='text-white'>Nothing in your cart !!!</h3>
            <Link to="/" className='text-primary mt-3 fs-3'>Add Now</Link>
        </div>
    </>
    )
}

export default EmptyMsg