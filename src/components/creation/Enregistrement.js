import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';
import { useReferenceEnregistrement } from './function/reference/referenceEnregistrement';
import { insertEnregistrement } from './function/insert';

const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default function Enregistrement(props){
    const enregistrement = {type: "Enregistrement" , idType: 4}

    const {edition,valeurChamp} = props;

    const [isReady , setReady] = useState(false);
    
    const references = useReferenceEnregistrement();

    console.log(references);

    useEffect(() =>{
        if(references && references.champConfidentiel?.current){
            setReady(true);
        }
    })

    function saveBrouillon(references){
        if(isReady){
            insertEnregistrement(references);
            console.log("enregistré ny enregistrement");
        }else{
            console.log("nope");
        }
        
    }

    
    


    // useEffect(() => {
    //     if (!edition && valeurChamp && valeurChamp.length > 0) {
    //         valeurChamp.forEach(({ reference, texte, valeur }) => {
    //             const champRef = references[reference]?.current;
    //             console.log(champRef);

    //             if (champRef) {
                    
    //                 if (texte) {
    //                     // Si c'est du texte simple
    //                     champRef.textContent = valeur;
    //                 } else {
    //                     // Si c'est du HTML
    //                     champRef.innerHTML = valeur;
    //                 }
    //             }
    //         });
    //     }
    // }, [edition, valeurChamp]);


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