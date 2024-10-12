import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm"
import Link from "next/link";
export default function Home() {
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
        <PatientForm/>
        <div className="text-14-regular mt-20 flex justify-between">

        <p  className="justify-items-end text-dark-600 xl:text-left ">
        © 2024 MedEasy
        </p>
        <Link href="/?admin=true" className="text-green-500">
        Admin
        </Link>
        </div>
      </div>
    </section>
    <Image
    src="/assets/images/onboarding-img.png"
    height={1000}
    width={1000}
    alt="patient"
    className="side-img max-w-[50%]"
    ></Image>
   </div>
  );
}
