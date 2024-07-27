import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from'react-redux'
import { store } from './App/index.js'
import { Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './AppComponents/RoutesElement/Home.jsx'
import { createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import MovieDetail from './AppComponents/RoutesElement/MovieDetailPage.jsx'
import SearchPage from './AppComponents/RoutesElement/SearchPage.jsx'
import MarvelPage from './AppComponents/RoutesElement/MarvelPage.jsx'
// import DisneyPage from './AppComponents/RoutesElement/DisneyPage.jsx'
import DisneyPage from './AppComponents/RoutesElement/DisneyPage.jsx'
import StarWar from './AppComponents/RoutesElement/StarWarsPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home/>} />
      <Route path="/movieDetailPage" element={<MovieDetail/>} />
      <Route path="/searchpage" element={<SearchPage/>}></Route>
      <Route path="/marvelPage" element={<MarvelPage/>}></Route>
      <Route path="/disneyPage" element={<DisneyPage/>}></Route>
      <Route path="/starWar" element={<StarWar/>}></Route>
       
 
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


