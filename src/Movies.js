import React,{useEffect, useState} from 'react';
import { useGlobalContext } from "./context.js";
import { NavLink, useParams } from 'react-router-dom';

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <>
    <section>

    <div class="  solid white box-content h-320 w-50 p-50">
      {movie.map((curMovie) => {
        const {id, original_title, poster_path, release_date} = curMovie;
        return <NavLink to = {`movie/${id}`} key={id}>
          <div class="w-[50px] sm:w-[300px] md:w-[700px] lg:w-[1080px] rounded-lg inline-block cursor-pointer relativep-2  border-solid border-2 border-sky-500 ... m-5 p-1">
            <div class="" >
              <img  class="px-0 py-1 " src={`https://image.tmdb.org/t/p/original/${poster_path}`} />
            
            </div>
            <div>
            <h1 class="p-2" >{original_title}</h1>
             
            <h3 class="mt-2 text-sm text-gray-300 p-2"> {release_date}</h3>
            </div>
            Pagination
            <button onClick={this.getPrevPage}>Prev</button>
            <button onClick={this.getNextPage}>Next</button>
          </div>
          
        </NavLink>
      })}
      </div>
      </section>
  </>
  );
};

export default Movies