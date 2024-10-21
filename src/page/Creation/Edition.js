import { useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import { useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
import SousProcessus from "../../components/creation/SousProcessus";
import Fiche from "../../components/creation/Fiche";
export default function Edition(){

    const [content,setContent] = useState("");
    
    const {type} = useParams();

    const renderContent = () =>{
        switch(type) {
            case 'processus':
                return <Processus></Processus>
            case 'enregistrement':
                return <Enregistrement></Enregistrement>
            case 'fiche':
                return <Fiche></Fiche>
            case 'sous-processus':
                return <SousProcessus></SousProcessus>
        }
    }

    console.error = (function() {
        var error = console.error
    
        return function(exception) {
            if ((exception + '').indexOf('Warning: A component is `contentEditable`') != 0) {
                error.apply(console, arguments)
            }
        }
    })()

    return(
        <>
            {renderContent()}
        </>
    );
}