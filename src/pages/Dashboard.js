import React from 'react'
import "./Dashboard.css"
import DesktopNavbar from '../components/navbars/DesktopNavbar'
import WelcomeBlock from '../components/welcomeBlock/WelcomeBlock'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { FaRegAddressCard, FaRegUser } from "react-icons/fa";
import { BsCardList } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";


const Dashboard = () => {
  return (
    <>
    <div className='dashboard-container'>
      <DesktopNavbar/>
      <WelcomeBlock/>
      
    </div>
    <div className=' pos-fix'>
      <div className='responsiveNavBar'>
        <div className='navIcCont'><GoHome className="icSize newActive"/></div>
        <div className='navIcCont'><FaRegAddressCard className="icSize"/></div>
        <div className='navIcCont'><BsCardList className="icSize"/></div>
        <div className='navIcCont'><FaRegUser className="icSize"/></div>
        <div className='navIcCont'><FaMagnifyingGlass className="icSize" /></div>
      </div>
    </div>
  </>
  )
}

export default Dashboard
