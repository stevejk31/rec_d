var AppDispatcher = require('../dispatcher.js');

var ReviewActions = {
  receiveReviews: function(reviews){
    AppDispatcher.dispatch({
      actionType: "REVIEWS_RECEIVED",
      reviews: reviews
    });
  },

  postReview: function(review){
    AppDispatcher.dispatch({
      actionType: "REVIEW_POSTED",
      review: review
    });
  },

  popularReviews: function(reviews) {
    AppDispatcher.dispatch({
      actionType: "POPULAR_REVIEWS",
      reviews: reviews
    });
  },

  deleteReview: function(idx) {
    AppDispatcher.dispatch({
      actionType: "REVIEW_DELETED",
      idx: idx
    });
  },

  failedPost: function(response) {
    AppDispatcher.dispatch({
      actionType: "FAILED_REVIEW_POST",
      response: response
    });
  }
};
module.exports = ReviewActions;
