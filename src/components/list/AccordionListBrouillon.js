import { Component } from "react";
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon
} from 'semantic-ui-react';
import ListContentBrouillon from "./ListContentBrouillon";
import './css/list.css';

export default class AccordionListBrouillon extends Component {
    state = { 
        activeIndices: [], // Array to track active indices
        allExpanded: false, // Tracks whether all items are expanded
    };

    expandAll = () => {
        const allIndices = this.props.data.map((_, index) => index); // Create an array of all indices
        this.setState({ activeIndices: allIndices, allExpanded: true });
    };

    collapseAll = () => {
        this.setState({ activeIndices: [], allExpanded: false }); // Clear the active ind ices
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndices } = this.state;

        const isActive = activeIndices.includes(index);
        const newActiveIndices = isActive
            ? activeIndices.filter(i => i !== index) // Remove index if already active
            : [...activeIndices, index]; // Add index if not active

        this.setState({ activeIndices: newActiveIndices });
    };

    render() {
        const { activeIndices, allExpanded } = this.state;
        const { section, data } = this.props;

        return (
          <div>
            <div style={{ marginBottom: '1em' }}>
              {/* Buttons to expand/collapse all */}
              <h2>{section}</h2>
              <button onClick={this.expandAll} disabled={allExpanded}>
                Tout développer
              </button>
              <button onClick={this.collapseAll} disabled={!allExpanded}>
                Tout réduire
              </button>
            </div>
            <Accordion fluid>
              {data.map((item, index) => (
                <div key={item.idMatricule}>
                  <AccordionTitle
                    active={activeIndices.includes(index)}
                    index={index}
                    onClick={this.handleClick}
                    className="accordion-section"
                  >
                    <section
                      style={{ fontWeight: 'bold', fontSize: '1.1em', paddingTop: '0em' }}
                      className="accordion-title-brouillon"
                    >
                      <Icon name="dropdown" />
                      {item.nom}
                    </section>
                  </AccordionTitle>
                  <AccordionContent
                    style={{ marginTop: '1.5em', marginBottom: '2em' }}
                    active={activeIndices.includes(index)}
                    className="accordion content"
                  >
                    <ListContentBrouillon dataList={item.listeDocument}></ListContentBrouillon>
                  </AccordionContent>
                </div>
              ))}
            </Accordion>
          </div>
        );
    }
}
