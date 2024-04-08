import React from "react";
import Teamcard from "../components/Teamcard";
import one from "../assets/Team/one.jpg";
import two from "../assets/Team/two.jpg";

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
      <div className="container mx-auto px-6 flex flex-col justify-center items-center gap-10 ">
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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Teamcard
            name="Mukul Kumar"
            title="Co-Founder"
            image={one}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Teamcard
            name="Jim Smith"
            title="CFO"
            image={one}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Teamcard
            name="Jake Johnson"
            title="COO"
            image={one}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
}

export default Ourteam;
