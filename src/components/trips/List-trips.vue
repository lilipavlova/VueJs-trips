<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="list-trips">All wished vacations so far ... </label>
                        
                    </h2>

                        <div class="form-group" v-for="t in trips" :key="t.destination">
                            <p>{{t.destination}}</p>
                            <img :src="t.imageUrl" />
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