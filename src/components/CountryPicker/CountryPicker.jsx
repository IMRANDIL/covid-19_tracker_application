import React, { useState, useEffect } from 'react';


import { NativeSelect, FormControl } from '@mui/material';


import styles from './CountryPicker.module.css';


import { Countries } from '../../Api';






const CountryPicker = ({ handleCountryChange }) => {

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



    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {fetchCountries.map((country, i) => <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker