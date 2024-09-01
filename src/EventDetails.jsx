import React from "react";

export default function EventDetails() {
  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen mb-50">
      <div className=" xl:px-36 md:px-12 px-6 py-10">
        <div id= "heading" className="flex items-center justify-between">
          <h1  className="font-bold text-4xl md:text-5xl text-white">
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis dolor sem, vulputate dictum nisi venenatis eus.
        </h3>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            PRE REQUISITES : 
          </h5>
          <p>
            <p className="mb-2">
              Before registering for the CTF, everyone :
            </p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">
                
                <a
                  target="blank"
                  className="underline text-white"
                  href=""
                >
                  
                </a>{" "}
                to create a new account.
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            About the CTF :
          </h5>
          <p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h5 className="font-bold uppercase mb-4 text-2xl">
            Prizes and Certifications :
          </h5>
          <p>
            <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. </p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. {" "}
                <a
                  target="blank"
                  className="underline text-white"
                  href=""
                >
                  faceboook
                </a>
                .
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. {" "}
                <a
                  target="blank"
                  className="underline text-white"
                  href=""
                >
                  facebook
                </a>
                .
              </li>
            </ul>
            <p className="mt-4">
              <b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </b>
            </p>
            <p className="mt-4 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. </p>
            <ul className="ml-8 space-y-2">
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              
              </li>
              <li className="list-disc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
              </li>
            </ul>
          </p>
          <p className="mt-4">
            <b>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
            </b>
          </p>
        </div>

        <div className="space-y-4">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. 
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pulvinar enim eu pharetra volutpat. Phasellus bibendum sapien sed rutrum congue. </p>
          <p>
          </p>
        </div>

      </section>
    </div>
  );
}
