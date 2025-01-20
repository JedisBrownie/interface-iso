import React, { useEffect } from 'react'
import './css/list.css';
import { useNavigate } from 'react-router-dom';

export default function ListContentBrouillon(props){

    useEffect(() =>{
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
    },[]);


    const navigate = useNavigate();

    function handleShowDocument(reference,id,typeDocument,status){
        if(status === 'Brouillon'){
            navigate(`/modification/${typeDocument}/${reference}/${id}`);
        } else {
            console.log("Hafa ito");
            status = status.toLowerCase();
            navigate(`/document/${status}/${typeDocument}/${reference}/${id}`);   
        }
    }

    

    const {dataList} = props;
    // console.log(dataList);
    return(
        <div className="content">

            {dataList.map((item,index) => (
                <div className="ui grid container liste" key={index} onClick={() => handleShowDocument(item.referenceDocument,item.id,item.idTypeDocument,item.nomStatus)}>
                    <div className="row">
                              
                        <div className="four wide column" style={{display:'flex'}}>
                            <div className="key"></div>
                            <div>{item.status}</div>
                        </div>
              
                        <div className="two wide column">{item.dateCreation}</div>
              
                        <div className="two wide column">{item.nomTypeDocument}</div>
              
                        <div className="five wide column">{item.nom}</div>             
                    </div>
                </div>
                ))
            }
        </div>
    );
}