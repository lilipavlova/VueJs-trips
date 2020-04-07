<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="registration">Registration</label>
                    </h2>

                    <form class="user-form" @submit.prevent="onRegister">

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="text" name="email" placeholder="Your email..." v-model="email" @blur="$v.email.$touch">
                        </div>
                         <template v-if="$v.email.$error">
                             <div class="errorMessage" v-if="!$v.email.required">Email is required!</div>
                             <div class="errorMessage" v-else-if="!$v.email.email">Invalid email!</div>
                         </template>               

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="Your Password..." v-model="password" @blur="$v.password.$touch">
                        </div>
                              <template v-if="$v.password.$error">
                                <div class="errorMessage" v-if="!$v.password.required">Password is required!</div>
                                <div class="errorMessage" v-if="!$v.password.minLength">Password must be at least 6 symboils!</div>
                              </template>

                        <div class="form-group">
                            <label for="rePassword">Repeat Password</label>
                            <input type="password" name="rePassword" placeholder="Repeat password..." v-model="rePassword" @blur="$v.rePassword.$touch">
                        </div>
                              <template v-if="$v.rePassword.$error">
                                <div class="errorMessage" v-if="!$v.rePassword.sameAs">Passwords don't match!</div>
                              </template>

                        <button>Register</button>
                                <p class="text-center">
                                    Have an account?
                               <router-link to="/login">Log in</router-link>
                                </p>
                    </form>
                </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
import { post } from '../../requester';
import { saveUser } from '../../storage';

export default {
   name: "registration",
   mixins: [validationMixin],
   data(){
       return {
        email: '',
        password: '',
        rePassword: ''
       }
   },
   validations: {
    email: {
       required,
       email
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
    onRegister() {
      let data = {
        username: this.email,
        password: this.password
        };
        
        post('user', '', data, 'Basic')
			.then((data) => {
        saveUser(data);
        this.$emit('onAuth', true);
				this.$router.push("/list-trips");
			})
      .catch(console.error);
   
    }
  }
}
</script>



<style scoped>
.errorMessage {
    color: red;
}
</style>
