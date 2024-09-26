import './schema.css';
export default function Schema(){
    return(
        <>
            <div className="ui container" style={{paddingTop:'4.5em'}}>
                <div className="grid-shema">
                    
                    <div className="column-one">
                        <div className="co-horizontal">
                            <span className="up">Clients</span>
                            <span className="down">Parties intéressées</span>
                        </div>
                    </div>

                    <div className="column-two">
                        <div className="row-one">
                            <div className="column-left">
                                <div className="cl-row-commercial">
                                    <div className='title'>3000 - Processus Commercial</div>
                                </div>
                            </div>

                            <div className="column-right">
                                
                                <div className="cr-row-management">
                                    <div className='title'>1000 - Processus Management</div>
                                </div>

                                <div className="cr-row-ressources">
                                    <div className='title-black'>2000 - Ressources</div>
                                </div>

                                <div className="cr-row-production">
                                    <div className='title'>4000 - Processus Production</div>
                                </div>

                                <div className="cr-row-support">
                                    <div className='title-black'>5000 - Activités Supports</div>
                                </div>

                                <div className="cr-row-administrative">
                                    <div className='title-black'>5100 - Direction Administrative et Financière</div>
                                </div>
                            </div>
                        </div>

                        <div className="row-two">
                            <div className="column-left">
                                <div className="cl-row-crise">
                                    <div className='title'>6000 - Gestion de crise</div>
                                </div>
                            </div>

                            <div className="column-right">
                                <div className="cr-row-surveillance">
                                    <div className='title'>9000 - Surveillance et mesures</div>
                                </div>
                                <div className="cr-row-conformites">
                                    <div className='title'>9200 - Non Conformités</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-three">
                        <div className="co-horizontal">
                            <span className="down">Parties intéressées</span>
                            <span className="up">Clients</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}