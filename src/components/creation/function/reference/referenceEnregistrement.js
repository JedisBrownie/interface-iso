import React, { useRef } from "react";

export function createReferenceEnregistrement (){

    return {
        // { ****  Ref Base début ****} //
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

        choixDiffusionEmail : React.createRef(),
        choixDiffusionPapier : React.createRef(),
        choixDiffusionEmailExterne : React.createRef(),

        choixRedacteur : React.createRef(),
        choixLecteur : React.createRef(),

        // { ****  Ref champ libre début **** } //
        champChampLibre : React.createRef()
    }
}