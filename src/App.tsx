// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/client/HomePage';
import ProductDetail from './pages/client/ProductDetail';
import ProductList from './pages/client/ProductList';
import Website from './pages/layout/Website'; // Import component Website
import Admin from './pages/layout/Admin';
import ListProducts from './pages/admin/product/Product';
import AddProduct from './pages/admin/product/AddProduct';
import UpdateProduct from './pages/admin/product/UpdateProduct';
import AdminPage from './pages/admin/dash';
import Categories from './pages/admin/category/Categories';
import AddCategory from './pages/admin/category/AddCategory';
import UpdateCategory from './pages/admin/category/UpdateCategory';
import Cart from './pages/client/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />}>
          <Route index element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path='cart' element={<Cart />} />
        </Route>
        {/* admin */}
        <Route path='/admin' element={<Admin />} >
          <Route index element={<AdminPage />} />
          <Route path='products' >
            <Route index element={<ListProducts />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/update' element={<UpdateProduct />} />
          </Route>
          <Route path='category' >
            <Route index element={<Categories />} />
            <Route path='add' element={<AddCategory />} />
            <Route path=':id/update' element={<UpdateCategory />} />
          </Route>
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
