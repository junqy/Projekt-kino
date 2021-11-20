import React from 'react'
import Navbar from '../components/Navbar'
import Movies from '../components/Movies'
import Halls from '../components/Halls'
import Seances from '../components/Seances'

const Home = (props) => {
    const {movies, halls, seances, addSeance, addMovie, addHall} = props
    return (
        <div>
            <Navbar/>
            <Movies movies = {movies} addMovie = {addMovie}/>
            <Halls halls = {halls} addHall = {addHall}/>
            <Seances addSeance = {addSeance} seances = {seances} movies={movies} 
            halls={halls}/>
        </div>
    )
}

export default Home
