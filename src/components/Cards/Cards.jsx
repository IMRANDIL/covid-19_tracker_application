import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './Cards.module.css';

import CountUp from 'react-countup';



const Cards = ({ data }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>REAL DATE</Typography>
                        <Typography variant='body2'>Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATE</Typography>
                        <Typography variant='body2'>Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>REAL DATA</Typography>
                        <Typography color='textSecondary'>REAL DATE</Typography>
                        <Typography variant='body2'>Number of Deaths of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards