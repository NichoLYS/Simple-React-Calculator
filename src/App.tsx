
import { Route, Routes} from 'react-router-dom';
import SupportPage from './SupportPage';
import Calculator from './Calculator';
import React from 'react';

function App() {
  
  return (
      <Routes>
        <Route path='/' element={<Calculator />}/>
        <Route path='/supportpage' element={<SupportPage />}/>
      </Routes>
    )
}

export default App;
