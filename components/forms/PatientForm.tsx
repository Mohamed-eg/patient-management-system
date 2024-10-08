"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {Form} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import CustomFormField from "../CustomFormField"
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
export enum FormFieldType {
    IMPUT= 'imput',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}
const PatientForm=()=> {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return(
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="text-white space-y-6 flex-1">
        <section>
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <CustomFormField
        fieldType={FormFieldType.IMPUT}
        control={form.control}
        name='name'
        label = 'Full name'
        placeholder = 'Mohammed Alshayb'
        iconSrc = "/public/assets/icons/user.svg"
        iconAlt ='user'
        />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default PatientForm