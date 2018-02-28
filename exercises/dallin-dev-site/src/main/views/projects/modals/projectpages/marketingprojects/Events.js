import React from 'react'
import YouTube from 'react-youtube';

class Events extends React.Component {
    constructor(){
        super();
            this.state={
                video1Display: false,
                video2Display: false,
                video3Display: false,
                videoPlaying: false,
                player: [],
            }
            this._videoOnePlay=this._videoOnePlay.bind(this);
            this._videoTwoPlay=this._videoTwoPlay.bind(this);
            this._videoThreePlay=this._videoThreePlay.bind(this);
            this._onReady =this._onReady.bind(this);
            this._videoClose = this._videoClose.bind(this)
        }
    _onReady(event) {
        const player = this.state.player;
        player.push(event.target);
        event.target.pauseVideo();
     }
    _videoOnePlay() {
        this.setState((prevState) =>{
            return ({
                ...prevState,
                video1Display: true,
                videoPlaying: true,
              });
          });
    }
    _videoTwoPlay() {
        this.setState((prevState) =>{
            return ({
                ...prevState,
                video2Display: true,
                videoPlaying: true,
              });
          });
    }
    _videoThreePlay() {
        this.setState((prevState) =>{
            return ({
                ...prevState,
                video3Display: true,
                videoPlaying: true,
              });
          });
    }
    _videoClose = (event) => {
        this.setState({
                video1Display: false,
                video2Display: false,
                video3Display: false,
                videoPlaying: false,
              });
        this.state.player[0].pauseVideo();
        this.state.player[1].pauseVideo();
        this.state.player[2].pauseVideo();
    }
    render(){
            const youtubevid = {
              playerVars: {
                autoplay: 1
            }
          }
    return(
        <div>
            <div className = "marketing-texture" style={{display: this.state.videoPlaying ? 'none' : 'block' }}></div>
            <div className = "modal-title">
                <h3 className = "modal-title-side">TRIMR</h3>
                <h5 className = "modal-subtitle-left-side">MARKETING DIRECTOR</h5>
            </div>
            <div className = "modal-description-right" style={{display: this.state.videoPlaying ? 'none' : 'block' }}>
                <h1 className = "modal-other-description">MARKETING CONTENT</h1>
                <h3 className = "modal-subdescription">VIDEO, PHOTO AND ADVERTISMENT</h3>
            </div>
            <div className = "events-main-img" style={{display: this.state.videoPlaying ? 'none' : 'block' }}></div>
            <div className = "marketing-box-1" style={{display: this.state.videoPlaying ? 'none' : 'block' }}></div>
            <div className= "events-videos-container" style={{display: this.state.videoPlaying ? 'none' : 'block' }}>
                <div className = "events-row">
                     <div onClick = {this._videoOnePlay} className = "events-thumbnails events-vid-thumbnail-1"></div>
                     <div onClick = {this._videoTwoPlay} className = "events-thumbnails events-vid-thumbnail-2"></div>
                     <div onClick = {this._videoThreePlay} className = "events-thumbnails events-vid-thumbnail-3"></div>
                </div>
                <div className = "events-row-2">
                    <div className = "events-text-container">
                        <h4 className = "event-text"  style={{display: this.state.videoPlaying ? 'none' : 'block' }}>ASAMPRAJNATA</h4>
                    </div>
                    <div className = "events-text-container">
                        <h4 className = "event-text"  style={{display: this.state.videoPlaying ? 'none' : 'block' }}>DUO SHAKER</h4>
                    </div>
                    <div className = "events-text-container">
                        <h4 className = "event-text"  style={{display: this.state.videoPlaying ? 'none' : 'block' }}>SWEAT ON</h4>
                    </div>
                </div>
            </div>
            <div onClick = {this._videoClose} className = "vid-close" style={{display: this.state.videoPlaying ? 'block' : 'none' }}></div>
            <div className = "youtube-div" style={{display: this.state.video1Display ? 'block' : 'none' }}>
                <YouTube
                videoId="5OOrBECtaS8"
                id = "ytvid1"
                opts={youtubevid}
                onReady={this._onReady}
                className = "youtube-vid-events"
                />
            </div>
            <div style={{display: this.state.video2Display ? 'block' : 'none' }}>
              <YouTube
                videoId="9siSviJOfEw"
                id = "ytvid2"
                opts={youtubevid}
                onReady={this._onReady}
                className = "youtube-vid-events"
                />
            </div>
            <div style={{display: this.state.video3Display ? 'block' : 'none' }}>
                <YouTube
                  videoId="bqPmOOcO2Kk"
                  id = "ytvid3"
                  opts={youtubevid}
                  onReady={this._onReady}
                  className = "youtube-vid-events"
                  />
            </div>
        </div>
        )
    }
}

export default Events
