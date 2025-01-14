import React, { lazy , Suspense} from 'react';
import './css/document.css';
import { createReferenceSousProcessus } from './function/reference/referenceSousProcessus';
import { insertBrouillonSousProcessus, insertDocumentSousProcessus } from './function/insert';
import Util from '../shared/Util';

const Base = lazy(() => import('../support/Base')); 
const Description = lazy(() => import('../support/Description')); 
const Support = lazy(() => import('../support/Support')); 
const Toolbar = lazy(() => import('../toolbar/Toolbar')); 
 

export default class SousProcessus extends React.Component{
    /**
     * Constructor
     */
    constructor(props,context){
        super(props,context);
        this.state = {
            type:'Sous-Processus',
            idType : 2,
            references : createReferenceSousProcessus(),
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
    _backHome = (timeout) =>{
        setTimeout(() => {
            window.location.assign("/home");
        } , timeout);
    }

    _saveBrouillon = (typeId) => {
        if (!this.state.isBrouillonSaved) {
            insertBrouillonSousProcessus(typeId, this.state.references);
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
            insertDocumentSousProcessus(typeId, this.state.references);
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
        const {edition,valeurChamp, typeId} = this.props;
        const {type,references,titre, stateBrouillon , stateValidation , stateQuitter} = this.state;

        return(
            <Suspense fallback={<div></div>}>
                {edition ? (
                    <>
                        <Toolbar handleSaveBrouillon = {() => this._saveBrouillon(typeId)}  handleValiderRedaction = {() => this._validerRedaction(typeId)} handleQuitterEdition = {() => this._quitterEdition()}></Toolbar>
                        
                        <div className="list-paper" style={{marginTop:'7em'}}>
                            <Base type={type}  references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Description type={type} titre={titre} references={references} edition={edition}></Description>
                            <Support type={type} titre={titre} edition={edition} references={references}></Support>
                        </div>

                        <Util stateBrouillon={stateBrouillon} stateValidation={stateValidation} stateQuitter = {stateQuitter} handleQuitter = {() => this._handleCloseQuitter()}></Util>

                    </>
                ) : (
                    <>
                        <div className="list-paper" style={{marginTop:'1em'}}>
                            <Base type={type}  references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                            <Description type={type} titre={titre} references={references} edition={edition}></Description>
                            <Support type={type} titre={titre} edition={edition} references={references}></Support>
                        </div>
                    </>
                )}
                
            </Suspense>
        );
    }
    
}