import React from "react"

export function createReferenceSousProcessus () {
    return {
        // { ****  Ref feuille 1 Base ****} //
        champTitre : React.createRef(),

        champMiseApplication : React.createRef(),
        champConfidentiel : React.createRef(),

        choixIso9001 : React.createRef(),
        choixIso14001 : React.createRef(),
        choixSecurite : React.createRef(),

        choixSiteIso9001 : React.createRef(),
        choixSiteIso14001 : React.createRef(),
        choixSiteSecurite : React.createRef(),
        
        choixProcessusGlobal : React.createRef(),
        choixProcessusLie : React.createRef(),

        champFinalite : React.createRef(),
        champDomaineApplication : React.createRef(),
        choixPilote : React.createRef(),
        champConditionContrainte : React.createRef(),

        champDonneeEntre : React.createRef(),
        champDonneeSortie : React.createRef(),

        champProcessusAppelant : React.createRef(),
        champProcessusAppele : React.createRef(),

        choixLecteur : React.createRef(),
        
        choixDiffusionEmail : React.createRef(),
        choixDiffusionPapier : React.createRef(),

        choixRedacteur : React.createRef(),
        choixVerificateur : React.createRef(),
        choixApprobateur : React.createRef(),

        // { ****  Ref feuille 2 Descriptio **** } //

        champQuiRealise : React.createRef(),
        champQuiDecide : React.createRef(),
        champFaitQuoiDescription : React.createRef(),
        champLienMoyenDescription : React.createRef(),

        // { ****  Ref feuille 5 **** } //
        champDocumentDeSupport : React.createRef(),
    }
}   
