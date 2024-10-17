"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import CustomFormField from "./CustomFormField"
import SubmitButton from "./SubmitButton"
import { useState } from "react"
import { ContactFormValidation } from "@/lib/valedation"
import axios from "axios"
import { APIServerURL } from "@/constants"
import Image from "next/image"
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
const Contact = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading,setIsLoading]=useState(false)
  // 1. Define your form.
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      email:"",
      feedback:"",
    },
  })

        // 2. Define a submit handler.
       async function onSubmit({email, feedback}: z.infer<typeof ContactFormValidation>) {
         setIsLoading(true);
         try{
          console.log({
            email: email,
            feedback:feedback,
          })
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const data = await axios.post(`${APIServerURL}/users/feedbcak`, {
            email: email,
            feedback:feedback,
          }).then(response => {
          console.log('Success:', response.data);
          setIsLoading(false) // Handle success response
        })
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
         }catch (error: any) {
          if (error.response && error.response.status === 500) {
            console.log('Error 500: Internal Server Error');
          } else {
            console.error('Another error occurred:', error);
          }
        }
        }
  return (
<div className="p-4 md:p-10">
    <div className='flex items-center flex-col md:flex-row justify-between w-full'>
    <div className='flex justify-center items-center w-[50%]'>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6 flex-1 w-full">
        <section>
            <h1 className="header w-full">Hi there 👋</h1>
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
      fieldType={FormFieldType.TEXTAREA}
      control={form.control}
      name='feedback'
      label = 'Feedback'
      placeholder = 'Leave your feedback 😊'
      />
      <SubmitButton isLoading={false}>Send 📨</SubmitButton>
    </form>
     </Form>
    </div>
    <div className="w-[50%]">
      <Image  
        className="w-full p-4 md:p-10 hidden md:block"
        width={1000}
        height={1000}
        src={'/assets/contact/doctor1.png'}
      alt={'doctor'}/>
    </div>
    </div>
</div>
  )
}

export default Contact