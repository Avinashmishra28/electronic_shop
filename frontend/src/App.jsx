import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDeails from "./pages/ProductDetails";
import AddProduct from "./admin/AddProduct";
import EditProduct from "./admin/EditProduct";
import ProductList from "./admin/ProductList";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import CheckoutAddress from "./pages/CheckoutAddress";
import Checkout from "./pages/Checkout";



function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
  {path: "/", element: <Home/>},
  {path: "/login", element: <Login/>},
  {path: "/signup", element: <Signup/>},
  {path: "/product/:id", element: <ProductDeails/>},
  {path: "/cart", element: <Cart />},
  {path: "/admin/Products", element: <ProductList/>},
  {path: "/admin/products/add", element: <AddProduct/>},
  {path: "/admin/products/:id", element: <EditProduct/>},
  {path: "/checkout-address", element: <CheckoutAddress/>},
  {path: "/checkout", element: <Checkout/>},
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router}/>;
}