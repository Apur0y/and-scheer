"use client"
import FormInput from '@/components/FormInput';
import Input from '@/components/Input'
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  password: string;
}

export default function Loginform() {

  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data:FormData) => {
    console.log(data, "Check the data here: ");
  }



  return (


 <section className="max-w-6xl mx-auto min-h-screen flex items-center justify-center md:px-4 ">
      <div className="flex w-full  rounded-lg overflow-hidden ">
        
        {/* Left: Image Section */}
        <div className="w-1/2 hidden md:block ">
          <img
            src="girl.jpg"
            alt="Login visual"
            className="h-full w-full rounded-lg object-cover"
          />
        </div>

        {/* Right: Form Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">

        <div className='flex justify-center items-center flex-col'>
  {/* Logo */}
          <div className="mb-6">
            <img src="/logo.svg" alt="Logo" className="h-10" />
          </div>

          {/* Welcome Message */}

          <h2 className="text-2xl md:text-4xl font-bold mb-4">Hi, Welcome Back!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Please exter your email and password below!
          </p>

        </div>
        <form onSubmit={handleSubmit(onSubmit)}>

        
          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <Input label="Email Address" type="email" placeholder="you@example.com" 
            {...register("email", { required: true })}
            />
            <Input label="Password" type="password" placeholder="password" 
            {...register("password", { required: true })}
            />
            <FormInput label="Password" type="password" placeholder="password" 
            {...register("password", { required: true })}
            />
          </div>

          {/* Login Button */}
          <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
            Login
          </button>

        </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-400">or with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Continue with Google */}
          <button className="w-full border border-gray-300 py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>
          <div className='flex justify-center gap-2 text-gray-700 flex-col md:flex-row '>
            <p className='text-center'>If you don't have any account please</p>
            <Link href={"/register"} className='text-green-600 underline font-semibold'>Create Account</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
