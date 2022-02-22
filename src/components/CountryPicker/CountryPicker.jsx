import React, { useState, useEffect } from 'react';


import { NativeSelect, FormControl } from '@mui/material';


import styles from './CountryPicker.module.css';


import { Countries } from '../../Api';






const CountryPicker = () => {

    const [fetchCountries, setFetchCountries] = useState([]);




    useEffect(() => {

        const fetchCountries = async () => {
            try {
                setFetchCountries(await Countries());
            } catch (error) {
                console.log(error);
            }
        }

        fetchCountries()


    }, [setFetchCountries]);

    console.log(fetchCountries);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect>
                <option value='global'>Global</option>
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker