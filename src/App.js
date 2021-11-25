import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { Route, Router, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';




function App() {
 
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
  </BrowserRouter>
      
     
     
      
    </div>
  );
}

export default App;
