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
              <div className=" mb-4 transform  rounded-lg border border-gray-200 bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105 ">
                <p className="font-semibold text-gray-700 antialiased ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis dolor sem, vulputate dictum nisi venenatis eu. 
                </p>
              </div>
              <div className=" mb-4 transform  rounded-lg border border-gray-200 bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  ">
                <p className="font-semibold text-gray-700  antialiased ">
                Praesent mollis a ligula nec efficitur. Vivamus ultrices ut mi pellentesque sodales. Curabitur tristique laoreet luctus. 
                
                </p>
              </div>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <div
                href="#"
                className=" mb-4 transform rounded-lg border border-gray-200  bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  "
              >
                <p className="font-semibold text-gray-700 antialiased">
                Donec porttitor sem ligula, in finibus purus dignissim in. Vestibulum posuere velit id nisi consectetur, vel porttitor felis tincidunt. 
                
                </p>
              </div>
              <div
                href="#"
                className=" mb-4 transform rounded-lg border border-gray-200  bg-white p-6 shadow-md transition duration-500 ease-in-out hover:scale-105  "
              >
                <p className="font-semibold text-gray-700 antialiased">
                Phasellus vel elit finibus, molestie eros at, rhoncus lorem. Donec finibus felis venenatis, auctor eros nec, luctus risus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
