import React, { useState, useEffect } from 'react';


import { NativeSelect, FormControl } from '@mui/material';


import styles from './CountryPicker.module.css';


import { Countries } from '../../Api';






const CountryPicker = () => {






    useEffect(() => {
        Countries()
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker