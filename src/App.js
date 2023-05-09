import './App.css';
import Header from './Component/Header';
import MainPage from './Component/MainPage';
import ForgotPassword from './views/ForgotPassword';
import ResetPassword from './views/ResetPassword';
import Code from './views/Code';
import Signup from './views/Signup';
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Component/Footer';
import Song from './views/Song';
import NewSong from './views/NewSong';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header />
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/ForgotPassword' element={<ForgotPassword />}/>
            <Route path='/ResetPassword' element={<ResetPassword />}/>
            <Route path='/Code' element={<Code />}/>
            <Route path='/Signup' element={<Signup />}/>
            <Route path='/Login' element={<Login />}/>
            <Route path='/Song/:id' element={<Song />}/>
            <Route path='/song/create' element={<NewSong />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
