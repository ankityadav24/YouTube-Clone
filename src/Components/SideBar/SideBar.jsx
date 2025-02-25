import React from 'react'
import './SideBar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainent from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/ankit.jpg'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megon from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'

const SideBar = ({sidebar,category,setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}` }>
            <div className='shortcut-links'>
                <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}> 
                    <img src={home} alt='' /> <p>Home</p>
                </div>
                <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}> 
                    <img src={game_icon} alt='' /> <p>Gaming</p>
                </div>
                <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}> 
                    <img src={sports} alt='' /> <p>Sports</p>
                </div>
                <div className={`side-link ${category===24?"active":""}`}onClick={()=>setCategory(24)}> 
                    <img src={entertainent} alt='' /> <p>Entertainment</p>
                </div>
                <div className={`side-link ${category===28?"active":""}`}onClick={()=>setCategory(28)}> 
                    <img src={tech} alt='' /> <p>TechnoLogy</p>
                </div>
                <div className={`side-link ${category===10?"active":""}`}onClick={()=>setCategory(10)}> 
                    <img src={music} alt='' /> <p>Music</p>
                </div>
                <div className={`side-link ${category===22?"active":""}`}onClick={()=>setCategory(22)}> 
                    <img src={blogs} alt='' /> <p>Blogs</p>
                </div>
                <div className={`side-link ${category===25?"active":""}`}onClick={()=>setCategory(25)}> 
                    <img src={news} alt='' /> <p>News</p>
                </div>
                <hr/>
            </div>
            <div className='subscribed-list'>


            <h3>Subscribed</h3>
            <div className='side-link'>
                <img src={jack} alt=""/><p>Ankit</p>
            </div>
            <div className='side-link'>
                <img src={simon} alt=""/><p>Rohit</p>
            </div>
            <div className='side-link'>
                <img src={tom} alt=""/><p>Tom</p>
            </div>
            <div className='side-link'>
                <img src={megon} alt=""/><p>Ruhi</p>
            </div>
            <div className='side-link'>
                <img src={cameron} alt=""/><p>Nas Daily</p>
            </div>
            </div>
        </div>
    )
}

export default SideBar
