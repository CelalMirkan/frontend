import React from 'react';
import Rating from './Rating';

export default function Product(props) {
    const {product} = props;
    return (
        <div key={product._id} className="card">
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.model}/>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id}`}>
                            <h2>{product.model}</h2>
                        </a>
                        <Rating rating={product.rating} numReviews = {product.numReviews}></Rating>
                        <div className="price">
                            ${product.price}
                        </div>
                    </div>
                </div>
    );
}