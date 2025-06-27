'use client';
import Container from "@/components/Container";
// import FormInput from "@/components/FormInput";
import ProgressBar from "@/components/progressBar";
// import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import EducationalBackground from "./EducationalBackground";
import CertificationInformation from "./CertificationInformation";


// type EducationFormData = {
//   degree: string;
//   institution: string;
//   major: string;
//   graduationStart: string;
//   graduationEnd: string;
// };

export default function Education() {
  // const { register, handleSubmit } = useForm<EducationFormData>();
  const [certificate,setCertificate]=useState(true);

  // const onSubmit = (data: EducationFormData) => {
  //   console.log("Educational Data Submitted:", data);
  // };

  return (
    <Container>
      <div className="min-h-screen px-4">
        <ProgressBar currentStep={4} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="md:px-6 w-full max-w-[1180px]">
            <div className="flex justify-between">
              {
                certificate?  <SectionHeader
                title="Your Educational Background"
                description="Provide your academic qualifications and any relevant certifications to strengthen your resume."
              /> : <SectionHeader
                title="Your Certifications"
                description="Provide any relevant certifications you've earned."
              />
              }
            
              <button onClick={()=>setCertificate(!certificate)} type="button" className=" bg-scheer-primary-dark rounded-lg h-full px-3 py-2 md:px-6 md:py-3 text-white roulg">{certificate? "Certifications":"Education"}</button>

            </div>
            
            <div>
              {
                certificate? <EducationalBackground /> : <CertificationInformation/>
              }
            </div>

            
          </div>
        </div>
      </div>
    </Container>
  );
}
