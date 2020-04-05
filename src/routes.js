
import AppHome from './components/Home'
import AppLogin from "./components/Authentication/Login"
import AppRegistration from "./components/Authentication/Registration"
import AppCreateTrip from "./components/trips/create-trip"


export default [
   { path: "/home", component: AppHome},
   { path: "/login", component: AppLogin},
   { path: "/registration", component: AppRegistration},
   { path: "/create-trip", component: AppCreateTrip}

]
