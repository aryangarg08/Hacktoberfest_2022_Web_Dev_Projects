import React from "react";
import axios from './axios';
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";

function Row(props) {

    const [movies,setMovies] = React.useState([]);
    const [trailerURL,setTrailerURL] = React.useState("");

    React.useEffect(() => {
        
        async function fetchData() {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();

    },[props.fetchUrl]);

    // console.log(movies);

    const opts = {
        height: '390',
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };

    const handleClick = (movie) => {
        if(trailerURL) {
            setTrailerURL('')
        }
        else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get("v"));
            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row_posters">
                {movies.map((movie => (
                    <img
                        className={`row_poster ${props.isLargeRow && "row_posterLarge"}`} 
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        src = {`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt = {movie.name} 
                    />
                )))}
            </div>
            {trailerURL && <Youtube videoId={trailerURL} opts={opts} />}
        </div>
    );
}

export default Row;