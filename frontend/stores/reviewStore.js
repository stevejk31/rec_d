var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _reviews = {};
var _errors = [];
var ReviewStore = new Store(AppDispatcher);

ReviewStore.all = function () {
  return Object.assign({}, _reviews);
};

ReviewStore.errors = function(){
  return _errors;
};

ReviewStore.errorsReceived = function () {
  _errors = [];
};

ReviewStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "REVIEWS_RECEIVED":
      resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
    case "REVIEW_POSTED":
      addReview(payload.review);
      ReviewStore.__emitChange();
      break;
    case "REVIEW_DELETED":
      deleteReview(payload.idx);
      ReviewStore.__emitChange();
      break;
    case "FAILED_REVIEW_POST":
      manageFailure(payload.response);
      ReviewStore.__emitChange();
      break;
    case "POPULAR_REVIEWS":
      resetReviews(payload.reviews);
      ReviewStore.__emitChange();
      break;
  }
};

var manageFailure = function (response) {
  if (response.status !== 200) {
    var tempErrors = response.responseText;
    _errors = tempErrors.substring(2, tempErrors.length-3).split("\",\"");
  }
};

var deleteReview = function(idx){
  delete _reviews[idx];
};

var addReview = function(review){
  _reviews[review.id] = review;
};

var resetReviews = function(reviews){
  _reviews = {};
  for (var i = 0; i < reviews.length; i++) {
    var review = reviews[i];
    _reviews[review.id] = review;
  }
};


module.exports = ReviewStore;
