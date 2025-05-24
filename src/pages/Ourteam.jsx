import React from "react";
import Teamcard from "../components/Teamcard";
import naveen from "../assets/Team/naveen.jpg";
import mukul from "../assets/Team/mukul.jpg";
import muskan from "../assets/Team/muskan.jpg";
import manav from "../assets/Team/manav.jpg";
import Footer from "../components/Footer/Footer.jsx";

function Ourteam() {
  return (
    <>
      <div className="team-page py-5">
        <style jsx global>{`
          .team-page .team-card {
            @apply bg-gray-100 p-6 rounded-lg shadow-md text-center;
          }

          .team-page .team-image {
            @apply w-32 h-32 rounded-full mb-4;
          }

          .team-page .team-name {
            @apply text-xl font-medium mb-2;
          }

          .team-page .team-title {
            @apply text-gray-600 mb-4;
          }

          .team-page .team-description {
            @apply text-gray-500;
          }

          @media (max-width: 640px) {
            .team-page .team-card {
              @apply w-full;
            }
          }

          @media (min-width: 641px) and (max-width: 1023px) {
            .team-page .team-card {
              @apply w-1/2;
            }
          }

          @media (min-width: 1024px) {
            .team-page .team-card {
              @apply w-1/3;
            }
          }
        `}</style>
        <div className="container h-full mx-auto px-6 flex flex-col justify-center items-center gap-10 sm2xl:px-0">
          <div>
            <div className="text-5xl font-bold lg:text-4xl sm:text-3xl text-dark-color mb-8 mt-10">
              Meet Our Team
            </div>
          </div>
          <div className="flex flex-wrap mx-auto justify-center items-center gap-10 mb-28">
            <Teamcard
              name="Naveen Soni"
              title="Co-Founder"
              image={naveen}
              description="Collaborative co-founder at Ecoride, a Full-Stack developer fostering teamwork, creativity, and synergy for project growth and success."
              link1="mailto:naveen@theecoride.in"
              link2="https://www.linkedin.com/in/soni-naveen"
            />
            <Teamcard
              name="Mukul Kumar"
              title="Co-Founder"
              image={mukul}
              description="Collaborative co-founder at Ecoride, a Full-Stack developer focusing on new innovation and guiding strategic vision for the team."
              link1="mailto:mukul@theecoride.in"
              link2="https://www.linkedin.com/in/mukulkumar007"
            />
            <Teamcard
              name="Muskan Verma"
              title="CEO"
              image={muskan}
              description="Logical and focused spearheading innovation, driving growth, and ensuring team excellence for team success."
              link1="mailto:muskan0904.be21@chitkara.edu.in"
              link2="https://www.linkedin.com/in/muskan-verma-b485b0240"
            />
            <Teamcard
              name="Manav Gupta"
              title="Managing Director"
              image={manav}
              description="Adaptable and versetile team manager, optimizing resources, assets and cultivating collaboration for project advancement."
              link1="mailto:manav0844.be21@chitkara.edu.in"
              link2="https://www.linkedin.com/in/manav-gupta2804"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ourteam;
