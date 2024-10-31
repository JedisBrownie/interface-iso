import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import { useRef } from 'react';

import React from 'react';
import './css/document.css';
import { createReferenceProcessus } from './function/reference/referenceProcessus';
import { insertBrouillonProcessus } from './function/insert';
export default class Processus extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            type:'Processus',
            idType : 1,
            references : createReferenceProcessus(),
            titre : 'Titre du document'
        }
    }

    _saveBrouillon = () =>{
        insertBrouillonProcessus(this.state.references);
    }

    _changeTitle = (e) =>{
        const newTitle = e.tartget.innerText;
        this.setState({titre : newTitle});
    }

    
    render(){
        const {edition,valeurChamp} = this.props;

        const {type,references,titre} = this.state;

            
        return(
            <>
    
                {edition ? (
                    <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()}></Toolbar>
                ) : (
                    <></>
                )}
    
    
                <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>
    
                    <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
    
                    <Description type={type} references={references} edition={edition}></Description>
    
                    <Commentaire type={type} references={references} edition={edition}></Commentaire>
                    
                    <Evaluation type={type} references={references} edition={edition}></Evaluation>
                    
                    <Support type={type} edition={edition}></Support>
                    
                </div>
            </>
        );
    }
    
}