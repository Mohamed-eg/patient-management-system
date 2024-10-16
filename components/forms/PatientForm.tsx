/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form, FormControl} from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/valedation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patients.actions"
import { RadioGroup, RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"
import { SelectItem } from "../ui/select"
import { APIServerURL, catigoryList } from "@/constants"
import Image from "next/image"
import axios from "axios"
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
const PatientForm=()=> {
  //first_name,last_name, email, phone,password,user_type
    const usertype =["doctor","patient"];
    // const specializations =["Gastroenterologist","Neurologist","Cardiologist","Gynecologist","Pediatrician","Hepatologist","Osteopathic","Endocrinologist","Pulmonologist","Internal Medicine","Common Cold","Phlebologist","Osteoarthritis","Rheumatologists","Otolaryngologist"]
    const router =useRouter();
    const [isLoading,setIsLoading]=useState(false)
    const [type,setType]=useState('doctor')
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      first_name:"",
      last_name: "",
      email:"",
      phone:"",
      password:"",
      user_type:"",
      location:""
    },
  })

  // 2. Define a submit handler.
 async function onSubmit({first_name,last_name, email, phone,password,user_type,specialization,location}: z.infer<typeof UserFormValidation>) {
   setIsLoading(true);
   try{
    console.log({
      email: email,
      password:password,
      first_name: first_name,
      last_name: last_name,
      user_type:user_type,
      specialty:specialization,
      location:location
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const data = await axios.post(`${APIServerURL}/users/register`, {
      email: email,
      password:password,
      first_name: first_name,
      last_name: last_name,
      user_type:user_type,
      specialty:specialization,
      location:location
    }).then(response => {
    console.log('Success:', response.data); // Handle success response
    router.push(`/patients/${response.data.user.uid}/homePage`)
  })
  .catch(error => {
    console.error('Error:', error.response ? error.response.data : error.message); // Handle error response
  });
    const userData ={first_name,last_name, email, phone,password,user_type,specialization,location}
    const user =await createUser(userData);

    if(user) router.push(`/patients/${user.$id}/homePage`,)
   }catch(error){
    console.log(error)
   }
  }
  const handleClick = (value: string) => {
    setType(value)  };
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
        name='first_name'
        label = 'first name'
        placeholder = 'Mohammed'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='firstname'
        />
          <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='last_name'
        label = 'last name'
        placeholder = 'Alshayb'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='lastname'
        />
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
        fieldType={FormFieldType.PHONE_INPUT}
        control={form.control}
        name='phone'
        label = 'Phone number'
        placeholder = '+20 105 555 5555'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='phone'
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
      <CustomFormField
          fieldType={FormFieldType.SKELETON}
          control={form.control}
          name='user_type'
          label = 'user type'
          renderSkeleton={(field)=>(
            <FormControl>
              <RadioGroup className="flex h-11 gap-6 xl:justify-between"
              onValueChange={field.onChange }
              onClick={()=>{handleClick(field.value)}}
              defaultValue={field.value}>
                {usertype.map((option)=>(
                  <div key={option} className="radio-group">
                    <RadioGroupItem value={option} id={option}/>
                    <Label htmlFor={option}
                    className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
  )}/>
      <div className={`${(type==='doctor')?"visible":"hidden"} `}>
      <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name='specialization'
          label = 'Specialization'
          placeholder = 'Select a Specialization'
          >
            {catigoryList.map((doctor)=>(
              <SelectItem key={doctor.name} value={doctor.name} className="w-full">
                <div className="flex cursor-pointer items-center w-full py-1">
                  <Image 
                  src={doctor.url}
                  width={32}
                  height={32}
                  alt={doctor.name}
                  className="rounded-full border mx-2 border-dark-500"/>
                  <p className="w-full">{doctor.name}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>
      </div>
          <CustomFormField
        fieldType={FormFieldType.INPUT}
        control={form.control}
        name='location'
        label = 'your location'
        placeholder = 'Cairo'
        iconSrc = "/assets/icons/user.svg"
        iconAlt ='location'
        />
      <SubmitButton isLoading={false}>Get started</SubmitButton>
    </form>
  </Form>
  )
}

export default PatientForm