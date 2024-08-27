// import '../../assets/fomantic/dist/semantic.min.css';
export default function Auth(){
    
    return(
        <div className="ui middle aligned container" style={{width : '35rem'}}>        
            <div className="">
                <div className="ui raised segment">

                    <div className="ui small image" style={{display:'flex',justifyItems:'center',width:'100%'}}>
                        <img src="./logo.png" alt="" style={{width:'30%',margin:'0 auto'}}/>
                    </div>

                    <div className="ui small form" style={{marginTop:'27px'}}>
                        <div className="field">
                            <label>Nom d'utilisateur</label>
                            <input type="text" />
                        </div>
                        <div className="field">
                            <label>Mot de passe</label>
                            <input type="password" />
                        </div>
                        <button className="fluid ui small red button" style={{marginTop:'20px',padding:'12px 0px'}}>
                           Connexion
                        </button>
                    </div>
                </div>
            </div>
        </div>
       


    );
}