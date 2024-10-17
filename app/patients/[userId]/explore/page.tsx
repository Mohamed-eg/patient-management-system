import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutUs from '@/components/homecare-about-us';
const Explore = ({params: {userId}}:SearchParamProps) => {
  return (
    <div>
      <Header userId={userId}/>
      <AboutUs/>
      <Footer/>
      </div>
  )
}

export default Explore