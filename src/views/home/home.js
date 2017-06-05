import React from 'react'
import styles from './styles.css'
import films from '../../../dump.json'
export default function HomwView (props) {

  return (
    <div role = "app" className = {styles.app}>
      {films.map((film, index) => (
        <article className = {styles.film} key = {index}>
         <div
          className = {styles.filmCover}
          style = {{
            backgroundImage: `url(${film.cover})`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat'
          }}>
          <div className = {styles.filmTitle}>
            <span>{film.name}</span>
          </div>
        </div>
        </article>
      ))}
    </div>
  )
}