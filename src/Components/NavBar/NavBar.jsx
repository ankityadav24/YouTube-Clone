import React from 'react'
import './NavBar.css'
import menu_icon from '../../assets/menu.png'
import logo_icon from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom'

const NavBar = ({setsideBar}) => {
    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img className="menu-icon" onClick={()=>setsideBar(prev=>prev===false?true:false)} src={menu_icon} alt=''></img>
                <Link to={'/'}><img className='logo-icon' src={logo_icon} alt=''></img> </Link>
            </div>
            <div className='nav-middle flex-div'>
                <div className='search-box flex-div'>
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt='' ></img>
                </div>
               
            </div>
            <div className='nav-right flex-div'>
                <img  src={upload_icon} alt=''/>
                <img  src={more_icon} alt=''/>
                <img  src={notification_icon} alt=''/>
                <img className='user-icon' src={profile_icon} alt=''/>

            </div>
        </nav>
    )
}

export default NavBar
