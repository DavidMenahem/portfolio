
import './App.css'
import Routing from './Components/Layout/Routing/Routing';
function App():JSX.Element{
  return <div className="App">
    <div className='header'>
      <h1>David Menahem's portfolio</h1>
    </div>
    <div className='main'>
      <Routing />
    </div>
  </div>
  
}

export default App;
