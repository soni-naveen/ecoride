import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { apiConnector } from "../services/apiConnector";
import { useSelector } from "react-redux";
import { contactusEndpoint } from "../services/apis";
import ContactUs from "../assets/contact_us.png";
import Footer from "../components/Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const recaptcha = useRef();
  const { user } = useSelector((state) => state.profile);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const submitContactForm = async (data) => {
    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    // const toastId = toast.loading("Loading...");
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      setLoading(false);
      toast.success("Submitted Successfully!");
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
      });
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
    // toast.dismiss(toastId);
  };

  useEffect(() => {
    if (user) {
      setValue("firstname", user?.additionalDetails?.firstName || "");
      setValue("lastname", user?.additionalDetails?.lastName || "");
      setValue("email", user?.email || "");
    }
  }, [user, setValue]);

  return (
    <div>
      <div className="max-w-[1800px] mx-auto bg-slate-100 py-2 flex lg:flex-col-reverse justify-center items-center justify-evenly sm:py-5">
        <div className="rounded-xl p-10 flex gap-5 flex-col items-center sm2xl:p-2 sm:p-4">
          {/*========== HEADING ========== */}
          <h1 className="text-4xl leading-10 font-semibold text-dark-color sm:text-[26px] smxl:text-[22px]">
            Feedback & Queries
          </h1>
          {/*========== SUBHEADING ========== */}
          <p className="sm:text-sm smxl:text-xs">
            We're here to Listen! Please fill out this form
          </p>
          <div className="my-5">
            <form
              className="flex flex-col gap-7 sm2xl:w-[250px]"
              onSubmit={handleSubmit(submitContactForm)}
            >
              <div className="flex gap-5 sm:flex-col">
                {/*========== FIRST NAME ========== */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="firstname"
                    className="text-sm text-gray-700 smxl:text-xs"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="firstname"
                    id="firstname"
                    placeholder="e.g. John"
                    className="form-style"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <span className="text-xs text-red-400 smxl:text-[10px]">
                      Please enter your name !
                    </span>
                  )}
                </div>
                {/*========== LAST NAME ========== */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="lastname"
                    className="text-sm text-gray-700 smxl:text-xs"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    autoComplete="off"
                    name="lastname"
                    id="lastname"
                    placeholder="e.g. Doe"
                    className="form-style"
                    {...register("lastname")}
                  />
                </div>
              </div>
              {/*========== EMAIL ADDRESS ========== */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-gray-700 smxl:text-xs"
                >
                  Email Address
                </label>
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter a valid email address"
                  className="form-style"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xs text-red-400 smxl:text-[10px]">
                    Please enter your email address !
                  </span>
                )}
              </div>

              {/*========== YOUR MESSAGE ========== */}
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-700 smxl:text-xs"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Write your message here..."
                  className="form-style resize-none"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-xs text-red-400 smxl:text-[10px]">
                    Please enter your Message !
                  </span>
                )}
              </div>

              {/*========== VERIFY RECAPTCHA ========== */}
              <ReCAPTCHA
                className="sm2xl:scale-75 sm2xl:-ml-9 smxl:-ml-8 smxl:scale-[0.8] sm:scale-[0.85] sm:-ml-6"
                ref={recaptcha}
                sitekey={import.meta.env.VITE_REACT_APP_SITE_KEY}
              />
              {/*========== SUBMIT BUTTON ========== */}
              <button
                disabled={loading}
                type="submit"
                className={`rounded bg-medium-color font-normal px-6 py-2.5 text-center text-base font-bold text-white ${
                  !loading &&
                  "transition-all duration-200 hover:scale-[0.98] hover:shadow-none"
                } sm:text-base `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
        <div>
          <img
            src={ContactUs}
            alt="Contact Us"
            className="mix-blend-multiply max-h-[26rem] lg:max-w-[24rem] smxl:max-w-[20rem] sm2xl:max-w-[18rem]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
