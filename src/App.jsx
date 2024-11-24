import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
        duration: 1300,
        once: true,
    });
    AOS.refresh();
}, []);
  return (
    <>
      <header className="border-b-2 bg-slate-100 sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <main className="min-h-[calc(180vh-232px)]">
       <section>
       <Outlet></Outlet>
       </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default App
