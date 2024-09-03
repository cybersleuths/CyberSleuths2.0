import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CyberSleuthsXISOEH() {
  const [showIframe, setShowIframe] = useState(false);

  const images = [
    "/path/to/image1.jpg",  // Replace with actual image paths
    "/path/to/image2.jpg",
    // Add more images as needed
  ];

  const visibleImagesCount = 4;

  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen mb-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0 ">
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-bold text-4xl md:text-5xl text-white">
            Cyber Sleuths X ISOEH
          </h1>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-50 overflow-hidden text-xl">
        <div className="flex flex-col lg:flex-row items-start gap-8 pb-20">
          <div className="flex-1">
            <p className="text-lg text-white leading-relaxed mb-6"> 
              On 10th January 2023, Cyber Sleuths proudly signed a Memorandum of Understanding (MOU) with ISOAH to foster collaboration in 
              cybersecurity education and training. This partnership aims to bridge the gap between academics and industry, offering 
              students access to exclusive resources, training programs, and expert guidance from industry professionals.
            </p>
    
            <div className="pt-6">
              <a
                href="/PDF/MOU - ISOAH Data Securities Pvt. Ltd..pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-lg"
              >
                View the full MOU (PDF)
              </a>
            </div>

            <div className="pt-6">
              <a
                href="/courses"
                className="text-blue-500 underline text-lg"
              >
                View Courses Offered Under This MOU
              </a>
            </div>
          </div>
          
          {/* Image Gallery Section */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
            {images.slice(0, visibleImagesCount).map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`MOU Image ${index + 1}`}
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
