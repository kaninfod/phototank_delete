import React from 'react';

export default class Rotate extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.rotations= [90, 180, 270]
    this.state = {
    }
  }

  handleChange(e) {
    this.setState({rotation: e.target.value});
  }

  handleClick() {
    if (this.state.rotation) {
      this.props.widgetHandlers.ROTATE(this.state.rotation)
    }
  }

  render() {
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Rotate photo
        </div>
        <div className="photo-action-widget content">
          <div className="photo-action-state-rotate">
            <ul className="rotate" onChange={this.handleChange}>
              {this.rotations.map(rotation.bind(this))}
            </ul>
            <a className="waves-effect waves-teal btn-flat right" onClick={this.handleClick}>Rotate Photo</a>

          </div>
        </div>
      </div>
    )
  }
}

var rotation = function(rotation){
  return (
    <li key={rotation}>
      <input id={rotation} value={rotation} name="rotate" type="radio" onChange={this.handleChange}/>
      <label htmlFor={rotation}>{rotation  + String.fromCharCode(176)}</label>
    </li>
  )
}
