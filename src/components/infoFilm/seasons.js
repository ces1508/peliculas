import React, {Component} from 'react'
import styles from './styles.css'
import axios from 'axios'
export default class Seasons extends Component {
  constructor (props) {
    super(props)
    this.state = {seasonId: 1}
    this.handleChange = this.handleChange.bind(this)
    this.getEpisodes = this.getEpisodes.bind(this)
  }

  async getEpisodes (id = 1) {
    let url = `http://jsonplaceholder.typicode.com/users/${id}/posts`
    let episodes = await axios.get(url)
  }

  handleChange (event) {
    this.setState({ seasonId: event.target.value })
    this.getEpisodes(event.target.value)
  }

  componentDidMount () {
    this.getEpisodes()
  }
  render() {
    return (
      <div className = { styles.seasons }>
        <div className = { styles.containerSeasons }>
          <select name="temporda" onChange = {this.handleChange} className = { styles.selectSeasons }>
            <option value="1"> Temporada 1</option>
            <option value="2"> Temporada 2</option>
            <option value="3"> Temporada 3</option>
            <option value="4"> Temporada 4</option>
            <option value="5"> Temporada 5</option>
            <option value="6"> Temporada 6</option>
            <option value="7"> Temporada 7</option>
            <option value="8"> Temporada 8</option>
          </select>
        </div>
      </div>
    )
  }
}
