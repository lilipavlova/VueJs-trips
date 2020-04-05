<template>
<div> 
<div class="navigation">
                <ul>
                    <li>
                        <router-link to="/home">Home</router-link >
                    </li>
                    <li>
                        <router-link to="/">All trips</router-link>
                    </li>
                    <li>
                        <router-link to="/create-trip">Suggest trip</router-link>
                    </li>
                    <li>
                        <router-link to="/">Your wish list</router-link>
                    </li>
 
                </ul>

                <ul>
                    <li>
                        <router-link to="/login">Login</router-link>
                    </li>
                    <li>
                        <router-link to="/registration">Register</router-link>
                    </li>
                    <li>
                        <router-link to="/">Logout</router-link>
                    </li>
                </ul>
            </div>

            
</div>
</template>



<script>
export default {
}
</script>



<style scoped>
</style>


