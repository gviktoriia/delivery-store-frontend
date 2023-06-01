import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './components/Routing/Router';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
          <Router></Router>
      </BrowserRouter>
    </CartProvider>

  );
}

export default App;
