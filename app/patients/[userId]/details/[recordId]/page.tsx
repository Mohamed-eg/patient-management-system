/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React, { useEffect, useState } from "react";
// import DoctorDetail from "@/components/doctor-detail";
import DoctorSuggestionList from "@/components/doctor-suggestion-list";
import dynamic from 'next/dynamic'
import axios from "axios";
import { APIServerURL, doctorlist } from "@/constants";
import Header from "@/components/header";
import Footer from "@/components/footer";
const DoctorDetailNoSSR = dynamic(() => import("@/components/doctor-detail"), { ssr: false })
function Details({ params }: any) {
  console.log(params,`${APIServerURL}/doctors/${params.recordId}`)
  const doctor = {
    uid:params.recordId,
    patientId:params.userId,
    url: "/assets/doctors/1.jpg",
    last_name:"",
    first_name: "Nore mahfoz",
    Year_of_Experience: "15",
    location: "Jalangi, Murshidabad, West Bengal",
    degrees: "MBBS",
    feePerCunsultation: "700",
    specialty: "Dermatologist",
    About:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
    Suggestions:doctorlist
  };
  const  [myDoctor,setMyDoctor] =useState(doctor)

  useEffect(()=>{
    axios.get(`${APIServerURL}/doctors/${params.recordId}`)
  .then(function (response) {
    // handle success
    console.log(response);
    setMyDoctor({
      uid:`${params.recordId}`,
      patientId:params.userId,
      url:"/assets/doctors/1.jpg",
      last_name:response.data.last_name,
      first_name: response.data.first_name,
      Year_of_Experience:"15",
      location:response.data.location,
      degrees:"MBBS",
      feePerCunsultation:"700",
      specialty:response.data.specialty,
      About:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, comes from a line in section 1.10.32.",
      Suggestions:doctorlist,
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    const doctor = doctorlist.find(doc => doc.uid == params.recordId);
    //@ts-ignore
    setMyDoctor(doctor)
  })
  },[])

  return (
    <div className="p-5 md:px-10">
      <Header userId={params.userId}/>
      <h2 className="font-bold text-[22px]">Details</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 ">
        {/* Doctor Detail  */}
        <div className=" col-span-3">
          {myDoctor && <DoctorDetailNoSSR doctor={myDoctor} />}
        </div>
        {/* Doctor Suggestion  */}
        <div>
          <DoctorSuggestionList 
          //@ts-ignore
          Suggestions={doctorlist} />
        </div>
      </div>
          <Footer/>
    </div>
  );
}

export default Details;
