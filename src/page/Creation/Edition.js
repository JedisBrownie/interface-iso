import { useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import '../../function/function';
import Toolbar from "../../components/toolbar/Toolbar";
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

    console.log(type);

    return(
        <>
            <Toolbar></Toolbar>
            {renderContent()}
        </>
    );
}