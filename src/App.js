import './App.css';
import HeaderPage from './pages/HeaderPage';
import ProductListPage from './pages/ProductListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderPage />
        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
