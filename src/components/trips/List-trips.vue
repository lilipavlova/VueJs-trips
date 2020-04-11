<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="list-trips">All wished vacations so far ... </label>
                    </h2>
                     <router-link to="/create-trip">Make your wish here.</router-link>

                        <div class="form-group" v-for="t in trips" :key="t.destination">
                            <p>{{t.destination}}</p>
                            <img class="image" :src="t.imageUrl" />
                            <p>{{t.description}}</p>
                        </div>
   
                </section>
</template>


<script>
import { get } from '../../requester';

export default {
    name: "list-trips",
    data: function() {
    return {
      trips: []
    }
  },
  created() {
     get('appdata', 'trips', 'Kinvey')
        .then((trips) => {
         this.trips = trips.sort((a, b) => a.destination.localeCompare(b.destination));
         })
         .catch(console.error);
  }
}
</script>

<style scoped>

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

.image {
    width: 300px;
    height: 200px;
}

</style>