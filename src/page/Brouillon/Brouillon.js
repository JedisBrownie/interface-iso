import Header from "../../components/header/Header";
import AccordionList from "../../components/list/AccordionList";

export default function Brouillon(){
    
    const data =
    [
        {id:1,type:'Processus',document:
            [   
                {id:1400,nom:'Planification',date:'03/01/2023',revision:8,status:'Applicable',confidentiel:false,modification:true},
                {id:1410,nom:'Procédure de sécurisation des matières premières',date:'16/03/2021',revision:0,status:'Applicable',confidentiel:true,modification:false}
            ]
        },
        {id:2,type:'Fiche d\'instruction',document:
            [   
                {id:1420,nom:'Code de conduite des affaires , conflits d\'intérêt et formations compliance',date:'03/01/2023',revision:1,status:'Applicable',confidentiel:false,modification:true},
                {id:1421,nom:'Comité d\'Hygiène , de Santé et de Sécurité au travail',date:'09/08/2023',revision:4,status:'Applicable',confidentiel:false,modification:false},
                {id:1422,nom:'Gestion des changements',date:'05/09/2022',revision:4,status:'Applicable',confidentiel:false,modification:false},
                {id:1423,nom:'Gestion des RCA (Root Cause Analysis)',date:'24/08/2022',revision:1,status:'Applicable',confidentiel:false,modification:false}
            ]
        },
        {id:4,type:'Enregistrement',document:
            [   
                {id:1458,nom:'Analyse des risques érgonomiques Ibity',date:'06/05/2021',revision:1,status:'Applicable',confidentiel:false,modification:false},
                {id:1455,nom:'Analyse des risques dépôts',date:'06/05/2022',revision:0,status:'Applicable',confidentiel:false,modification:false},
                {id:1453,nom:'Analyse des risques usine Ibity',date:'03/01/2023',revision:4,status:'Applicable',confidentiel:false,modification:true},
                {id:1452,nom:'Aspect Environnementaux Significatifs & Plan de Management Environnemental Ibity',date:'06/05/2022',revision:3,status:'Applicable',confidentiel:true,modifié:false}
            ]
        }
    ];
    
    return(
        <>
            <Header></Header>

            <div className="ui container" style={{paddingTop:'12em'}}>
                <AccordionList data={data}></AccordionList>
            </div>

        </>

    );
}