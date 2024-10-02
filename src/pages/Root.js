import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#maincontent" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="maincontent" role="main" className="container py-9 grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
