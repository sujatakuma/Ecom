import React from 'react'
import { Link } from 'react-router-dom'
const Products = ({ products = [] }) => {
    return (
        <div>
            <div className="container my-4">
                
                <div className="row">
                    {
                        products.map((product) => {
                            console.log(product, 'product')
                            const { id, title, image, price, } = product
                            

                            return (
                                <div className="card" style={{ width: "20rem", margin: '20px', height: '500px' }}>
                                    <img style={{ height: '250px', width: '240px', margin: "5px" }} src={image} className="card-img-top" alt="..." />
                                    <div className="card-body" >
                                        <h4 className="card-title" style={{ alignItems: "center" }}>{title}</h4>
                                        ⭐⭐⭐⭐⭐
                                        <h5 className="card-title" style={{ alignItems: "center" }}>{price}</h5>
                                        <p className="card-text" style={{ alignItems: "center" }}></p>
                                        <Link to={`/products/${id}`} className="btn btn-primary">by now</Link>
                                    </div>
                                </div>
                            )

                        })
                    }

                </div>
            </div>
        </div>

    )
}

export default Products
