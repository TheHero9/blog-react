import { Container } from "react-bootstrap"
import Login from "./Login"


function LoginPage(){
    return(
        <>
        
            <Container  
            className="d-flex align-items-center justify-content-center" 
            style={{minHeight: "100vh"}}
            >
                <div className="w-100" 
                style={{maxWidth: '400px'}}>
                    <Login></Login>
                </div>
            </Container>
        </>
    )
}


export default LoginPage