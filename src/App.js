import './App.css';
import {Router, Routes, Route} from 'react-router-dom';
import Header from './header/Header';
import Home from './Pages/Home';
import Error from './Error';
import Movie from './Movie';
import Fevorite from './Fevorite';
import Search from './Search';
import Pagination from './Pagination';
import Searchingpagapp from './Searchingpagapp';

function App() {
  return (
    <div className="App">
    <div>
    
    </div>
    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>    
          <Route path="movie/Feverite" element={<Fevorite />}></Route>    
        </Routes>
    </div>
  );
}

export default App;
