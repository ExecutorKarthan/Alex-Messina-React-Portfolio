import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import content from './content';

export default function App() {
  useEffect(() => {
    document.title = content.site.title;
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-page text-slate-800">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}