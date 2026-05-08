import './App.css'
import { useState } from 'react'

function App() {
  const [chart, setChart] = useState('');

  return (
    // Backend
    <div>
      {/*Frontend: HTML*/}
      <br/>
      <h1>Show Graphs</h1>
      
      <h2>Select a Graph Type</h2>
      <button style={{ width: '200px', height: '50px', backgroundColor: chart === 'scatter' ? 'lightblue' :""}} onClick={() => {setChart('scatter'); chart === 'scatter' ? setChart(''): setChart('scatter')}}>Scatter Graph</button>
      <button style={{ width: '200px', height: '50px', backgroundColor: chart === 'polar_line' ? 'lightblue' :""}} onClick={() => {setChart('polar_line'); chart === 'polar_line' ? setChart(''): setChart('polar_line')}}>Polar Line Graph</button>
      <button style={{ width: '200px', height: '50px', backgroundColor: chart === 'polar_bar' ? 'lightblue' :""}} onClick={() => {setChart('polar_bar'); chart === 'polar_bar' ? setChart(''): setChart('polar_bar')}}>Polar Bar Graph</button>
      <br/><br/><br/>
      
      <center>
        <img src="/chris_casa.jpeg" alt="Scatter Graph" style={{ width: '800px', height: '600px', display: chart === '' ? 'block' : 'none'}} />

        <iframe style={{ width: '800px', height: '600px', display: chart === 'scatter' ? 'block' : 'none'}} src="/polar_scatter.html" title="Scatter Graph" />
        <iframe style={{ width: '800px', height: '600px', display: chart === 'polar_line' ? 'block' : 'none'}} src="/polar_line.html" title="Polar Line Graph" />
        <iframe style={{ width: '800px', height: '600px', display: chart === 'polar_bar' ? 'block' : 'none'}} src="/polar_bar.html" title="Polar Bar Graph" />

      </center>
    </div>
  )
}

export default App
