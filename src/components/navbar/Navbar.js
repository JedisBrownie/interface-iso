import './navbar.css';

export default function Navbar(){
      
    return(
        <div className="ui inverted large top fixed text menu" style={{padding:'5px 30px 5px 30px',marginBottom:'20vh'}} id="menu">
                <div className="left menu">
                    <div className="ui tiny image" style={{marginTop:'6px'}}>
                        <img src="./logo_blanc.png" alt="logo"></img>    
                    </div>
                </div>

                <div className="item" style={{display:'flex',justifyContent:'center',columnGap:'1.6rem',fontSize:'0.9rem'}}>
                    <a href = "/brouillon" className="item">
                        Mes brouillons
                    </a>

                    <a href = "/" lassName ="item">
                        Accès rapide navigateur
                    </a>

                    <a href = "/" lassName ="item">
                        MMI
                    </a>
                    
                    <div className ="ui dropdown item" style={{fontSize:'0.9rem'}} >
                        Archives <i className ="dropdown icon"></i>
                        <div className ="menu">
                            <a href = "/" lassName ="item">Par processus</a>
                            <a href = "/" lassName ="item">Par date</a>
                        </div>
                    </div>

                    <div className ="ui dropdown item" style={{fontSize:'0.9rem'}}>
                        Création document <i className ="dropdown icon"></i>
                        <div className ="menu">
                            <a href = "/" lassName ="item">Processus</a>
                            <a href = "/" lassName ="item">Sous Processus</a>
                            <a href = "/" lassName ="item">Fiche d'instruction</a>
                            <a href = "/" lassName ="item">Document</a>
                        </div>
                    </div>
                </div>

                <div className="right menu" >
                    <div className="item">
                        <i className="bell outline icon" style={{visibility:'visible',fontSize:'1.15em'}} ></i>
                    </div>

                    <div className="item" style={{fontSize:'0.9rem'}}>
                        <div className="ui icon input">
                            <i className="search link icon"></i>
                            <input type="text" placeholder="Rechercher document..." style={{borderRadius:'4rem'}}/>
                        </div>
                    </div>

                </div>
        </div>
    );
}