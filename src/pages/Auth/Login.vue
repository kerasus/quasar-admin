<template>
  <div id="q-app ">
    <div class="row justify-center items-center fullscreen q-px-lg">
      <div class="col-5" >
        <q-card v-if="!userLogin" class="my-card q-mt-auto shadow-6">
          <q-card-section class="row bg-blue-8 text-white justify-between">
            <div class="row justify-center items-center text-h6">
              <p class="q-ml-md q-mb-none">ورود</p>
            </div>
            <q-avatar>
              <img src="img/alaa-logo.png" alt="logo">
            </q-avatar>
          </q-card-section>
          <q-linear-progress v-if="loadingList" color="warning" class="q-mt-sm" />
          <q-separator></q-separator>
          <div class="q-pa-lg">
            <q-input
              bottom-slots
              color="blue-8"
              ref="userName"
              name="userName"
              v-model="username"
              label="شماره همراه"
              @keydown="getEnter"
            >
              <template v-slot:before>
                <q-icon name="person"></q-icon>
              </template>
            </q-input>
            <q-input
              color="blue-8"
              bottom-slots
              ref="pass"
              name="pass"
              v-model="password"
              label="رمز"
              @keydown="getEnter"
              type="password">
              <template v-slot:before>
                <q-icon name="lock"></q-icon>
              </template>
            </q-input>
            <q-card-actions align="left">
              <q-btn  style="width: 80px" color="blue-8" label="ورود" @click="login"/>
            </q-card-actions>
          </div>
        </q-card>
      </div>
    </div>
  </div>

</template>

<script>
import { mixinAuth } from 'src/mixin/Mixins'
export default {
  name: 'Auth',
  mixins: [mixinAuth],
  data: () => ({
    userLogin: false,
    loadingList: false,
    username: null,
    password: null
  }),
  created () {
    if (this.getToken()) {
      this.redirectTo()
    }
  },
  methods: {
    getToken () {
      return this.$store.getters['Auth/accessToken']
    },

    getEnter (e) {
      const actions = {
        pass: () => this.login(),
        userName: () => this.$refs.pass.focus()
      }
      if (e.keyCode === 13) actions[e.originalTarget.name].call()
    },
    redirectTo () {
      this.$router.push({ name: 'Admin.User.Index' })
    },

    login () {
      this.loadingList = true
      this.$store.dispatch('Auth/login', {
        mobile: this.username,
        password: this.password
      })
        .then(() => {
          this.loadingList = false
          this.$axios.defaults.headers.common.Authorization = 'Bearer ' + this.$store.getters['Auth/accessToken']
          this.redirectTo()
        })
        .catch(err => {
          console.log('in auth :', err)
        })
    }
  }
}
</script>
