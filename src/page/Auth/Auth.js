import { useNavigate } from "react-router-dom";

function Authentification(){
    const navigate = useNavigate();

    const handleAuth = () =>{
        navigate('/home');
    };

    return { handleAuth };
}

export default function Auth(){
    
    const {handleAuth} = Authentification();

    return(
        <div className="ui container" style={{width : '35rem',paddingTop:'15vh'}}>        
            <div className="">
                <div className="ui raised segment">

                    <div className="ui centered small image" style={{display:'flex',justifyItems:'center',width:'100%',paddingTop:'1.5rem'}}>
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
                        <button className="fluid ui small red button" onClick={handleAuth} style={{marginTop:'20px',padding:'12px 0px'}}>
                           Connexion
                        </button>
                    </div>

                </div>
            </div>
        </div>

    );
}