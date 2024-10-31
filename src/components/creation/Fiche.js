import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef } from 'react';
import { createReferenceFiche } from './function/reference/referenceFiche';
import { insertBrouillonFiche } from './function/insert';

const Base = lazy(() => import('../support/Base'));
const Commentaire = lazy(() => import('../support/Commentaire'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'));

export default class Fiche extends React.Component{
    
    constructor(props,context){
        super(props,context);
        this.state = {
            type:"Fiche d'instruction",
            idType : 3,
            references : createReferenceFiche(),
            titre : 'Titre du document'
        }
    }

    _saveBrouillon = (e) =>{
        insertBrouillonFiche(this.state.references);    
    }

    _changeTitle = (e) =>{
        const newTitle = e.target.innerText;
        this.setState({titre : newTitle});
    }

    render(){
        const {edition,valeurChamp} = this.props;

        const {type,references,titre} = this.state;
        
        const saveBrouillon = () =>{
            console.log("enregistré ny fiche d'instruction");
        }

        const fiche = {type:"Fiche d'instruction",idType: 3}
        
        return(
            <>
                {edition ? (
                    <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()}></Toolbar>
                ) : (
                    <></>
                )}
                <div className='list-paper' style={{marginTop:'7em'}}>
                    <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                    <Commentaire type={type} references={references} edition={edition}></Commentaire>
                    <Support type={type}></Support>
                </div>
            </>
        );
    }
    
}