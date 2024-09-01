import React from "react";
import resourcesData from "./data/resourcesData";
import ResourceCard from "./components/ResourceCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resource() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative">
      {/* Navbar */}
      <eNavbar className="fixed top-0 left-0 w-full z-50" /> {/* Apply fixed positioning and high z-index */}
      
      <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white pt-16"> {/* Updated gradient */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-50 overflow-hidden">
          <article className="mb-10 col-auto">
            <div data-aos="fade-up" data-aos-duration="1000" className="text-center mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font mb-4">
                Resources
              </h1>
            </div>
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              {resourcesData.map((resources) => (
                <ResourceCard resources={resources} key={resources.title} />
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}
