/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form, FormControl} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { LoginFormValidation } from "@/lib/valedation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patients.actions"
import axios from "axios"
import { APIServerURL } from "@/constants"
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
    SKELETON = 'skeleton',
    PASSWORD='password'
}
const LoginForm=()=> {
    const router =useRouter();
    const [isLoading,setIsLoading]=useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof LoginFormValidation>>({
    resolver: zodResolver(LoginFormValidation),
    defaultValues: {
      email:"",
      password:"",
    },
  })

  // 2. Define a submit handler.
 async function onSubmit({email, password}: z.infer<typeof LoginFormValidation>) {
   setIsLoading(true);
   try{
    console.log({
      email: email,
      password:password,
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await axios.post(`${APIServerURL}/users/login`, {
      email: email,
      password:password,
    }).then(response => {
    console.log('Success:', response.data); // Handle success response
    router.push(`/patients/${response.data.user.uid}/homePage`)
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message); // Handle error response
  })

   }catch(error){
    console.log(error)
   }
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 flex-1">
        <section>
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
         <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='email'
        label = 'Email'
        placeholder = 'Mohammed@gmail.com'
        iconSrc = "/assets/icons/email.svg"
        iconAlt ='email'
        />

        <CustomFormField
        fieldType={FormFieldType.PASSWORD}
        control={form.control}
        name='password'
        label = 'Password'
        placeholder = '************'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='password'
        />
      <SubmitButton isLoading={isLoading}>Get started</SubmitButton>
    </form>
  </Form>
  )
}

export default LoginForm