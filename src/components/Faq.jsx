import React from "react";

export default function Faq() {
  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900 text-white min-h-screen">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0"
      >
        <div className="flex flex-col items-start gap-6">
          <h1 className="font-bold text-4xl md:text-5xl text-white">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <section className="text-gray-700">
        <div className="container mx-auto px-5">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mb-20 text-center"
          >
            {/* Heading moved above */}
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5"
          >
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold text-xl">
                  Who can become a member?
                </summary>
                <p className="pl-4 pt-4 text-left text-white text-lg">
                  There is not any membership criteria! Anyone who is willing to
                  learn and develop their skills in the field of programming can
                  become a member.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-4 font-semibold text-xl">
                  What should I carry when attending a workshop?
                </summary>
                <p className="pl-4 pt-4 text-left text-white text-lg">
                  We recommend you to carry with you a notebook, pen and laptop
                  because more often than not we get our hands dirty with code.
                  Most importantly, bring along a healthy dose of curiosity and
                  enthusiasm.
                </p>
              </details>
            </div>
            <div className="w-full px-4 py-2 lg:w-1/2">
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold text-xl">
                  How frequently do events and workshops occur?
                </summary>
                <p className="pl-4 pt-4 text-left text-white text-lg">
                  We organize a lot of events and workshops throughout the year,
                  from programming bootcamps to various contests and speaker
                  sessions.
                </p>
              </details>
              <details className="mb-4">
                <summary className="rounded-md bg-gray-200 py-5 px-5 font-semibold text-xl">
                  Who should I reach out to if I have any questions?
                </summary>
                <p className="pl-4 pt-4 text-left text-white text-lg">
                  We have an extended management system. You can always reach
                  out to us anytime through our Social media platforms. Despite
                  this, Discord is our first priority. We would love to handle
                  queries and see your comments and suggestions there.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
