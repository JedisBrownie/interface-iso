import { useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import '../../function/function';
import Toolbar from "../../components/toolbar/Toolbar";
import { useParams } from "react-router-dom";
import Processus from "../../components/creation/Processus";
export default function Edition(){
    const [content,setContent] = useState("");
    
    const {type} = useParams;

    const renderContent = () =>{
        switch(type) {
            case 'processus':
                return <Processus></Processus>
        }
    }

    return(
        <>
            <Toolbar></Toolbar>
            <Enregistrement></Enregistrement>
        </>
    );
}