import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App.jsx';
import './index.css';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import {  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Users from './Components/User/Users.jsx';
import Github, { githubLoadder } from './Components/Github/Github.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"users/:userid",
        element:<Users/>
      },
      {
        loader:githubLoadder,
        path:"github",
        element:<Github/>
      }
  
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
