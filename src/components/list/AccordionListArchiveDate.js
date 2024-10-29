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
    
    // state = {
    //     activeYearIndex : 0,
    //     activePgIndex : 0,
    //     activePlIndex : 0,
    //     allExpanded : false,
    // }

    // handleClickYear = (e, titleProps) =>{
    //     const { index } = titleProps
    //     const { activeYearIndex , allExpanded } = this.state
    
    //     let newIndex;
    //     if (allExpanded) {
    //       newIndex = activeYearIndex === index ? -1 : index;
    //     } else {
    //       newIndex = index;
    //     }

    //     if(activeYearIndex === newIndex){
    //         newIndex = '';
    //     }

    //     this.setState({ activeYearIndex: newIndex })
    // }

    // handleClickPg = (e , titleProps) =>{
    //     const { index } = titleProps
    //     const { activePgIndex , allExpanded } = this.state
    
    //     let newIndex;
    //     if (allExpanded) {
    //       newIndex = activePgIndex === index ? -1 : index;
    //     } else {
    //       newIndex = index;
    //     }

    //     if(activePgIndex === newIndex){
    //         newIndex = '';
    //     }


    //     this.setState({ activePgIndex: newIndex })
    // }

    // handleClickPlIndex = (e , titleProps) =>{
    //     const { index } = titleProps
    //     const { activePlIndex , allExpanded } = this.state
    
    //     let newIndex;
    //     if (allExpanded) {
    //       newIndex = activePlIndex === index ? -1 : index;
    //     } else {
    //       newIndex = index;
    //     }
        
    //     if(activePlIndex === newIndex){
    //         newIndex = '';
    //     }

    //     this.setState({ activePlIndex: newIndex })
    // }

    state = {
        activeIndexLevel1: null,
        activeIndexLevel2: {},
        activeIndexLevel3: {}
      };
    
      handleClickLevel1 = (index) => {
        this.setState((prevState) => ({
          activeIndexLevel1: prevState.activeIndexLevel1 === index ? null : index,
        }));
      };
    
      handleClickLevel2 = (globalIndex, index) => {
        this.setState((prevState) => ({
          activeIndexLevel2: {
            ...prevState.activeIndexLevel2,
            [globalIndex]: prevState.activeIndexLevel2[globalIndex] === index ? null : index
          }
        }));
      };
    
      handleClickLevel3 = (globalIndex, lieIndex, index) => {
        this.setState((prevState) => ({
          activeIndexLevel3: {
            ...prevState.activeIndexLevel3,
            [globalIndex]: {
              ...prevState.activeIndexLevel3[globalIndex],
              [lieIndex]: prevState.activeIndexLevel3[globalIndex]?.[lieIndex] === index ? null : index
            }
          }
        }));
    };


    contentLevelTypeDocument = (listeTypeDocument) =>{
        console.log(listeTypeDocument);
        return(
            <ListArchive data={listeTypeDocument}></ListArchive>
        );
    }

    contentLevelProcessusLie = (listeProcessusLie) =>{
        
        const panels = [];
        var index = 0;

        listeProcessusLie.forEach(processusLie => {
            panels.push(
                {
                    key: `${processusLie.idProcessusLie}` , 
                    title :  (
                        <AccordionTitle active={this.state.activeIndexLevel2[processusLie.idProcessusLie] === index} onClick={() => this.handleClickLevel2(processusLie.idProcessusLie, index)}>
                            <section className=''><Icon name='dropdown' />{processusLie.nomProcessusLie}</section>
                        </AccordionTitle>
                    ) , 
                    content : (
                        <AccordionContent active={this.state.activeIndexLevel2[processusLie.idProcessusLie] === index} >
                            {this.contentLevelTypeDocument(processusLie.listeTypeDocument)}
                        </AccordionContent>
                    ) 
                }
            );
            index = index + 1;
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
            panels.push(
                {
                    key : `${processusGlobal.idProcessusGlobal}` , 
                    title : `${processusGlobal.nomProcessusGlobal}` , 
                    content : this.contentLevelProcessusLie(processusGlobal.listeProcessusLie) 
                }
            )
        });

        return(
            <div>
                <AccordionAccordion panels={panels}></AccordionAccordion>
            </div>
        );
    }
    
    contentLevelAll = (dataArchiveProcessus) =>{
        const panels = [];

        dataArchiveProcessus.forEach(archive =>{
            panels.push({key:`${archive.date}` , title : `${archive.date}` , content : this.contentLevelProcessusGlobal(archive.listeProcessusGlobal)})
        });

        return(
            <Accordion defaultActiveIndex={0} panels={panels}></Accordion>
        )
    }




    render(){
        // const {activeYearIndex,activePgIndex,activePlIndex} = this.state;
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

        const listeProcessusGlobal = [
            {idProcessusGlobal : '1000' , nomProcessusGlobal : 'Processus Management',listeProcessusLie : [
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

            ]} ,
            
            {idProcessusGlobal : '2000' , nomProcessusGlobal : 'Ressources Mandeha',listeProcessusLie : [
                {idProcessusLie : '2100' , nomProcessusLie : 'Ressources Humaines' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    ]},
                ]},

                {idProcessusLie : '2300' , nomProcessusLie : 'Travaux neufs' , listeTypeDocument : [
                    
                    {idTypeDocument : 4 , nomTypeDocument : 'Enregistrement' , listeDocument : [
                        {referenceDoc : 'EN1100-20001205',idDocument:1,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                        {referenceDoc : 'EN1100-20001205',idDocument:2,nom:'Indicateurs et Objectifs 2008',status:'Archive',nombreRevision:8,dateArchive:'31/03/2004'},
                    ]},
                    {idTypeDocument : 3 , nomTypeDocument : 'Fiche d\'instruction' , listeDocument : [
                        {referenceDoc : 'FI1100-20001205',idDocument:1,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                        {referenceDoc : 'FI1100-20001205',idDocument:2,nom:'TT - Déchargement des ajouts en big bag',status:'Archive',nombreRevision:2,dateArchive:'31/03/2004'},
                    ]},
                ]}

            ]},
        ]

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
                {this.contentLevelAll(data)}
            </>
        );
    }

}



