'use client';
import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
// import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";
import { useForm } from "react-hook-form";

// ✅ Define form types
type WorkExperienceForm = {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  jobDescription: string;
};

export default function PersonalInformation() {
  const { register, handleSubmit } = useForm<WorkExperienceForm>();

  const onSubmit = (data: WorkExperienceForm) => {
    console.log("Submitted Work Experience:", data);
  };

  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={3} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <SectionHeader
                title="Your Work Experience & Skills"
                description="Highlight your work experience and skills. The more detail you provide, the better the AI can tailor your resume to match job opportunities."
              />

              {/* Job Title */}
              <div className="mb-4">
                <FormInput
                  label="Job Title"
                  type="text"
                  placeholder="Mid-Level UI/UX Designer"
                  {...register("jobTitle", { required: true })}
                />
              </div>

              {/* Company Name */}
              <div className="mb-4 md:w-1/2">
                <FormInput
                  label="Company Name"
                  type="text"
                  placeholder="SM Technology (betopia Group)"
                  {...register("companyName", { required: true })}
                />
              </div>

              {/* Duration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <FormInput
                  label="Start Date"
                  type="date"
                  {...register("startDate", { required: true })}
                />
                <FormInput
                  label="End Date"
                  type="date"
                  {...register("endDate", { required: true })}
                />
              </div>

              {/* Job Description */}
              <div className="mb-4">
                <label className="block text-xl font-medium text-gray-800">
                  Job Description
                </label>
                <textarea
                  className="w-full h-[224px] bg-gray-50 py-5 px-4 border border-[#c2c2c2] rounded-md"
                  placeholder="An experienced marketing professional..."
                  {...register("jobDescription", { required: true })}
                />
              </div>

              {/* Submit Button */}
              {/* <div className="mt-8">
                <ButtonWrapper
                  text="Next"
                  icon="arrow-right"
                  action="submit"
                  bgColor="#28C76F"
                />
              </div> */}
              <button className="p-4 bg-green-400"> SUmbit</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
