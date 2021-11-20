import React, {useState, useEffect} from 'react'
import Hall from './Hall'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
`

const Halls = (props) => {
    const {halls, addHall} = props

    const [hallList, setHallList] = useState(halls);
    const [capacity, setCapacity] = useState('');

    const onClick = () =>{
        const hall = {
            id: hallList.length + 1,
            capacity: capacity
        }
        setHallList([...hallList, hall])
        addHall(hallList)
    }
    
    return (
        <Container>
            {hallList.map(item =>(
                <Hall item = {item} key={item.id}/>
            ))}
                <input type="text" name="capacity" placeholder="Hall Capacity" onChange={e => setCapacity(e.target.value)} />
                <button onClick={onClick}>klik</button>
        </Container>
    )
}

export default Halls
