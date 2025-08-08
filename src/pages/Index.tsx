import LongbyteHeader from "@/components/LongbyteHeader";
import LongbyteHero from "@/components/LongbyteHero";
import LongbyteServices from "@/components/LongbyteServices";
import LongbyteProjects from "@/components/LongbyteProjects";
import LongbyteAbout from "@/components/LongbyteAbout";
import LongbyteContact from "@/components/LongbyteContact";
import LongbyteFooter from "@/components/LongbyteFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LongbyteHeader />
      <main>
        <LongbyteHero />
        <LongbyteServices />
        <LongbyteProjects />
        <LongbyteAbout />
        <LongbyteContact />
      </main>
      <LongbyteFooter />
    </div>
  );
};

export default Index;
