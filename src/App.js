
import './App.css';
import Login from './Components/Login/login';
import { ThemeContextProvider } from './Context/themecontext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Signuplast from './Components/Signuplast';
import Dashboard from './Components/dashboard';



function App() {
  return(
    <>
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signup/last" element={<Signuplast/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      
      </Router>
    
    </ThemeContextProvider>
    
    </>
  ); 
}

export default App;
