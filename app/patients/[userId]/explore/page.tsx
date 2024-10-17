import React from 'react'
import Header from "@/components/header";
import Footer from "@/components/footer";
const Explore = ({params: {userId}}:SearchParamProps) => {
  return (
    <div>
      <Header userId={userId}/>
    
      <Footer/>
      </div>
  )
}

export default Explore