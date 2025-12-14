import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.tsx';
import SignUp from './components/SignUp.tsx';
import Mypage from './components/Mypage.tsx';
import MyOrder from './components/MyOrder.tsx';
import OrderDone from './components/OrderDone.tsx';
import Main from './components/Main.tsx';
import Cart from './components/Cart.tsx';
import Order from './components/Order.tsx';
import ProductDetail from './components/ProductDetail.tsx';
import SearchResult from './components/SearchResult.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/orderdone" element={<OrderDone />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Router>
  );
};

export default App;
