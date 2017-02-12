import 'jquery'
import 'materialize-css'

import React from 'react';

import Grid from './photogrid/grid.jsx'
import PhotoCard from './photoCard/photoCard.jsx'


export default class Root extends React.Component {

  render() {
    return (
      <div>
        <Grid selectedPhoto="642"/>
        <PhotoCard photoId="565"/>
      </div>
    )
  }
}
