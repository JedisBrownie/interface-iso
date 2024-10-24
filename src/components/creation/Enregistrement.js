import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';

const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default function Enregistrement(props){

    const {edition,valeurChamp} = props;

    function saveBrouillon(){
        console.log("enregistré ny enregistrement");
    }

    const references = {
        // { ****  Ref Base début ****} //
        champMiseApplication : useRef(null),
        champConfidentiel : useRef(null),
    
        choixIso9001 : useRef(null),
        choixIso14001 : useRef(null),
        choixSecurite : useRef(null),

        choixSiteIso9001 : useRef(null),
        choixSiteIso14001 : useRef(null),
        choixSiteSecurite : useRef(null),

        choixProcessusGlobal : useRef(null),
        choixProcessusLie : useRef(null),

        choixDiffusionEmail : useRef(null),
        choixDiffusionPapier : useRef(null),
        choixDiffusionEmailExterne : useRef(null),

        choixRedacteur : useRef(null),

    // { ****  Ref champ libre début **** } //
        champChampLibre : useRef(null)
    } 

    console.log();
    useEffect(() => {
        if (!edition && valeurChamp && valeurChamp.length > 0) {
            valeurChamp.forEach(({ reference, texte, valeur }) => {
                const champRef = references[reference]?.current;
                console.log(champRef);

                if (champRef) {
                    
                    if (texte) {
                        // Si c'est du texte simple
                        champRef.textContent = valeur;
                    } else {
                        // Si c'est du HTML
                        champRef.innerHTML = valeur;
                    }
                }
            });
        }
    }, [edition, valeurChamp]);

    useEffect(() => {
        if (!edition && valeurChamp && valeurChamp.length > 0) {
            setTimeout(() => {
                valeurChamp.forEach(({ reference, texte, valeur }) => {
                    const champRef = references[reference]?.current;
                    if (champRef) {
                        if (texte) {
                            champRef.textContent = valeur;
                        } else {
                            champRef.innerHTML = valeur;
                        }
                    }
                });
            }, 1); // délai minimal
        }
    }, [edition, valeurChamp]);



    const enregistrement = {type: "Enregistrement" , idType: 4}
    return(
        <Suspense fallback={<div></div>}>
            {edition ? (
                <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            ) : (
                <></>
            )}
            <div className='list-paper' style={{marginTop:'7em'}}>

                <Base type={enregistrement.type} references={references} edition={edition}></Base>
                <Champ type={enregistrement.type} references={references} edition={edition}></Champ>
                <Support type={enregistrement.type} edition={edition}></Support>

            </div>
        </Suspense>
    );
}