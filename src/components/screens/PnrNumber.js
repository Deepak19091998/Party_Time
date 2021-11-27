import {Box, Button, Grid, Paper } from '@material-ui/core';
import PnrNumberStyle from '../styles/PnrNumberStyle';
import wine from '../images/Wine.png';
import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  pnrnumber : ""
}

const onSubmit = values =>{
  console.log('Form data',values)
}

const validationSchema = () => Yup.object({
  pnrnumber : Yup.string().required("Required")
  .matches(/^[A-Za-z0-9\s]+$/, "Alphabets And Number Allowed")
  .min(45,"At Least 45 Characters Required"),
  // Yup.string().required('Required').min(45,"at least 45 characters required")
})


const PnrNumber = () => {
  const classes = PnrNumberStyle();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
    <Form>
    <Grid container className={classes.mainBox}>
      <Grid item xs={12} md={6} className={classes.leftGrid}>
        <Box className={classes.imgBox}>
          <img src={wine} alt='wine' />
        </Box>
      </Grid>
      <Grid item xs={12} md={6} className={classes.rightGrid}>
        <Paper elevation={24} className={classes.paper} >
          <Field 
            type="text" 
            id='pnrnumber' 
            name="pnrnumber"
            placeholder="PNR Number" 
            style={{padding:'13px',borderRadius:'5px',fontSize:'16px'}}
          />
          <Box style={{color:'red'}}>
            <ErrorMessage name='pnrnumber' />
          </Box>
          <Box my={2} className={classes.btnBox}>
            <Link to="/ticket" style={{textDecoration:'none'}}>
              <Button type='submit' className={classes.btnText}>Submit</Button>
            </Link>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    </Form>
    </Formik>
  )
}

export default PnrNumber;
