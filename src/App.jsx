// Bring in require modules for use, including the stylesheet
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './styles/stylesheet.css'

export default function App() {
 //Use the outlet component to swap between pages, but define a constant header, navigation bar and footer
  return (
    <>
      <main>
        <Header />
        <Navigation />
        <Outlet />
        <Footer/> 
      </main> 
    </>
  );
}