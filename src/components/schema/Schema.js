import './schema.css';
import { useNavigate } from 'react-router-dom';
export default function Schema(props){
    const {data} = props;
    const navigate = useNavigate();

    const seeDocumentValable = (identifiant) => {
        navigate(`/valable/${identifiant}`);
    };

    return(
        <>
            <div className="ui container" style={{paddingTop:'4em',display:'flex',justifyContent:'center'}}>
                <div className="grid-shema">
                    
                    <div className="column-one" style={{display:'none'}}>
                        {/* <div className="co-horizontal">
                            <span className="up">Clients</span>
                            <span className="down">Parties intéressées</span>
                        </div> */}
                    </div>

                    <div className="column-two">
                        <div className="row-one">
                            <div className="column-left">
                                <div className="cl-row-commercial">
                                    <div className='title'>3000 - Processus Commercial</div>

                                    <div className="liste-processus-vertical">
                                        {data[3000]?.map((processusLie) => (
                                            <div className="contenu-vertical" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} key={processusLie.idProcessusLie}>
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="column-right">
                                
                                <div className="cr-row-management">
                                    <div className='title'>1000 - Processus Management</div>
                                    <div className="liste-processus-horizontal">
                                                                        
                                    {data[1000]?.map((processusLie) => (
                                        <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} key={processusLie.idProcessusLie}>
                                            <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                            {processusLie.nom}
                                        </div>
                                    ))}

                                    </div>
                                </div>

                                <div className="cr-row-ressources">
                                    <div className='title-black'>2000 - Ressources</div>
                                    <div className="liste-processus-horizontal" >
                                                                        
                                        {data[2000]?.map((processusLie) => (
                                            <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                    
                                    </div>
                                </div>

                                <div className="cr-row-production">
                                    <div className='title'>4000 - Processus Production</div>
                                    <div className="liste-processus-horizontal">
                                                                        
                                    {data[4000]?.map((processusLie) => (
                                        <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                            <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                            {processusLie.nom}
                                        </div>
                                    ))}
                                                                    
                                    </div>
                                </div>

                                <div className="cr-row-support">
                                    <div className='title-black'>5000 - Activités Supports</div>
                                    <div className="liste-processus-horizontal">
                                                                        
                                    {data[5000]?.map((processusLie) => (
                                        <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                            <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                            {processusLie.nom}
                                        </div>
                                    ))}
                                                                    
                                    </div>
                                </div>

                                <div className="cr-row-administrative">
                                    <div className='title-black'>5100 - Direction Administrative et Financière</div>
                                    <div className="liste-processus-horizontal">
                                                                       
                                        {data[5100]?.map((processusLie) => (
                                            <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                                                    
                                    </div>                                
                                </div>
                            </div>
                        </div>

                        <div className="row-two">
                            <div className="column-left">
                                <div className="cl-row-crise">
                                    <div className='title'>6000 - Gestion de crise</div>
                                    <div className="liste-processus-vertical">
                                        {data[6000]?.map((processusLie) => (
                                            <div className="contenu-vertical" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="column-right">
                                <div className="cr-row-surveillance">
                                    <div className='title'>9000 - Surveillance et mesures</div>
                                    <div className="liste-processus-horizontal">
                                                                       
                                        {data[9000]?.map((processusLie) => (
                                            <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                                                    
                                    </div>   
                                </div>
                                <div className="cr-row-conformites">
                                    <div className='title'>9200 - Non Conformités</div>
                                    <div className="liste-processus-horizontal">
                                                                       
                                        {data[9200]?.map((processusLie) => (
                                            <div className="contenu-horizontal" onClick={()=> seeDocumentValable(processusLie.idProcessusLie)} >
                                                <section className='contenu-title'>{processusLie.idProcessusLie}</section>
                                                {processusLie.nom}
                                            </div>
                                        ))}
                                                                    
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="column-three">
                        <div className="co-horizontal">
                            <span className="down">Parties intéressées</span>
                            <span className="up">Clients</span>
                        </div>
                    </div> */}

                </div>
            </div>
        </>
    );
}