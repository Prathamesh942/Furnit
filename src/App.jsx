import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import "./App.css";
// import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Shop from "./pages/Shop";
import Login from "./pages/Login";
import Register from "./pages/Register";
import store from "./App/store";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

axios.defaults.withCredentials = true;

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
    path: "/product/:productId",
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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      {/* <UserProvider> */}
      <RouterProvider router={router} />
      {/* </UserProvider> */}
    </Provider>
  );
}

export default App;
