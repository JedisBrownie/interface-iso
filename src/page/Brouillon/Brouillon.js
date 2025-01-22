import axios from "axios";
import Header from "../../components/header/Header";
import AccordionListBrouillon from "../../components/list/AccordionListBrouillon";
import { useState, useEffect } from "react";
import AccordionListMyDocs from "../../components/list/AccordionListMyDocs";

export default function Brouillon(){
    
    const [currentUser, setCurrentUser] = useState(null);

    const [myDrafts, setMyDrafts] = useState([]);
    const [myToBeVerified, setMyToBeVerified] = useState([]);
    const [myToBeApproved, setMyToBeApproved] = useState([]);
    
    const [filteredData, setFilteredData] = useState([]);


    const fetchMyDrafts = async (userMatricule, documentState) => {
        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';

        try {
            const response = await axios.get(backEnd + '/document/get', {
                params: {
                    "userMatricule": userMatricule,
                    "documentState": documentState,
                }
            });
            setMyDrafts(response.data);
        } catch (error) {
            console.error('Error fetching drafts:', error);
        }
    }

    const fetchMyToBeVerified = async (userMatricule, documentState) => {
        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';

        try {
            const response = await axios.get(backEnd + '/document/get', {
                params: {
                    "userMatricule": userMatricule,
                    "documentState": documentState,
                }
            });
            setMyToBeVerified(response.data);
        } catch (error) {
            console.error('Error fetching drafts:', error);
        }
    }

    const fetchMyToBeApproved = async (userMatricule, documentState) => {
        const backEnd = window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'http://10.192.193.81:8080';

        try {
            const response = await axios.get(backEnd + '/document/get', {
                params: {
                    "userMatricule": userMatricule,
                    "documentState": documentState,
                }
            });
            setMyToBeApproved(response.data);
        } catch (error) {
            console.error('Error fetching drafts:', error);
        }
    }

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("user"));
        setCurrentUser(currentUser);
        console.log(currentUser.user_matricule);
        

        fetchMyDrafts(currentUser.user_matricule, 1);
        fetchMyToBeVerified(currentUser.user_matricule, 2);
        fetchMyToBeApproved(currentUser.user_matricule, 4);
    }, []);

    console.log(myDrafts);
    console.log(myToBeVerified);
    

    const myDocs = [
        {idType: 1, status: "Broullion", listeDocument: myDrafts},
        {idType: 2, status: "En cours de vérification", listeDocument: myToBeVerified},
        {idType: 2, status: "En cours d\'approbation", listeDocument: myToBeApproved},
    ];

    const data =
    [
        {idMatricule : '3569' , nom : 'Teddy Rakotoarison' , listeDocument : [
            {id:2,referenceDocument:'FI4150-20241112-2',nomStatus:'Validation',status:'En attente d\'approbation',dateCreation: '12/11/2024',idTypeDocument: 3 ,nomTypeDocument : 'Fiche d`\instruction',nom:"Gestion des EPI"},
            {id:4, referenceDocument:'NA2100-20240723-5', nomStatus:'Brouillon', status:'Brouillon', dateCreation: '23/08/2024', idTypeDocument:5, nomTypeDocument:'Enregistrement', nom:"Planification Budgetaire 2025"},
        ]},
        {idMatricule : '4520' , nom : 'Aina Razafindrakoto' , listeDocument : [
            {id:2,referenceDocument:'EN3200-20240418-1',nomStatus:'Redaction',status:'En attente de vérification',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Gestion des incidents des transporteurs"},
            {id:4,referenceDocument:'NA2100-20240723-5',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '23/08/2024',idTypeDocument:5 ,nomTypeDocument : 'Navigateur',nom:"TERMINAL - Description de fonction Agent d'expédition"},
            {id:3,referenceDocument:'SP3100-20230830-2',nomStatus:'Validation',status:'En attente de signature',dateCreation: '30/08/2023',idTypeDocument:2 ,nomTypeDocument : 'Sous processus',nom:"Mobile banking"}
        ]},
        {idMatricule : '2567' , nom : 'Aina Andriamahenina' , listeDocument : [
            {id:1,referenceDocument:'EN3200-20240418-1',nomStatus:'Redaction',status:'En attente de vérification',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Procedure d'exploitation Silo"},
            {id:5,referenceDocument:'FI4150-20241112-2',nomStatus:'Approbation',status:'Demande de révision',dateCreation: '12/11/2024',idTypeDocument: 3 ,nomTypeDocument : 'Fiche d`\instruction',nom:"Gestion des EPI"}
        ]},
        {idMatricule : '2456' , nom : 'Eddy Randria' , listeDocument : [
            {id:1,referenceDocument:'EN3200-20240418-1',nomStatus:'Brouillon',status:'Brouillon',dateCreation: '18/08/2024',idTypeDocument: 4 ,nomTypeDocument : 'Enregistrement',nom:"Meraki Serveur"},
        ]},
        {idMatricule : '4726' , nom : 'Tiavina Rakototafika' , listeDocument : [
            {id:1,referenceDocument:'FI3100-20240418-1',nomStatus:'Brouillon',status:'Redaction',dateCreation: '21/07/2024',idTypeDocument: 2 ,nomTypeDocument : 'Sous Processus',nom:"Implication securite routiere"},
        ]},
    ];
    
    return(
        <>
            <Header type = "Brouillon"></Header>

            <div className="ui container" style={{paddingTop:'8.5em'}}>
                {/* My Docs */}
                <AccordionListMyDocs section="Mes documents" data={myDocs}></AccordionListMyDocs>
                <br/>
                <br/>
                {/* End My Docs */}

                {/* To Be verified */}
                <AccordionListBrouillon section="A vérifier" data={data}></AccordionListBrouillon>
                <br/>
                <br/>
                {/* End To Be verified */}

                {/* To Be approved */}
                <AccordionListBrouillon section="A approuver" data={data}></AccordionListBrouillon>
                <br/>
                <br/>
                {/* End To Be approved */}
            </div>
        </>

    );
}