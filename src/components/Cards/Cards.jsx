import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import styles from './Cards.module.css';

import CountUp from 'react-countup';

import cx from 'classnames'



const Cards = ({ data }) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    if (!confirmed) {
        return 'Loading...'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3}

                justifyContent="center"
                alignItems="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
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
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Active Cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={recovered.value || 347448713}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of recoveries from Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                            />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'>Number of Deaths of Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards