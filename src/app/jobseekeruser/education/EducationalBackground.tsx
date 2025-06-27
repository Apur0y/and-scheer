'use client';
// import Container from "@/components/Container";
import FormInput from "@/components/FormInput";
// import ProgressBar from "@/components/progressBar";
import ButtonWrapper from "@/components/Shared/ButtonWrapper";
import { useRouter } from "next/navigation";
// import SectionHeader from "@/components/Shared/SectionHeader";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { IoIosRemoveCircleOutline } from "react-icons/io";

type EducationFormData = {
  education: {
    degree: string;
    institution: string;
    major: string;
    graduationStart: string;
    graduationEnd: string;
  }[];
};

export default function EducationalBackground() {
  const { register, control, handleSubmit } = useForm<EducationFormData>({
    defaultValues: {
      education: [
        {
          degree: "",
          institution: "",
          major: "",
          graduationStart: "",
          graduationEnd: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const router=useRouter();


  const onSubmit = (data: EducationFormData) => {
    console.log("Educational Data Submitted:", data);
    router.push("/jobseekeruser/aigeneratedresume")
  };

  return (
    <div className="min-h-screen">
      <div className="flex justify-center">
        <div className="w-full max-w-[1180px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
              <div key={field.id} className="mb-8 border-b pb-8">
                {/* Degree */}
                <div className="mb-4">
                  <FormInput
                    label="Your Degree"
                    type="text"
                    placeholder="e.g., Bachelor’s, Master’s"
                    {...register(`education.${index}.degree`, { required: true })}
                  />
                </div>

                {/* Institution and Major */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormInput
                    label="Institution Name"
                    type="text"
                    placeholder="Dhaka University"
                    {...register(`education.${index}.institution`, { required: true })}
                  />
                  <FormInput
                    label="Major"
                    type="text"
                    placeholder="Electronic and Communication Engineering"
                    {...register(`education.${index}.major`, { required: true })}
                  />
                </div>

                {/* Graduation Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <FormInput
                    label="Graduation Start"
                    type="date"
                    {...register(`education.${index}.graduationStart`, { required: true })}
                  />
                  <FormInput
                    label="Graduation End"
                    type="date"
                    {...register(`education.${index}.graduationEnd`, { required: true })}
                  />
                </div>

                {/* Achievements - static UI block */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
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

                {/* Remove Button */}
                {fields.length > 1 && (
                  <div className="flex justify-end mb-4">
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="text-red-500 text-sm flex items-center"
                    >
                      <IoIosRemoveCircleOutline className="mr-1" />
                      Remove Degree
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Add Another Degree Button */}
            <div className="mb-12">
              <button
                type="button"
                onClick={() =>
                  append({
                    degree: "",
                    institution: "",
                    major: "",
                    graduationStart: "",
                    graduationEnd: "",
                  })
                }
                className="text-[#28C76F] font-medium flex items-center"
              >
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
  );
}
