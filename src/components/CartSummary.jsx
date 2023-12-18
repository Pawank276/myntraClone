import React from 'react'
import { useSelector } from 'react-redux';

const CartSummary = ({ product }) => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let payAmount = 0
    product.forEach(item => {
        totalPrice += item.original_price;
        totalDiscount += item.current_price;
        payAmount = totalPrice - totalDiscount;
    });

    return (
        <div className="col-md-6 card bg-dark ms-md-0 ms-2">
            <div className="card-body">
                <div className="Amount-details">
                    <h4 className='text-white'>Total Price :
                        <span className='text-success fs-4 fw-bold float-end'>
                            Rs.  {totalPrice}
                        </span>
                    </h4>
                    <h4 className='text-white'>Total Discount :
                        <span className='text-danger fs-4 fw-bold float-end'>
                            Rs.    {totalDiscount}
                        </span>
                    </h4>
                    <hr className='text-danger' />
                    <h4 className='text-white '>Total Amount :
                        <span className='text-success fs-4 fw-bold float-end'>
                            Rs.    {payAmount}
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default CartSummary