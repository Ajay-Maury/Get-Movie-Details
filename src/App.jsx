// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Home from './Components/Home';
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
      {/* <Navbar /> */}
      {/* <Details/> */}
    </>
  );
}

export default App
