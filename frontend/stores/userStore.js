var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher.js');

var _user = {};

var UserStore = new Store(AppDispatcher);

UserStore.currentUser = function() {
  return  Object.assign({}, _user);
};

UserStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "USER_RECIEVED":
      recieveUser(payload.user);
      UserStore.__emitChange();
      break;
    case "SIGN_OUT":
      recieveUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

var recieveUser = function(user){
  _user = user
};


module.exports = UserStore;
