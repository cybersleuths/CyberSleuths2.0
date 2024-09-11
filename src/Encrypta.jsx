import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";  // General Swiper styles
import "swiper/css/navigation";  // Navigation styles
import "swiper/css/pagination";  // Pagination styles

export default function Encrypta() {
  const [showIframe, setShowIframe] = useState(false);

  const images = [
    "/img/Event/Encrypta/encrypta (1).jpg",
    "/img/Event/Encrypta/encrypta (2).jpg",
    "/img/Event/Encrypta/encrypta (3).jpg",
    "/img/Event/Encrypta/encrypta (4).jpg",
    "/img/Event/Encrypta/encrypta (5).jpg",
    "/img/Event/Encrypta/encrypta (6).jpg",
    "/img/Event/Encrypta/encrypta (7).jpg",
    "/img/Event/Encrypta/encrypta (8).jpg",
    "/img/Event/Encrypta/encrypta (9).jpg",
    "/img/Event/Encrypta/encrypta (10).jpg",
    "/img/Event/Encrypta/encrypta (11).jpg",
    "/img/Event/Encrypta/encrypta (12).jpg",
    "/img/Event/Encrypta/encrypta (13).jpg",
    "/img/Event/Encrypta/encrypta (14).jpg",
    "/img/Event/Encrypta/encrypta (15).jpg",
    "/img/Event/Encrypta/encrypta (16).jpg",
    "/img/Event/Encrypta/encrypta (17).jpg",
    "/img/Event/Encrypta/encrypta (18).jpg",
    "/img/Event/Encrypta/encrypta (19).jpg",
    "/img/Event/Encrypta/encrypta (20).jpg",
    "/img/Event/Encrypta/encrypta (21).jpg",
    "/img/Event/Encrypta/encrypta (22).jpg",
    "/img/Event/Encrypta/encrypta (23).jpg",
    "/img/Event/Encrypta/encrypta (24).jpg",
    "/img/Event/Encrypta/encrypta (25).jpg",
    "/img/Event/Encrypta/encrypta (26).jpg",
    "/img/Event/Encrypta/encrypta (27).jpg",
    "/img/Event/Encrypta/encrypta (28).jpg",
    "/img/Event/Encrypta/encrypta (29).jpg",
    "/img/Event/Encrypta/encrypta (30).jpg",
    "/img/Event/Encrypta/encrypta (31).jpg",
    "/img/Event/Encrypta/encrypta (32).jpg",
    "/img/Event/Encrypta/encrypta (33).jpg",
    "/img/Event/Encrypta/encrypta (34).jpg",
    "/img/Event/Encrypta/encrypta (35).jpg",
    "/img/Event/Encrypta/encrypta (36).jpg",
    "/img/Event/Encrypta/encrypta (37).jpg",
    "/img/Event/Encrypta/encrypta (38).jpg",
    "/img/Event/Encrypta/encrypta (39).jpg",
    "/img/Event/Encrypta/encrypta (40).jpg",
    "/img/Event/Encrypta/encrypta (41).jpg",
    "/img/Event/Encrypta/encrypta (42).jpg",
    "/img/Event/Encrypta/encrypta (43).jpg",
    "/img/Event/Encrypta/encrypta (44).jpg",
    "/img/Event/Encrypta/encrypta (45).jpg",
  ];

  const visibleImagesCount = 4;

  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen mb-50">
      <div className="xl:pr-36 md:px-3 px-6 pt-8 pb-0">
        <div id="heading" className="flex items-center justify-between">
          <h1 id="heading_encrypta" className="font-bold text-4xl md:text-5xl text-white">
            ENCRYPTA
          </h1>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-50 overflow-hidden space-y-12 text-xl">
        {/* Existing sections */}
      </section>

      {/* Event Details Section */}
      <section className="pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex flex-col lg:flex-row items-center gap-8 pb-20">
          <div className="flex-1 pb-10">
            <h2 className="text-3xl font-bold text-white mb-6">Event Spotlight</h2>
            <p className="text-lg text-white">
              This section provides details about a particular event. Describe the event here, highlighting important aspects and what makes it unique. Ensure that the description is engaging and informative.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {images.slice(0, visibleImagesCount).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Event ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg"
              />
            ))}
            {images.length > visibleImagesCount && (
              <button
                onClick={() => setShowIframe(true)}
                className="absolute bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                View More
              </button>
            )}
          </div>
        </div>
      </section>

      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="w-full h-full max-w-3xl max-h-3xl">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation
              pagination={{ clickable: true }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            onClick={() => setShowIframe(false)}
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
