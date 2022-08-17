import React, { useState } from "react";
import ColorBlock from './components/ColorBlock';
import ColorForm from "./components/ColorForm";

const DEFAULT_COLORS = [ 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

function App() {
  const [colors, setColors] = useState(DEFAULT_COLORS);

  const handleAddColor = (newColor) => {
  setColors([...colors, newColor]);
  }

  return (<div className="App">
    {colors.map(c => <ColorBlock color={c}/>)}
    <ColorForm addColor={handleAddColor} />
    </div>);
}

export default App;
