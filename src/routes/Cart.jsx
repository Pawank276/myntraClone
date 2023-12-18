import React from 'react'
import CartList from "../components/CartList"
import CartSummary from '../components/CartSummary';
import { useSelector } from "react-redux"
import EmptyMsg from '../components/EmptyMsg';
const Cart = () => {
    const cartProducts = useSelector(store => store.cart)
    const product = useSelector(store => store.product)
    const finalCartProduct = product.filter(item => {
        const productIndex = cartProducts.indexOf(item.id)
        return productIndex >= 0;
    })
    return (
        <div className='container mt-5 mb-5'>
            <div className="row">
                {cartProducts.length > 0 ?
                    finalCartProduct.map((product) => <CartList key={product.id} product={product} />) : <EmptyMsg />}
                <div className="divider mt-5"></div>
            </div>
            <div className="row d-flex justify-content-center mt-3">
                {cartProducts.length > 0 &&
                    <CartSummary product={finalCartProduct} />}
            </div>
        </div>
    )
}

export default Cart;