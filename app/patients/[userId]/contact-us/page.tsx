import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from '@/components/Contact';
import Banner from "@/components/Banner"
const ContactUs = ({params: {userId}}:SearchParamProps) => {
  return (
    <div>
      <Header userId={userId}></Header>
      <Banner/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default ContactUs