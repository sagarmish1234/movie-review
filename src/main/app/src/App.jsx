import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Detail from './pages/movieDetail/Detail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/register"
          element={<Register></Register>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/:id/detail" element={<Detail></Detail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
