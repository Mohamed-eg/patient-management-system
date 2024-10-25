"use client"
import { APIServerURL } from "@/constants";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function DoctorList({specialty, doctorList, heading = "Popular Doctors" }: any) {
 /**  id: number;
  url: string;
  Name: string;
  Year_of_Experience: string;
  Address: string;
  specialization: string; */ 
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const  [myDoctors,setMyDoctors]= useState(doctorList)
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${APIServerURL}/doctors`);
        console.log('Success:', response.data.doctors); // Handle success response
        setMyDoctors(response.data.doctors)
        if(specialty){
          const filteredDoctors = response.data.doctors.filter((doctor: { specialty: string; }) => doctor.specialty.toLowerCase() == specialty);
          setMyDoctors(filteredDoctors)
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Handle error
      }
    };
  
    fetchDoctors()
  },[])
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">{heading}</h2>

      <div
        className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4 lg:grid-cols-4"
      >
        {myDoctors.length > 0
          ? myDoctors.map((doctor: any, index: any) => (
              <div
                className="border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out"
                key={index}
              >
                <Image
                  src={(doctor?.url)?doctor?.url:"/assets/doctors/1.jpg"}
                  alt="doctor"
                  width={500}
                  height={200}
                  className="h-[300px] w-full object-cover rounded-lg"
                />
                <div className="mt-3 items-baseline flex flex-col gap-1">
                  <h2
                    className="text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary"
                  >
                    {doctor.specialty}
                  </h2>
                  <h2 className="font-bold">{doctor.first_name} {doctor.last_name}</h2>
                  <h2 className="text-primary text-sm">{`${(doctor.Year_of_Experience)?doctor.Year_of_Experience:"6"} Years`}</h2>
                  <h2 className="text-gray-500 text-sm">{doctor.location}</h2>
                  <Link href={`details/` + doctor?.uid} className="w-full">
                    <h2
                      className="p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[11px] mt-2
                        cursor-pointer 
                        hover:bg-primary hover:text-white"
                    >
                      Book Now
                    </h2>
                  </Link>
                </div>
              </div>
            ))
          : // Skelton Effect
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
              key={index}
                className="h-[220px] bg-slate-200 
            w-full rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default DoctorList;
