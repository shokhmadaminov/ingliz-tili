import React, { Fragment, useState } from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider  } from 'react-router-dom'
import "./App.css"
import Menu from "./components/Menu"
import Todo from './components/Todo'
import Game from "./components/Game"

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Menu/>}/>
        <Route path='todo' element={<Todo/>}/>
        <Route path='game' element={<Game/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App