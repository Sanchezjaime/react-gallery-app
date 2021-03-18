import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';
//App Components.
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';
import NotFound from './Components/NotFound';
//My API key stored in config file.
import apiKey from './config.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      cars: [],
      plane: [],
      sushi: [],
      search: []
    };
  }

  componentDidMount() {

    this.performSearch();

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=ferrari&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          cars: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=planes&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          planes: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=sushi&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          sushi: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  performSearch = (query = 'puppies') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        this.setState({
          search: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (

      <BrowserRouter>
        <div className="container">
        <>
        <SearchForm onSearch={this.performSearch}/>
        </>
        <Switch>
          <Route exact path='/' render={ () => < PhotoContainer data={this.state.search}  /> }/>
          <Route path='/cars' render={ () => < PhotoContainer data={this.state.cars} /> }/>
          <Route path='/planes' render={ () => < PhotoContainer data={this.state.planes} /> }/>
          <Route path='/sushi' render={ () => < PhotoContainer data={this.state.sushi} /> }/>
          <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
