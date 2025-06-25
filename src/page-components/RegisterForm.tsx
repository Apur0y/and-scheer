'use client'
import Input from '@/components/Input'
import Logo from '@/components/MainLogo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

interface FormData {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
}

export default function Registerform() {

    const { register, handleSubmit } = useForm<FormData>();
    const [isError, setIsError] = useState  ("");

    const router =useRouter();

    const onSubmit = (data: FormData) => {
        router.push("/")
        console.log(data, "Check the data here: ");
        try {
            
        } catch (error) {
            setIsError(String(error))
        }
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
                <div className="w-full md:w-1/2 px-8 flex flex-col justify-center ">

                    <div className='flex justify-center items-center flex-col'>
                        {/* Logo */}
                        <div className="mb-6">
                            {/* <img src="/logo.svg" alt="Logo" className="h-10" /> */}
                             <Logo height={120} width={268}></Logo>
                        </div>

                        {/* Welcome Message */}

                        <h2 className="text-2xl md:text-4xl font-bold mb-8">Create your account!</h2>
                        <p className="text-sm text-gray-600 mb-6 text-center">
                            Welcome to Passit, Please enter the information requested to create <br /> your account!
                        </p>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Input Fields */}
                        <div className="space-y-4 mb-8">
                            <div className='flex flex-col md:flex-row gap-5'>
                                <Input label="First Name" type="text" placeholder="John"
                                    {...register("firstName", { required: true })}
                                />
                                <Input label="Last Name" type="text" placeholder="Doe"
                                    {...register("lastName", { required: true })}
                                />
                            </div>

                            <Input label="Email Address" type="email" placeholder="you@example.com"
                                {...register("email", { required: true })}
                            />

                            <Input label="Password" type="password" placeholder="password"
                                {...register("password", { required: true })}
                            />
                            <Input label="Confirm Password" type="password" placeholder=""
                                {...register("confirmPassword", { required: true })}
                            />
                        </div>

                        {/* Error Message */}
                        {isError && (
                            <p className="text-red-500 text-sm mb-1">
                                {isError}
                            </p>
                        )}

                        {/* Login Button */}
                        <button className="w-full py-3 px-6 bg-green-600 text-white  rounded-lg hover:bg-green-700 transition">
                            Login
                        </button>

                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-8">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-2 text-gray-400">or with</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Continue with Google */}
                    <button className="w-full border border-gray-300 py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5"
                        />
                        Login with Google
                    </button>
                    <div className='flex justify-center items-center gap-2 text-gray-700   mt-3'>
                        <p className='text-center'>If you don't have any account please</p>
                        <Link href={"/login"} className='text-green-600 underline font-semibold'>Login</Link >
                    </div>
                </div>
            </div>
        </section>
    )
}
