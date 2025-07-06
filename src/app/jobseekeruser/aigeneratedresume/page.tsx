"use client"
import Container from "@/components/Container";

import Button from "@/components/Button";
import ProgressBar from "@/components/progressBar";
import SectionHeader from "@/components/Shared/SectionHeader";
import Link from "next/link";
import ResumeComponent from "./ResumeComponent";
// Adjust path if different


export default function AiGeneratedResume() {


  return (
    <Container>
      <div className="min-h-screen p-4 mb-12">
        <ProgressBar currentStep={7} totalSteps={7} />
        <div className="flex justify-center mt-12">
          <div className="p-6 w-full max-w-[1180px] h-[752px]">
        
              <SectionHeader
                title="Review Your AI-Generated Resume"
                description="Take a moment to review your resume. You can make changes and regenerate if needed. When you’re ready, download it and start applying!"
              ></SectionHeader>
              <ResumeComponent></ResumeComponent>
              <div className="flex gap-12 py-16 ">
                <button className = "w-full bg-[#DBDBDB] text-black  py-3 px-6 rounded-lg hover:bg-gray-200 transition  font-medium" name="Download Resume" >Download Resume</button>
              
              <Link href={"/jobseekeruser/jobSeekerHome"} className="w-full">
              <Button name="Find Your Favorite Job">Find Your Favorite Job</Button>
              </Link>  
            
              </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
