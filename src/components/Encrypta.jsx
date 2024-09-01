import React from "react";

export default function Encrypta() {
  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen mb-50">
      <div className="xl:px-36 md:px-12 px-6 py-10">
        <div id="heading" className="flex items-center justify-between">
          <h1 className="font-bold text-4xl md:text-5xl text-white">
            ENCRYPTA <span className="text-red-600">2.0</span>
          </h1>
          <a
            target={'_blank'}
            className="bg-white py-2 px-6 rounded-sm text-xl text-gray-800 ml-4"
            href="https://www.codechef.com/"
          >
            REGISTER
          </a>
        </div>
      </div>

      {/* Collage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden text-xl space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Collage of images */}
          <div className="grid grid-cols-2 gap-4">
            <img src="image1.jpg" alt="Image 1" className="w-full h-auto rounded-lg"/>
            <img src="image2.jpg" alt="Image 2" className="w-full h-auto rounded-lg"/>
            <img src="image3.jpg" alt="Image 3" className="w-full h-auto rounded-lg"/>
            <img src="image4.jpg" alt="Image 4" className="w-full h-auto rounded-lg"/>
          </div>
          
          {/* Paragraph about the event */}
          <div className="flex items-center">
            <p className="text-white">
              ENCRYPTA 2.0 is an exciting coding contest where participants from all over the world compete to solve challenging problems. 
              It offers a fantastic opportunity to showcase your coding skills, win cool prizes, and gain valuable experience through mock 
              interviews and internships.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-50 overflow-hidden space-y-12 text-xl">
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis dolor sem, vulputate dictum nisi venenatis eus.
        </h3>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            PRE REQUISITES : 
          </h5>
          <p className="mb-2">
            Before registering for the contest, everyone :
          </p>
          <ul className="ml-8 space-y-2">
            <li className="list-disc">
              Must have an account on CodeChef. If not, then visit:{" "}
              <a
                target="blank"
                className="underline text-white"
                href="https://www.codechef.com/login?destination=/"
              >
                www.codechef.com
              </a>{" "}
              to create a new account.
            </li>
            <li className="list-disc">
              Should have basic knowledge of any one programming language like
              C, C++, Java, Python, etc.
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            About the Contest :
          </h5>
          <p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">A beginner level coding contest</li>
              <li className="list-disc">
                36-hour coding contest, hosted on platform.
              </li>
              <li className="list-disc">
                There would be 10-12 problems to solve
              </li>
              <li className="list-disc">
                Compete with coders from all around the world
              </li>
              <li className="list-disc">
                Win internship opportunities and cool goodies.
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            Prizes and Certifications :
          </h5>
          <p>
            <p className="mb-2">Top 3 winners will get:</p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">
                Cool goodies by{" "}
                <a
                  target="blank"
                  className="underline text-white"
                  href="https://www.newtonschool.co/"
                >
                  Newton School
                </a>
                .
              </li>
              <li className="list-disc">
                Free Mock interviews from Industry Professionals for placement
                prep needs.
              </li>
              <li className="list-disc">
                Internship opportunities from the likes of{" "}
                <a
                  target="blank"
                  className="underline text-white"
                  href="https://www.o1codingclub.in/"
                >
                  O(1) Coding Club
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              <b>
                The top Performer from Cyber Sleuths/BCE will get ₹300 cash prize and the
                Runner-up will get ₹100.
              </b>
            </p>
            <p className="mt-4 mb-2">Few selected top coders would also get:</p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">
                Free Mock interviews from Industry Professionals for placement
                prep needs.
              </li>
              <li className="list-disc">
                Internship opportunities from the likes of O(1) coding club.
              </li>
            </ul>
          </p>
          <p className="mt-4">
            <b>
              Participation certificates to all on successful completion of the
              challenge.
            </b>
          </p>
        </div>

        <div className="space-y-4">
          <p>
            The competition is completely free and open for coders all around the
            world! Contest link will be provided a day before the contest via
            mail to the registered participants.
          </p>
          <p>Gear up and be ready to crack {"chef’s"} witty questions!</p>
        </div>
      </section>
    </div>
  );
}
