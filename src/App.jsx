import Home from "./pages/Home"
import Instagram from "./pages/Instagram";
import Login from "./pages/Login"
import GetStarted from "./pages/GetStarted";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="instagram" element={<Instagram />} />
          <Route path="getstarted" element={<GetStarted />} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
