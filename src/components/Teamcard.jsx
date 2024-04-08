import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Teamcard = ({ name, title, image, description }) => (
  <div className="flex flex-col items-center text-center h-[450px] w-[300px] 2xl:w-[450px] 2xl:h[400px] lg:w-[300px] lg:h-[450px] bg-light-color p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
    <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4" />
    <h3 className="text-xl font-medium mb-2 text-dark-color">{name}</h3>
    <p className="text-dark-color mb-4">{title}</p>
    <p className="text-dark-color">{description}</p>
    <div className="mt-12 flex gap-5">
      <button>
        <InstagramIcon sx={{ color: "#2a6171" }} />
      </button>
      <button>
        <LinkedInIcon sx={{ color: "#2a6171" }} />
      </button>
    </div>
  </div>
);

export default Teamcard;
