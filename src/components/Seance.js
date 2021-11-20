import React from 'react'

import styled from 'styled-components'

const Container = styled.div`
`

const Seance = ({item}) => {
    return (
        <Container>
            {item.date} {item.hour} {item.movie.title} {item.hall.id} {item.sold} {item.avalivable} {item.takenSeat}
        </Container>
    )
}

export default Seance
