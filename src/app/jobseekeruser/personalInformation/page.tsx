'use client'
import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface PersonalInfoType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

export default function PersonalInformation() {
  const {
    register,
    handleSubmit,
    
  } = useForm<PersonalInfoType>();

 const router = useRouter();

  const onSubmit = (data: PersonalInfoType) => {
    console.log(data, "Got the personal info");
    router.push("/jobseekeruser/careersummary")
  };

  return (
    <Container>
      <div className="min-h-screen px-2">
        <ProgressBar currentStep={1} totalSteps={7} />

        <div className="flex justify-center mt-12">
          <div className=" w-full max-w-[1180px] h-auto">
            <SectionHeader
              title="Tell Us About Yourself"
              description="Fill in your personal details so we can tailor your resume perfectly to your career goals."
            />

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <FormInput
                  label="First Name"
                  type="text"
                  placeholder="Saifur"
                  {...register("firstName", { required: true })}
                />
                <FormInput
                  label="Last Name"
                  type="text"
                  placeholder="Rahman"
                  {...register("lastName", { required: true })}
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <FormInput
                  label="Phone Number"
                  type="text"
                  placeholder="+880 1567808747"
                  {...register("phone", { required: true })}
                />
                <FormInput
                  label="Email Address"
                  type="email"
                  placeholder="ux.saifur.ug@gmail.com"
                  {...register("email", { required: true })}
                />
              </div>

              {/* Country and Address */}
              <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
                <div className="w-full md:w-1/3">
                  <label className="block text-xl font-medium text-gray-800 mb-1">
                    Country/Region
                  </label>
                  <select
                    {...register("country", { required: true })}
                    className="w-full bg-gray-50 py-4 px-4 border border-[#c2c2c2] rounded"
                  >
                    <option value="" disabled hidden>
                      Select a country
                    </option>
                    <option value="bd">Bangladesh</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                </div>
                <div className="w-full md:w-2/3">
                  <FormInput
                    label="Address"
                    type="text"
                    placeholder="Section-06, Mirpur, Dhaka."
                    {...register("address", { required: true })}
                  />
                </div>
              </div>

              {/* City, State, ZIP */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                <FormInput
                  label="City"
                  type="text"
                  placeholder="Dhaka"
                  {...register("city", { required: true })}
                />
                <FormInput
                  label="State"
                  type="text"
                  placeholder="Dhaka"
                  {...register("state", { required: true })}
                />
                <FormInput
                  label="ZIP Code"
                  type="text"
                  placeholder="1216"
                  {...register("zip", { required: true })}
                />
              </div>

              <ButtonWrapper
                text="Next"
                icon="arrow-right"
                action="submit"
                bgColor="#28C76F"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
