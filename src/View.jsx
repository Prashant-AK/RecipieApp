import React from 'react';
import {
  Paper,
  Typography,
  Button,
  Grid,
  ListItem,
  List,
  Stack,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useParams } from 'react-router-dom';
export const View = ({ data }) => {
  const { id } = useParams();
  console.log('data hoon', data, id);
  return (
    <Paper elevation={24} sx={{ p: 5 }}>
      <Stack align="center">
        <Typography variant="h3">{data[id].recipe.label}</Typography>
        <img src={data[id].recipe.image} className="img" />

        <List>
          <ListItem>
            <Typography>ttttt</Typography>
          </ListItem>
          <ListItem>
            <Typography>ttttt</Typography>
          </ListItem>
          <ListItem>
            <Typography>ttttt</Typography>
          </ListItem>
        </List>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid>
            <Link to="/">
              <Button variant="contained" sx={{ mt: 2 }} size="large">
                back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>

      {/* <Accordion  sx={{ p: 5 ,mb:2}}>
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
          </Accordion> */}
    </Paper>
  );
};
export default View;
