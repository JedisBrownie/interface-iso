import React, { lazy, Suspense, useEffect } from 'react';
import './css/document.css';
import { useRef } from 'react';
import { createReferenceFiche } from './function/reference/referenceFiche';
import { insertBrouillonFiche, insertFiche } from './function/insert';
import Util from '../shared/Util';


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
            titre : '<h1>Titre du document</h1>',
            stateBrouillon : false,
            stateValidation : false,
            stateQuitter : false,
            isBrouillonSaved : false,
            isRedactionValider : false
        }
    }

    _backHome = (timeout) =>{
        setTimeout(() => {
            window.location.assign("/home");
        } , timeout);
    }

    _saveBrouillon = () =>{
        if(!this.state.isBrouillonSaved){

            insertBrouillonFiche(this.state.references);

            this.setState({stateBrouillon: true});
            this.setState({isBrouillonSaved : true});
            
            setTimeout(() => {
                this.setState({ stateBrouillon: false });
            }, 2000);

        }else{

            this.setState({stateBrouillon:true});
            setTimeout(() => {
                this.setState({stateBrouillon: false});
            }, 2000);
        }    
    }

    
    _validerRedaction = () =>{

        // insertFiche(this.state.references)

        this.setState({stateValidation: true});
        this.setState({isRedactionValider : true});

        setTimeout(() => {
            this.setState({ stateValidation : false });
        }, 2000);

        this._backHome(2200);
    }

    _quitterEdition = () =>{
        if(!this.state.isBrouillonSaved){
            this.setState({stateQuitter : true});

            setTimeout(() =>{
                this.setState({stateQuitter : false});
            } , 5000);
        }else{
            this._backHome(1000);
        }
    }

    _handleCloseQuitter = () =>{
        this._backHome(1000);
    }

    _changeTitle = (e) =>{
        const newTitle = e.target.innerHTML;
        this.setState({ titre: newTitle });
    }

    render(){
        const {edition,valeurChamp} = this.props;

        const {type,references,titre, stateBrouillon , stateValidation , stateQuitter} = this.state;
        
        
        return(
            <Suspense fallback={<div></div>}>
                <>
                    {edition ? (
                        <>
                            <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()} handleValiderRedaction = {() => this._validerRedaction()} handleQuitterEdition = {() => this._quitterEdition()}></Toolbar>
                            
                            <div className='list-paper' style={{marginTop:'7em'}}>  
                                <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                                <Commentaire type={type} titre={titre} references={references} edition={edition}></Commentaire>
                                <Support type={type} titre={titre} edition={edition} references={references}></Support>
                            </div>

                            <Util stateBrouillon={stateBrouillon} stateValidation={stateValidation} stateQuitter = {stateQuitter} handleQuitter = {() => this._handleCloseQuitter()}></Util>

                        </>
                    ) : (
                        <div>
                            <div className='list-paper' style={{marginTop:'1em'}}>  
                                <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp}></Base>
                                <Commentaire type={type} titre={titre} references={references} edition={edition}></Commentaire>
                                <Support type={type} titre={titre} edition={edition} references={references}></Support>
                            </div>
                        </div>
                    )}

                </>
            </Suspense>
        );
    }
    
}