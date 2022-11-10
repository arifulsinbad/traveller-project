import CheckOut from "../From/CheckOut";
import Login from "../From/Login";
import Orders from "../From/Orders";
import SignUp from "../From/SignUp";
import Main from "../layout/Main";
import Home from "../page/Home";
import Details from "../page/Place/Details";
import Place from "../page/Place/Place";
import Private from "../Private/Private";
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
    path:'/place', element:<Place></Place>,
    
  },
  {
    path:'/login', element:<Login></Login>
    
  },
  {
    path:'/signup', element:<SignUp></SignUp>
  },
  {
    path:'/checkout/:id', element:<CheckOut></CheckOut>,
    loader:({params})=>{
      return fetch(`https://y-chi-amber.vercel.app/services/${params.id}`)
    }
  },
  {
    path:'/orders', element:<Orders></Orders>
    
  },
  {
    path:'/details/:id', element:<Private><Details></Details></Private>,
    loader:({params})=>{
      return fetch(`https://y-chi-amber.vercel.app/services/${params.id}`)
    }
  },

  ]
 }

]);
export default router;