import React from 'react'
import Navbar from './Navbar/Navbar'
import BigBangStarField from 'react-big-bang-star-field'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

function ErrorPage() {
  return (
    <div style={{backgroundColor: 'black', height: '100vh'}}>

        <Navbar/>
        



        <BigBangStarField
         numStars={200}
         maxStarSpeed={1}
         scale={1.5}
         style={{
            //  position: 'absolute',
             position: 'fixed',
             width: '100%',
             height: '100%',
             zIndex:0,  // MODIFICA ASTA PT STELUTE
            marginTop:"-18vh"
           }}
         starColor={"255, 255, 255"}
          />

 <h4 style={{color:'white',display: 'flex',
                justifyContent: 'center',
                zIndex: 99,
                cursor: 'pointer',
                height: '5vh',
                alignItems: 'center',
                paddingTop: '5%'}}>More projects on my linkedin & github: </h4> 
<div style={{
                display: 'flex',
                justifyContent: 'center',
                zIndex: 99,
                cursor: 'pointer',
                height: '45vh',
                alignItems: 'center',
                
            }} >
               
        <a href="https://www.linkedin.com/in/razvan-burloiu-47750b13b/" target='#_blank'> <h2 style={{color: 'white'}}>  Burloiu Razvan</h2>
                  </a>

                  <a href="https://www.linkedin.com/in/razvan-burloiu-47750b13b/" target='#_blank'> <AiOutlineLinkedin color="white" size="50" href="https://www.linkedin.com/in/razvan-burloiu-47750b13b/" target='#_blank'/></a>
                  <a href="https://github.com/konjic" target='#_blank'> <AiFillGithub color="white" size="50" href="https://github.com/konjic" target='#_blank'/></a>


        
        </div>





                 
    </div>
  )
}

export default ErrorPage