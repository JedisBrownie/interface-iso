import './schema.css';
export default function Schema(){
    return(
        <>
            <div className="ui container" style={{paddingTop:'16vh'}}>
                <div className="grid-shema">
                    
                    <div className="column-one">
                        <div className="co-horizontal">
                            <span className="up"></span>
                            <span className="down"></span>
                        </div>
                    </div>

                    <div className="column-two">
                        <div className="row-one">
                            <div className="column-left">
                                <div className="cl-row-horizontal"></div>
                            </div>

                            <div className="column-right">
                                
                                <div className="cr-row-vertical">
                                </div>

                                <div className="cr-row-vertical">
                                </div>

                                <div className="cr-row-vertical">
                                </div>

                                <div className="cr-row-vertical">
                                </div>

                                <div className="cr-row-vertical">
                                </div>
                            </div>
                        </div>

                        <div className="row-two">
                            <div className="column-left">
                                <div className="cl-row-horizontal"></div>
                            </div>

                            <div className="column-right">
                                <div className="cr-row-vertical">
                                </div>
                                <div className="cr-row-vertical">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column-three">
                        <div className="co-horizontal">
                            <span className="up"></span>
                            <span className="down"></span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}