import React from 'react'
import styles from './styles.css'
import LeftSide from './leftside'
import RightSide from './rightSide'
import Seasons from './seasons'
export default function InfoFilm (props) {
  console.log('info film')
  return (
    <div className = { styles.content }>
      <div className = { styles.main } role = "main">
        <LeftSide />
        <RightSide />
      </div>
      <div className= { styles.seasons }>
        <Seasons film = {1} />
      </div>
    </div>
  )
}
