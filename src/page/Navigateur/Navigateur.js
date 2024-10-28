import Header from "../../components/header/Header";
import AccordionListType from "../../components/list/AccordionListType";


export default function Navigateur(){

    const data = [
        {idTypeDocument:5,nomTypeDocument:'Navigateur',listeDocument:
            [   
                {id:1100,nom:'Système de management environnemental',dateApplication:'15/05/2024',nombreRevision:15,status:'Applicable',confidentiel:false,modification:false},
                {id:1410,nom:'Permis pour les Travaux Dangereux et Autorisation de travail',dateApplication:'24/05/2022',nombreRevision:12,status:'Applicable',confidentiel:false,modification:false}
            ]
        },
    ];

    return(
        <>
            <Header type="Document" nomDocument={"Navigateur"}></Header>

            <div className="ui container" style={{paddingTop:'7.5em'}}>
                <AccordionListType data={data}></AccordionListType>
            </div>
        </>
    );
}