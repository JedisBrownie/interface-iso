import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';
import { createReferenceEnregistrement } from './function/reference/referenceEnregistrement';
import { insertEnregistrement } from './function/insert';

const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default class Enregistrement extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            type:'Enregistrement',
            idType : 4,
            references : createReferenceEnregistrement()
        }
    }



    _saveBrouillon = (e) => {
        console.log("ref : " + this.state.references.champConfidentiel.current);
        insertEnregistrement(this.state.references);
    }

    componentWillUpdate(){
        console.log("updated");
    }

    // componentDidMount() {
    //     this.setState({ isMounted: true });
    // }

    componentDidMount() {
        const { edition, valeurChamp } = this.props;
        console.log(edition );
        console.log(valeurChamp);
        // Check if edition has changed to false and valeurChamp has items
        if (!edition  && valeurChamp && valeurChamp.length > 0) {
            valeurChamp.forEach(({ reference, texte, valeur }) => {
                const champRef = this.state.references[reference]?.current;
                console.log("test : " + this.state.references.champConfidentiel);

                if (champRef) {
                    if (texte) {
                        // If it's plain text
                        champRef.textContent = valeur;
                    } else {
                        // If it's HTML
                        champRef.innerHTML = valeur;
                    }
                }
            });
        }
    }


    // componentDidUpdate(prevProps, prevState) {
    //     const { edition, valeurChamp } = this.props;

    //     // Check if mounting is complete, edition is false, and valeurChamp has items
    //     if (this.state.isMounted && !edition && valeurChamp && valeurChamp.length > 0) {
    //         valeurChamp.forEach(({ reference, texte, valeur }) => {
    //             const champRef = this.state.references[reference]?.current;
    //             console.log(`Reference for ${reference}:`, champRef);

    //             if (champRef) {
    //                 if (texte) {
    //                     // If it's plain text
    //                     champRef.textContent = valeur;
    //                 } else {
    //                     // If it's HTML
    //                     champRef.innerHTML = valeur;
    //                 }
    //             }
    //         });

    //         // Optional: Reset the flag to prevent re-running this code on each update
    //         this.setState({ isMounted: false });
    //     }else{
    //         console.log("not yet mounted");

    //     }
    // }

    // const enregistrement = {type: "Enregistrement" , idType: 4}

    // const {edition,valeurChamp} = props;
    
    // const references = useReferenceEnregistrement();

    // console.log(references);


    // console.log("");

    // function saveBrouillon(references){
    //     insertEnregistrement(references);
    //     console.log("enregistrement enregistré");
    // }

    


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

    render(){
        const {type,references} = this.state;
        
        console.log(this.state.references.champConfidentiel);
        const {edition , valeurChamp} = this.props;

        return(
            <Suspense fallback={<div></div>}>
                {edition ? (
                    <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()}></Toolbar>
                ) : (
                    <></>
                )}
                <div className='list-paper' style={{marginTop:'7em'}}>
    
                    <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp}></Base>
                    <Champ type={type} references={references} edition={edition}></Champ>
                    <Support type={type} edition={edition}></Support>
    
                </div>
            </Suspense>
        );
    }

    
}

