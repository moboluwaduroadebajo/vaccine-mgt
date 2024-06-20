import { Footer, GetStarted, Help, Navbar } from "@/components/Home";
import HeroSection from "@/components/Home/HeroSection";
import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HeroSection />
      <Help />
      <GetStarted />
      <Footer />
    </>
  );
}

