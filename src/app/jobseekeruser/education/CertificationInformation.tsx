'use client';
// import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
// import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
// import SectionHeader from "@/components/Shared/SectionHeader";
// import { useRouter } from "next/navigation";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { IoIosRemoveCircleOutline } from "react-icons/io";

// ✅ Corrected type
type WorkForm = {
  certificate: {
    certificateTitle: string;
    issuingOrganization: string;
    issueDate: string;
    expiryDate: string;
  }[];
};

export default function CertificationInformation() {
  const { control, register, handleSubmit } = useForm<WorkForm>({
    defaultValues: {
      certificate: [
        {
          certificateTitle: '',
          issuingOrganization: '',
          issueDate: '',
          expiryDate: '',
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "certificate",
  });

//   const router = useRouter();

  const onSubmit = (data: WorkForm) => {
    console.log("Certification Data:", data);
    // router.push('/jobseekeruser/education'); // Change route as needed
  };

  return (

      <div className="min-h-screen ">
        {/* <ProgressBar currentStep={4} totalSteps={7} />   */}
        <div className="flex justify-center ">
          <div className="w-full max-w-[1180px] h-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <SectionHeader
                title="Your Certifications"
                description="Provide any relevant certifications you've earned."
              /> */}

              {fields.map((field, index) => (
                <div key={field.id} className="mb-8">
                    
                  <div className="mb-4">
                    <FormInput
                      label="Certification Title"
                      type="text"
                      placeholder="e.g., AWS Certified Developer"
                      {...register(`certificate.${index}.certificateTitle` as const, { required: true })}
                    />
                  </div>

                  <div className="mb-4 w-1/2">
                    <FormInput
                      label="Issuing Organization"
                      type="text"
                      placeholder="e.g., Amazon Web Services"
                      {...register(`certificate.${index}.issuingOrganization` as const, { required: true })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <FormInput
                      label="Issue Date"
                      type="date"
                      {...register(`certificate.${index}.issueDate` as const, { required: true })}
                    />
                    <FormInput
                      label="Expiry Date"
                      type="date"
                      {...register(`certificate.${index}.expiryDate` as const)}
                    />
                  </div>

                  <div className="flex justify-end">
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500 text-sm flex items-center"
                      >
                        <IoIosRemoveCircleOutline className="mr-1" /> Remove Certification
                        
                      </button>
                      
                    )}
                  </div>
             
                </div>
              ))}

              <div className="mb-12">
                <button
                  type="button"
                  onClick={() =>
                    append({
                      certificateTitle: '',
                      issuingOrganization: '',
                      issueDate: '',
                      expiryDate: '',
                    })
                  }
                  className="text-[#28C76F] font-medium flex items-center"
                >
                  <span className="mr-2">+</span> Add Another Certification
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

  );
}
