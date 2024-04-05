import React from "react";
import Aboutuscards from "../components/Aboutuscards.jsx";
import aboutuscar from "../assets/aboutuscar.jpg";
const Aboutus = () => {
  return (
    <div>
      <div className=" flex">
        <div className="  bg-[#d4f0f3] text-center  text-3xl font-bold flex justify-center items-center h-[311px]">
          <p className="w-[80%]">
            "Share a ride, Share the journey. Together we make every mile
            matter"
          </p>
        </div>
        <div className=" float-right ">
          <img src={aboutuscar} alt="Car Logo"></img>
        </div>
      </div>
      <div className="flex w-screen items-center">
        <div>
          <div className=" p-10 shadow-lg  shadow-slate-400 m-10 w-auto">
            <h2 className=" font-bold text-3xl text-dark-color mb-5 mt-0">
              How it all started?
            </h2>
            <p className="text-dark-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              reiciendis ducimus quis veritatis placeat, neque maiores vitae
              dolores nobis incidunt dolore ullam hic nisi. Quidem pariatur
              eligendi eaque cum, hic magni similique, ratione molestiae amet,
              quis temporibus. Quo earum aperiam ipsam est, consectetur odio,
              pariatur, eaque doloremque placeat a totam? Magnam velit
              voluptatum ducimus aut? Odit aperiam maxime velit architecto
              deserunt iusto obcaecati et ducimus, adipisci eligendi laudantium
              natus rerum quisquam possimus beatae quae ea? Quo illo quod earum,
              unde praesentium necessitatibus suscipit corporis odio ad. Sed
              maxime mollitia cupiditate minima quisquam non, veniam sint
              facilis ad, fugiat fuga praesentium. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nam modi velit pariatur. Facere
              eligendi magnam delectus, sapiente est recusandae. Expedita cum
              nemo libero soluta quam natus explicabo ea velit laborum voluptas,
              facilis, molestiae ab facere, quasi mollitia aspernatur fugit
              impedit. Voluptatem placeat mollitia expedita provident ipsa,
              voluptates, eum quas, est eaque ex saepe. Sit a fugit eveniet.
              Impedit distinctio quasi et perferendis voluptatem ducimus
              asperiores blanditiis, ipsum similique id ullam tempora. Sapiente,
              alias? Id hic soluta animi molestias. Ad expedita velit deleniti
              labore illo autem qui, illum voluptatibus impedit cum accusamus
              sed quo aperiam architecto fugit, officia omnis id molestiae.
            </p>
          </div>
          <div className=" p-10  shadow-lg  shadow-slate-400 m-10">
            <h2 className=" font-bold text-3xl text-dark-color mb-5">
              Our Mission
            </h2>
            <p className="text-dark-color">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quibusdam molestiae architecto culpa vero ratione, cum voluptatum,
              quidem similique animi amet iure. Porro adipisci tempore maiores a
              incidunt cupiditate quasi odio, architecto nobis, enim debitis
              impedit autem placeat eos iste ad ipsum velit similique non quos
              rerum? Iste itaque dolore, esse nesciunt vero quo voluptas
              voluptate consequatur neque porro! Perspiciatis fugit, quas magnam
              recusandae repellendus illum facilis placeat minus? Nobis
              dignissimos et, asperiores consectetur sunt distinctio deleniti
              veritatis culpa eveniet earum delectus consequuntur dolores magni!
              Ipsum perferendis quod quis libero voluptas repudiandae rerum
              totam. Explicabo unde veritatis nesciunt sint a eligendi autem ex,
              rerum nostrum magnam illum ipsum, assumenda est nisi inventore
              quibusdam culpa expedita numquam odit ratione? Sapiente ratione
              minima deserunt est consequatur laboriosam. Nostrum, culpa
              distinctio tenetur reprehenderit eos in consectetur odit. Dolorem
              voluptates ullam maxime fugit iusto blanditiis quibusdam
              perspiciatis ex cum qui inventore sequi laudantium minus deserunt
              accusamus magni soluta, illum beatae, vitae, tempora odit
              laboriosam voluptatum. Officia explicabo voluptas non autem porro
              cupiditate vel consectetur, nihil nesciunt nam. Adipisci dicta
              dignissimos quos ea repellendus quis nam tenetur, vero deserunt,
              itaque, ducimus at sint placeat beatae soluta expedita blanditiis
              mollitia facere distinctio. Illo numquam debitis laboriosam.
            </p>
          </div>
        </div>
        <div className=" mt-0 m-10 text-dark-color">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          cumque?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Itaque minus enim earum culpa asperiores praesentium dolorum harum
          voluptatibus, nam quo vitae facere eum? Fugiat, voluptate incidunt
          voluptatibus id sint maiores debitis. Assumenda, odio. In soluta
          laboriosam corporis nemo, et repudiandae asperiores perferendis neque
          libero cupiditate possimus deserunt enim aperiam quidem qui! Modi
          fugiat excepturi ad consectetur distinctio! Impedit explicabo ex a
          nisi magnam ratione suscipit quo, molestiae praesentium odit
          asperiores, numquam sequi, officia expedita accusantium esse! Harum,
          voluptates laboriosam natus similique repudiandae blanditiis sint
          dicta exercitationem saepe, repellendus pariatur vel?
        </div>
      </div>
      <div className=" p-10 shadow-lg  shadow-slate-400 m-10 mt-0">
        <h2 className=" font-bold text-3xl text-dark-color">Our Values</h2>
        <p className="text-dark-color mt-2 text-lg">
          "Guiding principles that shape our decisions, define our culture, and
          drive our actions every day."
        </p>
        <div>
          <div className="cards flex gap-10 justify-evenly items-center h-auto lg:flex-col mt-5">
            <Aboutuscards
              title="Sustainability"
              content="Emphasize the environmental benefits of carpooling, such as reducing carbon emissions and promoting eco-friendly transportation options."
            />
            <Aboutuscards
              title="Community"
              content="Highlight the sense of community and camaraderie that comes from sharing rides with others, fostering connections and relationships among users."
            />
            <Aboutuscards
              title="Affordability"
              content="Showcase the cost-saving benefits of carpooling compared to driving alone, such as sharing fuel costs and reducing parking expenses."
            />
          </div>
          <div className="cards flex gap-10 justify-evenly items-center h-auto lg:flex-col mt-5">
            <Aboutuscards
              title="Convenience"
              content="Emphasize the convenience of carpooling, including flexible scheduling, shorter commute times through HOV lanes, and reducing stress associated with driving."
            />
            <Aboutuscards
              title="Safety"
              content=" Prioritize safety by promoting trusted driver and passenger verification systems, as well as providing tools for users to communicate and share feedback about their carpooling experiences."
            />
            <Aboutuscards
              title="Reduced Traffic Congestion"
              content="Highlight how carpooling helps alleviate traffic congestion, contributing to smoother traffic flow, fewer accidents, and overall improved road conditions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;