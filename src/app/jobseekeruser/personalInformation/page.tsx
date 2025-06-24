import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";
// Adjust path if different

export default function PersonalInformation() {
  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={1} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px] h-[752px]">
            <SectionHeader
              title="Tell Us About Yourself"
              description="Fill in your personal details so we can tailor your resume perfectly to your career goals."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <FormInput label="First Name" type="text" placeholder="Saifur" />
              <FormInput label="Last Name" type="text" placeholder="Rahman" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <FormInput
                label="Phone Number"
                type="text"
                placeholder="+880 1567808747"
              />
              <FormInput
                label="Email Address"
                type="email"
                placeholder="ux.saifur.ug@gmail.com"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
              <div className="w-full md:w-1/3">
                <label className="block text-xl font-medium text-gray-800 ">
                  Country/Region
                </label>
                <select className="w-full bg-gray-50 py-4 px-4 border border-[#c2c2c2] rounded">
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
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <FormInput label="City" type="text" placeholder="Dhaka" />
              <FormInput label="State" type="text" placeholder="Dhaka" />
              <FormInput label="ZIP Code" type="text" placeholder="1216" />
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
