import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import CoreCard from "./components/CoreCard";
import CoreTeam from "./data/CoreTeam";
import GDCard from "./components/GDCard";
import GDTeam from "./data/GDTeam";
import TeamsCard from "./components/TeamsCard";
import OtherTeams from "./data/OtherTeams";
import Teams2Card from "./components/Teams2Card";
import OtherTeams2 from "./data/OtherTeams2";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Teams() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="bg-gradient-to-br from-red-700 via-black to-red-900">
      <section className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6">
        <article className="col-auto mb-10 mt-10">
          <div id="padding"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            <p>
            Enthusiastic members driving the evolution of ethical hacking.
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            Core Team
          </h1>
          {/* Core Team */}
          <section className="flex flex-wrap justify-center gap-5">
            {CoreTeam.map(core => (
              <CoreCard core={core} key={core.title} />
            ))}
          </section>
        </article>
        {/* GD Team */}
        <article className="col-auto mb-10 mt-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            GD Team
          </h1>
          <section className="flex flex-wrap justify-center gap-5">
            {GDTeam.map(gd => (
              <GDCard gd={gd} key={gd.title} />
            ))}
          </section>
        </article>

        {/* Other teams */}
        <article className="col-auto mb-10 mt-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl"
          >
            Website & Content Ceation
          </h1>
          <section className="flex flex-wrap justify-center gap-5">
            {OtherTeams.map(teams1 => (
              <TeamsCard teams1={teams1} key={teams1.title} />
            ))}
          </section>
        </article>

        {/* Other Teams2 */}
        <article className="col-auto mb-10 mt-10">
          <h1 className="title-font mb-20 text-center text-2xl font-medium text-white sm:text-3xl">
            Other Teams2
          </h1>
          <section className="flex flex-wrap justify-center gap-5">
            {OtherTeams2.map(teams2 => (
              <Teams2Card teams2={teams2} key={OtherTeams2.index} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}
