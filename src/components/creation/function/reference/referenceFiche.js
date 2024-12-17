import React from "react";

export function createReferenceFiche () {

    return {
        // { ****  Ref feuille  1 Base  ****} //
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

        choixLecteur : React.createRef(),

        choixDiffusionEmail : React.createRef(),
        choixDiffusionPapier : React.createRef(),

        choixRedacteur : React.createRef(),
        choixVerificateur : React.createRef(),
        choixApprobateur : React.createRef(),

        statutRedacteur : React.createRef(),
        statutVerificateur : React.createRef(),
        statutApprobateur : React.createRef(),

        // { ****  Ref feuille 2 commentaire **** } //
        champFaitQuoiCommentaire : React.createRef(),
        champLienMoyenCommentaire : React.createRef(),

        // { ****  Ref feuille 5 **** } //
        champDocumentDeSupport : React.createRef(),
    }
    
} 