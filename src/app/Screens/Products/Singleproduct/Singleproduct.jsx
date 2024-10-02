import React from 'react'
import "./Singleproduct.css"
import SingleHeader from '../../../components/SingleHeader/SingleHeader'
import imagesample from "../../../../utils/img/Products/smartcoffeetable.jpg"
import { FaCalendar, FaMapMarker, FaUser } from 'react-icons/fa'

export default function Singleproduct() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
        <SingleHeader title="Smart coffee Table" />
        <div className="product-view-container" style={{marginTop:30, paddingTop:15}}>
            <div className="product-view-items">
                <div className="product-view-item">
                    <img src={imagesample} alt="coffee table" />
                    <div className="product-view-desc">
                        <p className="postedby-product-view">
                            <FaUser /> <span>Africans in Doha</span>
                        </p>
                        <h4>Smart coffee Table</h4>
                        <div className="product-view-meta">
                            <span className="location">
                                <FaMapMarker /> Umm Salal
                            </span>
                            <span className="posted-date">
                                <FaCalendar /> 02 / 10 / 2024
                            </span>
                            <span className="product-status">
                                Available
                            </span>
                        </div>

                        <div className="product-description-view">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis corporis, porro dignissimos odio dolores omnis soluta aliquam deleniti ad, maiores, modi distinctio sint incidunt!</p>
                        </div>

                        <div className="product-view-footer">
                        <span className="product-price-footer">
                            QAR 3500
                        </span>
                        <span className="product-contact-seller-footer">
                            Contact Seller
                        </span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
