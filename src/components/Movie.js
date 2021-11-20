import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
`

const Movie = ({item}) => {
    return (
        <Container>
            {item.title} {item.duration} minutes
        </Container>
    )
}

export default Movie
