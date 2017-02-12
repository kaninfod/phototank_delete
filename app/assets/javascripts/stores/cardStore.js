var AppDispatcher = require('../dispatcher/dispatcher.js');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/constants.js');
var assign = require('object-assign');


var CHANGE_EVENT = 'change';
var _card = {
  widget: 'INFO',
  data: {},
  hidden: false

}

var CardStore = assign({}, EventEmitter.prototype, {

  getCard: function() {
    return _card
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  }

});

AppDispatcher.register(function(payload){

  switch (payload.source) {
    case AppConstants.SELECT_PHOTO:
      loadPhoto(payload.action.content.photoId)
      break;
    case AppConstants.LOAD_PHOTO:
      loadPhoto(payload.action.content.photoId)
      break;
    case AppConstants.SET_WIDGET:
      _card.widget = payload.action.content.widget
      CardStore.emitChange()
      break;
    case AppConstants.LIKE_PHOTO:
      likePhoto(payload.action.content)
      break;
    case AppConstants.DELETE_CARD_PHOTO:
      CardStore.emitChange()
      break;
    case AppConstants.ROTATE_PHOTO:
      rotatePhoto(payload.action.content)
      break;
    case AppConstants.ADD_TO_ALBUM:
      addToAlbum(payload.action.content)
      break;
    case AppConstants.ADD_COMMENT:
      addComment(payload.action.content)
      break;

    default:
  }

});


var loadPhoto = function(photoId) {
  var url = "/photos/".concat(photoId, ".json")
  $.getJSON(url, function(data) {
    _card.data = data
    _card.hidden = false
    CardStore.emitChange()
  }.bind(this))
}

var likePhoto = function(payload) {
  var url = '/photos/'.concat(payload.photoId,'/like')
  $.getJSON(url, function(data) {
    _card.data.photo.like = data.liked_by_current_user
    CardStore.emitChange()
  })
}

var addToAlbum = function(payload) {
  var url = "/albums/".concat(payload.albumId, "/photo/", payload.photoId, "/add")
  $.getJSON(url, function(data) {
    CardStore.emitChange()
  })
}

var rotatePhoto = function(payload) {
  var url = "/photos/".concat(payload.photoId, "/rotate/", payload.rotateAngle)
  $.getJSON(url, function(data) {
    CardStore.emitChange()
  })
}

var addComment = function(payload) {
  var url = '/photos/'.concat(payload.photoId, '/add_comment')
  $.getJSON(url, {comment: payload.comment}, function(comments) {
    _card.data.photo.comments = comments.comments
    CardStore.emitChange()
  })


}



module.exports = CardStore;
