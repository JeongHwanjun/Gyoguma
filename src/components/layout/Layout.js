// src/components/layout/Layout.js
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gyoguma-light">
      <Header />
      <main className="flex-1 p-5 max-w-7xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
