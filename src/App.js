
import './App.css';

import Home from './Components/Home'
import {
  Routes ,
  Route, 
  Router,

} from "react-router-dom";

import ErrorPage from './Components/ErrorPage';

function App() {



  return (
    <div className="App">

<Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<ErrorPage/>} />
            <Route path='/hi-res-music' element={<ErrorPage/>} />
            <Route path='/vox-premium' element={<ErrorPage/>} />
            <Route path='/contact' element={<ErrorPage/>} />
          </Routes>


 
    </div>
  );
}

export default App;
