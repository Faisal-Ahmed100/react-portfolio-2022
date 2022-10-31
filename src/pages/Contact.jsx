import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GoogleMap from "../components/GoogleMap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8mjj4uv",
        "template_yznsmvo",
        form.current,
        "9i69lenRr6DMzX_SJ"
      )
      .then(
        (result) => {
          toast.success('Message sent successfully🙂', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        (error) => {
          toast.error(error.message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
    e.target.reset();
  };
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {open && (
        <div className="fixed bg-black/70 z-10 top-0 left-0 h-full w-full flex justify-center items-center px-3">
          <div className="md:w-[80%] md:h-[90%] w-[95%] mx-auto h-2/3 bg-white z-50 absolute">
            <div
              className="absolute -top-[35px] right-0 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <i className="fa-solid fa-xmark text-3xl text-white"></i>
            </div>
            <div className="flex justify-center items-center h-full">
              <GoogleMap />
            </div>
          </div>
        </div>
      )}

      <section className="w-full lg:h-full xl:min-h-screen lg:px-11 md:px-8 py-10 md:py-0">
        <div className="flex flex-col h-full md:h-full md:py-12 justify-center items-start">
          <h2 className="text-4xl mb-6 flex items-center uppercase font-bold text-gray-700">
            <p className="border-b-[2px] mr-2 border-b-[#6c5ce7]">GET IN</p>
            <p className="text-[#6c5ce7] animate-pulse">TOUCH</p>
          </h2>
          <h3 className="flex gap-2 items-center mb-2">
            <i className="fa-solid fa-envelope text-sm text-gray-500"></i>

            <span className="text-md text-gray-700 font-medium">
              FEEL FREE TO DROP ME A LINE
            </span>
          </h3>
          <p className="text-gray-600">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex justify-start items-center flex-col md:flex-row gap-5 w-full mt-8">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-gray-700 font-medium pb-2 uppercase">
                  location
                </h2>
                <p className="text-gray-600 capitalize">
                  Puthia, Rajshahi, Bangladesh
                </p>

                <button
                  className="text-gray-600 hover:border-b-gray-500 pt-1 border-b border-b-[#6c5ce7] hover:text-[#6c5ce7] uppercase"
                  onClick={handleClick}
                >
                  View on map
                </button>
              </div>
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-gray-700 font-medium pb-2 uppercase">
                  contact
                </h2>
                <a
                  href="mailto:princepavel100@gmail.com"
                  className="text-gray-600 mb-1 capitalize hover:text-[#6c5ce7]"
                >
                  princepavel100@gmail.com
                </a>
                <a
                  href="tel:01729-462003"
                  className="text-gray-600 capitalize hover:text-[#6c5ce7] "
                >
                  01729-462003
                </a>
              </div>
              {/* socal */}
              <div className="flex flex-col justify-start items-start">
                <h2 className="text-gray-700 font-medium pb-2">SOCIAL</h2>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=100009264083773"
                    target="__blank"
                  >
                    <i className="fa-brands fa-facebook-f w-[35px] h-[35px] flex text-white hover:bg-transparent hover:border-[#6c5ce7] border hover:text-[#6c5ce7] cursor-pointer justify-center items-center rounded-full p-1 transition-all bg-[#6c5ce7] "></i>
                  </a>

                  <a href="https://twitter.com/coderfaisal100" target="__blank">
                    <i className="fa-brands fa-twitter w-[35px] h-[35px] flex text-white hover:bg-transparent hover:border-[#6c5ce7] border hover:text-[#6c5ce7] cursor-pointer justify-center items-center rounded-full p-1 transition-all bg-[#6c5ce7] "></i>
                  </a>

                  <i className="fa-brands fa-instagram w-[35px] h-[35px] flex text-white hover:bg-transparent hover:border-[#6c5ce7] border hover:text-[#6c5ce7] cursor-pointer justify-center items-center rounded-full p-1 transition-all bg-[#6c5ce7] "></i>
                  <i
                    className="fa-brands fa-linkedin-in w-[35px] h-[35px] flex text-white hover:bg-transparent hover:border-[#6c5ce7] border hover:text-[#6c5ce7] cursor-pointer justify-center items-center rounded-full p-1 transition-all bg-[#6c5ce7] "
                    onClick={() =>
                      setOpen(
                        alert(
                          "Ops! I don't have an account linkedin🙄 but coming soon"
                        )
                      )
                    }
                  ></i>

                  <i
                    className="fa-brands fa-whatsapp w-[35px] h-[35px] flex text-white hover:bg-transparent hover:border-[#6c5ce7] border hover:text-[#6c5ce7] cursor-pointer justify-center items-center rounded-full p-1 transition-all bg-[#6c5ce7] "
                    title="01729462003"
                    onClick={() => setOpen(alert("WhatsApp no: 01729462003"))}
                  ></i>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="w-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-4"
              >
                <div className="relative flex items-center">
                  <input
                  required
                    type="text"
                    className="py-2 pl-8 pr-3 text-md w-full bg-transparent text-gray-600 border border-gray-400 rounded-sm hover:border-[#6c5ce7] hover:shadow outline-none"
                    placeholder="Enter Name"
                    name="name"
                  />
                  <i className="fa-solid absolute left-[10px] top-[10px] fa-user text-sm text-gray-400"></i>
                </div>

                <div className="relative flex items-center">
                  <input
                   required
                    type="text"
                    className="py-2 pl-8 pr-3 text-md w-full bg-transparent text-gray-600 border border-gray-400 rounded-sm hover:border-[#6c5ce7] hover:shadow outline-none"
                    placeholder="Your Email"
                    name="email"
                  />
                  <i className="fa-solid fa-envelope absolute left-[10px] top-[10px] text-sm text-gray-400"></i>
                </div>
                <div className="relative flex items-center">
                  <input
                   required
                    type="text"
                    className="py-2 pl-8 pr-3 text-md w-full bg-transparent text-gray-600 border border-gray-400 rounded-sm hover:border-[#6c5ce7] hover:shadow outline-none"
                    placeholder="Enter Subject"
                    name="subject"
                  />
                  <i className="fa-sharp fa-solid fa-share absolute left-[10px] top-[10px]  text-sm text-gray-400"></i>
                </div>
                <div className="relative flex items-center">
                  <textarea
                   required
                    type="text"
                    className="py-2 pl-8 pr-3 text-md w-full bg-transparent text-gray-600 border border-gray-400 rounded-sm hover:border-[#6c5ce7] hover:shadow outline-none h-[90px]"
                    placeholder="Write Message..."
                    name="message"
                  />
                  <i className="fa-solid fa-message absolute left-[10px] top-[10px]  text-sm text-gray-400"></i>
                </div>
                <div className="flex justify-start items-start">
                  <button
                    type="submit"
                    className="uppercase bg-[#6c5ce7] border-2 border-[#6c5ce7] transition-all ease-linear text-white text-sm px-5 rounded-sm py-3 hover:border-2 hover:border-[#6c5ce7] hover:bg-transparent font-medium hover:text-[#6c5ce7]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
