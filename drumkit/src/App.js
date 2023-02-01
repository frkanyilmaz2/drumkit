
import { useState } from 'react';
import './App.css';
import Button from './Components/Button';

function App() {


  const [sounds, setSounds] = useState(true);
  const [name,setName] = useState('');
  return (
    <div className="drum-machine" id='drum-machine'>
     <Button sounds={sounds} setSounds={setSounds} name={name} setName={setName} />
    </div>
  );
}

export default App;
