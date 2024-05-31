import React from "react";
import aboutuscar from "../assets/aboutuscar.jpg";
import Footer from "../components/Footer/Footer.jsx";

const Aboutus = () => {
  return (
    <>
      <div className="bg-white py-16 mb-10 sm:py-10 lg:py-16">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-16 md1:grid-cols-1 lg:grid-cols-2">
            <div className="order-2 md1:order-1">
              <h2 className="text-3xl font-extrabold text-dark-color sm:text-3xl lg:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-lg text-dark-color sm:text-base">
                We are a team of passionate individuals dedicated to providing
                innovative solutions to our clients. Our mission is to empower
                businesses and individuals to achieve their goals through
                cutting-edge technology and personalized support.
              </p>
              <p className="mt-4 text-lg text-dark-color sm:text-base">
                At our core, we believe in honesty, integrity, and a strong
                moral compass. We strive to always do the right thing, no matter
                the challenge. Our team is driven by a commitment to excellence
                and a deep understanding of the industries we serve.
              </p>
              <p className="mt-4 text-lg text-dark-color sm:text-base">
                With years of experience and a track record of success, we are
                confident in our ability to deliver exceptional results for our
                clients. We take the time to understand their unique needs and
                tailor our solutions accordingly, ensuring they achieve their
                desired outcomes.
              </p>
            </div>
            <div className="order-1 flex items-center justify-center">
              <img
                src={aboutuscar}
                alt="About Us"
                className="object-cover h-auto rounded-lg lg:h-64 "
              />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold text-dark-color mt-12 sm:text-3xl lg:text-4xl">
            Our Moral Values
          </h2>

          <div className="grid grid-cols-3 gap-8 smxl:grid-cols-1 lg:grid-cols-2 mt-12">
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Integrity
              </h3>
              <p className="text-dark-color">
                We are committed to always doing the right thing, even when it's
                not the easy choice.
              </p>
            </div>
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Innovation
              </h3>
              <p className="text-dark-color">
                We constantly seek new and better ways to solve problems and
                create value for our clients.
              </p>
            </div>
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Excellence
              </h3>
              <p className="text-dark-color">
                We are driven by a relentless pursuit of the highest standards
                in everything we do.
              </p>
            </div>
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Teamwork
              </h3>
              <p className="text-dark-color">
                We believe in the power of collaboration and the synergy that
                comes from working together.
              </p>
            </div>
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Empathy
              </h3>
              <p className="text-dark-color">
                We strive to understand and address the unique needs of our
                clients and partners.
              </p>
            </div>
            <div className="bg-light-color shadow-md rounded-lg overflow-hidden p-6">
              <h3 className="text-xl font-bold text-dark-color mb-2">
                Resilience
              </h3>
              <p className="text-dark-color">
                We are adaptable, flexible, and able to overcome any challenge
                that comes our way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
