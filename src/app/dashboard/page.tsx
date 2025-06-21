'use client'
import React from 'react'
import Input from '../components/Input'
import { useForm } from 'react-hook-form';

export default function page() {
           const {register, handleSubmit } = useForm();
    const onSubmit = (data) => {

        console.log(data, "Check the data here: ");
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center justify-center min-h-screen p-8 gap-4'>
            <Input 
            type='text'
            className='border border-gray-300 rounded p-2 w-full max-w-md'
            placeholder='Enter your username'
            required={true}
            {...register("username", { required: true })}
            ></Input>
            <button className='p-4 bg-teal-400'>Submit</button>
        </form>
    </div>
  )
}
