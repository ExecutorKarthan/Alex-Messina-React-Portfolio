import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App';
import About from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ErrorPage from './pages/ErrorPage';
import Resources from './pages/Resources'

//Create routing so the main app can direct the user to the requested pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <About /> },
      { path: '/AboutMe', element: <About /> },
      { path: '/Resources', element: <Resources /> },
      { path: '/Portfolio', element: <Portfolio /> },
      { path: '/Contact', element: <Contact /> },
      { path: '/Resume', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);