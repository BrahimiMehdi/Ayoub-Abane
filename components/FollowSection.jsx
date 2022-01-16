import React from 'react'

const FollowSection = () => {
    return (
        <section name="/follow" className="min-h-screen w-screen place-items-center sm:grid sm:grid-cols-2 flex flex-col text-main-light px-8 md:pl-[80px] md:pr-[50px]" >
        <div className="h-full py-20 w-full justify-around flex flex-col">
        <h1 className="text-7xl font-Oswald">FIND ME</h1>
          <p className="sm:text-2xl text-xl font-light my-6 font-Oswald">
            i usualy post on instagram Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus harum dolore excepturi deleniti laboriosam ipsa quos explicabo, natus voluptate atque deserunt reiciendis,
             assumenda reprehenderit dicta ducimus nostrum earum accusamus. Possimus.
          </p>
          <a rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/ayxubo.art/">
            <span className="font-Montserrat text-main-light border-main-white text-xs sm:text-base cursor-pointer transition-all md:hover:bg-main-light active:scale-95 md:hover:text-black duration-200  inline-block tracking-widest border-2 w-[50%] md:w-full lg:w-[40%] lg:h-[2.5rem] text-center py-[7px]">
              FOLLOW
            </span>
          </a>
        </div>
        <div className="w-[100%] h-full grid md:p-12 lg:p-20 xl:p-32 place-items-center">
          <img className="object-contain" src="/aboutSecImage.jpg" alt="" />
        </div>
    </section>
    )
}

export default FollowSection
