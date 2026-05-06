import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar
from "./components/Navbar"

import Notifications
from "./pages/Notifications"

import Priority
from "./pages/Priority"

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Notifications />}
        />

        <Route
          path="/priority"
          element={<Priority />}
        />

      </Routes>

    </BrowserRouter>

  )

}

export default App