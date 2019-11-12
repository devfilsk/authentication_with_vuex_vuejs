import * as types from './mutations-types'
import api from '../../../../core/services/api'

export const ActionDoLogin = ({ dispatch }, payload) => {
  return api.post('/login', payload).then(res => {
    dispatch('ActionSetUser', res.data.user)
    console.log(res)
    dispatch('ActionSetToken', res.data.user)
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}

export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}
