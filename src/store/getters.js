export default {
  userIsAuthenticated(state) {
    console.log('userIsAuthenticated', state);
    return state.isLoggedIn;
  },
};
