import React from "react";
import Auth from "./page/Auth/Auth";
import Home from "./page/Home/Home";
import Brouillon from "./page/Brouillon/Brouillon";
import CreationJodit from "./page/Creation/CreationJodit";
import DocumentValable from "./page/Home/DocumentValable";
import Edition from "./page/Creation/Edition";
import Document from "./page/Document/Document";
import Navigateur from "./page/Navigateur/Navigateur";
import Archive from "./page/Archive/Archive";

export const routes = [
    {
        path : '/',
        element : <Auth />
    },
    {
        path : '/home',
        element : <Home />
    },
    {
        path : '/brouillon',
        element : <Brouillon />
    },
    {
        path : '/valable/:identifiant',
        element : <DocumentValable></DocumentValable>
    },
    {
        path : '/jodit',
        element : <CreationJodit />
    },
    {
        path : '/creation/:type',
        element : <Edition/>
    },
    {
        path : '/document/:type/:reference/:version/',
        element : <Document />
    },
    {
        path : '/navigateur',
        element : <Navigateur />
    },
    {
        path : '/archive',
        element : <Archive />
    }

]