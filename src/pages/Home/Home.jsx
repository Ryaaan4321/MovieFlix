import React from 'react'
import './Home.css'
import NavBar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'


const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
        <img src={hero_banner} alt='' className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img'/>
          <p>Discovering the new challanges and the discoveries ,
            of the mountains and facing the new adversities with the each new step</p>
            <div className="hero-btns">
              <button className='btn '><img src={play_icon} alt=''/>Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt=''/>More Info</button>
            </div>
            <TitleCards/>
        </div>
      </div>  

      <div className="more-cards">
        <TitleCards title={"BlockBuster Movies"} category={"popular"}/>
        <TitleCards title={"Hollywood Movies"} category={"top_rated"}/>
        <TitleCards title={"Bollywood Movies"} category={"upcoming"}/>
        <TitleCards title={"Action movies"} category={"now_playing"}/>
      </div>
    <Footer/>
        
    </div>
  )
}

export default Home
