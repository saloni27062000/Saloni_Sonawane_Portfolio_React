import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import AOS from "aos";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollTop from "./ScrollTop.jsx";
import Preloader from "./Preloader.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  // Animate-on-scroll (replaces the original AOS init in main.js)
  useEffect(() => {
    AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
  }, []);

  // On every route change: jump to top, close the mobile menu, re-scan for data-aos elements
  useEffect(() => {
    window.scrollTo(0, 0);
    setNavOpen(false);
    const t = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(t);
  }, [pathname]);

  // Mobile nav open/close state lives on <body>, as the template's CSS expects
  useEffect(() => {
    document.body.classList.toggle("mobile-nav-active", navOpen);
    return () => document.body.classList.remove("mobile-nav-active");
  }, [navOpen]);

  // Sticky-header "scrolled" state on <body>
  useEffect(() => {
    const onScroll = () => document.body.classList.toggle("scrolled", window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("scrolled");
    };
  }, []);

  return (
    <>
      <Header navOpen={navOpen} onToggleNav={() => setNavOpen((o) => !o)} onNavigate={() => setNavOpen(false)} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
      <ScrollTop />
      <Preloader />
    </>
  );
}
