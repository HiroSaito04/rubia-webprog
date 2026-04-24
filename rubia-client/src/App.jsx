import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App!</h1>
         <p>This is a simple React application.<br /><br />
           Name: [Mike Angelo Rubia]<br /> 
           Email: [mikearubia@gmail.]<br /> 
           GitHub: <a href="https://github.com/HiroSaito04/rubia-webprog.git">Project Repository</a>
          </p>
        </header>
      </div>
   </>
  )
}

export default App