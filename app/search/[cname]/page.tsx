"use client";
import DoctorList from "@/components/doctor-list";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { capitalizeFirstLetter } from "@/helper/capitalizeFirstLetter";
import { doctorlist } from "@/constants";
interface Doctor {
  id: string;
    url: string;
    Name: string;
    Year_of_Experience: string;
    Address: string;
    feePerCunsultation: string;
    About: string;
    Suggestions: never[];
    patientId: string;
    degrees: string;
    specialization: string;
}

function Search({ params }: any) {
  const [doctors, setDoctors] = useState<Doctor[]>(doctorlist);
  const param = useParams();
  const specialization = param.cname;
  const filteredDoctors = doctors.filter(doctor => doctor.specialization == specialization);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`/api/doctors/get-a-specialist`, {
          params: { specialization },
        });
        setDoctors(response.data.doctors);
      } catch (error: any) {
        console.error("Error fetching doctors data:", error);
        console.log(doctors,specialization)
        setDoctors(filteredDoctors)
      }
    })();
  }, []);
  return (
    <div className="mt-5">
      <DoctorList
        heading={capitalizeFirstLetter(params.cname.replace(/%20/g, " "))}
        doctorList={filteredDoctors}
      />
    </div>
  );
}

export default Search;
