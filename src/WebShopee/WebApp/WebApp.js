import React, { Component } from 'react';
import Banner from './Banner/Banner';
import Event from './Event/Event';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Pagination from './Pagination/Pagination';
import Rols from './Rols/Rols';
import RolsComponent from './Rols-Component/RolsComponent';

export default class WebApp extends Component {
  render() {
    return (
      <div>
          <Home/>
          <Event/>
          <Banner/>
          <Rols/>
          <RolsComponent/>
          <Pagination/>
          <Footer/>
      </div>
    )
  }
}
