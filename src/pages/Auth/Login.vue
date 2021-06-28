<template>
  <div class="row" style="height: 100vh;">
    <div class="col justify-center items-center" style="display: flex;">
      <q-card square class="shadow-24" style="width:400px;height:540px;">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">{{ title }}</h4>
        </q-card-section>
        <q-card-section>
          <q-fab
            color="primary" @click="switchTypeForm"
            icon="add"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          >
            <q-tooltip>
              ثبت نام
            </q-tooltip>
          </q-fab>
          <q-form class="q-px-sm q-pt-xl">
            <q-input
              ref="username"
              square
              clearable
              v-model="username"
              type="text"
              lazy-rules
              :rules="[this.required,this.isMobile,this.short]"
              label="شماره همراه">
              <template v-slot:prepend>
                <q-icon name="username"/>
              </template>
            </q-input>
            <q-input
              ref="username"
              v-if="register"
              square
              clearable
              v-model="username"
              lazy-rules
              :rules="[this.required,this.short]"
              type="username" label="نام کاربری">
              <template v-slot:prepend>
                <q-icon name="person"/>
              </template>
            </q-input>
            <q-input
              ref="password"
              square
              clearable
              v-model="password" :type="passwordFieldType"
              lazy-rules
              :rules="[this.required,this.short, this.isNationalCode]"
              label="کد ملی">
              <template v-slot:prepend>
                <q-icon name="lock"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="visibilityIcon" @click="switchVisibility" class="cursor-pointer"/>
              </template>
            </q-input>
            <q-input
              ref="repassword"
              v-if="register"
              square
              clearable
              v-model="repassword" :type="passwordFieldType"
              lazy-rules
              :rules="[this.required,this.short,this.diffPassword]"
              label="رمز عبور را تکرار کنید">
              <template v-slot:prepend>
                <q-icon name="lock"/>
              </template>
              <template v-slot:append>
                <q-icon
                  :name="visibilityIcon" @click="switchVisibility" class="cursor-pointer"/>
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="secondary"
            @click="submit"
            class="full-width text-white" :label="btnLabel"/>
        </q-card-actions>
        <q-card-section
          v-if="!register"
          class="text-center q-pa-sm">
          <p class="text-grey-6">رمز عبور خود را فراموش کرده اید؟</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  created () {
    console.log('process.env.VUE_APP_LUMEN_INTERNAL_API_SERVER', process.env.VUE_APP_LUMEN_INTERNAL_API_SERVER)
  },
  data: function () {
    return {
      title: 'ورود',
      username: '',
      password: '',
      repassword: '',
      register: false,
      passwordFieldType: 'password',
      btnLabel: 'ورود',
      visibility: false,
      visibilityIcon: 'visibility'
    }
  },
  methods: {
    required (val) {
      return (val && val.length > 0)
    },
    diffPassword (val) {
      const val2 = this.$refs.password.value
      return (val && (val === val2))
    },
    short (val) {
      return (val && val.length > 3)
    },
    isEmail (val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
      return (emailPattern.test(val) || 'لطفا یک ایمیل معتبر وارد کنید')
    },
    isNationalCode (val) {
      const pattern = /^[0-9]{10}$/
      return (pattern.test(val) || 'لطفا کد ملی معتبر وارد کنید')
    },
    isMobile (val) {
      const pattern = /^09[0-9]{9}$/
      return (pattern.test(val) || 'لطفا شماره همراه معتبر وارد کنید')
    },
    validate () {
      if (this.register) {
        this.$refs.username.validate()
        this.$refs.username.validate()
        this.$refs.password.validate()
        this.$refs.repassword.validate()
      } else {
        this.$refs.username.validate()
        this.$refs.password.validate()
      }
    },
    canSubmit () {
      return (!this.register && !this.$refs.username.hasError && (!this.$refs.password.hasError))
    },
    submit () {
      this.validate()

      if (this.canSubmit) {
        this.$q.notify({
          icon: 'done',
          color: 'positive',
          message: 'خوش آمدید'
        })
        this.$store.dispatch('Auth/login', { username: this.username, password: this.password })
          .then(() => {
            this.$router.push({ name: 'home' })
          })
          .catch(error => {
            this.$q.notify({
              icon: 'done',
              color: 'positive',
              message: 'مشکلی پیش آمده است'
            })
            console.log('error', error)
          })
      }
    },
    switchTypeForm () {
      this.register = !this.register
      this.title = this.register ? 'عضویت' : 'ورود'
      this.btnLabel = this.register ? 'ورود به سیستم' : 'ورود'
    },
    switchVisibility () {
      this.visibility = !this.visibility
      this.passwordFieldType = this.visibility ? 'text' : 'password'
      this.visibilityIcon = this.visibility ? 'visibility_off' : 'visibility'
    }
  }
}
</script>
