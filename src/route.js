import React from "react";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home";


export const routes = [
    {
        path : '/',
        element : <Auth />
    },
    {
        path : '/home',
        element : <Home />
    }
]