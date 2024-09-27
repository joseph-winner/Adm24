import React from "react";
import product1 from "../../../../utils/img/Products/headsets.jpg";
import product2 from "../../../../utils/img/Products/mattress.webp";
import product3 from "../../../../utils/img/Products/officeset.webp";
import product4 from "../../../../utils/img/Products/rack.avif";
import product5 from "../../../../utils/img/Products/smartcoffeetable.jpg";
import product6 from "../../../../utils/img/Products/sofa.jpg";
import ProductComponent from "../../../components/ProductComponent/ProductComponent";
import "./Featured.css";

export default function Featured() {
  const FeaturedProducts = [
    {
      productName: "Bluetooth Headsets",
      productPrice: 809,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product1,
    },
    {
      productName: "IKEA Mattress",
      productPrice: 1299,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product2,
    },
    {
      productName: "Office Set",
      productPrice: 5699,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product3,
    },
    {
      productName: "IKEA Sofaset",
      productPrice: 849,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product4,
    },
    {
      productName: "Bedroom Rack",
      productPrice: 389,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product5,
    },
    {
      productName: "Smart Coffee Table",
      productPrice: 4399,
      productDesc:
        "This is an awesome product that you will love. It has many features and benefits that make it stand out.",
      productImg: product6,
    },
  ];

  return (
    <div className="featured-container">
        <div className="featured-header">
            <h3>Featured Products</h3>
            <p>Explore our featured items that elevate your lifestyle, find the perfect pieces to enhance your everyday adventures!</p>
        </div>
      <div className="featured-items">
        {FeaturedProducts.map((product, index) => (
          <ProductComponent
            key={index}
            productName={product.productName}
            productPrice={product.productPrice}
            productDesc={product.productDesc}
            productImg={product.productImg}
          />
        ))}
      </div>
    </div>
  );
}
