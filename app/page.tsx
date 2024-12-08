import Image from "next/image";
import Header from "@/app/Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}
