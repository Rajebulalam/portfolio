import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import BottomFooter from './Shared/BottomFooter';
import Footer from './Shared/Footer';
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
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default App;
