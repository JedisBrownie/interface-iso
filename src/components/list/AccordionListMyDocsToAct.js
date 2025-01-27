import { Component } from "react";
import {
    AccordionTitle,
    AccordionContent,
    Accordion,
    Icon
} from 'semantic-ui-react';
import './css/list.css';
import ListContentMyDocs from "./ListContentMyDocs";




export default class AccordionListMyDocsToAct extends Component {

    state = { 
        activeIndices: [],
    };

    expandAll = () => {
        const allIndices = this.props.data.map((_, index) => index);
        this.setState({ activeIndices: allIndices, allExpanded: true });
    };

    collapseAll = () => {
        this.setState({ activeIndices: [], allExpanded: false });
    };

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndices } = this.state;

        const isActive = activeIndices.includes(index);
        const newActiveIndices = isActive
            ? activeIndices.filter(i => i !== index)
            : [...activeIndices, index];

        this.setState({ activeIndices: newActiveIndices });
    };


    render() {
        const { activeIndices, allExpanded } = this.state;
        const { section, data } = this.props;

        // console.log(data);
        

        return (
            <div>
                <div style={{ marginBottom: '1em' }}>
                    {/* Buttons to expand/collapse all */}
                    <h2>{section}</h2>
                    <div style={{ display: 'flex', gap: '1%' }}>
                        <button onClick={this.expandAll} disabled={allExpanded}>
                            Tout développer
                        </button>
                        <button onClick={this.collapseAll} disabled={!allExpanded}>
                            Tout réduire
                        </button>
                    </div>
                </div>

                <Accordion fluid>
                    {data.map((item, index) => (
                        <div key={item.index}>
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
                                    {item.nomComplet}
                                </section>
                            </AccordionTitle>
                            
                            <AccordionContent
                                style={{ marginTop: '1.5em', marginBottom: '2em' }}
                                active={activeIndices.includes(index)}
                                className="accordion content"
                            >
                                <ListContentMyDocs dataList={item.listeDocument}></ListContentMyDocs>
                            </AccordionContent>
                        </div>
                    ))}
                </Accordion>
            </div>
        )
    }
}