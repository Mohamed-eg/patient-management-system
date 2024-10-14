
import Hero from "@/components/hero";
import CategorySearch from "@/components/category-search";
import DoctorList from "@/components/doctor-list";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { doctorlist } from "@/constants";
import ModeToggle from "@/components/themeTagel";

const doctorList = doctorlist
export default function Home() {
  return (
    <div>
      <div className="md:px-20">
      <ModeToggle/>
        {/* Header */}
        <Header></Header>
        {/* Hero Section */}
        <Hero></Hero>
        {/* Search Bar + Category */}
        <CategorySearch/>
        {/* Popular Doctor List  */}
        <DoctorList doctorList={doctorList}/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}