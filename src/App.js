import './App.css';
import Header from './Component/Header';
import MainPage from './Component/MainPage';
import ForgotPassword from './Component/Pages/ForgotPassword';
import ResetPassword from './Component/Pages/ResetPassword';
import Code from './Component/Pages/Code';
import Signup from './Component/Pages/Signup';
import Login from './Component/Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer';
import HomePagesSec from './Component/Pages/HomePagesSec';
import { SkeletonTheme } from 'react-loading-skeleton';
import NewSong from './Component/Pages/NewSong';
function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor='#be3bd1' highlightColor='#be3bd1'>
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/ForgotPassword' element={<ForgotPassword />}/>
            <Route path='/ResetPassword' element={<ResetPassword />}/>
            <Route path='/Code' element={<Code />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/song/:id' element={<HomePagesSec />}/>
            <Route path='/song/create' element={<NewSong />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </SkeletonTheme>
    </div>
  );
}

export default App;
