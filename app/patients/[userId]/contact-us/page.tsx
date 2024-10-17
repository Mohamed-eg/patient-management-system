import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
const ContactUs = ({params: {userId}}:SearchParamProps) => {
  return (
    <div>
      <Header userId={userId}></Header>

      <Footer/>
      </div>
  )
}

export default ContactUs