import Image from "next/image";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Valores from "./Components/Valores/Valores";
import Team from "./Components/Team/Team";
import Planos from "./Components/Planos/Planos";

export default function Main() {
  return (
    <>
      <Navbar />
      <Home />
      <Valores />
      <Team />
      <Planos/>
    </>
  );
}
