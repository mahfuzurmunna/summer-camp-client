import img from '../../../assets/teacherstudent.png'
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import CountUp from "react-countup";
import  { useEffect, useRef, useState } from "react";
const About = () => {
    const [startCount, setStartCount] = useState(false);
    const countRef = useRef(null);

    useEffect(() => {
      const options = {
        threshold: 0.5,
      };

      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !startCount) {
          setStartCount(true);
        }
      }, options);

      observer.observe(countRef.current);

      return () => {
        observer.disconnect();
      };
    }, [startCount]);
  return (
    <div
      id="about-section"
      className="lg:w-[1150px]  w-full  mx-auto md:my-32 my-24 lg:my-44 "
    >
      <div className="flex flex-col md:flex-row justify-between md:gap-14 gap-3 lg:gap-28 pl-4">
        <div className="w-full">
          <p className="text-accent text-base mb-4 font-medium">ABOUT US</p>
          <h1 className=" text-2xl w-full lg:w-full  lg:text-[52px] leading-[1.2] font-bold text-primary ">
            We Help You to Grow Faster and Better
          </h1>
          <img
            src={img}
            className="rounded-3xl mt-8 w-[320px] lg:w-full"
            alt=""
          />
        </div>
        <div className="w-full">
          <p className=" w-full pr-4 lg:w-full pt-8 text-base  text-para tracking-wide leading-relaxed lg:text-lg text-justify">
            We are your dedicated partners in growth, empowering you to
            accelerate and enhance your progress. With our extreme guidance and
            support, youll experience a transformative journey towards achieving
            your goals.
          </p>
          <div className="space-y-6 my-12">
            <span className="flex items-center gap-4">
              <BsFillArrowUpRightCircleFill className="inline text-xl lg:text-2xl" />{" "}
              <p className="text-para tracking-wide text-base  lg:text-lg ">
                Quality services and support all time
              </p>
            </span>
            <span className="flex items-center gap-4">
              <BsFillArrowUpRightCircleFill className="inline text-xl lg:text-2xl" />{" "}
              <p className="text-para tracking-wide text-base  lg:text-lg">
                Expert team member
              </p>
            </span>
            <span className="flex items-center gap-4">
              <BsFillArrowUpRightCircleFill className="inline text-xl lg:text-2xl" />{" "}
              <p className="text-para tracking-wide text-base  lg:text-lg ">
                Lifetime online support
              </p>
            </span>
          </div>
          <button className="btn-secondary ">MORE ABOUT US</button>
          <div>
            <span className="" ref={countRef}>
              {startCount && (
                <div className="flex items-center  gap-4 lg:gap-12">
                  <CountUp
                    start={0}
                    end={255}
                    duration={2.75}
                    separator=" "
                    decimals={0}
                    decimal=","
                    suffix="+"
                    onEnd={() => console.log("Ended! 👏")}
                    onStart={() => console.log("Started! 💨")}
                  >
                    {({ countUpRef, start }) => (
                      <div className="mt-12">
                        <span
                          ref={countUpRef}
                          className="text-2xl lg:text-5xl font-bold text-accent"
                        />
                        <button onClick={start}></button>
                        <p className="mt-3 text-sm lg:text-lg text-para">
                          Project Done
                        </p>
                      </div>
                    )}
                  </CountUp>
                  <span>
                    <CountUp
                      start={0}
                      end={740}
                      duration={2.75}
                      separator=" "
                      decimals={0}
                      decimal=","
                      suffix="+"
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef, start }) => (
                        <div className="mt-12">
                          <span
                            ref={countUpRef}
                            className="text-2xl lg:text-5xl font-bold text-accent"
                          />
                          <button onClick={start}></button>
                          <p className="mt-3 text-sm lg:text-lg text-para">
                            Satisfied Students
                          </p>
                        </div>
                      )}
                    </CountUp>
                  </span>
                  <span>
                    <CountUp
                      start={0}
                      end={980}
                      duration={2.75}
                      separator=" "
                      decimals={0}
                      decimal=","
                      suffix="+"
                      onEnd={() => console.log("Ended! 👏")}
                      onStart={() => console.log("Started! 💨")}
                    >
                      {({ countUpRef, start }) => (
                        <div className="mt-12">
                          <span
                            ref={countUpRef}
                            className="text-2xl lg:text-5xl font-bold text-accent"
                          />
                          <button onClick={start}></button>
                          <p className="mt-3 text-sm lg:text-lg text-para">
                            Active Students
                          </p>
                        </div>
                      )}
                    </CountUp>
                  </span>
                </div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;