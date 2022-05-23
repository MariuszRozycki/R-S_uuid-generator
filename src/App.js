import './App.css';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  return (
    <div className="App">
      <p>This in your UUIDV nr:</p>
      <p>{uuidv4()}</p>    
    </div>
  );
}

export default App;
