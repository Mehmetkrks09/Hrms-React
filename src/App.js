import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

      <Navi/>
      <Container className="main">

         <Dashboard/>
         <ToastContainer position="bottom-right"/>
      </Container>
    
    
      
    </div>
  );
}

export default App;
