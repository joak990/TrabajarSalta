
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

import Form from './Components/Form';


function App() {
  return (
    <div>
      
      <Navbar/>
    <Routes>
    <Route path="/about" element={<About/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
