const state = () => ({
  showMenu: false,
})

const mutations = {
  setShowMenu (state, value) {
    state.showMenu = value;
  },
}

export default {
  state,
  mutations
}
