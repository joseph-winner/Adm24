import React from "react";
import { FaPencilAlt, FaSearch } from "react-icons/fa";

export default function DashboardProducts({productsData}) {
  return (
    <div>
      <div className="dash-products">
        <div className="dash-search-product-container">
          <input type="search" name="search" placeholder="Search Product..." />
          <p>
            <FaSearch />
          </p>
        </div>

        <div className="product-list-container">
            <div className="product-list-items">
            {productsData.map((product, id) => (
                <div key={id} className="product-list-item">
                    <div className="product-list-header">
                    <img src={product.productImg} alt={product.productName} />
                    <h4> {product.productName} </h4>
                    </div>
                    <p className="product-status"> <span className="center-dot"></span> Live </p>
                    <p className="product-sold">Sold</p>
                    <p className="product-edit"> <FaPencilAlt /> </p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
