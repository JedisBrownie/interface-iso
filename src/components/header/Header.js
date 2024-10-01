import './header.css';
export default function Header({type}){

    const renderContent = () =>{
        switch (type) {
            case 'Brouillon':
                return (
                    <>
                        <div className="title header" style={{color:'white',paddingTop:'1em',paddingBottom:'1.5em'}}>
                            <h3> Mes documents </h3>
                        </div>
                        <div className="item-right">
                            <div className="ui icon input">
                                <input type="text" placeholder="Rechercher document" style={{borderRadius:'2rem',width:'22em',height:'2.5em',fontSize:'0.95em'}}/>
                                <i className="search link icon" style={{marginRight:'0.2em'}}></i>
                            </div>
                            {/* <div className='list-button'>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout développer</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout réduire</button>
                            </div> */}
                        </div>
                    </>
                );
            case 'Valable':
                return (
                    <>
                        <div className="title header" style={{color:'white',paddingTop:'1em',paddingBottom:'1em'}}>
                            <h2>1000 - Processus Management </h2>
                            <h3 style={{marginTop:'0.2em'}}>1100 - Planification</h3>
                        </div>
                        <div className="item-right">
                            <div className="ui tiny icon input">
                                <input type="text" placeholder="Rechercher document dans MDG-1000" style={{borderRadius:'2rem',width:'22em',height:'2.5em',fontSize:'0.95em',marginTop:'0.8em'}}/>
                                <i className="search link icon" style={{marginTop:'0.4em',marginRight:'0.2em'}}></i>
                            </div>
                            <div className='list-button'>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout développer</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout réduire</button>
                            </div>
                        </div>
                    </>
                );
            default:
                return (
                    // Contenu par défaut
                    <h2>Documents</h2>
                );
        }
    };

    return(
        
        <div className="ui inverted large top fixed text menu" id="menu-header">
            {renderContent()}
            
        </div>
    );
}