"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/valedation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patients.actions"
// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })
export enum FormFieldType {
    INPUT= 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}
const PatientForm=()=> {
    const router =useRouter();
    const [isLoading,setIsLoading]=useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name:"",
      email:"",
      phone:"",
    },
  })

  // 2. Define a submit handler.
 async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
   setIsLoading(true);
   try{
    const userData ={name, email, phone}
    const user =await createUser(userData);

    if(user) router.push(`/pationts/${user.$id}/register`,)
   }catch(error){
    console.log(error)
   }
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="text-white space-y-6 flex-1">
        <section>
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='name'
        label = 'Full name'
        placeholder = 'Mohammed Alshayb'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='user'
        />
         <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='email'
        label = 'Email'
        placeholder = 'Mohammed@gmail.com'
        iconSrc = "/assets/icons/email.svg"
        iconAlt ='user'
        />
         <CustomFormField
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name='phone'
        label = 'Phone number'
        placeholder = '+20 105 555 5555'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='user'
        />
      <SubmitButton isLoading={isLoading}>Get started</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm