import banner from "../../../assets/banner.png";
import banner2 from "../../../assets/banner2.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  function Slide() {
    return (
      <div className="flex flex-col lg:items-center lg:flex-row gap-10 ">
        <div className="w-full relative order-last lg:order-first">
          <div className="w-full mx-auto">
            <img
              src={banner}
              className="w-[91%] h-[450px] lg:h-full object-cover rounded-b-2xl mx-auto md:mx-0"
              alt=""
            />
          </div>
          <div className=" py-6 lg:py-10 px-8 bg-white border rounded-xl w-[84%]  lg:w-[50%] absolute shadow-lg bottom-4 left-7 lg:bottom-8 lg:left-[350px] ">
            <p className="text-para text-sm lg:text-base pl-4 lg:pl-5 border-l-2 lg:border-l-4 border-l-accent lg:leading-loose">
              “I like to learn music with Musicine, the method used is perfect
              and easy to understand. Awesome!”
            </p>
            <h2 className="text-lg lg:text-2xl mt-4 font-extrabold">
              Olivia Wilson
            </h2>
          </div>
        </div>
        <div className=" w-5/6 mx-auto text-center md:text-start mt-10 md:mt-0">
          <p className="text-accent text-base mb-4 font-medium">
            WELCOME TO MELODINE
          </p>
          <h1 className=" text-4xl lg:text-[64px] leading-tight font-extrabold text-primary ">
            Learning Music <br /> With Easy Way
          </h1>
          <p className=" lg:w-[70%] pt-8 pb-10 text-para tracking-wider leading-relaxed text-base">
            Discover the Joy of Musical Education. At our music school, we
            believe in making the process of learning music a joyful and
            accessible experience for everyone.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button className="btn-secondary"> GET STARTED</button>
            <span className="flex items-center gap-3">
              <AiFillPlayCircle className="text-6xl text-primary icon hover:scale-125 transition duration-300" />{" "}
              <p className="text-xl font-medium">How it works</p>
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2500, // Autoplay delay in milliseconds
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col lg:items-center lg:flex-row gap-10 ">
            <div className="w-full relative order-last lg:order-first">
              <div className="w-full mx-auto">
                <img
                  src={banner2}
                  className="w-[91%] h-[450px] lg:h-full object-cover rounded-b-2xl mx-auto md:mx-0"
                  alt=""
                />
              </div>
              <div className=" py-6 lg:py-10 px-8 bg-white border rounded-xl w-[84%]  lg:w-[50%] absolute shadow-lg bottom-4 left-7 lg:bottom-8 lg:left-[350px] ">
                <p className="text-para text-sm lg:text-base pl-4 lg:pl-5 border-l-2 lg:border-l-4 border-l-accent lg:leading-loose">
                  “Learning music with Melodine has been an incredible
                  experience. Methods they use not only perfect but also
                  incredibly easy to understand.”
                </p>
                <h2 className="text-lg lg:text-2xl mt-4 font-extrabold">
                  Stuart Broad{" "}
                </h2>
              </div>
            </div>
            <div className=" w-5/6 mx-auto text-center md:text-start mt-10 md:mt-0">
              <p className="text-accent text-base mb-4 font-medium">
                WELCOME TO MELODINE
              </p>
              <h1 className=" text-4xl lg:text-[64px] leading-tight font-bold text-primary ">
                Unleash Your <br /> Potential with <br /> Joyful Learning
              </h1>
              <p className=" lg:w-[70%] pt-8 pb-10 text-para tracking-wider leading-relaxed text-base">
                Discover the magic of music in a supportive and more engaging
                environment. Our innovative approach to teaching ensures that
                learning music becomes a joyful experience.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <button className="btn-secondary"> GET STARTED</button>
                <span className="flex items-center gap-3">
                  <AiFillPlayCircle className="text-6xl text-primary icon hover:scale-125 transition duration-300" />{" "}
                  <p className="text-xl font-medium">How it works</p>
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Banner;
