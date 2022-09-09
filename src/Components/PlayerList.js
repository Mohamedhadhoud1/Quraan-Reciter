//import * as sound from "../assets/Hosary/" 

function PlayerList(props) {

const map= props.Shikh.slice(props.start,props.end)

console.log(map)
    return ( 
        <ul class="player__playlist list">
      {map.map((mp3,index) => 
    
   
          <li class="player__song">
          
            <img class="player__img img" src={props.img} alt="cover" />
          
            <p class="player__context">
            
              <b class="player__song-name">الحزب</b>
              <span class="flex">
              
                <span class="player__title">{props.name}</span>
                <span class="player__song-time"></span>
              
              </span>
            
            </p>
          
            <audio class="audio" src={process.env.PUBLIC_URL+"/assets/"+props.name+"/"+'002-Al-Baqara-From001-To025.ogg'}></audio>
          
          </li>
      )}
        
        </ul>
     );
            }

export default PlayerList;