import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon,
  Segment
} from 'semantic-ui-react'
import ListContent from './ListContent';

export default class AccordionList extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion>
        <AccordionTitle active={activeIndex === 0} index={0} onClick={this.handleClick} >
          <section style={{fontWeight:'bold',fontSize:'1.1em',color:' '}}><Icon name='dropdown' />Processus </section>
        </AccordionTitle>

        <AccordionContent active={activeIndex === 0}>
          <ListContent></ListContent>
        </AccordionContent>

        <AccordionTitle active={activeIndex === 1} index={1} onClick={this.handleClick} >
          <section style={{fontWeight:'bold',fontSize:'1.1em',color:' '}}><Icon name='dropdown' />Sous-Processus </section>
        </AccordionTitle>

        <AccordionContent active={activeIndex === 1}>
          <Segment></Segment>
        </AccordionContent>

        <AccordionTitle active={activeIndex === 2} index={2} onClick={this.handleClick} >
          <section style={{fontWeight:'bold',fontSize:'1.1em',color:' '}}><Icon name='dropdown' />Fiche d'instruction</section>
        </AccordionTitle>

        <AccordionContent active={activeIndex === 2}>
          <Segment></Segment>
        </AccordionContent>

        <AccordionTitle active={activeIndex === 3} index={3} onClick={this.handleClick} >
          <section style={{fontWeight:'bold',fontSize:'1.1em',color:' '}}><Icon name='dropdown' />Enregistrement</section>
        </AccordionTitle>

        <AccordionContent active={activeIndex === 3}>
          <Segment></Segment>
        </AccordionContent>


      </Accordion>
    )
  }
}