import React from 'react'
import ColorBlock from './components/ColorBlock'

const colors = [ 'violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

function App() {
  return (<div className="App">{
    colors.map(c => <ColorBlock color={c} />)
    }</div>);
}

export default App;
