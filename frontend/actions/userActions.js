var AppDispatcher = require('../dispatcher.js');

var UserActions = {
  currentUser: function(user){
    AppDispatcher.dispatch({
      actionType: "USER_RECIEVED",
      user: user
    });
  },

  signOutCurrentUser: function(user){
    AppDispatcher.dispatch({
      actionType: "SIGN_OUT",
      user: user
    });
  }

};
module.exports = UserActions;
