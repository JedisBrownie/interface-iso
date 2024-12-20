import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    AccordionAccordion,
    Icon
} from 'semantic-ui-react';

import './css/accordionArchive.css';
import { Component } from "react";
import ListArchive from './ListArchive';


export default class AccordionListArchiveDate extends Component{
    
 
    contentLevelTypeDocument = (listeTypeDocument) =>{
        return(
            <ListArchive data={listeTypeDocument}></ListArchive>
        );
    }
     
    contentLevelProcessusLie = (listeProcessusLie) =>{
        
        const panels = [];
               
        listeProcessusLie.forEach(processusLie => {

            const obj = { 
                key: `${processusLie.idProcessusLie}-${processusLie.nomProcessusLie}` , 
                title : (
                    <AccordionTitle>
                        <section className='accordion-title-pl' >
                            <Icon name='dropdown' />{processusLie.idProcessusLie} - {processusLie.nomProcessusLie}
                        </section>
                    </AccordionTitle>), 
                content : (
                    <AccordionContent className='accordion-section-pl'> 
                        {this.contentLevelTypeDocument(processusLie.listeTypeDocument)}
                    </AccordionContent>)
            }

            console.log(obj);
            panels.push(obj);
        });

        return(
            <div>
                <AccordionAccordion panels={panels}></AccordionAccordion>
            </div>
        );
    }



    contentLevelProcessusGlobal = (listeProcessusGlobal) =>{
        const panels = [];

        listeProcessusGlobal.forEach(processusGlobal =>{

            const obj = {
                key : `${processusGlobal.idProcessusGlobal}` , 
                title : (
                    <AccordionTitle>
                        <section className='accordion-title-pg'><Icon name='dropdown' />
                            {processusGlobal.idProcessusGlobal} - {processusGlobal.nomProcessusGlobal}
                        </section>
                    </AccordionTitle>) , 
                content : (
                    <AccordionContent className='accordion-section-pg'>
                        {this.contentLevelProcessusLie(processusGlobal.listeProcessusLie)}
                    </AccordionContent>) 
            }

            console.log(obj);
            panels.push(obj);
        });

        return(
            <div>
                <AccordionAccordion panels={panels}></AccordionAccordion>
            </div>
        );
    }
    
    contentLevelAll = (dataArchiveProcessus) =>{
        const rootPanels = [];

        dataArchiveProcessus.forEach(archive =>{
            
            const obj = {
                key:`${archive.date}` , 
                title : (
                    <AccordionTitle >
                        <section className='accordion-title-year'><Icon name='dropdown' />{archive.date}</section>
                    </AccordionTitle>), 
                content : (
                    <AccordionContent className='accordion-section-year'>
                        {this.contentLevelProcessusGlobal(archive.listeProcessusGlobal)}
                    </AccordionContent>) 
            }

            console.log(obj);
            rootPanels.push(obj);
        });


        return(
            <Accordion defaultActiveIndex={0} panels={rootPanels}></Accordion>
        )
    }

    // componentDidMount() {
    //     const yearContainer = document.querySelectorAll('.accordion-title-year');
        
    //     yearContainer.forEach((container, index) => {
    //       if (index % 2 === 1) {
    //         container.classList.add('alternate-color');
    //       }
    //     });

    //     const processusGlobalContainer = document.querySelectorAll('.accordion-title-pg');
        
    //     processusGlobalContainer.forEach((container, index) => {
    //       if (index % 2 === 1) {
    //         container.classList.add('alternate-color');
    //       }
    //     });

    //     const processusLieContainer = document.querySelectorAll('.accordion-title-pl');
        
    //     processusLieContainer.forEach((container, index) => {
    //       if (index % 2 === 1) {
    //         container.classList.add('alternate-color');
    //       }
    //     });

    // }



    render(){
        const {data} = this.props;

        return(
            <>
                {this.contentLevelAll(data)}
            </>
        );
    }

}



