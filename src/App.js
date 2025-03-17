
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import HomePage3 from './components/HomePage3';
import HomePage2 from './components/HomePage2';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import Question4 from './components/Question4';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Lpa from './components/Lpa';
import General from './components/General';
import Legalservice from './components/Legalservice';
import Livingtursts from './components/Livingtursts';
import Trusts from './components/Trusts';
import Calculators from './components/Calculators';
import Question5 from './components/Question5';
import Question6 from './components/Question6';
import Question7 from './components/Question7';
import Question8 from './components/Question8';
import Question9 from './components/Question9';
import Question10 from './components/Question10';
import Question11 from './components/Question11';
import Question12 from './components/Question12';
import Question13 from './components/Question13';
import Question14 from './components/Question14';


function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Navbar/>
         <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/will' element={<HomePage2/>}/>
          <Route path='/start' element={<HomePage3/>}/>
          <Route path='/question_1' element={<Question1/>}/>
          <Route path='/question_2' element={<Question2/>}/>
          <Route path='/question_3' element={<Question3/>}/>
          <Route path='/question_4' element={<Question4/>}/>
          <Route path='/question_5' element={<Question5/>}/>
          <Route path='/question_6' element={<Question6/>}/>
          <Route path='/question_7' element={<Question7/>}/>
          <Route path='/question_8' element={<Question8/>}/>
          <Route path='/question_9' element={<Question9/>}/>
          <Route path='/question_10' element={<Question10/>}/>
          <Route path='/question_11' element={<Question11/>}/>
          <Route path='/question_12' element={<Question12/>}/>
          <Route path='/question_13' element={<Question13/>}/>
          <Route path='/question_14' element={<Question14/>}/>
          
          <Route path='/lpa' element={<Lpa/>}/>
          <Route path='/general' element={<General/>}/>
          <Route path='/legalservice' element={<Legalservice/>}/>
          <Route path='/Calculators' element={<Calculators/>}/>
          <Route path='/trusts' element={<Trusts/>}/>
          <Route path='/livingtrusts' element={<Livingtursts/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
           
         </Routes>
       
       </BrowserRouter>
    </div>
  );
}

export default App;
