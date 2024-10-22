import React, { lazy, Suspense } from 'react';
import './css/document.css';
const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default function Enregistrement(){

    function saveBrouillon(){
        console.log("enregistré ny enregistrement");
    }


    const enregistrement = {type: "Enregistrement" , idType: 4}
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            <div className='list-paper' style={{marginTop:'7em'}}>

                <Base type={enregistrement.type}></Base>
                <Champ type={enregistrement.type}></Champ>
                <Support type={enregistrement.type}></Support>

            </div>
        </Suspense>
    );
}