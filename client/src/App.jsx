import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import SignIn from "./components/pages/SignIn"
import SignUp from "./components/pages/SignUp"
import Dashboard from "./components/pages/Dashboard"
import Projects from "./components/pages/Projects"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/projects" element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App