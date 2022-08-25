import logo from './logo.svg';

import Navbar from './Componentes/Navbar';
import UnSplash from './Componentes/UnSplash';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>

        <Route 
  
          path="/"
          element={[ <UnSplash key={"unsplash"} />]}>

        </Route>

</Routes>
      
    </div>
  );
}

export default App;
