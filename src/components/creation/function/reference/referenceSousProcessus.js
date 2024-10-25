import { useRef } from "react"

export function useReferenceSousProcessus () {
    return {
        // { ****  Ref feuille 1 Base ****} //
        champMiseApplication : useRef(),
        champConfidentiel : useRef(),

        choixIso9001 : useRef(),
        choixIso14001 : useRef(),
        choixSecurite : useRef(),

        choixSiteIso9001 : useRef(),
        choixSiteIso14001 : useRef(),
        choixSiteSecurite : useRef(),
        
        choixProcessusGlobal : useRef(),
        choixProcessusLie : useRef(),

        champFinalite : useRef(),
        champDomaineApplication : useRef(),
        choixPilote : useRef(),
        champConditionContrainte : useRef(),

        champDonneeEntre : useRef(),
        champDonneeSortie : useRef(),

        champProcessusAppelant : useRef(),
        champProcessusAppele : useRef(),

        choixLecteur : useRef(),
        
        choixDiffusionEmail : useRef(),
        choixDiffusionPapier : useRef(),

        choixRedacteur : useRef(),
        choixVerificateur : useRef(),
        choixApprobateur : useRef(),

    // { ****  Ref feuille 2 Descriptio **** } //

        champQuiRealise : useRef(),
        champQuiDecide : useRef(),
        champFaitQuoiDescription : useRef(),
        champLienMoyenDescription : useRef()
    }
}   
