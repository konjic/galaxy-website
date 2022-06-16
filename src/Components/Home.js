import React, { Component } from 'react'
import BigBangStarField from 'react-big-bang-star-field'
import Navbar from './Navbar/Navbar'
import laptop from '../images/macbook.png'


export class Home extends Component {
  render() {
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
         maxStarSpeed={0.0000000002}
         scale={2}
         style={{
            //  position: 'absolute',
             position: 'fixed',
             width: '100%',
             height: '100%',
             zIndex:0,  // MODIFICA ASTA PT STELUTE
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

           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid cumque alias incidunt excepturi sunt quos! Excepturi, nisi nemo amet atque accusantium molestiae a non sint, velit sed officiis eos assumenda.


      </div>
    )
  }
}

export default Home