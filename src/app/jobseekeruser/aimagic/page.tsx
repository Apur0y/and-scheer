"use client";
import Container from "@/components/Container";
import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import SectionHeader from "@/components/Shared/SectionHeader";
import { useRouter } from "next/navigation";
import React, { useState } from "react";




export default function CareerSummary() {

    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const simulateLoading = () => {
        setIsLoading(true);
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 2;
            setProgress(currentProgress);
            if (currentProgress >= 100) {
                clearInterval(interval);
                router.push("/jobseekeruser/aigeneratedresume");
            }
        }, 150); // Adjust speed here
    };

  

    return (
        <Container>
            <div className="min-h-screen ">
                <ProgressBar currentStep={6} totalSteps={7} />
                <div className="flex justify-center mt-12">
                    <div className=" w-full max-w-[1180px] h-auto">
                        <div >
                            <SectionHeader
                                title="AI Resume Magic"
                                description="Now, let’s turn all the information you’ve provided into a professional resume! Our AI will generate a polished version that showcases your strengths and matches industry standards."
                            />

                            {isLoading ? (
                                <div className="mb-16 mt-6">
                                    <p className="text-xl font-medium  mb-3  text-gray-600">AI is refining your resume...</p>
                                    <div className="h-4 w-full bg-gray-200 rounded">

                                        <div
                                            className="h-4  bg-green-500 rounded transition-all duration-150"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>

                                </div>
                            ) : (<></>
                                // <ButtonWrapper
                                //   text="Next"
                                //   icon="arrow-right"
                                //   action="submit"
                                //   bgColor="#28C76F"
                                // />
                            )}
                            <button className="w-full" onClick={()=>simulateLoading()}>      <ButtonWrapper
                                text="Next"
                                icon="arrow-right"
                                action="submit"
                                bgColor="#28C76F"

                            /></button>

                        </div>

                    </div>
                </div>
            </div>
        </Container>
    );
}
