import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
`

const Hall = ({item}) => {
    return (
        <Container>
            {item.id}. {item.capacity}
        </Container>
    )
}

export default Hall
