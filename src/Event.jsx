import React from "react";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/NavBar"; 

export default function Event() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar /> {/* Include the navbar component */}
      <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-black pt-16">
        {/* Event Cards */}
        <section className="mx-auto mt-12 mb-50 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
          <article className="col-auto mb-10">
            <div data-aos="fade-up" data-aos-duration="1000" className="mb-20">
              <h1 className="title-font mb-20 mt-0 text-center text-2xl font-medium text-gray-100 sm:text-3xl">  
                Upcoming Event & Workshops
              </h1>
              {/* Banner */}
              <div className="flex flex-col rounded-lg bg-gray-800 xl:flex-row shadow-xl">
                <img
                  className="w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
                  src="/img/comingsoon.png"
                  alt="banner"
                />
                <div className="p-10 xl:p-16">
                  <div className="mb-8">
                    <h1 className="mb-4 w-full text-2xl text-gray-100 font-semibold">
                    ENCRYPTA <span className="text-red-500">2.0</span>
                    </h1>
                    <p className="text-gray-100">
                    Join us for Encrypta 2.0, a thrilling cyber security event hosted by the Cyber Security Club. Test your skills and compete with the best!
                    </p>
                    <p className="text-gray-400 mt-4">
                      <strong>Date:</strong> XX/XX/2025
                    </p>
                    <p className="text-gray-400">
                      <strong>Time:</strong> Will be notified soon
                    </p>
                    <p className="text-gray-400">
                      <strong>Location:</strong> Will be notified soon
                    </p>
                  </div>
                  <div>
                    <a
                      href="/eventdetails"
                      className="focus:outline-none mt-10 rounded-full bg-red-600 p-2 px-4 text-center font-semibold shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:ring"
                    >
                      Register Here
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" className="mt-10 text-center">
              <p className="title-font mb-4 text-center text-2xl font-medium text-gray-100 sm:text-3xl">
                Recent Events
              </p>
            </div>
            <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4 ">
              {eventCard.map(events => (
                <EventCard events={events} key={events.title} />
              ))}
            </section>
          </article>
        </section>
      </div>
    </div>
  );
}
