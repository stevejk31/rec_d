var StoreActions = require('../actions/storeActions.js');
var ReviewActions = require('../actions/reviewActions.js');
var UserActions = require('../actions/userActions.js');
var MapStore = require('../stores/mapStore.js');

var ApiUtils = {
  // - - - - - - - - - STORE - - - - - - - - -
  fetchStores: function () {
    var params = MapStore.params();
    $.ajax({
      url: "api/stores",
      type: "GET",
      data: {params: params},
      success: function(stores) {
        StoreActions.receiveAllStores(stores);
      }
    });
  },

  fetchStore: function (id) {
    $.ajax({
      url: "api/stores/" + id,
      type: "GET",
      success: function(store) {
        StoreActions.receiveStore(store);
      }
    });
  },
// - - - - - - - - - REVIEWS - - - - - - - - -
  fetchReviews: function (id) {
    $.ajax({
      url: "api/reviews/" + id,
      type: "GET",
      success: function(reviews) {
        ReviewActions.popularReviews(reviews);
      }
    });
  },
  popularReviews: function () {
    $.ajax({
      url: "api/reviews/",
      type: "GET",
      success: function(reviews) {
        ReviewActions.popularReviews(reviews);
      }
    });
  },
  createReview: function (review) {
    $.ajax({
      url: "api/reviews",
      type: "POST",
      data: {review: review},
      success: function(review) {
        ReviewActions.postReview(review);
      },
      error: function(response){
        ReviewActions.failedPost(response);
      }
    });
  },

  deleteReview: function (id) {
    $.ajax({
      url: "api/reviews/" + id,
      type: "DELETE",
      success: function(id) {
        ReviewActions.deleteReview(id);
      }
    });
  },
// - - - - - - - - - User - - - - - - - - -
  fetchCurrentUser: function () {
    $.ajax({
      url: "api/current" ,
      type: "GET",
      success: function(user) {
        UserActions.currentUser(user);
      }
    });
  },

  signOutCurrentUser: function (review) {
    $.ajax({
      url: "api/current",
      type: "DELETE",
      success: function(user) {
        UserActions.signOutCurrentUser(user);
      }
    });
  }

};

module.exports = ApiUtils;
