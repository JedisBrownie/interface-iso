import Header from "../../components/header/Header";
import AccordionList from "../../components/list/AccordionList";

export default function Brouillon(){
    
    const data =
    [
        {id:1,type:'Processus',document:
            [   
                {id:1400,nom:'Planification',date:'03/01/2023',revision:3,status:'Applicable',confidentiel:false,modification:true},
                {id:1410,nom:'Revue de direction',date:'06/05/2022',revision:4,status:'Applicable',confidentiel:true,modification:false}
            ]
        },
        // {id:2,type:'Sous Processus',document:
        //     [   
        //         {id:1400,nom:'Planification',date:'03/01/2023',revision:3,status:'Applicable',confidentiel:false,modification:true},
        //         {id:1410,nom:'Revue de direction',date:'06/05/2022',revision:4,status:'Applicable',confidentiel:true,modification:false}
        //     ]
        // },
        {id:4,type:'Enregistrement',document:
            [   
                {id:1458,nom:'Code de conduite des affaires , conflits d\'intérêt et formation compliance',date:'03/01/2023',revision:15,status:'Applicable',confidentiel:false,modification:false},
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