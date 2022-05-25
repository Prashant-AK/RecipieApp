import React from 'react';
import {
  Paper,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';

const RecipieCard = ({ id, title, image, calories, ingredients }) => {
  return (
    <Paper elevation={24} sx={{ p: 5 }}>
      <Typography variant="h3">{title}</Typography>

      <img src={image} className="img" />

      {/* <div>
      
      <Accordion  sx={{ p: 5 ,mb:2}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Ingridient</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div> */}
      {/* {ingredients?.map((ingredient) => (
          <li>{ingredient.text}</li> */}
      <Typography variant="h4">{calories}</Typography>

      {/* <Grid>
        <Stack>
          {ingredients.map((ingredient, index) => {
            return <Typography> {ingredient.text}</Typography>;
          })}
        </Stack>
      </Grid> */}
      <List>
        {ingredients.map((ingredient, index) => {
          return (
            <ListItem key={index}>
              <Typography> {ingredient.text}</Typography>
            </ListItem>
          );
        })}
      </List>

      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid>
          {' '}
          <Button variant="contained" sx={{ mt: 2 }} size="large">
            <Link to={`/view/${id}`}> View</Link>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RecipieCard;
