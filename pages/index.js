import Head from "next/head";
import Image from "next/image";
import { HeroSection,Sidebar,AboutSection,FollowSection } from "../components";
import  {useState} from "react"
export default function Home() {
  const [sideBarOpen, setsideBarOpen] = useState(false)
  const openSideBar = () =>{
    setsideBarOpen(!sideBarOpen);
  }
  return (
    <div className=" min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>Ayoub Abane</title>

        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <HeroSection openSideBar={openSideBar} />
      <Sidebar openSideBar={openSideBar} sideBarOpen={sideBarOpen} />
      <AboutSection />
      <FollowSection />
    </div>
  );
}
