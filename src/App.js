
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Navbar/>
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Will' element={<h1>will</h1>}/>
          <Route path='/LPA' element={<h1>lpa</h1>}/>
          <Route path='/Trusts' element={<h1>Trusts</h1>}/>
          <Route path='/Calculators' element={<h1>Calculators</h1>}/>
          <Route path='/legal' element={<h1>legal</h1>}/>
          <Route path='/Started' element={<h1>start</h1>}/>
           
         </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
