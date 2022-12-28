import AddTask from "./AddTask";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import Register from "./Register";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addtask',
        element: <AddTask></AddTask>
      },
      
    ]
  },
  
  {
    path:"*",
    element: <h1>Errrroorrr</h1>
  }
]);

export default router;