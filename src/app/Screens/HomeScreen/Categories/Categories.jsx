import React from "react";
import { FaThLarge } from "react-icons/fa";
import category1 from "../../../../utils/img/Products/headsets.jpg"
import category2 from "../../../../utils/img/Products/mattress.webp"
import category3 from "../../../../utils/img/Products/officeset.webp"
import category4 from "../../../../utils/img/Products/rack.avif"
import category5 from "../../../../utils/img/Products/smartcoffeetable.jpg"
import category6 from "../../../../utils/img/Products/sofa.jpg"
import "./Categories.css"

export default function Categories() {
  return (
    <div className="cat-section">
      <h3>CATEGORIES</h3>
      <div className="categories-container">
        <div className="category-items">
          <div className="cat-item cat-all">
            <a href="/" className="category-item">
              <FaThLarge />
            </a>
            <p>All</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category1} alt="" />
            </a>
            <p>Electronics</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category2} alt="" />
            </a>
            <p>Beddings</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category3} alt="" />
            </a>
            <p>Office</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category4} alt="" />
            </a>
            <p>Home</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category5} alt="" />
            </a>
            <p>Smart Home</p>
          </div>
          <div className="cat-item">
            <a href="/" className="category-item">
              <img src={category6} alt="" />
            </a>
            <p>Furniture</p>
          </div>
        </div>
      </div>
    </div>
  );
}
