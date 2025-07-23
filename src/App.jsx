import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from "./layouts/BaseLayout";
import VideogamesList from './pages/VideogamesList';
import ConsolesList from "./pages/ConsolesList";
import VideogameShow from "./pages/VideogameShow";

function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route Component={BaseLayout}>
          {/* <Route index Component={Homepage} /> */}
          <Route path="/videogames" element={<VideogamesList />} />
          <Route path="/consoles" element={<ConsolesList />} />
          <Route path="/videogames/:slug" element={<VideogameShow />} />
          {/* <Route path="*" Component={Notfound} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
