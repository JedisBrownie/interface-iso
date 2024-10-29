import { useEffect, useRef } from 'react';
import './css/list.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThreePointMenu from '../shared/ThreePointMenu';
import { useNavigate } from 'react-router-dom';

export default function ListContentType(props){
    const {dataList,typeDocument} = props;
    
    useEffect(() => {
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
    }, []);

    const navigate = useNavigate();

    const handleShowDocument = (reference,id) => {
      console.log("Affiché contenu document : " + reference + " , " + id + " , " + typeDocument);
      navigate(`/document/${typeDocument}/${reference}/${id}`);        
    }

    

    return (
      <div className="content">
        {dataList.map((item, index) => (
          
  
            <div className="ui grid container liste" key={index} >
              
              
              <div className="row fifteen wide column" onClick={() =>handleShowDocument(item.referenceDocument,item.idDocument)}>

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

              </div>
              
                <div className="one wide column" style={{color:'black'}}>
                  <ThreePointMenu modification={item.modification} reference={item.referenceDocument} idDocument = {item.idDocument}></ThreePointMenu>
                </div>

            </div>

        ))}
      </div>
    );
}