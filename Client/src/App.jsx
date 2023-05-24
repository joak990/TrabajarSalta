
import { Route,Routes} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Publica from './Components/Publica';
import Home from './Components/Home';


function App() {
  return (
    <div>
      <Navbar/>
    <Routes>
          <Route path="/form" element={<Publica/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
