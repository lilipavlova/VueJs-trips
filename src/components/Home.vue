<template>
<div > 
    <section class="home">
            <h1>Register and win !</h1>
            <button>LEARN MORE</button>
    </section>
</div>
</template>

<script>
export default {
    components: {
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
    padding: 200px 0px 0px 100px;
    font-size: 50px;
    color: white;
    width: 30%;
}

.home button {
    font-size: 20px;
    background: transparent;
    border: 2px white solid;
    color: white;
    padding: 5px 10px;
    margin: 50px 200px 200px 100px;
}

.home button:hover{
    background: #50b9e1;
    border: 2px #50b9e1 solid;
}
</style>
