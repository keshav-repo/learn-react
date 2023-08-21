import React from "react";

import RenderList from "./misc/RenderList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SuggestionInInput from "./mui/SuggestionInInput";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<RenderList />} />
        <Route path="/suggest" element={<SuggestionInInput />} />
      </Routes>
    </Router>
  );
}

export default App;
