function PlayerHeader(props) {
    return ( 
        <div class="player__header">
        
          <div class="player__img player__img--absolute slider">
          
            <button class="player__button player__button--absolute--nw playlist">
            
              <img src="http://physical-authority.surge.sh/imgs/icon/playlist.svg" alt="playlist-icon"/>
            
            </button>
          
            <button class="player__button player__button--absolute--center play">
            
              <img src="http://physical-authority.surge.sh/imgs/icon/play.svg" alt="play-icon" />
              <img src="http://physical-authority.surge.sh/imgs/icon/pause.svg" alt="pause-icon" />
            
            </button>
          
            <div class="slider__content">
            
              <img class="img slider__img" src={props.img}  alt="cover" />
              <img class="img slider__img" src={props.img}  alt="cover" />
              <img class="img slider__img" src={props.img}  alt="cover" />
              <img class="img slider__img" src={props.img}  alt="cover" />
              
            
            </div>
          
          </div>
        
          <div class="player__controls">
          
            <button class="player__button back">
            
              <img class="img" src="http://physical-authority.surge.sh/imgs/icon/back.svg" alt="back-icon" />
            
            </button>
            
            <p class="player__context slider__context">
            
              <strong class="slider__name"></strong>
              <span class="player__title slider__title"></span>
            
            </p>
          
            <button class="player__button next">
            
              <img class="img" src="http://physical-authority.surge.sh/imgs/icon/next.svg" alt="next-icon" />
            
            </button>
          
            <div class="progres">
            
              <div class="progres__filled"></div>
            
            </div>
          
          </div>
        
        </div>
      );
}

export default PlayerHeader;