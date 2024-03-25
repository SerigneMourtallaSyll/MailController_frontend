import React from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import Logo from '../../assets/iconMailSuite.png'

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand d-flex justify-content-center align-items-center ">
            <img src={Logo} alt="img" className="img-fluid" />
            <span className="fw-bold mt-2 mx-2 title">
                Mailsuite
            </span>
        </a>
        <div className="d-flex justify-content-around align-items-center rightNav">
            <div>
                <button className="btn">
                    <span><IoDiamondOutline /></span> 
                    <span className="px-1">Upgrade Plan</span>
                </button>
            </div>
            <div className="d-flex justify-content-around align-items-center w-50">
                <IoIosHelpCircleOutline />
                <IoSettingsOutline />
                <MdAccountCircle className="accountCircle"/>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
