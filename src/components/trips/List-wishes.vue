<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="list-wishes"> And here are your ones... {{this.username}} </label>
                    </h2>
                     
                        <div v-if="this.myTrips.length===0">
                          <p> Haven't made a wish yet? What are you waiting for? </p>
                          <router-link to="/create-trip">Make your first wish.</router-link>

                        </div>

                     <div class="form-group" v-for="myt in myTrips" :key="myt.destination">
                            <p>{{myt.destination}}</p>
                            <img :src="myt.imageUrl" />
                            <p>{{myt.description}}</p>
                     </div>

                </section>
</template>


<script>
import { get } from '../../requester';
import { getData } from "../../storage"

export default {
    name: "list-wishes",
    data: function() {
    return {
      myTrips: [],
      username: JSON.parse(getData('userInfo')).username
    }
  },
  created() {
        get('appdata', 'trips', 'Kinvey')
            .then((trips) => {
                let myTrips = trips.filter((e) => e.organizer === this.username);
                console.log(myTrips)
                // let arrMyTrips = myTrips.reduce((acc, curr) => {
                //     acc.push(curr.destination);
                //     return acc;
                //  }, []);

                //    this.myTrips = arrMyTrips;

                this.myTrips = myTrips
                   console.log(myTrips)

            })
            .catch(console.error);
  }
}
</script>


<style  scoped>

section div {
    display: inline-block;
    padding: 10px;
}


section {
    padding-bottom: 100px;
}

p:first-of-type {
    font-weight: bold;
}
</style>