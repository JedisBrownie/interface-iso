import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';
import { createReferenceEnregistrement } from './function/reference/referenceEnregistrement';
import { insertEnregistrement } from './function/insert';
import DocumentMenu from '../shared/DocumentMenu';

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
            references : createReferenceEnregistrement(),
            titre : 'Titre du document'
        }
    }



    _saveBrouillon = (e) => {
        console.log("ref : " + this.state.references.champConfidentiel.current);
        insertEnregistrement(this.state.references);
    }

    _changeTitle = (e) =>{
        const newTitle = e.target.innerText;
        console.log("titre : " + e.target.innerText);
        this.setState({ titre: newTitle });
    }



    // componentDidMount() {
    //     this.setState({ isMounted: true });
    // }

    // componentDidMount() {
    //     const { edition, valeurChamp } = this.props;
    //     console.log(edition );
    //     console.log(valeurChamp);
    //     // Check if edition has changed to false and valeurChamp has items
    //     if (!edition  && valeurChamp && valeurChamp.length > 0) {
    //         valeurChamp.forEach(({ reference, texte, valeur }) => {
    //             const champRef = this.state.references[reference]?.current;
    //             console.log("test : " + this.state.references.champConfidentiel);

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
    //     }
    // }


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

    

    render(){
        const {type,references,titre} = this.state;
        
        
        const {edition , valeurChamp} = this.props;

        return(
            <Suspense fallback={<div></div>}>
                {edition ? (
                    <>
                        <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()}></Toolbar>

                        <div className='list-paper' style={{marginTop:'7em'}}>
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Champ type={type} titre={titre} references={references} edition={edition}></Champ>
                            <Support type={type} titre={titre} edition={edition}></Support>    
                        </div>
                    </>
                ) : (
                    <div>
                        <DocumentMenu></DocumentMenu>

                        <div className='list-paper' style={{marginTop:'1em'}}>
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Champ type={type} titre={titre} references={references} edition={edition}></Champ>
                            <Support type={type} titre={titre} edition={edition}></Support>
            
                        </div>
                    </div>
                )}
                
            </Suspense>
        );
    }

    
}

