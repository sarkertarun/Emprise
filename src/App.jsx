
import RouteLayout from "./Components/RouteLayout";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Home from "./Pages/Home";

import SearchResults from "./Pages/SearchResults";
import Tour from "./Pages/Tour";


function App() {
  const router = createBrowserRouter(
       createRoutesFromElements(
          <Route>
            <Route path='/' element={<RouteLayout />}>
              <Route path='/' element={<Home />}/>
              <Route path='/search' element={<SearchResults />}/>
              <Route path='/tour' element={<Tour />}/>
            </Route>
         </Route>
    )
  );

return (
  <>

  <RouterProvider router={router} />
    
  </>
  )
}

export default App


