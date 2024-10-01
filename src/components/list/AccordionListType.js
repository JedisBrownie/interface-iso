import React, { Component } from 'react'
import {
  AccordionTitle,
  AccordionContent,
  Accordion,
  Icon
} from 'semantic-ui-react'
import ListContentType from './ListContentType';
import './list.css';

export default class AccordionListType extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state
    const { data } = this.props;

    return (
      <Accordion>
        {data.map((item,index) =>(
          <>
            <AccordionTitle active={activeIndex === index} index={index} onClick={this.handleClick} >
              <section style={{fontWeight:'bold',fontSize:'1.1em',color:' '}}><Icon name='dropdown' />{item.type} </section>
            </AccordionTitle>

            <AccordionContent active={activeIndex === index} className="accordion content">
              <ListContentType dataList={item.document}></ListContentType>
            </AccordionContent>
          </>
        ))}
      </Accordion>
    )
  }
}