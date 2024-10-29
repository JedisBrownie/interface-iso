import { Component } from 'react';
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon
  } from 'semantic-ui-react';
  import './css/accordionArchive.css';
  export default class ListArchive extends Component{

    state = { 
        activeIndex: 0,
        allExpanded: false,
      };
    
      expandAll = () =>{
        this.setState({ allExpanded: true });
      }
    
      collapseAll = () =>{
        this.setState({ allExpanded: false });
      }
    
      handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex , allExpanded } = this.state
    
        let newIndex;
        if (allExpanded) {
          newIndex = activeIndex === index ? -1 : index;
        } else {
          newIndex = index;
        }

        if(activeIndex === newIndex){
            newIndex = '';
        }
        // const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render(){

        const {activeIndex} = this.state;
        const {data} = this.props;

        return(
            <>

                <Accordion>
                    {data.map((typeDocument,index) =>(
                        <div key={index}>
                            <AccordionTitle active={activeIndex === index} index={index} onClick={this.handleClick} className='accordion-type'>
                                <section className='type-title'><Icon name='dropdown' />{typeDocument.nomTypeDocument}</section>
                            </AccordionTitle>

                            <AccordionContent active={activeIndex === index} className='accordion-section-type'>
                                
                                    
                                {typeDocument.listeDocument.map((document,index2)=>(
                                    <div className='content-archive'>
                                        <div className='ui grid container liste-archive' key={index2}>
                                            <div className='row archive'>
                                                
                                                <div className='five wide column'> 
                                                    <div>{document.nom}</div>
                                                </div>
                                                
                                                <div className='two wide column'>
                                                    10/01/2004
                                                </div>
                                                
                                                <div className='two wide column'>
                                                    {document.dateArchive}
                                                </div>
                                                
                                                <div className="two wide column">
                                                    <i className="times circle outline icon" style={{ visibility: 'visible', marginRight: '10px', color: 'red', fontSize: '1.1em'}}></i>
                                                    {document.status}
                                                </div>

                                                <div className='two wide column'>
                                                    {document.nombreRevision}
                                                </div>

                                                <div className='three wide column' style={{float:'right'}}>
                                                    {document.referenceDoc}
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                


                            </AccordionContent>
                        </div>
                    ))}

                </Accordion>
            </>
        );
    }

}