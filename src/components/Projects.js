import React, { useState } from 'react'
import './Projects.css'
import Project1 from './project1.png'
import Project2 from './project2.png'
import Project3 from './project3.png'

function Projects() {
    const [card,setCard]=useState([0,0,0])
    const [cardimage,setCardimage]=useState([{image:Project1},{image:Project2},{image:Project3}]);
    const [cardcontent,setCardcontent]=useState([{link:"https://food-delivery-frontend-0xwq.onrender.com/",github:"https://github.com/hgcoder7/Food-delivery/tree/main/food_delivery"},{link:"https://chess-h572.onrender.com/",github:"https://github.com/hgcoder7/_chess"},{link:"https://netflix-project-g043.onrender.com/",github:"https://github.com/hgcoder7/Netflix-project"}])
  return (<>
    <div className='projects'>
       <div className='project-heading'>PROJECTS</div>
        <div className='oval' style={{height:670,width:'80%',marginLeft:'11%',position:'absolute',borderBottomLeftRadius:'100%',borderBottomRightRadius:'100%',zIndex:0,position:'absolute',borderRadius:'100%'}}>

        <div className='oval2' style={{height:400,width:'60%',marginLeft:'20%',position:'absolute',borderBottomLeftRadius:'100%',borderBottomRightRadius:'100%',zIndex:0,borderRadius:'100%',position:'absolute',marginTop:130}}></div>
        
        </div>
       
         <div className='projects-container'>
         {card.map((card,index)=>(

            // <h1 style={{color:'white'}}>Hello</h1>
           <div className='projects-card'>
           <div className='image-area'>
            <img src={cardimage[index].image} style={{height:'auto',width:320,borderTopRightRadius:5,borderTopLeftRadius:5}}></img>
           </div>
           <div className='content-area'>
           <div className='project-buttons'>
           <a href={cardcontent[index].link} target="_blank">
            <button style={{marginLeft:15,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>
              Open</button></a>
              <a href={cardcontent[index].github} target="_blank">
            <button style={{marginLeft:40,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>Github</button></a>
            <a href={cardcontent[index].video} target="_blank">
            {/* <button style={{marginLeft:40,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>Video</button> */}
            </a>
           </div>

            {index==0?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Tomato(Online food delivery)</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Full Stack</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Mongodb, Express, React, Nodejs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Render</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Authentication</li> 

              <div style={{fontSize:12,margin:'auto',marginLeft:25,marginTop:15,color:'whitesmoke'}}>Our goal is to provide a convenient and enjoyable platform where food lovers can not only discover their next favorite meal but also explore a diverse range of cuisines, all while enjoying a seamless and delightful online food ordering experience.</div>
            </>):(<></>)}
              

            {index==1?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Chess</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Full Stack</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Express, Socket.IO, Nodejs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Render</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Data is saved on cloud</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Authentication</li> 

              <div style={{fontSize:12,margin:'auto',marginLeft:25,marginTop:10,color:'whitesmoke'}}>Key features include real-time one-on-one functionalities, enabling players to communicate privately during matches or engage in larger discussions with other users in a multiplayer chess environment effortlessly.</div>
            </>):(<></>)}

            {index==2?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Netflix-Clone</li>
              {/* <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Responsive Frontend</li>  */}
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Frontend</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Reactjs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Firebase and Render</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Use of TMDB Api</li> 
              <div style={{fontSize:12,margin:'auto',marginLeft:25,marginTop:10,color:'whitesmoke'}}>Our goal is to provide a seamless and immersive platform where entertainment enthusiasts can discover, stream, and enjoy their favorite movies and TV shows, creating a personalized and engaging viewing experience in the comfort of their own homes.</div>

            </>):(<></>)}
              

           </div>
           
       </div>
         ))}
       
        </div>


    </div>
    <div className='projects-mobile'>
      <div className='projects-heading-mobile'>PROJECTS</div>
      <div className='projects-container'>
         {card.map((card,index)=>(

            // <h1 style={{color:'white'}}>Hello</h1>
           <div className='projects-card'>
           <div className='image-area'>
           <img src={cardimage[index].image} style={{height:'auto',width:320,borderTopRightRadius:5,borderTopLeftRadius:5}}></img>

           </div>
           <div className='content-area'>
           <div className='project-buttons'>
           <a href={cardcontent[index].link} target="_blank">
            <button style={{marginLeft:15,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>
              Open</button></a>
              <a href={cardcontent[index].github} target="_blank">
            <button style={{marginLeft:40,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>Github</button></a>
            <a href={cardcontent[index].video} target="_blank">
            <button style={{marginLeft:40,height:35,marginTop:8,outline:'none',border:'none',background:'black',color:'skyblue',borderRadius:5,cursor:'pointer',fontWeight:'bold',paddingLeft:15,paddingRight:15,border:'2px solid skyblue'}}>Video</button>
            </a>
           </div>

            {index==0?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Book Selling Website</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Full Stack</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Mongodb, Express, React, Nodejs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Firebase and Render</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Authentication</li> 

              <div style={{fontSize:12,margin:'auto',marginLeft:25,marginTop:15,color:'whitesmoke'}}>Our goal is to provide a convenient and enjoyable platform where book enthusiasts can not only discover their next favorite read but also connect with fellow readers in a thriving online literary community.</div>
            </>):(<></>)}
              

            {index==1?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Chat Application</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Full Stack</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Mongodb, Express, React, Nodejs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Firebase and Render</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Data is saved on cloud</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Authentication</li> 

              <div style={{fontSize:12,margin:'auto',marginLeft:25,marginTop:10,color:'whitesmoke'}}>Key features include one-on-one chat functionalities, ensuring users can engage in private conversations or participate in larger discussions effortlessly.</div>
            </>):(<></>)}

            {index==2?(<>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Instapic</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>See instagram user profile details</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Frontend</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Reactjs</li>
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Deployed on Firebase</li> 
              <li style={{marginLeft:38,color:'whitesmoke',fontWeight:'bold'}}>Use of Rapid Api</li> 
              
            </>):(<></>)}
              
           </div>
           
       </div>
         ))}
       
        </div>

    </div>
    </> )
}

export default Projects
