<template>
               <section class="content-info">

                    <h2 class="user-links">
                        <label for="login">Login</label>
                    </h2>

                    <form class="user-form">
                        <div class="form-group">
                            <img src="https://img.icons8.com/material-sharp/42/000000/user.png">
                            <input type="text" name="username" placeholder="Username" v-model="email" @blur="$v.email.$touch">
                        </div>
                         <template v-if="$v.email.$error">
                             <div class="errorMessage" v-if="!$v.email.required">Email is required!</div>
                             <div class="errorMessage" v-else-if="!$v.email.email">Invalid email!</div>
                         </template>

                        <div class="form-group">
                            <img src="https://img.icons8.com/material/42/000000/password--v1.png">
                            <input type="password" name="password" placeholder="Password" v-model="password" @blur="$v.password.$touch">
                        </div>
                          <template v-if="$v.password.$error">
                             <div class="errorMessage" v-if="!$v.password.required">Password is required!</div>
                             <div class="errorMessage" v-else-if="!$v.password.minLength">Password must be longer than 6 symbols!</div>
                          </template>

                        <button>Login</button>
                    </form>
                </section>
</template>


<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
    mixins: [validationMixin],
    data() {
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
    },
    },
}
</script>

<style  scoped>
.errorMessage {
    color: red;
}
</style>



