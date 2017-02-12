import React from 'react';
import '../../../stylesheets/components/cards.css'
import {getButtons} from './button.props.js'

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  handleClick(){}

  likeState() {
    if (this.props.photocard.photo.like) { return "green" } else {return "blue-grey lighten-2"}
  }

  componentDidMount() {
  }

  render() {
    const buttons = getButtons({likeState: this.likeState(), likePhoto: "r", deletePhoto:"l"})
    if (['INFO', 'MAP'].includes(this.props.widget)) {
      var vertButtons = buttons.vert.map(Button.bind(this))
    }

    return (
      <div className="actions">
        <ul className="card-action-buttons horz">
          {buttons.horz.map(Button.bind(this))}
        </ul>
        <ul className="card-action-buttons vert">
          {vertButtons}
        </ul>

      </div>
    )
  }
}

var Button = function(props){
    return (
      <li key={props.key}>
        <a data-tooltip={props.tooltip} data-position={props.position} className={"tooltipped btn-floating waves-effect waves-light " + props.color}
          onClick={this.props.handleWidget}>
          <i className="material-icons" data-widget={props.widgetContent}>
            {props.icon}
          </i>
        </a>
      </li>
    )
  }
