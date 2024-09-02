import Header from "../../components/header/Header";
import { Breadcrumb , BreadcrumbSection , BreadcrumbDivider } from "semantic-ui-react";
import AccordionList from "../../components/list/AccordionList";

export default function Brouillon(){
    
  
    return(
        <>
            <Header></Header>

            <div className="ui container" style={{paddingTop:'12em'}}>
                <AccordionList></AccordionList>
            </div>

        </>

    );
}