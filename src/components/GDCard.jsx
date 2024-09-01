import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function GDCard({ gd }) {
  return (
    <div className="">
      {/* GD Card */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" my-10 h-56 w-72 rounded-lg bg-white p-10 shadow-xl "
      >
        <div className="flex justify-center">
          <div
            className=" -mt-28  h-32 w-32 rounded-full border-3
             border-orange-600 "
          >
            <LazyLoadImage
              src={gd.imageUrl}
              alt={gd.name}
              effect="blur"
              className=" rounded-full object-cover "
            />
          </div>
        </div>
        <div className=" p-2">
          <h1 className="mb-1 text-center text-2xl font-bold">{gd.name}</h1>
          <p className="text-center text-sm text-gray-800">
            {gd.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 py-5 text-xl text-gray-700   ">
          <a
            href={gd.instagram}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsInstagram />
          </a>
          <a
            href={gd.linkedin}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            href={gd.twitter}
            className="hover:text-red-600"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a href={gd.github} className="hover:text-red-600" target="_blank">
            {" "}
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
