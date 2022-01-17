import { useEffect, useRef, useState } from "react";
import { getPosts } from "../../services";
import Head from "next/head";
import Link from "next/link";
import { gsap } from "gsap";
import moment from "moment";
const index = ({ postData }) => {
  return (
    <main className="min-h-screen relative overflow-x-hidden w-screen grid bg-main-dark place-items-center">
      <Head>
        <title>Ayoub Abane</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="grid md:grid-cols-2 transition-all absolute top-0  sm:grid-cols-1 lg:grid-cols-3 auto-rows-fr  py-8 px-12  gap-8">
        {postData.map((post) => {
          return (
            <div className={`bg-main-light h-full transition-all flex flex-col justify-between shadow-lg p-0 lg:p-8 pb-12 mb-8 ${post.bigSized ? "lg:col-span-2  " :""}`}>
              
                <img
                  src={post.backgroundImg.url}
                  alt={post.title}
                  className="object-top relative h-80 top-0 max-w-full object-cover shadow-lg   lg:rounded-lg"
                />
              <div className="flex px-4 items-center">
              <h1
                className="transition duration-700 mr-8 uppercase font-Oswald tracking-wide cursor-pointer 
                hover:text-main-blue hover:scale-105 text-3xl  font-semibold"
              >
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
              </h1>
              <div className="font-medium text-gray-700 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline mr-2 text-main-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{moment(post.createdatAt).format("MMM DD ,YYYY")}</span>
                </div>
              </div>
              
              <div className="block lg:flex text-left items-center justify-center mb-8 w-full">
                
                
              </div>
              <p className="text-lg pl-4 text-main-dark font-Montserrat font-normal  mb-8">
                {post.postDescription}
              </p>
              <div className="grid w-full place-items-center px-2">
                <Link className="transition-all" href={`/post/${post.slug}`}>
                  <span className="font-Montserrat text-xs sm:text-base cursor-pointer transition-all md:hover:bg-main-dark active:scale-95 md:hover:text-white duration-200  inline-block tracking-widest border-2 w-[60%] md:w-full lg:w-[90%] lg:h-[2.5rem] text-center py-[7px] border-black">
                    Continue Reading
                  </span>
                </Link>
              </div>
            </div>
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
