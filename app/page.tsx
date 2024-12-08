import Image from "next/image";
import Header from "@/app/CustomComponents/Header";
import Navbar from "./CustomComponents/Navbar";
import Footer from "./CustomComponents/Footer";
import Card from "./CustomComponents/Card";
import Banner from "./CustomComponents/Banner";

export default function Home() {
  return (
    <div>
      {/* {/* <Header />s */}
      <Navbar />
      <Banner />

      <div className=" sm:flex justify-between gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
}
