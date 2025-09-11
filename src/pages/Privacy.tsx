import LongbyteHeader from "@/components/LongbyteHeader";
import LongbyteFooter from "@/components/LongbyteFooter";
import LongbytePrivacyPolicy from "@/components/LongbytePrivacyPolicy";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <LongbyteHeader />
      <main>
        <LongbytePrivacyPolicy />
      </main>
      <LongbyteFooter />
    </div>
  );
};

export default Privacy;


