import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patients.actions";
import React from "react";
 
const Register = async ({params: {userId}}:SearchParamProps)=> {
  const user =await getUser(userId)
  return (
   <div className="flex h-screen max-h-screen">
    <section className="remove-scrollbar container my-auto">
      <div className="sub-container max-w-[496px]">
        <Image 
        src="/assets/logo.png"
        height={1000}
        width={1000}
        alt="patient"
        priority={false}
        className="mb-12 !h-14 w-fit mx-auto rounded-md"
        />
        <RegisterForm user={user}/>
        <div className="text-14-regular mt-20 flex justify-between">

        <p  className="justify-items-end text-dark-600 xl:text-left ">
        © 2024 MidEasy
        </p>
        <Link href="/?admin=true" className="text-green-500">
        Admin
        </Link>
        </div>
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