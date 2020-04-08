<template>
<section class="content-info">

                    <h2 class="user-links">
                        <label for="create-trip">Wish Info</label>
                    </h2>

                    <form class="user-form" @submit.prevent="submitHandler">
                        <div class="form-group">
                            <label for="destination">Destination</label>
                            <input type="text" name="destination" placeholder="Destination name" v-model="destination" @blur="$v.destination.$touch">
                        </div>
                    <template v-if="$v.destination.$error">
                        <div class="errorMessage" v-if="!$v.destination.required">Destination is required!</div>
                    </template>                       

                        <div class="form-group">
                            <label for="imageUrl">Image URL</label>
                            <input type="text" name="imageUrl" placeholder="Image URL" v-model="imageUrl" @blur="$v.imageUrl.$touch">
                        </div>
                              <template v-if="$v.imageUrl.$error">
                                <div class="errorMessage" v-if="!$v.imageUrl.required">Image is required!</div>
                              </template>

                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description" placeholder="Description" v-model="description" @blur="$v.description.$touch">
                        </div>
                              <template v-if="$v.description.$error">
                                <div class="errorMessage" v-if="!$v.description.sameAs">Description is required!</div>
                              </template>

                        <button>Submit</button>
                    </form>
                </section>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import { post } from '../../requester';
import { getData } from '../../storage';

export default {
   name: "create-trip" ,
   mixins: [validationMixin],
   data(){
       return {
        destination: '',
        imageUrl: '',
        description: ''
       }
   },
   validations: {
       destination: {
       required
    },
    imageUrl: {
      required
    },
    description: {
      required
    }
   },
    methods: {
    submitHandler() {
        let data = {
            destination: this.destination,
            imageUrl: this.imageUrl,
            description: this.description,
            organizer: JSON.parse(getData('userInfo')).username
        };

			post( 'appdata', 'trips', data , 'Kinvey')
				.then(() => {
					this.$router.push("/list-wishes");
				})
				.catch(console.error);
		
    }
}
}
</script>



<style scoped>
.errorMessage {
    color: red;
}
</style>
