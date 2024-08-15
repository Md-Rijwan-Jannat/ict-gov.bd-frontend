import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";

const MainLayout = () => {
  return (
    <main className="container mx-auto px-2 md:-px-4 bg-white-50 shadow">
      <nav className="my-6">
        <Navbar />
      </nav>
      <header className="my-12">
        <Header />
      </header>
      <Banner />
      <section className="my-8">
        <Outlet />
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;
