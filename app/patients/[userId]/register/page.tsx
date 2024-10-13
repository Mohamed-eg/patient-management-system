import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patients.actions";
import React from "react";
import ModeToggle from "@/components/themeTagel";
 
const Register = async ({params: {userId}}:SearchParamProps)=> {
  const user =await getUser(userId)
  return (
   <div className="flex h-screen max-h-screen">
    <ModeToggle/>
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <Image 
        src="/assets/logo.png"
        height={1000}
        width={1000}
        alt="patient"
        priority={false}
        className="mb-12 !h-14 w-fit mx-auto rounded-md"
        />
        <RegisterForm user={user}/>
        <p  className="copyright py-12">
        © 2024 MedEasy
        </p>
      </div>
    </section>
    <Image
    src="/assets/images/register-img.png"
    height={1000}
    width={1000}
    alt="patient"
    className="side-img max-w-[390px]"
    ></Image>
   </div>
  );
}
 export default Register