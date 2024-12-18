import React, { lazy, Suspense } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { createReferenceEnregistrement } from './function/reference/referenceEnregistrement';
import { insertBrouillonNavigateur, insertEnregistrement, insertNavigateur } from './function/insert';
import Alert from '@mui/material/Alert';
import Util from '../shared/Util';
import { useNavigate } from 'react-router-dom';

const Base = lazy(() => import('../support/Base'));
const Champ = lazy(() => import('../support/Champ'));
const Support = lazy(() => import('../support/Support'));
const Toolbar = lazy(() => import('../toolbar/Toolbar'))

export default class Navigateur extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            type:'Navigateur',
            idType : 5,
            references : createReferenceEnregistrement(),
            titre : 'Titre du document',
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


    _saveBrouillon = () => {
        if(!this.state.isBrouillonSaved){
            insertBrouillonNavigateur(this.state.references);

            this.setState({stateBrouillon:true});
            this.setState({isBrouillonSaved : true});
            
            setTimeout(() => {
                this.setState({ stateBrouillon: false });
            }, 2000);

        }else{

            this.setState({stateBrouillon:true});
            setTimeout(() => {
                this.setState({ stateBrouillon: false });
            }, 2000);
        }
    }


    _validerRedaction = () =>{

        insertNavigateur(this.state.references);

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
        const newTitle = e.target.innerText;
        this.setState({ titre: newTitle });
    }




    render(){
        const {type,references,titre, stateBrouillon , stateValidation , stateQuitter} = this.state;
                
        const {edition , valeurChamp} = this.props;

        return(
            <Suspense fallback={<div></div>}>
                {edition ? (
                    <>
                        <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()} handleValiderRedaction = {() => this._validerRedaction()} handleQuitterEdition = {() => this._quitterEdition()}></Toolbar>

                        <div className='list-paper' style={{marginTop:'7em'}}>
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Champ type={type} titre={titre} references={references} edition={edition}></Champ>
                            <Support type={type} titre={titre} references={references} edition={edition}></Support>    
                        </div>

                        <Util stateBrouillon={stateBrouillon} stateValidation={stateValidation} stateQuitter = {stateQuitter} handleQuitter = {() => this._handleCloseQuitter()}></Util>

                    </>
                ) : (
                    <div>

                        <div className='list-paper' style={{marginTop:'1em'}}>
                            <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Champ type={type} titre={titre} references={references} edition={edition}></Champ>
                            <Support type={type} titre={titre} references={references} edition={edition}></Support>
            
                        </div>
                    </div>
                )}
                
            </Suspense>
        );
    }

    
}

