import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';
import { ExpenseTrackerContext } from '../../context/context';


const Main = () => {
    const classes=useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
      <CardHeader align="center" title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
      <Typography align="center" variant="h6">Total Balance ${balance}</Typography>
      <Typography variant="subtitle1" style={{ lineHeight: '1.5em' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
           <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    );
};

export default Main
