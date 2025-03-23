import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import { Home } from "./pages/Home";
import { About } from './pages/About';



function Root() {

  return (
    <>
      <Routes>
        <Route 
        path="/" 
        element={<Home/>}
        />
         <Route 
        path="/about/" 
        element={<About/>}
        />
      </Routes>
    </>
  );
}

const router = createBrowserRouter(
  [{path:"*", Component: Root},]
)

function App() {

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
