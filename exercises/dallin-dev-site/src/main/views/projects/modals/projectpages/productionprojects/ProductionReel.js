import React from 'react'
import YouTube from 'react-youtube';

class ProductionReel extends React.Component {
    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
    render(){
            const youtubevidproduction = {
              height: '360',
              width: '640',
              playerVars: {
                autoplay: 1
              }
          }
    return(
        <div>
            <YouTube
              videoId="SMep7p1EZ9w"
              opts={youtubevidproduction}
              onReady={this._onReady}
              className = "production-reel"
              />
             <h3 className = "modal-title-center">PRODUCTION AND STUNT REEL</h3>
        </div>
        )
    }
}

export default ProductionReel
