import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from './component/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button value={"default"}>Default Button Design</Button>
      <Button value={"primary"}>Primary Button Design</Button>
      <Button value={"dashed"}>Dashed Button Design</Button>
      <br />
      <Button value={"text"}>Text Button Design</Button>
      <Button value={"link"}>LInk Button Design</Button>
    </div>
  );
}

export default App
