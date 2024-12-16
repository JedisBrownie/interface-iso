import AccordionListArchiveDate from "../../components/list/AccordionListArchiveDate";
import Header from "../../components/header/Header";
import AccordionListArchiveProcessus from "../../components/list/AccordionListArchiveProcessus";
import { useParams } from "react-router-dom";
export default function Archive(){

    const dataArchiveParDate = [
        {date : 2023 , listeProcessusGlobal : [
            {idProcessusGlobal : '1000' , nomProcessusGlobal : 'Processus Management',listeProcessusLie : [
                {idProcessusLie : '1100' , nomProcessusLie : 'Planification' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2001',status:'Archive',nombreRevision:8,dateApplication:'12/05/2000',dateArchive:'15/03/2000'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2001',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]},

                {idProcessusLie : '1200' , nomProcessusLie : 'Revue de direction' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]}

            ]} ,
            
            {idProcessusGlobal : '2000' , nomProcessusGlobal : 'Ressources',listeProcessusLie : [
                {idProcessusLie : '2100' , nomProcessusLie : 'Ressources Humaines' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]},

                {idProcessusLie : '2300' , nomProcessusLie : 'Travaux neufs' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]}

            ]},
        ]},


        {date : 2024 , listeProcessusGlobal : [
            {idProcessusGlobal : '1000' , nomProcessusGlobal : 'Processus Management',listeProcessusLie : [
                {idProcessusLie : '1100' , nomProcessusLie : 'Planification' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20241005-4',idDocument:1,nom:'Analyse Fournisseur Distributeur',status:'Archive',nombreRevision:2,dateApplication:'05/10/2024',dateArchive:'12/07/2024'},
                        {referenceDoc : 'EN1100-20231215-2',idDocument:2,nom:'Indicateur Objectif 2024',status:'Archive',nombreRevision:8,dateApplication:'15/12/2023',dateArchive:'16/08/2024'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20241102-1',idDocument:1,nom:'Suivi fiche client',status:'Archive',nombreRevision:2,dateApplication:'11/02/2024',dateArchive:'10/05/2024'},
                        {referenceDoc : 'FI1100-20240805-1',idDocument:2,nom:'Prix fournisseur Tana , Tamatave',status:'Archive',nombreRevision:1,dateApplication:'08/05/2024',dateArchive:'15/07/2024'},
                    ]},
                ]},

                {idProcessusLie : '1200' , nomProcessusLie : 'Revue de direction' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2024'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2024'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2024'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2024'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]}

            ]} ,
            
            {idProcessusGlobal : '2000' , nomProcessusGlobal : 'Ressources',listeProcessusLie : [
                {idProcessusLie : '2100' , nomProcessusLie : 'Ressources Humaines' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]},

                {idProcessusLie : '2300' , nomProcessusLie : 'Travaux neufs' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'10/01/2004',dateArchive:'31/03/2004'},
                    ]},
                ]}

            ]},
        ]},
    ];




    const dataArchiveParProcessus = [
        {idProcessusGlobal : '1000' , nomProcessusGlobal : 'Processus Management',listeProcessusLie : [
            {idProcessusLie : '1100' , nomProcessusLie : 'Planification' , listeTypeDocument : [
                
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'10/08/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                ]},
            ]},

            {idProcessusLie : '1200' , nomProcessusLie : 'Revue de direction' , listeTypeDocument : [
                
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                ]},
            ]}

        ]} ,
        
        {idProcessusGlobal : '2000' , nomProcessusGlobal : 'Ressources',listeProcessusLie : [
            {idProcessusLie : '2100' , nomProcessusLie : 'Ressources Humaines' , listeTypeDocument : [
                
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20240812',idDocument:1,nom:'Processus de recrutement nouveau personnel',status:'Archive',nombreRevision:1,dateApplication:'12/08/2024',dateArchive:'10/09/2024'},
                    {referenceDoc : 'FI1100-20241205',idDocument:2,nom:'Condition de paiement consultant',status:'Archive',nombreRevision:5,dateApplication:'12/05/2024',dateArchive:'15/09/2024'},
                ]},
            ]},

            {idProcessusLie : '2300' , nomProcessusLie : 'Travaux neufs' , listeTypeDocument : [
                
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                    {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateApplication:'14/05/2024',dateArchive:'31/03/2004'},
                ]},
            ]}

        ]},
    ];

    const {choix} = useParams();

    const renderContent = () =>{
        switch(choix) {
            case 'processus' : 
                return (
                    <>
                        <Header type="Document" titreDocument={"Archives"} nomDocument={"Par Processus"}></Header>
                        <div className="ui container" style={{paddingTop:'8.5em'}}>
                            <AccordionListArchiveProcessus data={dataArchiveParProcessus}></AccordionListArchiveProcessus>
                        </div>    
                    </>
                );
            case 'date' : 
                return (
                    <>
                        <Header type="Document" titreDocument={"Archives"} nomDocument={"Par Annee"}></Header>
                        <div className="ui container" style={{paddingTop:'8.5em'}}>
                            <AccordionListArchiveDate data={dataArchiveParDate}></AccordionListArchiveDate>
                        </div>    

                    </>
                );
        }
    
    }

    return(
        <>
            {renderContent()}
        </>
    );
}
