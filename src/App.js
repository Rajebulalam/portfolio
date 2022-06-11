import { Route, Routes } from 'react-router-dom';
import './App.css';
import Features from './Pages/Home/Features/Features';
import Home from './Pages/Home/Home';
import Projects from './Pages/Home/Projects/Projects';
import Services from './Pages/Home/Services/Services';
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
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
      </Routes>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </div>
  );
}

export default App;
