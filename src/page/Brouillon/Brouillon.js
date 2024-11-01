import Header from "../../components/header/Header";
import AccordionListBrouillon from "../../components/list/AccordionListBrouillon";
import AccordionListType from "../../components/list/AccordionListType";
import ListContentBrouillon from "../../components/list/ListContentBrouillon";


export default function Brouillon(){
    
    const data =
    [
        {idMatricule : 4580 , nom : 'Aina Razafindrakoto' , listeDocument : [
            {id:1,referenceDocument:'BR200-20240501-2',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '17/01/2024',idTypeDocument:1 ,nomTypeDocument : 'Processus',nom:"Inventaire physique des stocks de ciments , sacs vides et palettes organisé par la DAF",nombreRevision:0,listeProcessusLie:[],modification:true},
            {id:2,referenceDocument:'EN3200-20240418-1',nomStatus:'Redaction',status:'En attente de vérification',dateCreation: '18/04/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Gestion des incidents des transporteurs",nombreRevision:0,listeProcessusLie:[{idProcessusLie:3200}],modification:false},
            {id:4,referenceDocument:'NA2100-20240723-5',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '23/07/2024',idTypeDocument:5 ,nomTypeDocument : 'Navigateur',nom:"TERMINAL - Description de fonction Agent d'expédition",nombreRevision:0,listeProcessusLie:[{idProcessusLie:2100}],modification:false},
            {id:3,referenceDocument:'SP3100-20230830-2',nomStatus:'Validation',status:'En attente de signature',dateCreation: '30/08/2023',idTypeDocument:2 ,nomTypeDocument : 'Sous processus',nom:"Mobile banking",nombreRevision:0,listeProcessusLie:[{idProcessusLie:3100},{idProcessusLie:3200}],modification:false}
        ]}
        
    ];
    
    return(
        <>
            <Header type = "Brouillon"></Header>

            <div className="ui container" style={{paddingTop:'8.5em'}}>
                <AccordionListBrouillon data = {data}></AccordionListBrouillon>
                {/* <ListContentBrouillon dataList={data}></ListContentBrouillon> */}
            </div>
        </>

    );
}