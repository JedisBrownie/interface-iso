import Header from "../../components/header/Header";
import AccordionListType from "../../components/list/AccordionListType";
import ListContentBrouillon from "../../components/list/ListContentBrouillon";

export default function Brouillon(){
    
    const data =
    [
        {id:1,status:'Brouillon',dateCreation: '07/05/2024',nomTypeDocument : 'Processus',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'},
        {id:2,status:'En cours de vérification',dateCreation: '07/02/2023',nomTypeDocument : 'Enregistrement',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'},
        {id:4,status:'Brouillon',dateCreation: '07/05/2024',nomTypeDocument : 'Navigateur',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'},
        {id:3,status:'En cous de signature',dateCreation: '07/05/2024',nomTypeDocument : 'Sous processus',nom:'Code de conduite des affaires',nombreRevision:0,listeProcessusLie:[{idProcessusLie:1300},{idProcessusLie:1200}],modification:'false'}
    ];
    
    return(
        <>
            <Header type = "Brouillon"></Header>

            <div className="ui container" style={{paddingTop:'9em'}}>
                <ListContentBrouillon dataList={data}></ListContentBrouillon>
            </div>

        </>

    );
}