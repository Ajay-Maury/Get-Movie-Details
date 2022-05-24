// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
      {/* <Navbar /> */}
      {/* <Details/> */}
    </>
  );
}

export default App
