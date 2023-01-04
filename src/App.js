import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route ,Router,Routes} from 'react-router-dom';
import Login from "./components/Login"
import DashBoard from './components/DashBoard';
function App() {
  return (
    <><Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      
    </Routes>
    </>
    
  );
}

export default App;
