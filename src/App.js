import { NavBar } from "./components/NavBar";
import {Route, Routes} from 'react-router-dom'
import { Home } from "./pages/Home";


function App() {
  return (
    <>
   <NavBar/>
   <Routes>
      <Route path="/" element ={<Home/>} />
   </Routes>
   </>
  );
}

export default App;
