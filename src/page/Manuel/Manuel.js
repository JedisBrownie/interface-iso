import Header from "../../components/header/Header";
import ListDocumentBasic from "../../components/list/ListDocumentBasic";

export default function Manuel(){
    return (
        <>
            <Header type={"Document"} titreDocument={"Document"} nomDocument={"Manuel Intégré"}></Header>
            <div className="ui container" style={{paddingTop:'8.5em'}}>
                <ListDocumentBasic></ListDocumentBasic>
            </div>
        </>
    );
}