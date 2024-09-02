import './header.css';
export default function Header(){
    return(
        <div className="ui inverted large top fixed text menu" style={{marginBottom:'20vh'}} id="menu">
            <div className="title header" style={{color:'white',margin:'auto auto',textAlign:'center',paddingTop:'1em',paddingBottom:'1em'}}>
                <h2>1000 - Processus Management </h2>
                <h4 style={{marginTop:'-0.2em'}}>Planification</h4>

                <div className="item" style={{fontSize:'1rem',paddingTop:'1em'}}>
                    <div className="ui icon input">
                        <i className="search link icon"></i>
                        <input type="text" placeholder="Rechercher document dans MDG-1000" style={{borderRadius:'0.8rem',width:'35vw',height:'5vh'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}