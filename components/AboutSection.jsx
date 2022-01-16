import {useEffect,useRef} from "react";
import { Link } from "react-scroll";
import { gsap,Power3 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const AboutSection = () => {
     
    gsap.registerPlugin(ScrollTrigger)
    const aboutImage= useRef()
    const aboutContent=useRef()
    const tl = gsap.timeline()
    useEffect(() => {
        tl.from(aboutImage.current,{x:"-60%",scale:0.7,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#aboutSection",
            scrub:1,
            start:"top bottom"
        }})
        tl.from(aboutContent.current,{x:"60%",scale:0.7,opacity:0,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#aboutSection",
            scrub:1,
            start:"top bottom"
        }})
        tl.fromTo(aboutContent.current,{color:"#000",ease:Power3.easeOut,duration:3 ,scrollTrigger:{
            trigger:"#aboutSection",
            scrub:1,
            start:"top bottom"
        }},{color:"#E9E9E9" ,scrollTrigger:{
            trigger:"#aboutSection",
            scrub:1,
            start:"top bottom"
        }})
    }, [])
  return (
    <section  className="w-screen min-h-screen flex-col">
        <div id="aboutSection" name="/about" className="w-screen min-h-screen md:grid flex flex-col  md:grid-cols-2">
        <div ref={aboutImage} className="w-full bg-main-dark min-h-full grid place-items-center">
        <img
          className="object-cover h-full w-full object-center"
          src="/AboutImage.jpg"
          alt="image contains a photo of ayoube"
        />
      </div>
      <div className="w-full h-full grid place-items-center">
        <div ref={aboutContent} className="w-full text-main-dark z-10 min-h-[60%] flex flex-col justify-between p-12">
          <h1 className="text-7xl font-Oswald">WHO AM I ?</h1>
          <p className="sm:text-2xl text-xl font-light my-6 font-Oswald">
            a pharmacy student at the university of algeries 1
            i am 20 years old bla bla bla bla
          </p>
          <img src="/chemistry.svg" width="200px" alt="" />
        </div>
      </div>
    </div>
    
      
    </section>
  );
};

export default AboutSection;
