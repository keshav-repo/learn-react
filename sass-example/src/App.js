import logo from './logo.svg';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import VariableComponent from './component/VariableComponent';

function App() {
  return (
      <Router >
        <Routes>
           <Route path="/variable" element={ <VariableComponent/>}/>
        </Routes>
      </Router>
  )
}

export default App;
