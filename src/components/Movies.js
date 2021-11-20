import React, {useState, useEffect} from 'react'
import Movie from './Movie'
import styled from 'styled-components'


const Container = styled.div`
    padding: 20px;
`

const Movies = (props) => {
    const {movies, addMovie} = props
    
    const [movieList, setMovieList] = useState(movies);
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    const onClick = () => {
        const movie = {
            id: movieList.length + 1,
            title: title,
            duration: duration
        }
        setMovieList([...movieList, movie])
        addMovie(movieList)
    }

    return (
        <Container>
            {movieList.map(item =>(
                <Movie item= {item} key={item.id}/>
            ))}
                <input type="text" name="title" placeholder="Movie Title" onChange={e => setTitle(e.target.value)}/>
                <input type="text" name="duration" placeholder="Movie Duration" onChange={e => setDuration(e.target.value)} />
                <button onClick={onClick}>klik</button>
        </Container>
    )
}

export default Movies
