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
    
    state = {
        activeYearIndex : 0,
        activePgIndex : 0,
        activePlIndex : 0,
        allExpanded : false,
    }

    handleClickYear = (e, titleProps) =>{
        const { index } = titleProps
        const { activeYearIndex , allExpanded } = this.state
    
        let newIndex;
        if (allExpanded) {
          newIndex = activeYearIndex === index ? -1 : index;
        } else {
          newIndex = index;
        }

        if(activeYearIndex === newIndex){
            newIndex = '';
        }

        this.setState({ activeYearIndex: newIndex })
    }

    handleClickPg = (e , titleProps) =>{
        const { index } = titleProps
        const { activePgIndex , allExpanded } = this.state
    
        let newIndex;
        if (allExpanded) {
          newIndex = activePgIndex === index ? -1 : index;
        } else {
          newIndex = index;
        }

        if(activePgIndex === newIndex){
            newIndex = '';
        }


        this.setState({ activePgIndex: newIndex })
    }

    handleClickPlIndex = (e , titleProps) =>{
        const { index } = titleProps
        const { activePlIndex , allExpanded } = this.state
    
        let newIndex;
        if (allExpanded) {
          newIndex = activePlIndex === index ? -1 : index;
        } else {
          newIndex = index;
        }
        
        if(activePlIndex === newIndex){
            newIndex = '';
        }

        this.setState({ activePlIndex: newIndex })
    }

    renderLevel3 = (listeTypeDocument) =>{
        console.log(listeTypeDocument);
        return(
            <ListArchive data={listeTypeDocument}></ListArchive>
        );
    }


    // renderLevel2 = (listeProcessusLie) =>{
    //     const panel2 = []; 

    //     listeProcessusLie.forEach((processusLie) => {
    //       panel2.push({
    //         key: `processusLie-${processusLie.idProcessusLie}`,
    //         title: processusLie.nomProcessusLie,
    //         content: (
    //             <AccordionAccordion>
    //                 {this.renderLevel3(processusLie.listeTypeDocument)}
    //             </AccordionAccordion>
    //         ), 
    //       });
    //     });
    //     console.log("panel 2 : " + panel2);

    //     return panel2;
    // }

    contentLevel2 = () =>{
        <div>
            
        </div>
    }

    renderLevel1 = (listeProcessusGlobal) =>{
        const panel1 = [];

        listeProcessusGlobal.forEach((processusGlobal) =>{
            panel1.push({
                key : `processusGlobal-${processusGlobal.idProcessusGlobal}`,
                titre : processusGlobal.nomProcessusGlobal,
                content : (
                   <AccordionAccordion panels={this.renderLevel2(processusGlobal.listeProcessusLie)}></AccordionAccordion> 
                )
            })
        });
        
        console.log("panel 1 : " + panel1);
        return panel1;
    }

    


    // renderAllLevel = (dataArchiveParDate) =>{
    //     const panel = dataArchiveParDate.map((archive) => (
    //         {
    //             key : `annee-${archive.date}`,
    //             titre : archive.date,
    //             content : (
    //                 <Accordion panels={archive.listeProcessusGlobal} defaultActiveIndex={0}></Accordion>
    //             )
    //         }
    //     ));
    //     return panel ;
    // }

    // renderAllLevel = (dataArchiveParDate) =>{
    //     const panel = [];

    //     dataArchiveParDate.forEach((archive) =>{
    //         panel.push({
    //             key : `annee-${archive.date}`,
    //             titre : archive.date,
    //             content : (
    //                 <Accordion panels={archive.listeProcessusGlobal} defaultActiveIndex={0}></Accordion>
    //             )
    //         })
    //     });

    //     console.log("panel : " + panel);
    //     return panel;
    // }





    render(){
        const {activeYearIndex,activePgIndex,activePlIndex} = this.state;
        const {data} = this.props;

        

        const listeTypeDocument = [
            {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
            ]},
            {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
            ]}
        ];

        const listeProcessusLie = [
            {idProcessusLie : '1100' , nomProcessusLie : 'Planification' , listeTypeDocument : [
                    
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                ]},
            ]},

            {idProcessusLie : '1200' , nomProcessusLie : 'Revue de direction' , listeTypeDocument : [
                
                {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                    {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                ]},
                {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                    {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                ]},
            ]}
        ];

        // return(
        //     <>
        //         <Accordion className='accordion-main'>
        //             {data.map((annee,index) =>(
        //                 <div key={index}>
        //                     <AccordionTitle active={activeYearIndex === index} index={index} onClick={this.handleClickYear} className='accordion-year'>
        //                         <section className='year-title'><Icon name='dropdown' />{annee.date}</section>  
        //                     </AccordionTitle>

        //                     <AccordionContent active={activeYearIndex === index} className='accordion-section-year'>
                                
        //                         {annee.listeProcessusGlobal.map((processusGlobal,index2) =>(
        //                             <div key={index2}>
        //                                 <Accordion>
        //                                     <AccordionTitle active = {activePgIndex === index2 } index={index2} onClick={this.handleClickPg} className='accordion-pg'>
        //                                         <section className='pg-title'><Icon name='dropdown' />{processusGlobal.idProcessusGlobal} - {processusGlobal.nomProcessusGlobal}</section>
        //                                     </AccordionTitle>

        //                                     <AccordionContent active = {activePgIndex === index2} className='accordion-section-pg'> 

        //                                         {processusGlobal.listeProcessusLie.map((processusLie,index3) =>(
        //                                             <div key={index3}>
        //                                                 <Accordion>
        //                                                     <AccordionTitle active = {activePlIndex === index3} index={index3} onClick={this.handleClickPlIndex} className='accordion-pl'>
        //                                                         <section className='pl-title'><Icon name='dropdown' />{processusLie.idProcessusLie} - {processusLie.nomProcessusLie}</section>
        //                                                     </AccordionTitle>
                                                            
        //                                                     <AccordionContent active = {activePlIndex === index3} className='accordion-section-pl'>
        //                                                         <ListArchive data={processusLie.listeTypeDocument}></ListArchive>
        //                                                     </AccordionContent>
        //                                                 </Accordion>
        //                                             </div>
                                                   
        //                                         ))}
                                                

        //                                     </AccordionContent>
        //                                 </Accordion>
        //                             </div>
        //                         ))}

        //                     </AccordionContent>
        //                 </div>
        //             ))}
                    

        //         </Accordion>
        //     </>
        // );

        return(
            <>
                {this.renderLevel3(listeTypeDocument)}
            </>
        )
    }

}



