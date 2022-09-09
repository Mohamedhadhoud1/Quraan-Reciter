//import * as sound from "../assets/Hosary/" 

function PlayerList(props) {

const map= props.Shikh.slice(props.start,props.end)

console.log(map)
    return ( 
        <ul className="player__playlist list">
      {map.map((mp3,index) => 
    
   
          <li className="player__song" key={index}>
          
            <img className="player__img img" src={props.img} alt="cover" />
          
            <p className="player__context">
            
              <b className="player__song-name">الحزب</b>
              <span className="flex">
             
                <span className="player__title">{props.name}</span>
                <span className="player__song-time"></span>
              
              </span>
            
            </p>
          
            <audio className="audio" src={process.env.PUBLIC_URL+"/assets/"+props.name+"/"+mp3}></audio>
          
          </li>
      )}
        
        </ul>
     );
            }

export default PlayerList;