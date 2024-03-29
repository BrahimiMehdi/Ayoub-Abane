import {useRef,useEffect} from 'react'
import { gsap,Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
const FollowSection = () => {
    gsap.registerPlugin(ScrollTrigger)
    const followImage = useRef()
    const followContent = useRef()
    const tl = gsap.timeline()
    useEffect(() => {
        tl.from(followImage.current,{y:"40%",x:"60%",opacity:0.6,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#followSection",
            start:"top bottom",
            scrub:1,
        }})
        tl.from(followContent.current,{x:"-60%",opacity:0.6,ease:Power3.easeOut,scrollTrigger:{
            trigger:"#followSection",
            start:"top bottom",
            scrub:1,
        }})
        
    }, [])
    return (
        <section id="followSection" name="/follow" className="min-h-screen overflow-hidden w-screen  pb-4 place-items-center sm:gap-2 sm:grid sm:grid-cols-2 flex bg-main-dark flex-col-reverse text-main-light px-8 md:pl-[80px] md:pr-[50px]" >
        <div ref={followContent} className="h-full py-20 w-full justify-around flex flex-col">
        <h1 className="text-7xl font-Oswald uppercase">FIND ME</h1>
          <p className="sm:text-2xl text-xl font-light my-6 font-Oswald">
            I usualy post daily on instagram about topics that i enjoy and love. <br />
            Make sure to follow! 
          </p>
          <a className="font-Montserrat text-main-light border-main-white text-xs sm:text-base cursor-pointer transition-all md:hover:bg-main-light active:scale-95 md:hover:text-black duration-200  inline-block tracking-widest border-2 w-[50%] md:w-full lg:w-[40%] lg:h-[2.5rem] text-center py-[7px]" rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/ayxubo.art/">
            FOLLOW
          </a>
        </div>
        <div className="w-[100%] h-full grid md:p-12 lg:p-20 xl:p-32 place-items-center">
          <img ref={followImage} className="object-contain" src="/aboutSecImage.jpg" alt="" />
        </div>
    </section>
    )
}

export default FollowSection
