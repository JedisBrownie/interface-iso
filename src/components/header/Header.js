import { useNavigate } from 'react-router-dom';
import { useState , useEffect} from 'react';
import './header.css';

export default function Header({type,entete,titreDocument,nomDocument}){

    const navigate = useNavigate();

    const backHome = () =>{
        navigate('/home');
    }

    const [userName, setUserName] = useState("");

    useEffect(() => {
        // Récupérer le userToken depuis le localStorage
        const userToken = localStorage.getItem('userToken');
        
        if (userToken) {
            const { nom, prenom } = JSON.parse(userToken); // Extraire nom et prénom
            setUserName(`${prenom} ${nom}`); // Mettre à jour le state avec le nom complet
        }
        
    }, []);


    const renderContent = () =>{
        switch (type) {
            case 'Brouillon':
                return (
                    <>
                        <div className="title header" style={{color:'white',paddingTop:'1em',paddingBottom:'1.5em'}}>
                            <h2> Mes documents </h2>
                            <h4 style={{marginTop:'-0.3em',fontSize:'1.2em'}}>{userName}</h4>
                        </div>
                        <div className="item-right">
                            <div className="ui icon input">
                                <input type="text" placeholder="Rechercher document..." style={{borderRadius:'0.5rem',width:'22em',height:'2.8em',fontSize:'12px'}}/>
                                <i className="search link icon" style={{marginRight:'0.2em',fontSize:'12px'}}></i>
                            </div>
                            <div className='list-button' style={{minHeight:'0.5em'}}>
                                <button className='ui mini button' style={{backgroundColor:'white'}} onClick={() => backHome()}>Retour</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout développer</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout réduire</button>
                            </div>
                        </div>
                    </>
                );
            case 'Valable':
                return (
                    <>
                        <div className="title header" style={{color:'white',paddingTop:'1em',paddingBottom:'1.5em'}}>
                            <h2>{entete.idProcessusGlobal} - {entete.nomProcessusGlobal}</h2>
                            <h4 style={{marginTop:'-0.3em',fontSize:'1.2em'}}>{entete.idProcessusLie} - {entete.nomProcessusLie}</h4>
                        </div>
                        <div className="item-right">
                            <div className="ui icon input">
                                <input type="text" placeholder="Rechercher document..." style={{borderRadius:'0.5rem',width:'22em',height:'2.8em',fontSize:'12px'}}/>
                                <i className="search link icon" style={{marginRight:'0.2em',fontSize:'12px'}}></i>
                            </div>
                            <div className='list-button' style={{minHeight:'0.5em'}}>
                                <button className='ui mini button' style={{backgroundColor:'white'}} onClick={() => backHome()}>Retour</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout développer</button>
                                <button className='ui mini button' style={{backgroundColor:'white'}}>Tout réduire</button>
                            </div>
                        </div>
                    </>
                );
            
            case 'Document':
                    return (
                        <>
                            <div className="title header" style={{color:'white',paddingTop:'1em',paddingBottom:'1.5em'}}>
                                <h2>{titreDocument}</h2>
                                <h4 style={{marginTop:'-0.3em',fontSize:'1.2em'}}>{nomDocument}</h4>
                            </div>
                            <div className="item-right">
                                <div className="ui icon input">
                                    <input type="text" placeholder="Rechercher document..." style={{borderRadius:'0.5rem',width:'22em',height:'2.8em',fontSize:'12px'}}/>
                                    <i className="search link icon" style={{marginRight:'0.2em',fontSize:'12px'}}></i>
                                </div>
                                <div className='list-button' style={{minHeight:'0.5em'}}>
                                    <button className='ui mini button' style={{backgroundColor:'white'}} onClick={() => backHome()}>Retour</button>
                                    <button className='ui mini button' style={{backgroundColor:'white'}}>Tout développer</button>
                                    <button className='ui mini button' style={{backgroundColor:'white'}}>Tout réduire</button>
                                </div>
                            </div>
                        </>
                    );
        }
    };

    return(
        
        <div className="ui inverted large top fixed text menu" id="menu-header">
            {renderContent()}
        </div>
    );
}