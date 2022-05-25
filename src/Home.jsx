import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import RecipieCard from './RecipieCard';
import NavBar from './Navbar';

import View from './View';

const Home = ({ recipe, getRecipe }) => {
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <Box>
      <NavBar />
      <Container sx={{ my: 2 }}>
        <Grid
          container
          sx={{
            border: '2px solid tomato',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          {recipe.map((azhar, index) => {
            return (
              <Grid key={index} item sm={5} sx={{ m: 2 }}>
                <RecipieCard
                  key={index}
                  id={index}
                  title={azhar.recipe.label}
                  calories={azhar.recipe.calories}
                  image={azhar.recipe.image}
                  ingredients={azhar.recipe.ingredients}

                  // ingredients={azhar.recipe.ingredients.food}
                  // ingredientLines={azhar.recipe.ingredientLines}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
