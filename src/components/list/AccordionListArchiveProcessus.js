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


export default class AccordionListArchiveProcessus extends Component{

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
                <Accordion panels={panels}></Accordion>
            </div>
        );
    }


    render(){
        const {data} = this.props;

        return(
            <>
                {this.contentLevelProcessusGlobal(data)}
            </>
        );
    }


}