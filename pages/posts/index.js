import { useEffect, useRef, useState } from "react";
import { getPosts } from "../../services";
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import moment from "moment"
import { AiOutlineDoubleLeft } from "react-icons/ai";
const index = ({ postData }) => {
  let rowCount = Math.ceil(postData.length/5);
  return (
    <main className="bg-main-dark overflow-x-auto max-w-screen min-h-screen flex flex-col">
      <Head>
        <title>Ayoub Abane</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex text-center items-center justify-center mt-2">
        <h1 className="text-6xl font-Oswald uppercase text-main-light">
          posts
        </h1>
      </div>
      <Link href="/">
        <AiOutlineDoubleLeft className="text-5xl cursor-pointer float-left hover:scale-105 transition-all hover:text-main-blue text-main-light" />
      </Link>

      <section className={`grid grid-flow-col grid-rows-[${rowCount}]  sm:grid-cols-2 md:grid-cols-5 p-4 gap-8 sm:gap-2 place-items-center grid-cols-1 min-h-screen max-w-screen`}>
        {postData.map((post, index) => {
          
          return (

            <Link key={index} href={`/posts/${post.slug}`}>
              <div
                className={`w-[60%] text-xl transition-all duration-300 sm:w-[80%] md:w-full hover:scale-95 hover:text-2xl ease-in-out cursor-pointer bg-main-dark min-h-full grid place-items-center ${
                  post.large ? "md:col-span-2" : "md:col-span-1"
                } ${post.tall ? "md:row-span-2" : "md:row-span-1"}`}
              >
                {post.titleOnImage ? <h1
                  style={{ color: post.titleColor.hex }}
                  className={` font-semibold  absolute font-Oswald z-20 tracking-wide uppercase`}
                >
                  {post.title}
                </h1> : ""}
                <img
                  className="w-full h-full  transition-all duration-300 hover:blur-sm object-cover"
                  src={post.backgroundImg.url}
                  alt=""
                />
              </div>
            </Link>  
          );
        })}
      </section>
    </main>
  );
};

export default index;

export async function getStaticProps() {
  const postData = (await getPosts()) || [];
  return {
    props: { postData },
  };
}
