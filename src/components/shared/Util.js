import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import BeenhereOutlinedIcon from '@mui/icons-material/BeenhereOutlined';
export default function Util(props){

    const {stateBrouillon,stateValidation,stateQuitter,handleQuitter,stateRevision,stateStatus,messageStatus,stateError,errorMessage,stateWarning,warningMessage} = props;
    

    return(
        <>
            <Snackbar open={stateBrouillon}>
                <Alert
                    // icon = {<BeenhereOutlinedIcon fontSize='15px' />}
                    severity="info"
                    variant="filled"
                    sx={{ width: '100%' , width:'20em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'13px',textAlign:'center'}}>Brouillon sauvegarder</span>
                </Alert>
            </Snackbar>

            <Snackbar open={stateValidation}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' , width:'20em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'13px',textAlign:'center'}}>Rédaction valider</span>
                </Alert>
            </Snackbar>

            <Snackbar open={stateQuitter} >
                <Alert
                    onClose={() => handleQuitter()}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' , width:'30em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'12px',textAlign:'center'}}>Si vous quittez maintenant, vous risquez de perdre les données non enregistrée</span>
                </Alert>
            </Snackbar>


            <Snackbar open={stateRevision}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' , width:'25em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'13px',textAlign:'center'}}>Votre demande de révision a été envoyer</span>
                </Alert>
            </Snackbar>

            <Snackbar open={stateStatus}>
                <Alert
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' , width:'20em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'13px',textAlign:'center'}}>{messageStatus}</span>
                </Alert>
            </Snackbar>

            <Snackbar open={stateError}>
                <Alert
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' , width:'20em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'13px',textAlign:'center'}}>Ce document a été refuser</span>
                </Alert>
            </Snackbar>

            <Snackbar open={stateWarning} >
                <Alert
                    onClose={() => handleQuitter()}
                    severity="warning"
                    variant="filled"
                    sx={{ width: '100%' , width:'30em' }}
                    style={{display:'flex',alignItems:'center'}}
                >
                <span style={{fontFamily:'Lato',fontSize:'12px',textAlign:'center'}}>{warningMessage}</span>
                </Alert>
            </Snackbar>


        
        </>
    )
}