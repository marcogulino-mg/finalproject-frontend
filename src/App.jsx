import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BaseLayout from "./layouts/BaseLayout";
import VideogamesList from "./pages/VideogamesList";
import ConsolesList from "./pages/ConsolesList";
import VideogameShow from "./pages/VideogameShow";
import ConsoleShow from "./pages/ConsoleShow";
import SearchContext from "./contexts/SearchContext";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <SearchContext>
      <BrowserRouter>
        <Routes>
          <Route Component={BaseLayout}>
            {/* 404 Routing */}
            <Route path="*" element={<NotFoundPage />} />
            {/* <Route index Component={Homepage} /> */}
            {/* Videogames Routing */}
            <Route path="/videogames">
              <Route path="" element={<VideogamesList />} />
              <Route path=":slug" element={<VideogameShow />} />
            </Route>
            {/* Consoles Routing */}
            <Route path="/consoles">
              <Route path="" element={<ConsolesList />} />
              <Route path=":slug" element={<ConsoleShow />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </SearchContext>
  );
}

export default App;
