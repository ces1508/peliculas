import React, {Component} from 'react'
import videojs from 'video.js'
import styles from './styles.css'

const videoJsOptions = {
  autoplay: true,
  controls: true,
  audioTrackButton: true,
  languages:{
    Type: "language",
    Subtag: "es",
    Description: "Spanish",
  },
  posterImage:{
    poster: '/assets/tumbnail.jpeg'
  },
  sources: [{
    src: '/assets/ballerina.mkv',
    type: 'video/mp4'
  }]
}


export default class Videoplayer extends Component {

  constructor () {
    super()
    this.state = {pause: true}
    this.handlePause = this.handlePause.bind(this)
  }

  componentDidMount() {
    // instantiate video.js
    this.player = videojs(this.videoNode, videoJsOptions, function onPlayerReady(player) {
    });
    console.log('player', this.player)

  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  handlePause () {
    this.setState({pause: !this.state.pause})
  }

  render() {
    return (
      <div className = { styles.videoContainer }>
        <div data-vjs-player  className = {styles.video}>
          <video
            ref={ node => this.videoNode = node }
            className="video-js vjs-default-skin"
          />
        </div>
        <section className = {styles.serieList}>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
          <div className = {styles.capitulo}>
            <img src="/assets/tumbnail.jpeg" alt="" className = {styles.capituloThumbnail}/>
            <div className = {styles.capituloInfo}>
              <h3>ballerina capitulo 2</h3>
              <span className = {styles.capituloTitle}>una nueva aventura</span>
              <p>temporada 1</p>
            </div>
          </div>
        </section>
      </div>
    )
  }

}