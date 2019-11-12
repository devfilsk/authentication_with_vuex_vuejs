import * as actions from './actions'
import state from './state'
import mutations from './mutations'

export default {
  state,
  actions,
  mutations,
  namespaced: true // garante que o modulo auth terá um prefixo chamado auth
}
