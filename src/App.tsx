import { useState } from "react";
import { useRef } from 'react';
import "./App.css";
import Hero from "./components/Hero";
import { NavbarSimple } from "./components/Navbar";
import About from "./components/About";
import Work from "./components/Work";
import { Contact } from "./components/Contact";
import { FooterWithSocialLinks } from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* <div className='flex flex-col gap-16 lg:gap-20'> */}

      <div className="flex flex-col w-full gap-8 overflow-hidden bg-bottom bg-no-repeat bg-contain bg-gray-999 dark:bg-gray-999-dark lg:gap-20 xl:gap-36 bg-footer">
        <div className="relative flex flex-col h-[75rem] sm:h-[85rem] lg:h-[60rem] space-y-20 bg-opacity-50 bg-cover bg-hero lg:flex-row">
          <div className="absolute flex justify-around w-screen h-full overflow-hidden bg-darkModeBG/70">
            <div className="absolute top-10">
              <NavbarSimple />
            </div>
            <div className="flex flex-col items-center gap-16 px-5 pt-40 rounded-lg lg:px-5 xl:gap-24 lg:flex-row lg:pt-36">
              <Hero />
              <img
                alt="Carina standing with her hand under her chin in a blue shirt and striped blazer"
                width="480"
                height="620"
                src="/src/assets/Carina-Portrait.jpg"
                className="rounded-[4.5rem] aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">

          <section id="about" className="container flex flex-col-reverse items-center justify-between gap-10 px-10 py-16 xl:justify-around lg:py-20 lg:px-5 md:px-16 xl:gap-2 lg:flex-row xl:pt-24 xl:pb-48">
            <img
              alt=""
              width="480"
              height="620"
              src="/src/assets/at-work.jpg"
              className="rounded-[4.5rem] aspect-[3/4] object-cover"
            />
            <About />
          </section>

          <section id="skills" className="lg:pt-16">
            <Skills />
          </section>

          
          <section id="work" className="container flex flex-col items-center justify-between gap-2 px-10 py-32 lg:flex-row">
            <Work />
          </section>
          <section id="contact" className="container py-8 pb-20 lg:py-32">
            <Contact />
          </section>
        </div>

        <footer className="">
          <FooterWithSocialLinks />
        </footer>

      </div>
    </>
  );
}

export default App;
