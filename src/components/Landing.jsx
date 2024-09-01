import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div
          className={`relative h-screen w-full bg-cover bg-center transition-transform duration-700 ease-in-out ${
            scrolling ? "scale-75" : "scale-100"
          }`}
          style={{ backgroundImage: `url('/img/landing1.jpg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24">
              <h1
                className="font-headline text-brand-light text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-3xl xl:text-4xl"
              >
                Cyber Sleuthss
              </h1>
              <p
                className="mt-2 text-gray-300 sm:mt-4 sm:text-xl"
                style={{ width: '450px', lineHeight: '1.5', textAlign: 'justify' }}
              >
                Cyber Sleuths is the official Ethical Hacking Club at Dr. B. C. Roy Engineering College, within the CSE department. Join us in exploring ethical hacking and creating a safer digital world.
              </p>
              <div className="mt-6">
                <a
                  className="focus:outline-none inline-block transform rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-600 focus:ring focus:ring-red-700 focus:ring-opacity-50 focus:ring-offset-2 active:bg-red-700 sm:text-base"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Become a Member
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
