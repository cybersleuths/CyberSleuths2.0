import React from "react";

export default function Opportunity() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container mx-auto px-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-20 text-center"
          >
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-100 sm:text-3xl">
              Why to join Cyber Sleuths?
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5 "
          >
            <div className="w-full px-4 py-2 lg:w-1/2">
              <div className="mb-4 transform rounded-lg bg-gray-800 p-6 shadow-md transition duration-500 ease-in-out hover:scale-105">
                <p className="font-semibold text-gray-300 antialiased">
                  Gain hands-on experience in cybersecurity through workshops, hackathons, and real-world projects. Stay ahead with the latest trends and technologies.
                </p>
              </div>
              <div className="mb-4 transform rounded-lg bg-gray-800 p-6 shadow-md transition duration-500 ease-in-out hover:scale-105">
                <p className="font-semibold text-gray-300 antialiased">
                  Connect with experts, alumni, and like-minded peers. Build a strong professional network that can open doors to exciting career opportunities.
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <div className="mb-4 transform rounded-lg bg-gray-800 p-6 shadow-md transition duration-500 ease-in-out hover:scale-105">
                <p className="font-semibold text-gray-300 antialiased">
                  Access exclusive opportunities, classes, and mentorship programs. Get guidance from experienced professionals to advance your career in cybersecurity.
                </p>
              </div>
              <div className="mb-4 transform rounded-lg bg-gray-800 p-6 shadow-md transition duration-500 ease-in-out hover:scale-105">
                <p className="font-semibold text-gray-300 antialiased">
                  Contribute to meaningful projects that protect organizations and individuals from cyber threats. Be a part of a community that is making a positive impact in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
