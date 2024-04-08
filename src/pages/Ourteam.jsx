import React from "react";
import Teamcard from "../components/Teamcard";
import one from "../assets/Team/one.jpg";
import two from "../assets/Team/two.jpg";
import three from "../assets/Team/three.jpg";
import four from "../assets/Team/four.jpg";

function Ourteam() {
  return (
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
      <div className="container h-full mx-auto px-6 flex flex-col justify-center items-center gap-10 ">
        <div>
          <h1 className=" text-5xl font-bold lg:text-4xl sm:text-3xl text-dark-color mb-8 mt-5">
            Meet Our Team
          </h1>
        </div>
        <div className="flex flex-wrap mx-auto justify-center items-center gap-10 mb-28">
          <Teamcard
            name="Naveen Soni"
            title="Co-Founder"
            image={two}
            description="Collaborative co-founder at Ecorides, a Full-Stack developer fostering teamwork, creativity, and synergy for project growth and success"
            link1 = "https://www.instagram.com/naveenn.soni/"
            link2 = "https://www.linkedin.com/in/soni-naveen"
          />
          <Teamcard
            name="Mukul Kumar"
            title="Co-Founder"
            image={one}
            description="Collaborative co-founder at Ecorides, a Full-Stack developer focusing on new innovation and guiding strategic vision for the team."
            link1="https://www.instagram.com/mukulkumar07/"
            link2 = "https://www.linkedin.com/in/mukulkumar007"
          />
          <Teamcard
            name="Muskan Verma"
            title="CEO"
            image={three}
            description="Logical and focused spearheading innovation, driving growth, and ensuring team excellence for team success."
            link1="https://www.instagram.com/_muskan_._verma_/"
            link2 = "https://www.linkedin.com/in/muskan-verma-b485b0240"
          />
          <Teamcard
            name="Manav Gupta"
            title="Managing Director"
            image={four}
            description="Adaptable and versetile team manager, optimizing resources, assets and cultivating collaboration for project advancement."
            link1 = "https://www.instagram.com/manav_gupta04/"
            link2 = "https://www.linkedin.com/in/manav-gupta2804"
          />
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
