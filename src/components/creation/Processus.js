import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import { useRef } from 'react';
import Util from '../shared/Util';

import React from 'react';
import './css/document.css';
import { createReferenceProcessus } from './function/reference/referenceProcessus';
import { insertBrouillonProcessus, insertProcessus } from './function/insert';



/**
 * Processus Component
 */
export default class Processus extends React.Component{
    /**
     * Constructor
     */
    constructor(props, context){
        super(props, context);
        this.state = {
            type:'Processus',
            idType : 1,
            references : createReferenceProcessus(),
            titre : '<h1>Titre du document</h1>',
            stateBrouillon : false,
            stateValidation : false,
            stateQuitter : false,
            isBrouillonSaved : false,
            isRedactionValider : false
        }
    }


    /**
     * Methods
     */
    _backHome = (timeout) => {
        setTimeout(() => {
            window.location.assign("/home");
        } , timeout);
    }


    _saveBrouillon = (typeId) => {
        if (!this.state.isBrouillonSaved) {
            insertBrouillonProcessus(typeId, this.state.references);
            // localStorage.removeItem("uploaded_files");

            this.setState({stateBrouillon:true});
            this.setState({isBrouillonSaved : true});
            
            setTimeout(() => {
                this.setState({stateBrouillon: false});
            }, 2000);
        } else {
            this.setState({stateBrouillon:true});
            setTimeout(() => {
                this.setState({stateBrouillon: false});
            }, 2000);
        }    
    }

    
    _validerRedaction = (typeId) => {
        if (!this.state.isBrouillonSaved) {
            insertProcessus(typeId, this.state.references);
            // localStorage.removeItem("uploaded_files");

            this.setState({stateBrouillon:true});
            this.setState({isBrouillonSaved : true});
            
            setTimeout(() => {
                this.setState({stateBrouillon: false});
            }, 2000);
        } else {
            this.setState({stateBrouillon:true});
            setTimeout(() => {
                this.setState({stateBrouillon: false});
            }, 2000);
        }   
    }


    _quitterEdition = () => {
        if(!this.state.isBrouillonSaved) {
            this.setState({stateQuitter : true});

            setTimeout(() =>{
                this.setState({stateQuitter : false});
            } , 5000);
        } else {
            this._backHome(1000);
        }
    }


    _handleCloseQuitter = () =>{
        this._backHome(1000);
    }


    _changeTitle = (e) => {
        const newTitle = e.target.innerHTML;
        this.setState({titre: newTitle});
    }


    
    render() {
        const {edition, valeurChamp, typeId} = this.props;
        const {type, references, titre, stateBrouillon, stateValidation, stateQuitter} = this.state;
 
        return(
            <>
                {edition ? (
                    <>
                        <Toolbar handleSaveBrouillon = {() => this._saveBrouillon(typeId)} handleValiderRedaction = {() => this._validerRedaction(typeId)} handleQuitterEdition = {() => this._quitterEdition()}></Toolbar>
                        <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>
    
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
            
                            <Description type={type} titre={titre} references={references} edition={edition}></Description>
            
                            <Commentaire type={type} titre={titre} references={references} edition={edition}></Commentaire>
                            
                            <Evaluation type={type} titre={titre} references={references} edition={edition}></Evaluation>
                            
                            <Support type={type} titre={titre} edition={edition} references={references}></Support>
                    
                        </div>
                        <Util stateBrouillon={stateBrouillon} stateValidation={stateValidation} stateQuitter = {stateQuitter} handleQuitter = {() => this._handleCloseQuitter()}></Util>

                    
                    </>
                ) : (
                    <>
                        <div className='list-paper' style={{marginTop:'1em',backgroundColor:''}}>
    
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>

                            <Description type={type} references={references} edition={edition}></Description>

                            <Commentaire type={type}  references={references} edition={edition}></Commentaire>
                            
                            <Evaluation type={type} references={references} edition={edition}></Evaluation>
                            
                            <Support type={type} edition={edition}></Support>
                            
                        </div>
                    </>
                )}
            </>
        );
    }
    
}