import React from 'react';

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
    }
  }

  handleKeyDown(e) {
    if (e.which == 13 && e.target.value.length > 0) {
      this.props.widgetHandlers.COMMENTS(e.target.value)
    }
  }

  render() {
    const comments = this.props.photocard.photo.comments
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Add comments to Photo
        </div>
        <div className="photo-action-widget content">
          <div className="photo-action-state-comment">
            <div className="comment">
              <div className="comment-container">
                <div className="card">
                  <p className="comment-date"></p>
                  <input onKeyDown={this.handleKeyDown}/>
                </div>
                <img className="circle responsive-img" src={this.props.photocard.current_user.avatar}/>
              </div>
            </div>

            {comments.slice().reverse().map(comment.bind(this))}

          </div>
        </div>
      </div>
    )
  }
}

var comment = function(comment){
  return (
    <div className="comment" key={comment.id}>
      <div className="comment-container">
        <div className="card">
          <p className="comment-date">{comment.created_at}</p>
          <p>{comment.comment}</p>
        </div>
        <img className="circle responsive-img" src={comment.user_avatar}/>
      </div>
    </div>
  )
}
