import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";

export default function PersonalInformation() {
  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={3} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px] h-[752px]">
            <SectionHeader
              title="Your Work Experience & Skills"
              description="Highlight your work experience and skills. The more detail you provide, the better the AI can tailor your resume to match job opportunities."
            ></SectionHeader>

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div className="w-full ">
                <FormInput
                  label="Job Title"
                  type="text"
                  placeholder="Mid-Level UI/UX Designer"
                />
              </div>
            </div>
            <div className=" md:w-1/2 mb-8">
              <FormInput
                label="Company Name"
                type="text"
                placeholder="SM Technology (betopia Group)"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <FormInput
                label="Duration"
                type="date"
                placeholder="Start Date"
              />
              <div className="pt-6">
                {/* Padding to match label height */}
                <FormInput label="" type="date" placeholder="End Date" />
              </div>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 ">
                Job Description
              </label>
              <textarea
                className="w-full h-[224px] bg-gray-50 py-5 px-4 border border-[#c2c2c2] rounded-md mb-8"
                name="text"
                id="textarea"
                placeholder="An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation"
              />
            </div>

            {/* Achievements and Skills in a grid layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Achievements File Input */}
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
                    xmlns="http://www.w3.org/2000/svg"
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
                  <button className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md">
                    Browse Files
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 underline mb-6"></div>
            {/* Add Another Work Experience Button */}
            <div className="mb-12">
              <button className="text-[#28C76F] font-medium flex items-center">
                <span className="mr-2">+</span> Add Another Work Experience
              </button>
            </div>

            <ButtonWrapper
              text="Next"
              icon="arrow-right"
              action="log"
              bgColor="#28C76F"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
