// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { MdEmail, MdFacebook, MdPhone, MdTimer } from "react-icons/md";
import { FaAddressBook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary p-16  mt-12">
      <div className="max-w-screen-xl mx-auto mt-6">
        <div className="grid lg:grid-cols-4 gap-12 p-8  lg:p-1 lg:justify-items-center items-center  ">
          <div>
            <Link to="/">
              <div className="flex gap-3 items-center">
                <img src={logo} className="w-[30px] lg:w-[40px]" alt="" />
                <p className="lg:text-3xl text-xl font-bold text-white">
                  Melodia
                </p>
              </div>
            </Link>
            <p className="text-white py-6 leading-relaxed text-sm md:text-lg font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis consectetur hic obcaecati?
            </p>
            <div className="flex gap-8">
              <MdFacebook className="text-white text-lg md:text-3xl" />
              <FaTwitter className="text-white md:text-3xl" />
              <FaYoutube className="text-white md:text-3xl" />
            </div>
          </div>
          <div className="text-white ">
            <h2 className="font-bold  text-accent text-xl md:text-2xl mb-4 md:mb-8">
              Pages
            </h2>

            <Link>
              <p
                className="md:pb-5 font-light pb-2 text-sm md:text-lg"
                href="#"
              >
                Home
              </p>
            </Link>
            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Instructor
              </p>
            </Link>

            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Classes
              </p>
            </Link>
            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Login
              </p>
            </Link>
          </div>
          <div className="text-white ">
            <h2 className="font-bold  text-accent text-xl md:text-2xl mb-4 md:mb-8">
              Our Courses
            </h2>

            <Link>
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Piano Course
              </p>
            </Link>
            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Harmonium Course
              </p>
            </Link>

            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Drums Course
              </p>
            </Link>
            <Link>
              {" "}
              <p
                className="md:pb-5 pb-2 font-light text-sm md:text-lg"
                href="#"
              >
                Guitar Course
              </p>
            </Link>
          </div>
          <div className="text-white ">
            <h2 className="font-bold  text-accent text-xl md:text-2xl mb-4 md:mb-8">
              Contacts{" "}
            </h2>

            <Link>
              <p className="md:pb-5 pb-2 text-sm md:text-lg" href="#">
                <MdPhone className="inline text-accent text-2xl mr-2" /> (305)
                444-0900
              </p>
            </Link>
            <Link>
              {" "}
              <p className="md:pb-5 pb-2 text-sm md:text-lg" href="#">
                <MdTimer className="inline text-accent text-2xl mr-2" /> Mon-
                Fri: 10 am - 11 pm
              </p>
            </Link>
            <Link>
              {" "}
              <p className="md:pb-5 pb-2 text-sm md:text-lg" href="#">
                <FaAddressBook className="inline text-accent text-2xl mr-2" />{" "}
                Ea Road, Its in the Game
              </p>
            </Link>

            <Link>
              {" "}
              <p className="pb-5 text-lg" href="#">
                <MdEmail className="inline text-accent text-2xl mr-2" />{" "}
                email@tokomo.com
              </p>
            </Link>
          </div>
        </div>
        <div className="py-6 text-sm mx-auto text-center text-gray-200">
          © 2023 Melodine Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;