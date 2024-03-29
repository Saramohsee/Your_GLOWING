import './App.css';
import Footer from './Components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Products from './Pages/Products';
import LandingPage from './Pages/LandingPage';
import Blog from './Pages/Blog';
import Header from './Components/Header';
import ScrollBar from './Components/ScrollBar';

 
function App() {

 return (
    <div className='App'>
    <ScrollBar/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/products" element={<Products />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
    <Footer />
    
  </div>
  );
}

export default App;



