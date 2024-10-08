import { useState } from "react";
import Enregistrement from "../../components/creation/Enregistrement";
import '../../function/function';
import Toolbar from "../../components/toolbar/Toolbar";
export default function Edition(){
    const [content,setContent] = useState("");
    

    return(
        <>
            <Toolbar></Toolbar>
            <Enregistrement></Enregistrement>
        </>
    );
}