<template>
               <section class="content-info">

                    <h2 class="user-links">
                        <label for="login">Login</label>
                    </h2>

                    <form class="user-form" @submit.prevent="onLogin">
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
                            <input type="password" name="password" placeholder="Your password..." v-model="password" @blur="$v.password.$touch">
                        </div>
                          <template v-if="$v.password.$error">
                             <div class="errorMessage" v-if="!$v.password.required">Password is required!</div>
                             <div class="errorMessage" v-else-if="!$v.password.minLength">Password must at least 6 symbols!</div>
                          </template>

                        <button>Login</button>
                                <p class="text-center">
                                  Dont' have an account?
                                <router-link to="/registration">Register</router-link>
                                </p>
                    </form>
                </section>
</template>


<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';
import { post } from '../../requester';
import { saveUser } from '../../storage';


export default {
    name: "login",
    mixins: [validationMixin],
    data: function() {
        return {
            email: '',
            password: ''
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
      }
    },
    methods: {
    onLogin() {
        const data = { username: this.email, password: this.password };
        
		post('user', 'login', data , 'Basic')
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

<style  scoped>
.errorMessage {
    color: red;
}
</style>



