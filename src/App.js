import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import MainHeader from './Shared/Header/MainHeader';
import TopHeader from './Shared/Header/TopHeader';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <MainHeader></MainHeader>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
