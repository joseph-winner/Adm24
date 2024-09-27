import React from 'react'
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div className='search-container'>
        <input type="search" name="search" placeholder="Search by: 'Product name' , 'Category', etc " />
        <span className="search-icon">
            <FaSearch />
        </span>
    </div>
  )
}
