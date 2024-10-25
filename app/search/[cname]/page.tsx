"use client";
import DoctorList from "@/components/doctor-list";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { capitalizeFirstLetter } from "@/helper/capitalizeFirstLetter";
import { doctorlist } from "@/constants";

function Search({ params }: any) {
  const [doctors, setDoctors] = useState<any[]>(doctorlist);
  const param = useParams();
  const specialty = param.cname;
  const filteredDoctors = doctors.filter(doctor => doctor.specialty.toLowerCase() == specialty);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(`/api/doctors/get-a-specialist`, {
          params: { specialty },
        });
        setDoctors(response.data.doctors);
      } catch (error: any) {
        console.error("Error fetching doctors data:", error);
        console.log(doctors,specialty)
        setDoctors(filteredDoctors)
      }
    })();
  }, []);
  return (
    <div className="mt-5">
      <DoctorList
        heading={capitalizeFirstLetter(params.cname.replace(/%20/g, " "))}
        doctorList={filteredDoctors}
        specialty={specialty}
      />
    </div>
  );
}

export default Search;
