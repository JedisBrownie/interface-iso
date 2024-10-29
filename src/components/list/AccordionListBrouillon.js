import { Component } from "react";
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon
  } from 'semantic-ui-react';
  import ListContentType from './ListContentType';
  import './css/list.css';
import ListContentBrouillon from "./ListContentBrouillon";
  

export default class AccordionListBrouillon extends Component{
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
        // const newIndex = activeIndex === index ? -1 : index
        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex , allExpanded } = this.state
        const { data } = this.props;
      
        return (
          <Accordion>
            {data.map((item,index) =>(
              <div key={item.idMatricule}>
                <AccordionTitle active={activeIndex === index} index={index} onClick={this.handleClick} className='accordion-section'>
                  <section style={{fontWeight:'bold',fontSize:'1.1em',paddingTop:'0em'}}><Icon name='dropdown' />{item.nom} </section>
                </AccordionTitle>
    
                <AccordionContent active={activeIndex === index} className="accordion content">
                    <ListContentBrouillon dataList={item.listeDocument}></ListContentBrouillon>
                </AccordionContent>
              </div>
            ))}
          </Accordion>
        )
    }
    
}