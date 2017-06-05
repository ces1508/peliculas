import React from 'react'
import styles from './styles.css'
export default function ImageFilm (props) {
  return (
    <div className = { styles.imageFilm }>
        <div style = {{ backgroundImage: "url(/assets/editballerina.jpg)" }} />
    </div>
  )
}
