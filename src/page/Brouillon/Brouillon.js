import Header from "../../components/header/Header";
import AccordionListType from "../../components/list/AccordionListType";
import ListContentBrouillon from "../../components/list/ListContentBrouillon";

export default function Brouillon(){
    
    const data =
    [
        {status:'Brouillon',dateCreation: '07/05/2024',nomTypeDocument : 'Brouillon',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'},
        {status:'Brouillon',dateCreation: '07/05/2024',nomTypeDocument : 'Brouillon',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'},
        {status:'Brouillon',dateCreation: '07/05/2024',nomTypeDocument : 'Brouillon',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'}
    ];
    
    return(
        <>
            <Header type = "Brouillon"></Header>

            <div className="ui container" style={{paddingTop:'9em'}}>
                <ListContentBrouillon></ListContentBrouillon>
                <ListContentBrouillon></ListContentBrouillon>

            </div>

        </>

    );
}