import Header from "../../components/header/Header";
import ListDocument from "../../components/list/ListDocument";

export default function Manuel(){
    return (
        <>
            <Header type={"Document"} titreDocument={"Document"} nomDocument={"Manuel Intégré"}></Header>
            <div className="ui container" style={{paddingTop:'8.5em'}}>
                <ListDocument></ListDocument>
            </div>
        </>
    );
}