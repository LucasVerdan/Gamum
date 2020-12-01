import React,{useState} from 'react';
import UpdateForm from '../componentes/UpdateForm'
import Container from '@material-ui/core/Container';
import Header from '../componentes/Header'


const EditUserPage = () =>  {
    const sections = [

      ];
    const [sectionPost, setSection ] = useState('');
    const getCurrentSection = (section) => {
      setSection(section);
    }
    return(
    <React.Fragment>
 <Header title="GAMUM" sections={sections} getCurrentSection={(data) => getCurrentSection(data)}/>
      <Container maxWidth="lg">
        <main>
          <UpdateForm/>          
        </main>
      </Container> 
    </React.Fragment>
    )
}

export default EditUserPage