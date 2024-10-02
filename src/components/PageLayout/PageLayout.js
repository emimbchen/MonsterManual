import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function PageLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#maincontent" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="maincontent" role="main" className="container py-9 grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;
