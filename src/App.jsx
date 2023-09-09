import { BrowserRouter, Route, Routes } from "react-router-dom"

import '/index.scss'
import { publickRoutes } from "./utils/routes"
import { Catalog } from "./components/Catalog/Catalog";
import { ErrorPage } from "./pages/ErrorPage";


function App() {
//   const isAuth = false

return (
    <BrowserRouter>
      <Routes>
        {publickRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );

}


export default App
