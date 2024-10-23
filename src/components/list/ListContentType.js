import { useEffect, useRef } from 'react';
import './list.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThreePointMenu from '../shared/ThreePointMenu';
import { useNavigate } from 'react-router-dom';

export default function ListContentType(props){
    const {dataList} = props;
    
    const refDocument = useRef(null);
    const refIdDocument = useRef(null);

    
    useEffect(() => {
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
    }, []);


    const handleShowDocument = (reference,id) => {
      console.log("Affiché contenu document : " + reference + " , " + id);
      
    }



    return (
      <div className="content">
        {dataList.map((item, index) => (
          
  
            <div className="ui grid container liste" key={index} >
              
              <div hidden ref={refDocument}>{item.referenceDocument}</div>
              <div hidden ref={refIdDocument}>{item.idDocument}</div>
              
              <div className="row" onClick={() =>handleShowDocument(item.referenceDocument,item.idDocument)}>

                <div className="nine wide column" style={{display:'flex',alignItems:'center'}}>
                  <div className="key">{item.confidentiel === true && <i className="key icon" style={{visibility:'visible',width:'2rem',color:'goldenrod'}}></i>}</div>
                  <div>{item.nom}</div>
                </div>

                <div className="two wide column">
                    {item.dateApplication}
                </div>

                <div className="one wide column">
                  {item.nombreRevision !== 0 && <span>{item.nombreRevision}</span>}
                </div>

                <div className="three wide column">
                  <i className="check circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'limegreen', fontSize: '1.1em'}}></i>
                    {item.status}
                    {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>}
                </div>

                <div className="one wide column" style={{color:'black'}}>
                  <ThreePointMenu modification={item.modification} reference={item.referenceDocument} idDocument = {item.idDocument}></ThreePointMenu>
                </div>
              </div>
            </div>

        ))}
      </div>
    );
}