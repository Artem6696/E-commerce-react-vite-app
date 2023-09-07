import { BrowserRouter, Route, Routes } from "react-router-dom"

import '/index.scss'
import { publickRoutes } from "./utils/routes"


function App() {
//   const isAuth = false

return (
    <BrowserRouter>
      <Routes>
        {publickRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );

}


export default App
