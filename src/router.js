import Vue from "vue";
import Router from "vue-router";

const Home = () => import("./components/Home");
const History = () => import("./components/History");
const Forecast = () => import("./components/Forecast");
const ForecastDetail = () => import("./components/ForecastDetail");
const Crwaler = () => import("./components/Crwaler");
const NotFound = () => import("./components/NotFound");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            component: Home
        }, {
            path: "/index.html",
            redirect: "/"
        }, {
            path: "/history",
            component: History
        }, {
            path: "/forecast",
            component: Forecast
        }, {
            path: "/forecast/:id",
            component: ForecastDetail
        }, {
            path: "/crwaler",
            component: Crwaler
        }, {
            path: "*",
            component: NotFound
        }
    ]
});