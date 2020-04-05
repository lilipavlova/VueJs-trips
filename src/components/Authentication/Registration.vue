<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="register">Register</label>
                    </h2>

                    <form class="user-form" @submit.prevent="submitHandler">
                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
                            <input type="text" name="username" placeholder="Username" v-model="username" @blur="$v.username.$touch">
                        </div>
                    <template v-if="$v.username.$error">
                        <div class="errorMessage" v-if="!$v.username.required">Username is required!</div>
                        <div class="errorMessage" v-if="!$v.username.minLength">Username should be more than 6 symboils!</div>
                    </template>                       

                        <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/password--v1.png">
                            <input type="password" name="password" placeholder="Password" v-model="password" @blur="$v.password.$touch">
                        </div>
                              <template v-if="$v.password.$error">
                                <div class="errorMessage" v-if="!$v.password.required">Password is required!</div>
                                <div class="errorMessage" v-if="!$v.password.minLength">Password must be at least 6 symboils!</div>
                              </template>

                        <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/password--v1.png">
                            <input type="password" name="rePassword" placeholder="Repeat password" v-model="rePassword" @blur="$v.rePassword.$touch">
                        </div>
                              <template v-if="$v.rePassword.$error">
                                <div class="errorMessage" v-if="!$v.rePassword.sameAs">Passwords don't match!</div>
                              </template>

                        <button>Register</button>
                    </form>
                </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
   mixins: [validationMixin],
   data(){
       return {
        username: '',
        password: '',
        rePassword: ''
       }
   },
   validations: {
       username: {
       required,
       minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    rePassword: {
      sameAs: sameAs('password')
    }
   },
    methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) { return; }
      console.log('Form was submitted!');
    }
}
}
</script>



<style scoped>
.errorMessage {
    color: red;
}
</style>
