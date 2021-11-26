import {Box, Button, Grid, Paper, TextField } from '@material-ui/core';
import PnrNumberStyle from '../styles/PnrNumberStyle';
import wine from '../images/Wine.png';
import React from 'react';
import { Link } from 'react-router-dom';

const PnrNumber = () => {
  const classes = PnrNumberStyle();
  return (
    <Grid container className={classes.mainBox}>
      <Grid item xs={12} md={6} className={classes.leftGrid}>
        <Box className={classes.imgBox}>
          <img src={wine} alt='wine' />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={classes.rightGrid}>
        <Paper elevation={24} className={classes.paper}>
          <TextField 
            required
            id="outlined-required"
            label="PNR Number" 
            variant="outlined" 
          />
          <Box my={2} className={classes.btnBox}>
            <Link to="/ticket" style={{textDecoration:'none'}}>
              <Button className={classes.btnText}>Submit</Button>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PnrNumber;
