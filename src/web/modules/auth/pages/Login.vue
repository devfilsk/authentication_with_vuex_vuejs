<template>
  <div class="content">
    <form @submit.prevent="submit()" class="login-content">
      <h1 class="card-header">Login</h1>
      <input
        required
        type="text"
        class="email"
        placeholder="E-mail"
        v-model="form.email">
      <input
        required
        type="password"
        class="password"
        placeholder="Senha"
        v-model="form.password">
      <button type="submit" v-on:click="submit()">Entrar</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import api from '../../../../core/services/api'

export default {
  // name:"Login" ,
  data: () => ({
    form: {
      email: 'admin@goscore.com.br',
      password: ''
    },
    response: {}
  }),
  // created () {
  //   this.ActionSetUser({ name: 'Filipe', email: 'filipe@gmail.com' })
  // },
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      // this.ActionSetUser(this.form)
      await this.ActionDoLogin(this.form)
      // const response = await api.post('login', this.form)
      // eslint-disable-next-line
      // localStorage.setItem('TOKEN_USER', )
      // console.log(response)

      // this.response = response;
    }
  }

}
</script>

<style lang="scss">
    .content{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: center;
    }
    .login-content{
        width: 350px;
        height: 250px;
        display: flex;
        color: #FFF;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, .1);
        input {
            border: none;
            border-radius: 4px;
            padding: 10px 10px;
            margin-bottom: 15px;
        }
        button {
            border: none;
            padding: 10px;
            border-radius: 4px;
            cursor: pointer;
        }
    }

</style>
