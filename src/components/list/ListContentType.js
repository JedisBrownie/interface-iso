import { useEffect } from 'react';
import './list.css';
export default function ListContentType(props){

    
    useEffect(() => {
        const gridContainers = document.querySelectorAll('.liste');
    
        gridContainers.forEach((container, index) => {
          if (index % 2 === 1) {
            container.classList.add('alternate-color');
          }
        });
      }, []);

      const {dataList} = props;

      return (
        <div className="content">
          {dataList.map((item, index) => (
            <div className="ui grid container liste" key={index}>
              <div className="row">
                
                <div className="nine wide column" style={{display:'flex'}}>
                  <div className="key">{item.confidentiel === true && <i class="key icon" style={{visibility:'visible',width:'2rem',color:'goldenrod'}}></i>}</div>
                  <div>{item.nom}</div>
                </div>

                <div className="two wide column">
                    {item.date}
                </div>

                <div className="one wide column">
                  {item.revision !== 0 && <span>{item.revision}</span>}
                </div>

                <div className="three wide column">
                  <i className="check circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'limegreen', fontSize: '1.1em'}}></i>
                    {item.status}
                    {item.modification === true && <span style={{ paddingLeft: '10px', color: 'red', fontSize: '1.65em' , fontWeight:'bold' }}>*</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
}