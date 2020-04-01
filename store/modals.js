export const state = () => ({
  login: null,
  register: null,
  forget: null,
  menu: false,
  change: false,
  headerModals: false
});

export const mutations = {
  SHOW_MODEL(state, model) {
    state[model] = true;

  },

  CLEAR_MODALS(state) {
    state.login = false;
    state.register = false;
    state.menu = false;
    state.change = false;
  },

};

export const actions = {
  showModal({commit}, model) {
    commit("CLEAR_MODALS");
    commit("SHOW_MODEL", model);
  },

  hideModal({commit}) {
    commit("CLEAR_MODALS");
  },

  headerModals({commit}) {
    commit("HIDE_HEADER_MODALS");
  },

};

export const getters = {
  login: (state) => state.login,
  register: (state) => state.register,
  menu: (state) => state.menu,
  showSideBar: (state) => state.showSideBar,
  change: (state) => state.change,
  headerModals: (state) => state.headerModals
};

