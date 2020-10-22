import React from 'react';
import RegisterForm from '../componentes/RegisterForm'
import Container from '@material-ui/core/Container';



const RegisterPage = () =>  {
    return(
    <React.Fragment>
 
      <Container maxWidth="lg">
        <main>
          <RegisterForm/>          
        </main>
      </Container> 
    </React.Fragment>
    )
}

export default RegisterPage