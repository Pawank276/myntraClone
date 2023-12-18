import React from 'react'
import { IoBagAddSharp } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/CartSlice';
const Product = ({ product }) => {
    const dispatch = useDispatch();
    const handleAddCart = () => {
        dispatch(cartActions.addToCart(product.id))
    }
    return (
        <div className="col-lg-3 col-md-4 mb-4" >
            <div className="card bg-dark p-2">
                <div className="card-body ">
                    <img src={product.image} className='mb-3' />
                    <p className='text-warning fw-bold product-details'>{product.item_name} ({product.company})</p>
                    <h6 className='text-success d-inline'>Rs {product.original_price}/-
                        <span className='text-danger text-decoration-line-through ms-2'>Rs {product.current_price}/-</span></h6><br /><span className='text-warning fs-6'>{product.discount_percentage}% OFF</span>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type="button" className="btn btn-outline-success btn-sm mb-4" onClick={handleAddCart}><strong className='me-2 cartIcon' ><IoBagAddSharp /></strong>Add</button>
                </div>
            </div>

        </div>
    )
}

export default Product