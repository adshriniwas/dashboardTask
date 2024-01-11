import React from "react";
import "./DesktopNavbar.css"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { FaRegAddressCard, FaRegUser } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";


const DesktopNavbar = () => {
  return (
    <div className="deskNavContainer">
      <div className="desktopNavTopCont">
        <div className="deskTopNav">
            <div className="logoCont">
                <img className="logoImg" src="logo.png"/>
            </div>
            <div className="iconCont">
                <FaMagnifyingGlass className="icSize" />
            </div>
        </div>

        <div className="deskMiddleNav">
            <div className="iconCont active">
                <GoHome className="icSize activeIc"/>
            </div>
            <div className="iconCont">
                <FaRegAddressCard className="icSize"/>
            </div>
            <div className="iconCont">
                <BsCardList className="icSize"/>
            </div>
            <div className="iconCont">
                <FaRegUser className="icSize"/>
            </div>
        </div>
      </div>
      <div className="deskBottomNav">
        <div className="iconContBt">
            <IoMdNotificationsOutline className="icSize"/>
        </div>
        <div className="iconContBt">
            <IoLogOutOutline className="icSize"/>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
