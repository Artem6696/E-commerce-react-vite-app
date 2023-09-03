import { BrowserRouter, Route, Routes } from "react-router-dom"

import '/index.scss'
import { authRoutes, publickRoutes } from "./utils/routes"
// import { AppRouter } from "./components/AppRouter"

function App() {
  const isAuth = false

  return (
  
    <BrowserRouter>
            <Routes>
        {isAuth ? (
            authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )
        ) : (
            publickRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} />
            )
        )}
    </Routes>
    </BrowserRouter>
  
    
  )
}

export default App
