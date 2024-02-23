import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'

import App from './App';
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
import Resume from './pages/Resume';
// import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About/>,
      },
      {
        path: '/AboutMe',
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      // {
      //   path: '/Contact',
      //   element: <Contact />,
      // },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
