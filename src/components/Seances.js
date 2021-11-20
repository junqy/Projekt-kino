import React, {useState, useEffect} from 'react'
import Seance from './Seance'
import styled from 'styled-components'
import Select from 'react-select'
import Movie from './Movie'

const Container = styled.div`
    padding: 20px;
`
const Inputs = styled.div`
    display: inline-block;
`
const Seances = (props) => {
    const {movies, halls, seances, addSeance} = props
    
    const [seanceList, setSeanceList] = useState(seances);
    //const [movieList, setMovieList] = useState(movies)
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('')
    const [hall, setHall] = useState('')
    const [sold, setSold] = useState('')
    const [avalivable, setAvalivable] = useState('')
    const [takenSeat, setTakenSeat] = useState('')
    const [selectedMovie, setSelectedMovie] = useState(movies[0])
    const [selectedHall, setSelectedHall] = useState(halls[0])
   
    // useEffect(() => {
    //     if(movies.length !== movieList.length){
    //         setMovieList(movies)
    //     }
    // }, [movies, movieList.length])


    const onClick = () =>{
        const seance = {
            id: seanceList.length + 1,
            date: date,
            hour: hour,
            movie: selectedMovie,
            hall: selectedHall,
            sold: 0,
            avalivable: selectedHall.capacity,
            takenSeat: []
        }
        setSeanceList([...seanceList, seance])
        addSeance(seanceList)
    }

console.log(movies)

    return (
        <Container>
            {seanceList.map(item =>(
                <Seance item= {item} key={item.id}/>
            ))}

            <Inputs>
                <input type="date" name="date" onChange={e => setDate(e.target.value)}/>
                <input type="text" name="hour" placeholder="Hour of Seance" onChange={e => setHour(e.target.value)} />
                <select value={selectedMovie} onChange = {e => setSelectedMovie(movies.find(movie => (movie.id == e.target.value)))}>
                    {movies.map ((movie)=>(
                        <option key = {movie.id} value = {movie.id}>
                            {movie.title}
                        </option>
                    ))}
                </select>
                <span>Selected option: {selectedMovie.title}</span>
                <select value={selectedHall} onChange = {e => setSelectedHall(halls.find(hall => (hall.id == e.target.value)))}>
                    {halls.map ((hall)=>(
                        <option key = {hall.id} value = {hall.id}>
                            {hall.id}
                        </option>
                    ))}
                </select>
                <span>Selected option: {selectedHall.id}</span>

                <button onClick={onClick}>klik</button>
            </Inputs>
        </Container>
    )
}

export default Seances
