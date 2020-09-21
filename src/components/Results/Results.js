import React, { useEffect, useState } from 'react'
import VideoCard from '../VideoCard/VideoCard'
import axios from '../../utils/axios';
import './Results.css'
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [selectedOption]);

    return (
        <div className='results'>
            <FlipMove>
                {movies.map((movie) => (
                    <VideoCard key={movie.key} movie={movie} />
                ))}
            </FlipMove>
        </div>
    )
}

export default Results
