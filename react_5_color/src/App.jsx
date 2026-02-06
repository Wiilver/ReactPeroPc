import { useState } from 'react'
import Color from "./Color.jsx"
import Selector from './Selector.jsx';

function App() {
  const[color, setColor] = useState("#FFFFFF")
  return (
    <>
      <Color color = {color}/>
      <Selector selector = {setColor}/>
    </>
  );
}

export default App
