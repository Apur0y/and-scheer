'use client'
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaBriefcase, FaBuilding, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';


export default function SearchField() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data, "Check the data here: ");
  }


  return (
    <div>
      <h1 className='text-xl font-semibold'>Find Your Favorite Job</h1>
      <form onSubmit={handleSubmit(onSubmit)} className=''>
        <div className="  max-w-6xl mx-auto bg-white p-4 rounded-lg shadow flex flex-col lg:flex-row items-stretch gap-4 mt-2">

          {/* Job Name Input */}
          <div className="flex items-center border-b border-gray-300 px-3 py-2 flex-1 gap-2">
            <FaBriefcase className="text-gray-500" />
            <input
              type="text"
              placeholder="Frontend Developer"
              className="flex-1 bg-transparent focus:outline-none"
              {...register("jobName", { required: true })}
            />
          </div>

          {/* Company Select */}
          <div className="flex items-center border-b border-gray-300 px-3 py-2 flex-1 gap-2">
            <FaBuilding className="text-gray-500" />
            <select
              {...register("company", { required: true })}
              className="flex-1 bg-transparent focus:outline-none">
              <option value="">Select Company</option>
              <option value="openai">OpenAI</option>
              <option value="google">Google</option>
              <option value="meta">Meta</option>
            </select>
          </div>

          {/* Location Select */}
          <div className="flex items-center border-b border-gray-300 px-3 py-2 flex-1 gap-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <select
              {...register("location", { required: true })}
              className="flex-1 bg-transparent focus:outline-none">
              <option value="">Select Location</option>
              <option value="new-york">New York</option>
              <option value="sf">San Francisco</option>
              <option value="remote">Remote</option>
            </select>
          </div>

          {/* Search Button */}
          <button className="flex items-center gap-2 px-6 py-2 bg-neutral-800 text-white rounded hover:bg-neutral-900 transition whitespace-nowrap">
            <FaSearch />
            Search
          </button>

        </div>
      </form>
      <p className='text-gray-600 mt-2 ml-2'>Popular : Full Stack Developer, Frontend Developer, UI Designer</p>
    </div>
  )
}
