//import * as sound from "../assets/Hosary/" 

import { useEffect, useState } from "react";
import axios from 'axios';

function LinkedPlayerList(props) {
const [index, setIndex]=useState();
//const [quarter,setQuarter]=useState();
const map= props.Shikh.slice(props.start,props.end);
const map1=props.Shikh.slice(props.start,props.end+1);
let temp=map;

props.name==="AbdElBaset"&&props.start===16?temp=map1:temp=map;
console.log(temp)
function gettext(index)  {
 
axios.get(`https://api.alquran.cloud/v1/hizbQuarter/${props.start+index}/quran-uthmani`)
.then(function (response) {
  
  //setQuarter(response.data.data.ayahs)
  console.log(response.data.data.ayahs);
  props.getquarter(response.data.data.ayahs)
})
.catch(function (error) {
  // handle error
  console.log(error);
})
  
  
}
    return ( 
      <>
   
     
    
        <ul className="player__playlist list">
      {
        
    temp.map((mp3,index) => 
    
    
          <li className="player__song" key={index} onClick={()=>gettext(index+1)}>
          
            <img className="player__img img" src={props.img} alt="cover" />
          
            <p className="player__context">
            <b className="player__song-name" > {props.j}</b>
              <b className="player__song-name1" > {index===1? "ربع " :"" ||index===2? "نصف " :"" ||index===3? "ثلاثة أرباع " :""||index===0? "":"" }{props.h}</b>
              <span className="flex">
              <a  target="_blank"  href={`https://archive.org/download/${props.identifier}/${mp3}`} download={`${props.j} `+`${index===1? "ربع " :"" ||index===2? "نصف " :"" ||index===3? "ثلاثة أرباع " :""||index===0? "":"" }`+`${props.h}`+` ${props.namear}`} ><i class="fa fa-download" style={{fontSize:"36px",color:"grey"}}></i></a>
                <span className="player__title">{props.namear}</span>
                
                <span className="player__song-time"></span>
             
              </span>
              <button onClick={()=>gettext(index+1)}>عرض الربع مكتوبا</button>
            </p>
          
            <audio className="audio"  src={`https://archive.org/download/${props.identifier}/${mp3}`}></audio>
        
          </li>
      )}
        
        </ul>


        </>
     );
            }

export default LinkedPlayerList;
