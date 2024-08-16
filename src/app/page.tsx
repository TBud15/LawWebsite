import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionSix from "./components/SectionSix/SectionSix";

export default function Home() {
  return (
    <main>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <p className="text-center mt-10">Next Component</p>
    </main>
  );
}
