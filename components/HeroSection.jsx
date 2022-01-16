import { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { BiMenuAltLeft } from "react-icons/bi";
import { gsap, Power2,Power3 } from "gsap";
const HeroSection = ({ openSideBar }) => {
  const tl = gsap.timeline();
  const navBar = useRef();
  const SeclightBox = useRef();
  const outerBox = useRef();
  const mainContent = useRef();
  const mainImage = useRef();
  const t2=gsap.timeline()

  useEffect(() => {
    tl.from(outerBox.current, { opacity: 0, ease: Power3.easeInOut, duration: 1.2 })
      .from(
        mainContent.current,
        { y: "30%", ease: Power2.easeOut, duration: 2 },
        0.1
      )
      .from(
        mainImage.current,
        { y: "10%", ease: Power2.easeOut, duration: 0.5 },
        0.3
      )
      
      .from(navBar.current,{x:"300px",delay:1,ease:Power3.easeOut,duration:1.6},0.5);
      tl.to(SeclightBox.current,{y:"150%",scrollTrigger:{trigger:"#aboutSection",start:"top bottom",scrub:1}})
      tl.to(outerBox.current,{color:"#fff",scrollTrigger:{trigger:"#aboutSection",start:"top bottom",scrub:1}})
  }, []);
  return (
    <section

      className="min-h-screen grid place-items-center w-scree"
    >
      <div  ref={outerBox}  className="min-h-full w-full grid place-items-center px-8 md:pl-[80px] md:pr-[50px]">
        <div className="flex flex-start md:hidden w-full items-center h-[80px]  text-6xl">
          <BiMenuAltLeft
            onClick={openSideBar}
            className="transition-all duration-300 active:text-5xl cursor-pointer active:opacity-10"
          />
        </div>
        <div ref={outerBox} className="w-full min-h-[80%] gap-8 grid md:grid-cols-6 grid-rows-1 py-20">
          <div ref={mainContent} className="flex w-[100%] md:col-span-3 flex-col  justify-center mr-3 ">
            <h1   className=" text-7xl tracking-wide font-Oswald ">
              AYOUB ABANE
            </h1>
            <p className="text-2xl font-light my-6 font-Oswald">
              Dynamically empower seamless markets for enterprise-wide systems.
              Monotonectally synergize resource.
            </p>
            <Link to="/about">
              <span className="font-Montserrat text-xs sm:text-base cursor-pointer transition-all md:hover:bg-main-light active:scale-95 md:hover:text-black duration-200  inline-block tracking-widest border-2 w-[50%] md:w-full lg:w-[40%] lg:h-[2.5rem] text-center py-[7px] border-black">
                SEE MORE
              </span>
            </Link>
          </div>
          <div className="w-full md:col-span-2 ">
            <img
                ref={mainImage}
              className="w-full object-contain"
              src="/heroImage.jpg"
              alt=""
            />
          </div>
          <header ref={navBar} className="md:flex py-8 hidden md:flex-col w-[20%] font-Montserrat tracking-widest  ml-8 justify-between">
            <Link
              className="cursor-pointer transition-all active:scale-95 md:hover:scale-105 md:hover:text-black"
              to="/about"
            >
              About
            </Link>
            <Link
              className="cursor-pointer transition-all active:scale-95 md:hover:scale-105 md:hover:text-black"
              to="/follow"
            >
              Follow me
            </Link>
            <Link
              className="cursor-pointer transition-all active:scale-95 md:hover:scale-105 md:hover:text-black"
              to="/content"
            >
              Content
            </Link>
          </header>
        </div>
      </div>
      <div className="fixed bg-main-dark h-screen w-screen top-0 -z-30"></div>

      <div
        ref={SeclightBox}
        className="fixed bg-main-light h-screen w-screen top-0 -z-20"
      ></div>
    </section>
  );
};

export default HeroSection;
