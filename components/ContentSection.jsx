import {useRef,useEffect} from 'react'
import { gsap,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Link from 'next/link'
const ContentSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    const contentImage = useRef()
    const contentText = useRef()
    const tl = gsap.timeline()
    useEffect(() => {
        tl.from(contentImage.current,{y:"40%",x:"-60%",opacity:0.6,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#contentSection",
            start:"top bottom",
            scrub:1,
        }})
        tl.from(contentText.current,{x:"60%",opacity:0.6,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#contentSection",
            start:"top bottom",
            scrub:1,
        }})
        
    }, [])
    return (
        <section id="contentSection" name="/content" className="min-h-screen overflow-hidden bg-main-light w-screen  pb-4 place-items-center sm:gap-2 sm:grid sm:grid-cols-2 flex flex-col-reverse text-main-light px-8 md:pl-[80px] md:pr-[50px]" >
        
        <div className="w-[80%] h-full grid py-12  place-items-center">
          <img ref={contentImage} className="object-contain border-[5px] sm:border-[20px] lg:border-[50px] border-main-dark " src="/ContentImage.jpg" alt="" />
        </div>
        <div ref={contentText} className="h-full text-main-dark py-20 w-full justify-around flex flex-col">
        <h1 className="text-7xl font-Oswald">MY CONTENT</h1>
          <p className="sm:text-2xl text-xl font-light my-6 font-Oswald">
            You can find here a collection of posts and challenges i have made before.
            with access to schedules and plans that came alongside them.
          </p>
          <Link href="/posts">
            <span className="font-Montserrat border-main-dark text-main-dark text-xs sm:text-base cursor-pointer transition-all md:hover:bg-main-dark active:scale-95 md:hover:text-white duration-200  inline-block tracking-widest border-2 w-[50%] md:w-full lg:w-[40%] lg:h-[2.5rem] text-center py-[7px]">
              JOIN ME
            </span>
          </Link>
        </div>
        
    </section>
    )
}

export default ContentSection
