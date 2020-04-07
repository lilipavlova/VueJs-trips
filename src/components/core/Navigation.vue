<template>
<div> 
<div class="navigation" >
                <ul>
                    <li>
                        <router-link to="/">Home</router-link >
                    </li>
                    <li v-if="isAuth">
                        <router-link to="/list-trips">All trips</router-link>
                    </li>
                    <li v-if="isAuth">
                        <router-link to="/create-trip">Suggest trip</router-link>
                    </li>
                    <li v-if="isAuth">
                        <router-link to="/">Wish list</router-link>
                    </li>
 
                </ul>

                <ul>
                    <li v-if="!isAuth">
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li v-if="!isAuth">
                        <router-link to="/registration">Register</router-link>
                    </li>
                    <li >
                        <a @click="onLogout" class="logout">Logout</a>
                    </li>
                </ul>
            </div>

          

            
</div>
</template>



<script>


export default {
  name: "navigation",
   props: {
    isAuth: Boolean
  },

  methods: {
    onLogout() {
        localStorage.clear();
        this.$emit('onAuth', false);
        this.$router.push("/");
        },
   }

}
</script>



<style scoped>
.logout {
    cursor: pointer;
}
</style>

