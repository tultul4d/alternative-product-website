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


import Query from "../pages/Query";
import QueryCards from "../pages/QueryCards";
import Recommend from "../pages/Recommend/Recommend";
import { RecaptchaVerifier } from "firebase/auth";
import Recommendations from "../pages/Recommendations/Recommendations";
import PrivateRoute from "./PrivateRoute";
import RecommendationsForMe from "../pages/RecommendationsForMe/RecommendationsForMe";


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
          element: <PrivateRoute><MyQueriers></MyQueriers></PrivateRoute>
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
           path: '/query',
           element: <QueryCards></QueryCards>,
           loader: () => fetch('http://localhost:5000/product')
        },
        
        {
          path:'/details/:id',
          element: <QueryDetails></QueryDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: '/recommend/:id',
          element: <Recommend></Recommend>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: '/recommendations',
          element: <PrivateRoute><Recommendations></Recommendations></PrivateRoute>
        },
        
        {
          path: '/recommendforme',
          element: <PrivateRoute> <RecommendationsForMe></RecommendationsForMe></PrivateRoute>
        }
      
      

      ] 
    },
  ]);


  export default router;