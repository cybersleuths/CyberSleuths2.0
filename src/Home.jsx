import React from "react";
import Landing from "./components/Landing";
import Youtubevideo from "./components/Youtubevideo";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import Opportunity from "./components/Opportunity";
import Faq from "./components/Faq";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const runCallback = cb => {
    return cb();
  };
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="space-y-24 bg-gradient-to-br from-red-700 via-black to-red-900 min-h-screen">   
      <Landing />
      <Youtubevideo />
      {/* Event Cards */}
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            id="codeaajkal"
            className="mb-14 text-center"
          >
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-100 sm:text-3xl">
              Upcoming Event & Workshops
            </h1>
          </div>
          {/* Banner */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col rounded-lg bg-gray-800 xl:flex-row shadow-xl"
          >
            <img
              className="w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
              src="/img/comingsoon.png"
              alt="banner"
            />
            <div className="p-10 xl:p-16">
              <div className="mb-8">
                <h1 className="mb-4 text-2xl font-semibold text-gray-100">
                  ENCRYPTA <span className="text-red-400">2.0</span>
                </h1>
                <p className="text-gray-300">
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
                  className="focus:outline-none mt-10 rounded-full bg-red-600 p-2 px-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:ring"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-10 text-center"
          >
            <p className="title-font mb-4 text-center text-2xl font-medium text-gray-100 sm:text-3xl">
              Past Events
            </p>
          </div>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {runCallback(() => {
              const row = [];
              for (let i = 0; i < eventCard.length; i++) {
                row.push(
                  <EventCard events={eventCard[i]} key={eventCard[i].title} />
                );
              }
              return row;
            })}
          </section>
        </article>
      </section>
      <Opportunity />
     {/*<Faq />*/}
    </div>
  );
}
