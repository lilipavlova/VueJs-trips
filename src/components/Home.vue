<template>
<div > 
    <section class="home">
            <h1>Win your dream holiday!</h1>
            
    </section>
    <section v-if="!isAuth" class="description">
             <h3> What is this?</h3>
             <p> Due to the current worlwide situation we decided to give away one free vacation to a destination chosen by you!</p>
             <p > All you need to do is <router-link to="/login">Login</router-link> / <router-link to="/registration">Register</router-link> , make your wishes and in the end of the month we will randomly choose the lucky one!</p>
             <p> Good luck! </p>
    </section>

        <section v-if="isAuth" class="description">
             <h3> Ok, what's next?</h3>
             <p> You are almost there... Make your wish <router-link to="/create-trip"> here.</router-link> </p>
             <p> Or if you don't have an idea, check what the other people wish for <router-link to="/list-trips"> here.</router-link></p>
             <p> :)))) </p>
    </section>
   
</div>

   
</template>

<script>


export default {
    name: "home",
    props: {
        isAuth: Boolean
    }



}
</script>



<style scoped>
.home {
    background: linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.6)) ,url("https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprodmigration%2Fweb%2Fbin%2F83436ade-676a-42a1-92ce-95593e6b2032.jpg?crop=1500%2C1000%2C0%2C0&resize=1180") ;
    background-size: cover;
    background-position: center;
    margin: 0 20px;
}

.home h1 {
    margin: 0;
    padding: 200px 0px 300px 100px;
    font-size: 50px;
    color: white;
    width: 30%;
}


.description {
    padding-bottom: 250px;
}

</style>
