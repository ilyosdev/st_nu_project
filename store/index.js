export const state = () => ({
  searchModal: false,
  videoModal: false,
  mobileMenu: false,
})
export const mutations = {
  TOGGLE_SEARCH_MODAL: (state) => {
    state.searchModal = !state.searchModal
  },
  TOGGLE_VIDEO_MODAL: (state) => {
    state.videoModal = !state.videoModal
  },
  SWITCH_STATE: (state) => {
    state.searchModal = false
    state.videoModal = false
  },
  TOGGLE_MOBILE: (state) => {
    state.mobileMenu = !state.mobileMenu
  },
}
export const actions = {}
export const getters = {}
