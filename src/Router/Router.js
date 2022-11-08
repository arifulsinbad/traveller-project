import CheckOut from "../From/CheckOut";
import Login from "../From/Login";
import Orders from "../From/Orders";
import SignUp from "../From/SignUp";
import Main from "../layout/Main";
import Home from "../page/Home";
import Place from "../page/Place/Place";
import Blog from "../shared/Blog";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
 {
  path:'/', element:<Main></Main>,
  children:[
   {
    path:'/', element:<Home></Home>
  },
  {
    path:'/blog', element:<Blog></Blog>
  },
  {
    path:'/place', element:<Place></Place>
  },
  {
    path:'/login', element:<Login></Login>
  },
  {
    path:'/signup', element:<SignUp></SignUp>
  },
  {
    path:'/checkout', element:<CheckOut></CheckOut>
  },
  {
    path:'/orders', element:<Orders></Orders>
  }
  ]
 }

]);
export default router;