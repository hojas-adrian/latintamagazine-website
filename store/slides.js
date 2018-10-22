const state = () => ({
  items: [],
  fetching: false,
  fetched: false
})

const mutations = {
  setItems (state, items) {
    state.items = items;
  },
  setFetching (state, value) {
    state.fetching = value;
  },
  setFetched (state, value) {
    state.fetched = value;
  }
}

const actions = {
  async fetchItems ({ commit, state }) {
    if (state.fetching || state.fetched) {
      return false;
    }

    commit('setFetching', true);

    const items = await Promise.resolve(require('~/data/slides.json'));

    commit('setItems', items);
    commit('setFetching', false);
    commit('setFetched', true);

    return items;
  }
}

const getters = {
  items (state) {
    return state.items;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
