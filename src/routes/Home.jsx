
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from "../components/Product"
import LoadingSpinner from "../components/LoadingSpinner"
import { productActions } from '../store/ProductSlice'
const Home = () => {
    const [fetching, setFetching] = useState(false)
    const productItem = useSelector((store) => store.product)
    const dispatch = useDispatch();
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('http://localhost:8080/items', { signal })
            .then(res => res.json())
            .then(({ items }) => {
                setFetching(true)
                dispatch(productActions.addInitialProducts(items[0]))
            });
        return () => {
            controller.abort();
        }
    }, [])
    return (
        !fetching ? <LoadingSpinner /> : <div className='container mt-5 mb-5'>
            <div className="row d-flex justify-content-center">
                {productItem.map((product) => <Product key={product.id} product={product} />)}
            </div>
        </div>


    )
}

export default Home;