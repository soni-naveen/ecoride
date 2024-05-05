import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { apiConnector } from "../services/apiConnector";
import { contactusEndpoint } from "../services/apis";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    const toastId = toast.loading("Sending...");
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      setLoading(false);
      toast.success("Sent Successfully");
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
    toast.dismiss(toastId);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <div>
      <div className="mx-auto bg-light-color py-10 flex justify-center">
        <div className="rounded-xl p-10 flex gap-5 flex-col items-center sm2xl:p-2 sm:p-4">
          <h1 className="text-4xl leading-10 font-semibold text-dark-color sm:text-[32px] sm2xl:text-2xl">
            Feedback & Queries
          </h1>
          <p className="sm:text-sm sm2xl:text-xs">
            {" "}
            We're here to Listen! Please fill out this form
          </p>

          <div className="my-10">
            <form
              className="flex flex-col gap-7 sm2xl:w-[250px]"
              onSubmit={handleSubmit(submitContactForm)}
            >
              <div className="flex gap-5 sm:flex-col">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstname" className="text-[14px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Enter first name"
                    className="form-style"
                    {...register("firstname", { required: true })}
                  />
                  {errors.firstname && (
                    <span className="-mt-1 text-[12px] text-red-400">
                      Please enter your name !
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastname" className="text-[14px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Enter last name"
                    className="form-style"
                    {...register("lastname")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[14px]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email address"
                  className="form-style"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="-mt-1 text-[12px] text-red-400">
                    Please enter your email address !
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[14px]">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Enter your message here"
                  className="form-style"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="-mt-1 text-[12px] text-red-400">
                    Please enter your Message !
                  </span>
                )}
              </div>

              <button
                disabled={loading}
                type="submit"
                className={`rounded-md mt-3 bg-medium-color font-normal px-6 py-2.5 text-center text-base font-bold text-white
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  sm:text-[16px] `}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
