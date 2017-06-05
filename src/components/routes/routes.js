import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'


import HomeView from '@/views/home'
import FilmView from '@/views/pelicula'

export default function Routes () {
  return(
    <div>
      <Router>
        <div>
          <Route exact path = "/" component = { HomeView } />
          <Route exact path = "/:id" component = { FilmView } />
        </div>
      </Router>
    </div>
  )
}