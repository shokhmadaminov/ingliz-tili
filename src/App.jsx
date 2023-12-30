import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./App.css"
import Menu from "./components/Menu"
import Todo from './components/Todo'
import Games from "./components/game/Games"
import AllWords from './components/game/AllWords'
import TenWords from './components/game/TenWords'
import TwentyWords from './components/game/TwentyWords'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
    {
      path: "todo",
      element: <Todo />
    },
    {
      path: "game",
      element: <Games />
    },
    {
      path: "allWords",
      element: <AllWords />
    },
    {
      path: "tenWords",
      element: <TenWords />
    },
    {
      path: "twentyWords",
      element: <TwentyWords />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App