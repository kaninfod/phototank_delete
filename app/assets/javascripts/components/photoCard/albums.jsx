import React from 'react';


export default class Albums extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      PhotoCard: this.props.PhotoCard
    }
  }

  handleChange(e) {
    this.setState({albumId: e.target.value});
  }

  handleClick() {
    if (this.state.albumId) {
      this.props.widgetHandlers.ALBUMS(this.state.albumId)
    }
  }

  render() {
    var albums = this.props.photocard.albums.map(function(a) {
      return album(a, this.handleChange)}.bind(this)
    )
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Add photo to album
          <i className="right material-icons" onClick={this.props.widgetHandlers.HIDE} >close</i>
        </div>
        <div className="photo-action-widget content">
          <div className="photo-action-state-album">
            <ul onChange={this.handleChange}>
              {albums}
            </ul>
            <a className='waves-effect waves-teal btn-flat right' onClick={this.handleClick}>Add photo</a>
          </div>
        </div>
      </div>
    )
  }
}



var album = function(album, handleChange){

  return (
    <li key={album.id}>
      <input id={album.id} value={album.id} name="album" type="radio"></input>
      <label htmlFor={album.id}>{album.name}</label>
    </li>
  )
}
