import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const API_KEY = `?api_key=c6d9acd601be9855cb40393602a7c70c`;
const API_URl = `https://api.themoviedb.org/3/movie/`


const Movie = () => {
  const { id } = useParams();
  // const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data);
        console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getMovies(`${API_URl}${id}${API_KEY}`);
      console.log(`${API_URl}`+`${id}`+`${API_KEY}`)
      }, 800);
    return () => clearTimeout(timeOut);
  }, [id]);
  return (
    
        <div>
        <section>
            <div>
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>
              <h1>{movie.original_title}</h1>
              <p>{movie.overview}</p>
            </div>
            <div>
            </div>
            
        </section>
        </div>
    
  );
};


export default Movie;
