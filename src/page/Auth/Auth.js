import { useNavigate } from "react-router-dom";
import { verifLogin } from "./data/functionlogin";
import { useRef } from "react";



export default function Auth(){
    const emailRef = useRef();
    const passwordRef = useRef();

    const navigate = useNavigate();
    
    const handleAuth = () =>{
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        if (verifLogin(email, password)) {
            navigate('/home');
        } else {
            console.log("Erreur d'authentification");
        }
    };

    return(
        <div className="ui container" style={{width : '35rem',paddingTop:'15vh'}}>        
            <div className="">
                <div className="ui raised segment">

                    <div className="ui centered small image" style={{display:'flex',justifyItems:'center',width:'100%',paddingTop:'1.5rem'}}>
                        <img src="./logo.png" alt="" style={{width:'30%',margin:'0 auto'}}/>
                    </div>

                    <div className="ui small form" style={{marginTop:'27px'}}>
                        <div className="field">
                            <label>Email utilisateur</label>
                            <input type="text" ref={emailRef} />
                        </div>
                        <div className="field">
                            <label>Mot de passe</label>
                            <input type="password" ref={passwordRef}/>
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