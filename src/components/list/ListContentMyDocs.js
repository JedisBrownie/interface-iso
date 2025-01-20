import React, { useEffect } from 'react'
import './css/list.css';
import { useNavigate } from 'react-router-dom';




/**
 * ListContentMyDocs
 */
export default function ListContentMyDocs(props) {

    useEffect(() =>{
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
            if (index % 2 === 1) {
            container.classList.add('alternate-color');
            }
        });
    },[]);


    const navigate = useNavigate();
    function handleShowDocument(reference, id, typeDocument, status){
        if(status === 'Brouillon'){
            navigate(`/modification/${typeDocument}/${reference}/${id}`);
        } else {
            console.log("Hafa ito");
            status = status.toLowerCase();
            navigate(`/document/${status}/${typeDocument}/${reference}/${id}`);   
        }
    }


    const { dataList } = props;
    console.log(dataList);
    


    return(
        <div className="content">
            {dataList.map((item, index) => (
                <div className="ui grid container liste" key={index} >
                    <div className="row">
                        <div className="two wide column">{item.nom}</div>
                        <div className="two wide column">{item.refDocument}</div>
                        <div className="two wide column">{item.titre}</div>
                        <div className="five wide column">{item.dateHeureEtat}</div>             
                    </div>
                </div>
            ))}
        </div>
    );
}