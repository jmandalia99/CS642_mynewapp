import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const EMOJIS = ["🍝","🍕","🥗","🍰","🍷","🧀","🍤","🍮","🍩","🌮","🍔","🍣"];

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((n) => n + 1)}
          aria-label="Restaurant fan button"
          style={{ padding: "10px 16px", borderRadius: 12, cursor: "pointer" }}
        >
          {EMOJIS[count % EMOJIS.length]} Olive Garden — clicks: {count}
        </button>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
