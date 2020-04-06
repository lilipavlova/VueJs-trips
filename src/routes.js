
import AppHome from './components/Home'
import AppLogin from "./components/Authentication/Login"
import AppRegistration from "./components/Authentication/Registration"
import AppCreateTrip from "./components/trips/Create-trip"
import AppNotFound from "./components/core/Not-found"

export default [
   { path: "/", name: "home" , component: AppHome},
   { path: "/login", name: "home" , component: AppLogin},
   { path: "/registration", name: "registration" , component: AppRegistration},
   { path: "/create-trip", name: "create-trip" , component: AppCreateTrip},
   { path: "*", name: "not-found" , component: AppNotFound }



]
