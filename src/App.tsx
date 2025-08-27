import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} /> {/* to catch invalid URLs */}
      </Routes>
    </BrowserRouter>
  )
}

export default App