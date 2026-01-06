/*--- IGNORE ---*/
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/todo">Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;




// import { Routes, Route, Link } from "react-router-dom";
//  import Home from "./pages/Home";
//  import Todo from "./pages/Todo";

// function App() {
//   return (
//     <>
//       <nav style={{ padding: "10px" }}>
//         <Link to="/">Home</Link> | <Link to="/todo">Todo</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<h1>HOME WORKS 🎉</h1>} />
//         <Route path="/todo" element={<h1>TODO WORKS 🎯</h1>} />
//       </Routes>
//     </>
//   );
// }

//export default App;

// function App() {
//   return <h1>APP IS RENDERING</h1>;
// }

// export default App;
