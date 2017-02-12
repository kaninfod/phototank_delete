import React from 'react';

var infoItemProps = function(props){
  return (
    [{key: 1, label: 'ID',      info: props.photo.id},
    {key: 2, label: 'Date',     info: props.photo.date_taken},
    {key: 3, label: 'Country',  info: props.photo.location.country},
    {key: 4, label: 'Model',    info: props.photo.model},
    {key: 5, label: 'Make',     info: props.photo.make}]
  )
}

var infoItem = function(props){
  return (
    <li key={props.key}>
      <label>{props.label}</label>
      <div className="content">{props.info}</div>
    </li>
  )
}

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const info = infoItemProps(this.props.photocard)
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Photo Information
        </div>
        <div className="photo-action-widget content">
          <ul className="photo-action-state-info">
            {info.map(infoItem.bind(this))}
          </ul>
        </div>
      </div>
    )
  }
}
