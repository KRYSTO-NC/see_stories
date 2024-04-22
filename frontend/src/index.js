import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import App from './App'
import PrivateRoute from './components/utils/PrivateRoute'
import AdminRoute from './components/utils/AdminRoute'
import NotFound from './screens/notFound/NotFound'
import HomeScreen from './screens/homeScreen/HomeScreen'
import AboutScreen from './screens/aboutScreen/AboutScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Public Routes */}
      {/* Route générique pour gérer toutes les autres routes non définies */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<HomeScreen />}></Route>
      <Route path="/A-propos" element={<AboutScreen />}></Route>

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}></Route>
      {/* Admin users */}
      <Route path="" element={<AdminRoute />}></Route>
    </Route>,
  ),
)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
