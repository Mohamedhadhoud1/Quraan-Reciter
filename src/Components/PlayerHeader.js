function PlayerHeader(props) {
    return ( 
        <div className="player__header">
        
          <div className="player__img player__img--absolute slider">
          
            <button className="player__button player__button--absolute--nw playlist">
            
              <img src="http://physical-authority.surge.sh/imgs/icon/playlist.svg" alt="playlist-icon"/>
            
            </button>
          
            <button className="player__button player__button--absolute--center play">
            
              <img src="http://physical-authority.surge.sh/imgs/icon/play.svg" alt="play-icon" />
              <img src="http://physical-authority.surge.sh/imgs/icon/pause.svg" alt="pause-icon" />
            
            </button>
          
            <div className="slider__content">
            
              <img className="img slider__img" src={props.img}  alt="cover" />
              <img className="img slider__img" src={props.img}  alt="cover" />
              <img className="img slider__img" src={props.img}  alt="cover" />
              <img className="img slider__img" src={props.img}  alt="cover" />
              
            
            </div>
          
          </div>
        
          <div className="player__controls">
          
            <button className="player__button back">
            
              <img className="img" src="http://physical-authority.surge.sh/imgs/icon/back.svg" alt="back-icon" />
            
            </button>
            
            <p className="player__context slider__context">
            
              <strong className="slider__name"></strong>
              <span className="player__title slider__title"></span>
            
            </p>
          
            <button className="player__button next">
            
              <img className="img" src="http://physical-authority.surge.sh/imgs/icon/next.svg" alt="next-icon" />
            
            </button>
          
            <div className="progres">
            
              <div className="progres__filled"></div>
            
            </div>
          
          </div>
        
        </div>
      );
}

export default PlayerHeader;