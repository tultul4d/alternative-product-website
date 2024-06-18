import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Error from "../pages/Error";
import AddQueries from "../pages/AddQueries/AddQueries";
import MyQueriers from "../pages/MyQueriers/MyQueriers";
import ProductUpdate from "../pages/ProductUpdate";
import QueryDetails from "../pages/QueryDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'myqueriers',
          element: <MyQueriers></MyQueriers>
        },
        {
          path: 'addqueries',
          element: <AddQueries></AddQueries>
        },
        {
          path: '/update/:id',
          element: <ProductUpdate></ProductUpdate>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/details',
          element: <QueryDetails></QueryDetails>
        }
      ] 
    },
  ]);


  export default router;