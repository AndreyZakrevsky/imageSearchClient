export const state = () => ({
  foundedImages: null,
  likedImages: null,
  searchWordHistory: null
});

export const mutations = {
  SET_LOADED_IMAGES(state, data) {
    state.foundedImages = data;
  },

  SET_LIKED_IMAGES(state, data) {
    state.likedImages = data;
  },

  SET_SEARCH_WORD_HISTORY_LIST(state, data) {
    state.searchWordHistory = data;
  }
};

export const actions = {
  async getImagesByKeyword({commit}, key) {
    const url = '/api/images';
    //liked-images
    try {
      let {data} = await this.$axios.get(url, {params: {keyword: key}});
      commit('SET_LOADED_IMAGES', data);
    } catch (e) {
      commit('SET_LOADED_IMAGES', null);
    }
  },

  async getLikedImages({commit}, key) {
    const url = '/api/liked-images';
    try {
      let {data} = await this.$axios.post(url, {date: key});
      commit('SET_LIKED_IMAGES', data);
    } catch (e) {
      commit('SET_LIKED_IMAGES', null);
    }
  },

  async getSearchWordHistory({commit}, key) {
    const url = '/api/search-word-history';
    try {
      let {data} = await this.$axios.post(url, {date: key});
      commit('SET_SEARCH_WORD_HISTORY_LIST', data);
    } catch (e) {
      commit('SET_SEARCH_WORD_HISTORY_LIST', null);
    }
  }
};

export const getters = {
  list: (state) => state.foundedImages,
  likedlist: (state) => state.likedImages,
  searchWordHistoryList: (state) => state.searchWordHistory,
};






