import React from 'react';
import styles from './App.module.css';

import { Cards, Chart, CountryPicker } from './components';


import TitleImage from './Images/cimage.png'

import { fetchData } from './Api';



class App extends React.Component {

  state = {
    data: {},
    country: ''

  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData })

  }

  handleCountryChange = async (country) => {

    //fetch the data....
    const fetchedData = await fetchData(country);
    // console.log(fetchedData);

    //set the states..
    this.setState({ data: fetchedData, country: country })
  }


  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container} >

        <img className={styles.image} src={TitleImage} alt='TitleImage' />

        <Cards data={data} />

        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
