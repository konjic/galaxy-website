
import './App.css';

import Home from './Components/Home'
import {
  Routes ,
  Route, 
  Router,

} from "react-router-dom";

function App() {



  return (
    <div className="App">

<Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/practice' element={<Home/>} />
            <Route path='/why-choose-us' element={<Home/>} />
            <Route path='/lawyers' element={<Home/>} />
            <Route path='/reviews' element={<Home/>} />
          </Routes>


 
    </div>
  );
}

export default App;
