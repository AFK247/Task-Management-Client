import AddTask from "./AddTask";
import CompletedTask from "./CompletedTask";
import Home from "./Home";
import Login from "./Login";
import Main from "./Main";
import MyTask from "./MyTask";
import Register from "./Register";
import UpdateTask from "./UpdateTask";


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
      {
        path: '/mytask',
        element: <MyTask></MyTask>
      },
      {
        path: '/update/:id',
        element: <UpdateTask></UpdateTask>
      },
      {
        path: '/completed',
        element: <CompletedTask></CompletedTask>
      },
      
    ]
  },
  
  {
    path:"*",
    element: <h1>Errrroorrr</h1>
  }
]);

export default router;