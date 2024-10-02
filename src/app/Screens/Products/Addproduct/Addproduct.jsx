import React from 'react';
import SingleHeader from '../../../components/SingleHeader/SingleHeader';
import "./Addproduct.css";
import { FaImage } from 'react-icons/fa';

export default function Addproduct() {
  return (
    <div className='add-prod-sect'>
      <div className="add-prod-cont">
      <SingleHeader title="Add new product" />
      <div className="add-product-section" style={{ marginTop: 70 }}>
        <form className='Adding-post-form'>
          <label htmlFor="productImage" className='image-label-single'>Upload Image <span><FaImage /></span></label>
          <input type="file" name="file" id="productImage" />
          <input type="text" name="text" placeholder='Product name' />
          <input type="text" name="text" placeholder='Product Description' />
          <input type="number" name="number" placeholder='QAR 100' />
          <label htmlFor="extraImages" className='image-label'>Upload more Images</label>
          <input type="file" name="extraFiles" id="extraImages" multiple />
          <button type="submit">Create</button>
        </form>
      </div>
      </div>
    </div>
  );
}
