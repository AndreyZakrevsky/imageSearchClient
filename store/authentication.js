export const state = () => ({
  loggedIn:false,
  user : false,
  toggle:false,
});

export const mutations = {
  LOGOUT(state) {
    state.loggedIn = false;
    state.user = false;
  }
};

export const actions = {
  async logout({commit}) {
    commit("LOGOUT");
  }
};

