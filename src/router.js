import Vue from 'vue';
import VueRouter from 'vue-router';
import appKey from "./storage"

import AppHome from './components/Home'
import AppLogin from "./components/Authentication/Login"
import AppRegistration from "./components/Authentication/Registration"
import AppListTrips from "./components/trips/List-trips"
import AppCreateTrip from "./components/trips/Create-trip"
import AppNotFound from "./components/core/Not-found"

Vue.use(VueRouter);

function anonymousGuard(to, from, next) {
    if (localStorage.getItem('authToken' + appKey) !== null) {
        next('/');
    } else {
        next();
    }
}


const routes =  [
   { path: "/", name: "home" , component: AppHome},
   { path: "/login", name: "login" , component: AppLogin , beforeEnter: anonymousGuard},
   { path: "/registration", name: "registration", component: AppRegistration , beforeEnter: anonymousGuard},
   { path: "/list-trips", name: "list-trips" , component: AppListTrips},
   { path: "/create-trip", name: "create-trip" , component: AppCreateTrip},
   { path: "*", name: "not-found" , component: AppNotFound }
]

export default new VueRouter({
    mode: 'history',
    routes
});