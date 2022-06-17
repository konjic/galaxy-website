import React, { Component } from 'react'
import BigBangStarField from 'react-big-bang-star-field'
import Navbar from './Navbar/Navbar'
import laptop from '../images/macbook.png'
import {MdOutlineStorage} from 'react-icons/md'
import {FiWifiOff} from 'react-icons/fi'
import {HiOutlineMicrophone} from 'react-icons/hi'
import {GoSync} from 'react-icons/go'
import {BsFillCloudsFill} from 'react-icons/bs'
import {TiSocialYoutubeCircular} from 'react-icons/ti'





function Home (){
 

  {
    return (
      <div>

<div className="hero"
        style={{
        //   background: "black", //  #150D30, #3E1740
          backgroundSize: "stretch",
          minHeight: "100vh",
        //   display: "flex",
          justifyContent: "center",
        //   alignItems: "center"
        }}
        >
        <Navbar/>
      
       
        <BigBangStarField
         numStars={300}
         maxStarSpeed={1}
         scale={1.5}
         style={{
             position: 'absolute',
            //  position: 'fixed',
             width: '100%',
             height: '100%',
             zIndex:0,  // MODIFICA ASTA PT STELUTE
            marginTop:"-18vh"
           }}
         starColor={"255, 255, 255"}
          />


        <div>
            <h1>VOX MUSIC PLAYER for MAC</h1>
        </div>
        <br/>
        <div className="hero-grid">
            <div className="hero-grid-item"> <img src={laptop} alt="" /> </div>
            <div className="hero-grid-item"><h2>Integrated Unlimited Music Cloud</h2></div>
            <div className="hero-grid-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius quam dignissimos non dolorum laborum veniam fuga aut delectus dolorem.</p> <input type="button" value="Learn More"></input> </div>
            <div className="hero-grid-item">
                <input type="button" value="FREE DOWNLOAD" id='button-left'></input> 
                <input type="button" value="GO PREMIUM" id='button-right'></input> 

                </div>
        </div>

    </div>

    
          <div className='second-part-wrapper'>
            <h1>Advanced Audio Settings and Features</h1>

            <div className="hero-grid-second">
              <div className="hero-grid-item-second"> <MdOutlineStorage size={50}/> <br/><br/> <h3>Unlimited Music Storage</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p> </div>
              <div className="hero-grid-item-second"> <FiWifiOff size={50}/> <br/><br/> <h3>Unlimited Music Storage</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p></div>
              <div className="hero-grid-item-second"><HiOutlineMicrophone size={50}/> <br/><br/> <h3>Internet Radio</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p></div>
              <div className="hero-grid-item-second">  <GoSync size={50}/> <br/><br/> <h3>Sync your devices</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p></div>
              <div className="hero-grid-item-second"> <BsFillCloudsFill size={50}/> <br/><br/> <h3>Cloud Music Player</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p></div>
              <div className="hero-grid-item-second"> <TiSocialYoutubeCircular size={50}/> <br/><br/> <h3>YouTube Mac Music Player</h3> <br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur ratione. Commodi, eius! Maiores architecto quisquam ab corrupti quae error eaque quas, obcaecati nam earum debitis suscipit blanditiis ad illo!</p></div>
            </div>
          </div>



          
           <div className="third-part-wrapper">


              <div className="third-grid">
            <div className="third-grid-item"> <img src="https://vox.rocks/public/vox.rocks/assets/images/itunes_screen.png" alt="" height={350}/> </div>
            <div className="third-grid-item"><h2>Sound Player for MAC</h2></div>
            <div className="third-grid-item"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eius quam dignissimos non dolorum laborum veniam fuga aut delectus dolorem.</p>  </div>
            <div className="third-grid-item">
                <input type="button" value="FREE DOWNLOAD" id='button-left'></input> 
                <input type="button" value="GO PREMIUM" id='button-right'></input> 

                </div>
        </div>
           </div>


           <div className="footer">
            
           </div>

      </div>
    )
  }
}

export default Home