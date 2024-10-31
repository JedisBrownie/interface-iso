import React, { lazy , Suspense} from 'react';
import './css/document.css';
import { createReferenceSousProcessus } from './function/reference/referenceSousProcessus';
import { insertBrouillonSousProcessus } from './function/insert';

const Base = lazy(() => import('../support/Base')); 
const Description = lazy(() => import('../support/Description')); 
const Support = lazy(() => import('../support/Support')); 
const Toolbar = lazy(() => import('../toolbar/Toolbar')); 
 

export default class SousProcessus extends React.Component{

    constructor(props,context){
        super(props,context);
        this.state = {
            type:'Sous-Processus',
            idType : 2,
            references : createReferenceSousProcessus(),
            titre : 'Titre du document'
        }
    }

    _saveBrouillon = (e) => {
        insertBrouillonSousProcessus(this.state.references);
    }

    _changeTitle = (e) =>{
        const newTitle = e.target.innerText;
        this.setState({titre : newTitle});
    }

    render(){
        const {edition,valeurChamp} = this.props;
        const {type,references,titre} = this.state;
        
        return(
            <Suspense fallback={<div></div>}>
                {edition ? (
                    <Toolbar handleSaveBrouillon = {() => this._saveBrouillon()}></Toolbar>
                ) : (
                    <></>
                )}
                <div className="list-paper" style={{marginTop:'7em'}}>
                    {/* <Base type={sousProcessus.type} champMiseApplication = {champMiseApplication} champConfidentiel={champConfidentiel} ></Base> */}
                    <Base type={type} references={references} edition={edition} valeurChamp={valeurChamp} changeTitle = {this._changeTitle}></Base>
                    <Description type={type} references={references} edition={edition}></Description>
                    <Support type={type}></Support>
                </div>
            </Suspense>
        );
    }
    
}