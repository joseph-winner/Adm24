import React from 'react';
import './ProductComponent.css';
import { FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function ProductComponent({ productName, productPrice, productDesc, productImg }) {
  const Navigate = useNavigate()
  const handleProduct = () =>{
    Navigate("/Product")
  }
  return (
    <div className="product-container">
      <img
        src={productImg}
        alt={productName}
        className="product-image" onClick={handleProduct}
      />
      <span className='favorite-icon'>
        <FaHeart />
      </span>
      <div className="product-details">
        <h2 className="product-name">{productName}</h2>
        <p className="product-price">${productPrice}</p>
        <p className="product-description">{productDesc}</p>
        <span className="buy-button" role="button">
          Contact
        </span>
      </div>
    </div>
  );
}
