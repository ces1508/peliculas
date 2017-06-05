import React from 'react'
import ImageFilm from './imageFilm'
import styles from './styles.css'
  export default function LeftSide (props)  {
    return (
      <aside className = { styles.leftSide }>
        <ImageFilm />
      </aside>
    )
  }
