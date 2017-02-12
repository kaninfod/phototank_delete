import React from 'react';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    const mapurl = this.props.photocard.photo.location.map_url
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Photo location information
        </div>
        <div className="photo-action-widget content">
          <img src={mapurl}></img>
        </div>
      </div>
    )
  }
}
