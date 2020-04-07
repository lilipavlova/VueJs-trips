<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="list-wishes"> And here are your ones... </label>
                        
                    </h2>
                     <p> {{this.username}}</p>

                     <ul class="form-group" v-for="myt in myTrips" :key="myt.destination">
                         <li> {{myt.destination}}</li>
                     </ul>
                    

                     


   
                </section>
</template>


<script>
import { get } from '../../requester';

export default {
    name: "list-wishes",
    data: function() {
    return {
      myTrips: [],
      username:  localStorage.username
    }
  },
  created() {
        get('appdata', 'trips', 'Kinvey')
            .then((trips) => {
                let myTrips = trips.filter((e) => e.organizer === this.username);
                let arrMyTrips = myTrips.reduce((acc, curr) => {
                    acc.push(curr.destination);
                    return acc;
                 }, []);

                   this.myTrips = arrMyTrips;

            })
            .catch(console.error);
  }
}
</script>