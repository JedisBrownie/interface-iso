import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Description from '../support/Description';
import Evaluation from '../support/Evaluation';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import { useRef } from 'react';

import './css/document.css';
import { useReferenceProcessus } from './function/reference/referenceProcessus';
export default function Processus(props){

    
    const {edition,valeurChamp} = props;

    const saveBrouillon = () =>{
        console.log("enregistré ny processus");
    }

    const processus = {type: "Processus" , idType: 1}

    const references = useReferenceProcessus();

    
    return(
        <>

            {edition ? (
                <Toolbar handleSaveBrouillon = {saveBrouillon}></Toolbar>
            ) : (
                <></>
            )}


            <div className='list-paper' style={{marginTop:'7em',backgroundColor:''}}>

                <Base type={processus.type} references={references} edition={edition}></Base>

                <Description type={processus.type} references={references} edition={edition}></Description>

                <Commentaire type={processus.type} references={references} edition={edition}></Commentaire>
                
                <Evaluation type={processus.type} references={references} edition={edition}></Evaluation>
                
                <Support type={processus.type} edition={edition}></Support>
                
            </div>
        </>
    );
}