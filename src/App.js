import { Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './components/Cards';
import Cart from "./components/Cart"
import Header from './components/Header';
import CardDetail from './components/CardDetail';
function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Card />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/card/:id" element={<CardDetail />}/>
      </Routes>
    </>
  );
}

export default App;
