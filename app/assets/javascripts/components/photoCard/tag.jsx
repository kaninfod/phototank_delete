import React from 'react';
import PhotoTagger from '../tagger/photoTagger.jsx'

export default class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="photo-action-widget">
        <div className="photo-action-widget header">
          Add tag to photo
        </div>
        <div className="photo-action-widget content">
          <div className="photo-action-state-tag">
            <PhotoTagger photoId={this.props.photocard.photo.id} tags={this.props.photocard.photo.tags}/>
          </div>
        </div>
      </div>
    )
  }
}
