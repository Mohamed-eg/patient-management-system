
import Hero from "@/components/hero";
import CategorySearch from "@/components/category-search";
import DoctorList from "@/components/doctor-list";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { doctorlist } from "@/constants";
// import { getUser } from "@/lib/actions/patients.actions";
import ModeToggle from "@/components/themeTagel";

const doctorList = doctorlist
const Home= async ({params: {userId}}:SearchParamProps)=> {
  // const user =await getUser(userId)
  return (
    <div>
      <div className="md:px-20">
      <ModeToggle/>
        {/* Header */}
        <Header userId={userId}></Header>
        {/* Hero Section */}
        <Hero ></Hero>
        {/* Search Bar + Category */}
        <CategorySearch userId={userId} />
        {/* Popular Doctor List  */}
        <DoctorList  userId={userId} doctorList={doctorList}/>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
export default Home