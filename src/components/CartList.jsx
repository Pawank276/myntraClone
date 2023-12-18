import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../store/CartSlice'
import { AiFillDelete } from "react-icons/ai";
const CartList = ({ product }) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(cartActions.removeFromCart(product.id))
    }
    return (
        <div className="col-md-3 mb-2">
            <div className='card bg-dark'>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger remove-icon" onClick={handleRemove}>
                    <strong ><AiFillDelete /></strong>
                </span>
                <div className="card-body">
                    <img src={product.image} className='mb-3' />
                    <p className='text-warning fw-bold product-details'>{product.item_name}({product.company})</p>
                    <h6 className='text-success fw-bold'>Rs {product.original_price}/-
                        <span className='text-danger text-decoration-line-through fs-6 me-2 ms-2'>Rs {product.current_price}/-</span></h6><span className='text-warning fs-6'>{product.discount_percentage}% OFF</span>
                    <h6 className='text-warning'>{product.return_period} days for return available</h6>
                    <h6 className='text-warning'>Delievery Date -<strong>{product.delivery_date}</strong></h6>
                </div>
            </div>
        </div>
    )
}

export default CartList