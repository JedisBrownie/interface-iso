import React, { useEffect } from 'react'
import './list.css';

export default function ListContentBrouillon(props){

    useEffect(() =>{
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
    },[]);

    const {dataList} = props;
    console.log(dataList);
    return(
        <div className="content">

            {dataList.map((item,index) => (
                <div className="ui grid container liste" key={index}>
                    <div className="row">
                              
                        <div className="three wide column" style={{display:'flex'}}>
                            <div className="key"></div>
                            <div>{item.status}</div>
                        </div>
              
                        <div className="two wide column">{item.dateCreation}</div>
              
                        <div className="two wide column">{item.nomTypeDocument}</div>
              
                        <div className="six wide column">{item.nom}</div>
              
                        <div className="one wide column">
                            <span>{item.nombreRevision}</span>
                            {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>}
                        </div>
              
                        <div className="two wide column">
                            1100 , 5515
                        </div>              
                    </div>
                </div>
                ))
            }
        </div>
    );
}