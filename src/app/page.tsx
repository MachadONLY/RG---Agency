import Image from "next/image";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Valores from "./Components/Valores/Valores";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Valores />
    </>
  );
}
