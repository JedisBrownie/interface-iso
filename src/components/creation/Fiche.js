import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
import { useRef } from 'react';
import { useReferenceFiche } from './function/reference/referenceFiche';
export default function Fiche(props){
    

    const {edition,valeurChamp} = props;

    const saveBrouillon = () =>{
        console.log("enregistré ny fiche d'instruction");
    }

    const fiche = {type:"Fiche d'instruction",idType: 3}
    
    const references = useReferenceFiche();

    return(
        <>
            {edition ? (
                <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            ) : (
                <></>
            )}
            <div className='list-paper' style={{marginTop:'7em'}}>
                <Base type={fiche.type} references={references} edition={edition}></Base>
                <Commentaire type={fiche.type} references={references} edition={edition}></Commentaire>
                <Support type={fiche.type}></Support>
            </div>
        </>
    );
}