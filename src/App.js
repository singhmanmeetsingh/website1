import React,{ Suspense} from 'react';
import AppRoutes from "./AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {



  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </Router>
  );
}

export default App;
