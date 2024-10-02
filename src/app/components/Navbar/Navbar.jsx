import React, { useEffect, useState } from 'react';
import Logo from "../../../utils/img/logo-nobg.png";
import "./Navbar.css";
import { FaBars, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const Navigate = useNavigate()

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AddPost = () =>{
    Navigate("/Addproduct")
  }

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-items">
        <div className="nav-logo">
          <img src={Logo} alt="Africans in Doha Logo" />
        </div>
        <div className={`nav-items-lists ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">News</a></li>
            <li><a href="/">Buy</a></li>
            <li><a href="/Addproduct">Sell</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Community</a></li>
          </ul>
        </div>
        <div className="nav-btns">
          <div className="add-post" onClick={AddPost}>
            <p className='responsive-bg'>Post Ad</p>
            <p className="responsive-sm" title='Post Ad'>
              <FaPlus />
            </p>
          </div>
          <div className="login-btn">
            <p>Login</p>
          </div>
        </div>
        <div className="humberger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
}
