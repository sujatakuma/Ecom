import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    console.log(id, 'id',product)
    

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            console.log(data);
            setProduct(data)
        }
        fetchProducts()
    }, [])
    if(!Object.keys(product).length > 0 )return <div>Loading....</div>
    return (
        <div>
            <div className="card mb-3" style={{ width: "80%",padding:'10px', margin:'15px' }} >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img style={{height:'300px'}} src={product?.image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h7 className="card-title">{product?.category}</h7>
                            <h5 className="card-title">{product?.title}</h5>
                            ⭐⭐⭐⭐⭐
                            <p className="card-text">{product?.description}</p>
                            <h1 className="card-text">${product?.price}</h1>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
