import Container from "@/components/Container";

import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import React from "react";
// Adjust path if different

export default function PersonalInformation() {
  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={2} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px] h-[752px]">
            <h1 className="text-5xl text-[#333333] font-bold mb-6">
              Tell Us About Yourself
            </h1>
            <p className="text-gray-600 mb-6">
              Fill in your personal details so we can tailor your resume
              perfectly to your career goals.
            </p>

            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div className="w-full ">
                <label className="block text-xl font-medium text-gray-800 ">
                  Job Title
                </label>
                <select className="w-full bg-gray-50 py-5 px-4 border border-[#c2c2c2] rounded">
                  <option value="" disabled hidden>
                    Enter your most recent or current job title
                  </option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="marketing-manager">Marketing Manager</option>
                  <option value="graphic-designer">Graphic Designer</option>
                  <option value="sales-representative">
                    Sales Representative
                  </option>
                  <option value="project-manager">Project Manager</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-800 ">
                Job Description
              </label>
              <textarea
                className="w-full h-[224px] bg-gray-50 py-5 px-4 border border-[#c2c2c2] rounded-md mb-16"
                name="text"
                id="textarea"
                placeholder="An experienced marketing professional with over 5 years of expertise in digital marketing, specializing in SEO, social media strategies, and content creation"
              />
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
