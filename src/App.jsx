// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Home from './Components/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id/:type" element={<Details />}></Route>
      </Routes>
    </>
  );
}

export default App
