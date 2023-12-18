import React from 'react'

export default function LoadingSpinner() {
    return (
        <div className='d-flex justify-content-center' style={{ margin: "10% 0" }}>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        </div>
    )
}
