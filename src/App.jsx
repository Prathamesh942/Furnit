import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <div>
    //   {/* <Home /> */}
    //   {/* <Shop /> */}
    //   {/* <Product /> */}
    //   {/* <Cart /> */}
    //   {/* <Checkout /> */}
    //   <Wishlist />
    // </div>
  );
}

export default App;
