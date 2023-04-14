import React, { useContext, useEffect, useState } from "react";
const API_KEY = `?api_key=c6d9acd601be9855cb40393602a7c70c`;
const API_URL_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=c6d9acd601be9855cb40393602a7c70c&query=`;
export const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=c6d9acd601be9855cb40393602a7c70c`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: " " });
  const [query, setQuery] = useState();

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.success != false) {
        console.log(data.results);

        setMovie(data.results);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if(query != undefined){
      const timeOut = setTimeout(() => {
        getMovies(`${API_URL_SEARCH}` + `${query}`);
      }, 2000);
      return () => clearTimeout(timeOut);
    }
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
