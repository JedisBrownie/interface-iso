import Base from '../support/Base';
import Commentaire from '../support/Commentaire';
import Support from '../support/Support';
import Toolbar from '../toolbar/Toolbar';
import './css/document.css';
import { useRef } from 'react';
export default function Fiche(props){
    

    const {edition,valeurChamp} = props;


    const saveBrouillon = () =>{
        console.log("enregistré ny fiche d'instruction");
    }

    const fiche = {type:"Fiche d'instruction",idType: 3}
    
    const references = {
        // { ****  Ref Base début ****} //
        champMiseApplication : useRef(null),
        champConfidentiel : useRef(null),
    
        choixIso9001 : useRef(null),
        choixIso14001 : useRef(null),
        choixSecurite : useRef(null),

        choixSiteIso9001 : useRef(null),
        choixSiteIso14001 : useRef(null),
        choixSiteSecurite : useRef(null),

        choixProcessusGlobal : useRef(null),
        choixProcessusLie : useRef(null),

        champFinalite : useRef(null),
        champDomaineApplication : useRef(null),
        choixPilote : useRef(null),
        champConditionContrainte : useRef(null),

        champDonneeEntre : useRef(null),
        champDonneeSortie : useRef(null),

        champProcessusAppelant : useRef(null),
        champProcessusAppele : useRef(null),

        choixDiffusionEmail : useRef(null),
        choixDiffusionPapier : useRef(null),

        choixRedacteur : useRef(null),
        choixVerificateur : useRef(null),
        choixApprobateur : useRef(null),

    // { ****  Ref description début **** } //

        champQuiRealise : useRef(null),
        champQuiDecide : useRef(null),
        champFaitQuoiDescription : useRef(null),
        champLienMoyenDescription : useRef(null),
        champCommentaire : useRef(null),

    // { ****  Ref commentaire début **** } //
        champFaitQuoiCommentaire : useRef(null),
        champLienMoyenCommentaire : useRef(null),

    // { ****  Ref évaluation du processus début **** } //
        champPerformanceAttendues : useRef(null),
        champPropositionSurveillance : useRef(null),
        champIndicateurEventuel : useRef(null),
        champEvenementFrequence : useRef(null),
        champParticipant : useRef(null),
        champPointAbordes : useRef(null),
        champDocument : useRef(null)
    } 

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