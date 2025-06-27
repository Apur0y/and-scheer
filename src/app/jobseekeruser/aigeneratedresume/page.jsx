"use client"
import Container from "@/components/Container";

import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import ResumeComponent from "./ResumeComponent";
import Button from "@/components/Button";
// Adjust path if different


export default function AiGeneratedResume() {


  return (
    <Container>
      <div className="min-h-screen p-4">
        <ProgressBar currentStep={7} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px] h-[752px]">
        
              <SectionHeader
                title="Review Your AI-Generated Resume"
                description="Take a moment to review your resume. You can make changes and regenerate if needed. When you’re ready, download it and start applying!"
              ></SectionHeader>
              <ResumeComponent></ResumeComponent>
              <div className="flex gap-12 mt-16">
                <Button className = "w-full bg-[#DBDBDB] text-black  py-3 px-6 rounded-lg hover:bg-green-700 transition" name="Download Resume" >Download Resume</Button>
                <Button name="Find Your Favorite Job">Find Your Favorite Job</Button>
            
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
