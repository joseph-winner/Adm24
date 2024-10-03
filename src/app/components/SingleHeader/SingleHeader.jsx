import React from 'react';
import "./SingleHeader.css";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function SingleHeader({ title }) {
    const navigate = useNavigate();

    const HandlePrev = () => {
        const userConfirmed = window.confirm("You will lose your unsaved work. Are you sure you want to exit?");
        
        if (userConfirmed) {
            navigate(-1);
        }
    };

    return (
        <div>
            <div className="single-header-section">
                <div className="single-header-container">
                    <div className="back-btn" onClick={HandlePrev}>
                        <FaChevronLeft />
                    </div>
                    <div className="single-header-title">
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
