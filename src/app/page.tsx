import HeroSection from "@/components/banner";
import BeautySalonFooter from "@/components/footer";
import Header from "@/components/header";
import OurWorksSlider from "@/components/our-works";
import BeautySalonContacts from "@/components/salon-contacts";
import BeautySalonPricing from "@/components/salon-pricing";
import BeautySalonReviews from "@/components/salon-reviews";

export default function Home() {
  return (
    <div className="">
      <Header />
      <HeroSection />
      <OurWorksSlider />
      <BeautySalonPricing />
      <BeautySalonReviews />
      <BeautySalonContacts />
      <BeautySalonFooter />
    </div>
  );
}
