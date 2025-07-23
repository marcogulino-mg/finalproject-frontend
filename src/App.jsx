import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from "./layouts/BaseLayout";
import VideogamesList from './pages/VideogamesList';

function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route Component={BaseLayout}>
          {/* <Route index Component={Homepage} /> */}
          <Route path="/videogames" element={<VideogamesList />} />
          {/* <Route path="*" Component={Notfound} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
