import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from "./layouts/BaseLayout";
import VideogamesList from './pages/VideogamesList';
import ConsolesList from "./pages/ConsolesList";
import VideogameShow from "./pages/VideogameShow";
import ConsoleShow from "./pages/ConsoleShow";
import SearchContext from "./contexts/SearchContext";

function App() {
  return(
    <SearchContext>
      <BrowserRouter>
        <Routes>
          <Route Component={BaseLayout}>
            {/* <Route index Component={Homepage} /> */}
            <Route path="/videogames">
              <Route path="" element={<VideogamesList />} />
              <Route path=":slug" element={<VideogameShow />} />
            </Route>
            <Route path="/consoles">
              <Route path="" element={<ConsolesList />} />
              <Route path=":slug" element={<ConsoleShow />} />
            </Route>
            {/* <Route path="*" Component={Notfound} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchContext>
  )
}

export default App
