import React from 'react';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer data-theme="dracula" className="p-10 footer bg-base-200 text-base-content">
            <div>
                <img className="w-3/4" src={logo} alt="" />
                <p className="text-left pt-2">Imperial Motors Ltd.
                    <br />Dubai's Most Luxurious Car Dealership
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <button className="link link-hover">Branding</button>
                <button className="link link-hover">Design</button>
                <button className="link link-hover">Marketing</button>
                <button className="link link-hover">Advertisement</button>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <button className="link link-hover">About us</button>
                <button className="link link-hover">Contact</button>
                <button className="link link-hover">Jobs</button>
                <button className="link link-hover">Press kit</button>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <button className="link link-hover">Terms of use</button>
                <button className="link link-hover">Privacy policy</button>
                <button className="link link-hover">Cookie policy</button>
            </div>
        </footer>
    );
};

export default Footer;