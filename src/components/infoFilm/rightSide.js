import React from 'react'
import styles from './styles.css'
export default function RightSide (props) {
  return(
    <div className= { styles.infoFilm }>
      <div className="title">
        <h1>Ballerina</h1>
      </div>
      <div className = {styles.directorFilm}>
        <p>Director: Christian Segura</p>
      </div>
      <div className = {styles.directorFilm}>
        <p>Categorías: Baile, animadas, para toda la familia</p>
      </div>
      <div className = {styles.directorFilm}>
        <p>Año: 2017</p>
      </div>
      <div className= {styles.descriptionFilm}>
        <p>descripción: </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius repudiandae fugiat cumque sint, ab quis ipsum molestias aspernatur laborum. Natus quia dolore laborum praesentium quas minima numquam voluptatum sit!
        </p>
      </div>
    </div>
  )
}
