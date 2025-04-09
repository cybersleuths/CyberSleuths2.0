import React from "react";

export default function EventDetails() {
  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen mb-50">
      <div className=" xl:px-36 md:px-12 px-6 py-10">
        <div id="heading" className="flex items-center justify-between">
          <h1 className="font-bold text-4xl md:text-5xl text-white">
            ENCRYPTA <span className="text-red-600">2.0</span>
          </h1>
          <a
            target={'_blank'}
            className="bg-white py-2 px-6 rounded-sm text-xl text-gray-800 ml-4"
            href=""
          >
            REGISTER
          </a>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-50 overflow-hidden space-y-12 text-xl">
        <h3>
          Join us for Encrypta 2.0, a thrilling cyber security event hosted by the Cyber Security Club. Test your skills and compete with the best!
        </h3>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            Prerequisites:
          </h5>
          <ul className="ml-8 space-y-2">
            <li className="list-disc">
              <b>Basic Knowledge:</b> Cybersecurity, Linux commands, networking, and programming (Python/JavaScript preferred).
            </li>
            <li className="list-disc">
              <b>Tools:</b> Burp Suite, Wireshark, Nmap, and a text editor.
            </li>
            <li className="list-disc">
              <b>System:</b> Laptop/PC with internet access.
            </li>
            <li className="list-disc">
              <b>Skills:</b> Cryptography, reverse engineering, web security, and binary analysis.
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            About CTF (Capture the Flag):
          </h5>
          <ul className="ml-8 space-y-2">
            <li className="list-disc">
              <b>What is CTF?:</b> A cybersecurity competition to solve challenges and find hidden “flags.”
            </li>
            <li className="list-disc">
              <b>Challenge Types:</b> Cryptography, web exploitation, reverse engineering, forensics, and binary analysis.
            </li>
            <li className="list-disc">
              <b>Why Participate?:</b> Improve skills, gain real-world experience, and network with tech enthusiasts.
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            Prizes:
          </h5>
          <ul className="ml-8 space-y-2">
            <li className="list-disc">
              <b>1st Prize:</b> ₹15,000 + Certificate of Excellence.
            </li>
            <li className="list-disc">
              <b>2nd Prize:</b> ₹10,000 + Certificate of Excellence.
            </li>
            <li className="list-disc">
              <b>3rd Prize:</b> ₹5,000 + Certificate of Excellence.
            </li>
            <li className="list-disc">
              <b>All Participants:</b> Certificate of Participation.
            </li>
          </ul>
        </div>

        <div className="space-y-4">
        </div>
      </section>
    </div>
  );
}
