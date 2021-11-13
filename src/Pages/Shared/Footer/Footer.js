import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <footer data-theme="dracula" class="p-10 footer bg-base-200 text-base-content">
            <div>
                <img className="w-3/4" src={logo} alt="" />
                <p className="text-left pt-2">Imperial Motors Ltd.
                    <br />Dubai's Most Luxurious Car Dealership
                </p>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <button class="link link-hover">Branding</button>
                <button class="link link-hover">Design</button>
                <button class="link link-hover">Marketing</button>
                <button class="link link-hover">Advertisement</button>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <button class="link link-hover">About us</button>
                <button class="link link-hover">Contact</button>
                <button class="link link-hover">Jobs</button>
                <button class="link link-hover">Press kit</button>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <button class="link link-hover">Terms of use</button>
                <button class="link link-hover">Privacy policy</button>
                <button class="link link-hover">Cookie policy</button>
            </div>
        </footer>
    );
};

export default Footer;