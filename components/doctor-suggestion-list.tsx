"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";


// Define a type for each suggestion object
type Suggestion = {
  uid: any;
  Name: string;
  url: string;
  specialization: string;
  Year_of_Experience: string
  // Add any other fields you need
};

// Define your component with the correct props type
interface DoctorSuggestionListProps {
  Suggestions: Suggestion[]; // An array of Suggestion objects
}
function DoctorSuggestionList({Suggestions}:DoctorSuggestionListProps) {
  const doctorList = Suggestions;
  return (
    <div className=" p-4 border-[1px] mt-5 md:ml-5 rounded-lg h-[80vh] overflow-y-scroll ">
      <h2 className="mb-3 font-bold">Suggestions</h2>

      {doctorList.map((doctor, index) => (
        <Link
          key={index}
          href={`${doctor.uid}`}
          className=" mb-4 p-3 shadow-sm w-full 
            cursor-pointer hover:bg-slate-100
            rounded-lg flex items-center gap-3"
        >
          <Image
            src={doctor.url}
            width={70}
            height={70}
            className="w-[70px] h-[70px] rounded-full object-cover"
            alt="doctor profile photo"
          />
          <div className="mt-3 flex-col flex gap-1 items-baseline">
            <h2
              className="text-[10px] bg-blue-100 p-1 rounded-full px-2
                    text-primary"
            >
              {doctor.Name}
            </h2>
            <h2 className="font-medium text-sm">{doctor.specialization}</h2>
            <h2 className="text-primary text-xs flex gap-2">
              {doctor.Year_of_Experience}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DoctorSuggestionList;
