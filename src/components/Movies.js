import { movies } from '../data'
import React from 'react'
import Movie from './Movie'

import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
`

const Movies = (props) => {
    //const {movies} = props;
    return (
        <Container>
            {movies.map(item =>(
                <Movie item= {item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Movies
