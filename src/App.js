import './App.css';

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from './pages/Home/home';
import Products from './pages/Products/products';
import Product from './pages/Product/product';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/produtos/:id",
        element: <Products />
      },
      {
        path: "/produto/:id",
        element: <Product />
      },
    ]
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
