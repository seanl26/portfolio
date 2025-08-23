// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import PageNotFound from "./pages/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Projects />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
  // return (
  //   <main className="min-h-screen grid place-items-center">
  //     <section className="text-center space-y-2">
  //       <h1 className="text-4xl font-bold">React + TS + Tailwind ✅</h1>
  //       <p className="text-base text-slate-400">If you see dark background + centered text, Tailwind is working.</p>
  //     </section>
  //   </main>
  // );
  
  // const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

export default App
