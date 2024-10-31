import React, { lazy, Suspense } from 'react';
import './css/document.css';
import { useRef , useState } from 'react';
import { createReferenceEnregistrement } from './function/reference/referenceEnregistrement';
import { insertBrouillonEnregistrement, insertBrouillonFiche, insertEnregistrement } from './function/insert';
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



    _saveBrouillon = () => {
        console.log("ref : " + this.state.references.champConfidentiel.current);
        insertBrouillonEnregistrement(this.state.references);
    }

    _changeTitle = (e) =>{
        const newTitle = e.target.innerText;
        this.setState({ titre: newTitle });
    }




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

