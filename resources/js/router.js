// import { Router } from "express";
import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

import Home from "./components/pages/HomeComponent";
import Storepage from "./components/pages/StoreComponent";
import Checkoutpage from "./components/pages/CheckoutComponent"

const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/store",
        component:Storepage
    },
    {
        path:"/store/:category",
        component:Storepage
    },
    {
        path:"/checkout/:id",
        component:Checkoutpage
    },
    {
        path:"/*",
        component:Home
    }
];

export default new Router({
    mode:"history",
    routes

})
