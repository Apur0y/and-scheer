// "use client";
// import Container from "@/components/Container";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// const AddLogo = () => {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop : useCallback((files : any) => {
//         console.log(files)
//     }, [])
//   });
//   return (
//     <Container>
//       <div className="max-w-[1180px] mx-auto">
//         {/* title and subtitle */}
//         <div>
//           <h1>Add Logo & Contact Information</h1>
//           <p>
//             Branding your profile with your logo helps candidates recognize and
//             connect with your company. Plus providing contact <br /> details
//             makes it easy for candidates to reach out.
//           </p>
//         </div>
//         <div className="flex ">
//           <div>
//             <div className="border border-green-500 p-6" {...getRootProps()}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p>Drop the files here ...</p>
//               ) : (
//                 <p>Drag 'n' drop some files here, or click to select files</p>
//               )}
//             </div>
//           </div>
//           <div>two</div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default AddLogo;

// "use client";
// import Container from "@/components/Container";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// const AddLogo = () => {
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop : useCallback((files : any) => {
//         console.log(files)
//     }, [])
//   });
//   return (
//     <Container>
//       <div className="max-w-[1180px] mx-auto">
//         <div className="flex ">
//           <div>
//             <div className="border border-green-500 p-6" {...getRootProps()}>
//               <input {...getInputProps()} />
//               {isDragActive ? (
//                 <p>Drop the files here ...</p>
//               ) : (
//                 <p>Drag drop some files here, or click to select files</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default AddLogo;


// finall code 
"use client";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

type Inputs = {
  name: string;
  image: File[];
};

export default function App() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  const [files, setFiles] = useState<File[]>([]);

  // ✅ useCallback টপ-লেভেলে
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      setValue("image", acceptedFiles, { shouldValidate: true });
    },
    [setValue]
  );

  // ✅ useDropzone টপ-লেভেলে
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
    },
    maxSize: 25 * 1024 * 1024,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("Submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name Input */}
      <input
        {...register("name", { required: true })}
        className="border px-3 py-2"
        placeholder="Enter name"
      />
      {errors.name && <p className="text-red-500">Name is required</p>}

      {/* File Drop */}
      <Controller
        name="image"
        control={control}
        rules={{ required: "Image is required" }}
        render={({ fieldState }) => (
          <>
            <div
              {...getRootProps()}
              className="border-2 border-dashed p-6 rounded text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the file here...</p>
              ) : (
                <p>Drag & drop or click to upload image</p>
              )}
            </div>
            {fieldState.error && (
              <p className="text-red-500">{fieldState.error.message}</p>
            )}
          </>
        )}
      />

      {/* Submit */}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}


// "use client";

// import { useForm, Controller } from "react-hook-form";
// import Container from "@/components/Container";
// import { useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// type FormValues = {
//   logo: File[]; // Dropzone returns an array of File
// };

// const AddLogo = () => {
//   const {
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const onSubmit = (data: FormValues) => {
//     console.log("Submitted files:", data.logo);
//   };

//   return (
//     <Container>
//       <div className="max-w-[1180px] mx-auto">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <Controller
//             name="logo"
//             control={control}
//             rules={{ required: "Company logo is required" }}
//             render={({ field: { onChange }, fieldState }) => {
//               const onDrop = useCallback(
//                 (acceptedFiles: File[]) => {
//                   onChange(acceptedFiles); // send files to RHF
//                 },
//                 [onChange]
//               );

//               const { getRootProps, getInputProps, isDragActive } = useDropzone({
//                 onDrop,
//                 accept: {
//                   "image/jpeg": [".jpeg", ".jpg"],
//                   "image/png": [".png"],
//                 },
//                 maxSize: 25 * 1024 * 1024, // 25MB
//               });

//               return (
//                 <div>
//                   <div
//                     {...getRootProps()}
//                     className="border-2 border-dashed border-gray-300 p-8 rounded-md text-center cursor-pointer bg-white hover:border-gray-400 transition"
//                   >
//                     <input {...getInputProps()} />
//                     <div className="text-sm text-gray-600">
//                       {isDragActive ? (
//                         <p>Drop your company logo here ...</p>
//                       ) : (
//                         <>
//                           <p className="mb-1">Drag & drop or click to upload</p>
//                           <p className="text-xs text-gray-500">
//                             Format: .jpeg, .png | Max size: 25MB
//                           </p>
//                         </>
//                       )}
//                     </div>
//                   </div>
//                   {fieldState.error && (
//                     <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
//                   )}
//                 </div>
//               );
//             }}
//           />

//           <button
//             type="submit"
//             className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </Container>
//   );
// };

// export default AddLogo;
