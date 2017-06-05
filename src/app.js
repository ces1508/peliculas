import React, {
  Component
} from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/routes'
export default class App extends Component {
  constructor () {
    super()
  }

  render () {
    return <Routes />
  }
}
ReactDOM.render(
  <App />,
  document.getElementById('app')
)