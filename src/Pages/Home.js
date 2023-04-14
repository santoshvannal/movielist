import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Carousel } from "react-responsive-carousel";
import { AppContext, useGlobalContext } from "../context";
import Search from "../Search";
import Movies from "../Movies";
import Fevorite from "../Fevorite";



const Home = () => {
  return (
    <>

    <Fevorite />
    <Movies />
    <Search />
  </>
  );
};
 
export default Home;
