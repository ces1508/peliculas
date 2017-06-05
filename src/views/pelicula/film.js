import React from 'react'
import styles from './styles.css'
import { Link } from 'react-router-dom'
import InfoFilm from '@/components/infoFilm'
export default function FilmView (props) {

  return (
    <div className = { styles.content }>
      <InfoFilm />
    </div>
  )
}
