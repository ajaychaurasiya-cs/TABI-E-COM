import React from 'react';
import './footer.css'

import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";

const Footer = () => {
    return( 
    <footer className='footer-container'>
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium omnis assumenda unde minus, eveniet vitae hic doloremque quos quas pariatur provident, aut, voluptatum recusandae neque eum eius accusantium adipisci voluptates modi dicta.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Delhi Rd, Govindpura, RDV Building, 606699 -fake</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 07744 7878 99-fake</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: Tabi@tb.com-fake</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Men's collection</span>
                <span className="text">Women's collection</span>
                <span className="text">Electronics</span>
                <span className="text">jewlery</span>
                <span className="text">Home's</span>
                <span className="text">Grocery</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    <span className='logo'>TABI</span> . 2023 CREATED BY: AJAY CHAURASIYA. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img className='payment-img' src='./assets/payments.png' alt="payment" />
            </div>
        </div>
    </footer>
    )
};

export default Footer;
