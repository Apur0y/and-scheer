'use client';
import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";
import { useForm } from "react-hook-form";

type EducationFormData = {
  degree: string;
  institution: string;
  major: string;
  graduationStart: string;
  graduationEnd: string;
};

export default function PersonalInformation() {
  const { register, handleSubmit } = useForm<EducationFormData>();

  const onSubmit = (data: EducationFormData) => {
    console.log("Educational Data Submitted:", data);
  };

  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={4} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <SectionHeader
                title="Your Educational Background"
                description="Provide your academic qualifications and any relevant certifications to strengthen your resume."
              />

              <div className="mb-4">
                <FormInput
                  label="Your Degree"
                  type="text"
                  placeholder="e.g., Bachelor’s, Master’s"
                  {...register("degree", { required: true })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Institution Name"
                  type="text"
                  placeholder="Dhaka University"
                  {...register("institution", { required: true })}
                />
                <FormInput
                  label="Major"
                  type="text"
                  placeholder="Electronic and Communication Engineering"
                  {...register("major", { required: true })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Graduation Start"
                  type="date"
                  {...register("graduationStart", { required: true })}
                />
                <FormInput
                  label="Graduation End"
                  type="date"
                  {...register("graduationEnd", { required: true })}
                />
              </div>

              {/* Achievements (static for now) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="block text-xl font-medium text-gray-800 mb-2">
                    Achievements
                  </label>
                  <div className="w-full p-6 bg-gray-50 border border-[#c2c2c2] rounded-md flex flex-col items-center justify-center text-center">
                    <svg
                      className="w-10 h-10 text-gray-400 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p className="text-gray-500 mb-2">Drop file or browse</p>
                    <p className="text-xs text-gray-400 mb-4">
                      Format: jpeg, png & Max file size: 25 MB
                    </p>
                    <button type="button" className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md">
                      Browse Files
                    </button>
                  </div>
                </div>
              </div>

              {/* Add Degree (not functional yet) */}
              <div className="mb-12">
                <button type="button" className="text-[#28C76F] font-medium flex items-center">
                  <span className="mr-2">+</span> Add Another Degree
                </button>
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
