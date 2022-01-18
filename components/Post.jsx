
import { AiOutlineDoubleLeft } from "react-icons/ai";
import Link from "next/link";
const Post = ({ postData }) => {
    
  return (
    <section style={{backgroundColor:postData.backgroundClr.hex,color:postData.titleColor.hex}} className="lg:col-span-8 md:col-span-6 sm:col-span-1 order-1 sm:order-2 col-span-1 flex flex-col justify-around p-8 h-full max-w-full">
      <div className="w-full flex justify-end">
        <Link href="/posts">
          <AiOutlineDoubleLeft className="text-5xl cursor-pointer float-left hover:scale-105 transition-all hover:text-main-blue text-main-light" />
        </Link>
      </div>
      <h1 className="font-Oswald uppercase text-6xl">
        {postData.title}
      </h1>
      <p className="font-Montserrat tracking-wide text-2xl">
        {postData.fullPostText}
      </p>
      {postData.hasDownload ?<a
        style={{borderColor:postData.titleColor.hex,color:postData.titleColor.hex}}
        target="_blank"
        rel="noreferrer noopener"
        href={postData.downloadFile.url}
        className="font-Montserrat mt-4 border-main-white text-xs sm:text-base cursor-pointer transition-all  active:scale-95 md:hover:scale-105 duration-200  inline-block tracking-widest border-2 w-[50%] uppercase md:w-full lg:w-[40%] lg:h-[2.5rem] text-center py-[7px]"
      >download</a> : ""}
    </section>
  );
};

export default Post;
