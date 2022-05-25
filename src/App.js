import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import NavBar from './Navbar';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import View from './View';
import axios from 'axios';

const APP_ID = 'dc34792b';
const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21';

function App() {
  const [recipe, setRecipe] = useState([]);
  const [querry, setQuerry] = useState('momo');

  const getRecipeFunc = () => {
    axios
      .get(
        `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`
      )
      .then(({ data }) => {
        console.log(data.hits);
        setRecipe(data.hits);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home getRecipe={getRecipeFunc} recipe={recipe} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/view/:id" element={<View data={recipe} />} />
        </Routes>
        {/* <Link to="View"></Link> */}
      </BrowserRouter>
    </>
  );
}

export default App;
