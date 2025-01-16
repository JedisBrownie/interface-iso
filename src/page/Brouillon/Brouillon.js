import Header from "../../components/header/Header";
import AccordionListBrouillon from "../../components/list/AccordionListBrouillon";
import { useState } from "react";

export default function Brouillon(){
    
    const [filteredData, setFilteredData] = useState([]);

    const data =
    [
        {idMatricule : '3569' , nom : 'Teddy Rakotoarison' , listeDocument : [
            // {id:2,referenceDocument:'FI4150-20241112-2',nomStatus:'Validation',status:'En attente d\'approbation',dateCreation: '12/11/2024',idTypeDocument: 3 ,nomTypeDocument : 'Fiche d`\instruction',nom:"Gestion des EPI",nombreRevision:0,listeProcessusLie:[{idProcessusLie:4150},{idProcessusLie:4130},{idProcessusLie:4111}],modification:false},
            {id:4, referenceDocument:'NA2100-20240723-5', nomStatus:'Brouillon', status:'Brouillon', dateCreation: '23/08/2024', idTypeDocument:5, nomTypeDocument:'Enregistrement', nom:"Planification Budgetaire 2025", nombreRevision:0, listeProcessusLie:[{idProcessusLie:2100}], modification:false},
        ]},
        {idMatricule : '4520' , nom : 'Aina Razafindrakoto' , listeDocument : [
            {id:2,referenceDocument:'EN3200-20240418-1',nomStatus:'Redaction',status:'En attente de vérification',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Gestion des incidents des transporteurs",nombreRevision:0,listeProcessusLie:[{idProcessusLie:3200}],modification:false},
            {id:4,referenceDocument:'NA2100-20240723-5',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '23/08/2024',idTypeDocument:5 ,nomTypeDocument : 'Navigateur',nom:"TERMINAL - Description de fonction Agent d'expédition",nombreRevision:0,listeProcessusLie:[{idProcessusLie:2100}],modification:false},

            // {id:3,referenceDocument:'SP3100-20230830-2',nomStatus:'Validation',status:'En attente de signature',dateCreation: '30/08/2023',idTypeDocument:2 ,nomTypeDocument : 'Sous processus',nom:"Mobile banking",nombreRevision:0,listeProcessusLie:[{idProcessusLie:3100},{idProcessusLie:3200}],modification:false}
        ]},
        {idMatricule : '2567' , nom : 'Aina Andriamahenina' , listeDocument : [
            {id:1,referenceDocument:'EN3200-20240418-1',nomStatus:'Redaction',status:'En attente de vérification',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Procedure d'exploitation Silo",nombreRevision:0,listeProcessusLie:[{idProcessusLie:3200}],modification:false},
            // {id:5,referenceDocument:'FI4150-20241112-2',nomStatus:'Approbation',status:'Demande de révision',dateCreation: '12/11/2024',idTypeDocument: 3 ,nomTypeDocument : 'Fiche d`\instruction',nom:"Gestion des EPI",nombreRevision:0,listeProcessusLie:[{idProcessusLie:4150},{idProcessusLie:4130},{idProcessusLie:4111}],modification:false}
        ]},
        {idMatricule : '2456' , nom : 'Eddy Randria' , listeDocument : [
            {id:1,referenceDocument:'EN3200-20240418-1',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Meraki Serveur",nombreRevision:2,listeProcessusLie:[{idProcessusLie:5150}],modification:false},
        ]},
        {idMatricule : '4726' , nom : 'Tiavina Rakototafika' , listeDocument : [
            {id:1,referenceDocument:'FI3100-20240418-1',nomStatus:'Brouillon',status:'Redaction',dateCreation: '21/07/2024',idTypeDocument: 2 ,nomTypeDocument : 'Sous Processus',nom:"Implication securite routiere",nombreRevision:4,listeProcessusLie:[{idProcessusLie:3100}],modification:false},
        ]},
    ];
    
    return(
        <>
            <Header type = "Brouillon"></Header>

            <div className="ui container" style={{paddingTop:'8.5em'}}>
                <AccordionListBrouillon data={data}></AccordionListBrouillon>
                {/* <ListContentBrouillon dataList={data}></ListContentBrouillon> */}
            </div>
        </>

    );
}