import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Teamcard = ({ name, title, image, description, link1, link2 }) => (
  <div className="flex flex-col items-center text-center w-[300px] 2xl:w-[450px] lg:w-[300px] bg-light-color p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300 hover:cursor-default">
    <img
      draggable="false"
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mb-4 sm2xl:w-28 sm2xl:h-28"
    />
    <h3 className="text-xl font-medium mb-2 text-dark-color sm2xl:text-lg">{name}</h3>
    <p className="text-medium-color font-medium mb-4 sm2xl:text-sm">{title}</p>
    <p className="text-dark-color sm2xl:text-[15px]">{description}</p>
    <div className="mt-8 flex gap-5">
      <button>
        <a href={link1} target="_blank">
          <InstagramIcon sx={{ color: "#2a6171" }} />
        </a>
      </button>
      <button>
        <a href={link2} target="_blank">
          <LinkedInIcon sx={{ color: "#2a6171" }} />
        </a>
      </button>
    </div>
  </div>
);

export default Teamcard;
