// import Container from '@/components/Container'
// import DropdownInput from '@/components/DropdownInput';
// import FormInput from '@/components/FormInput'
// import ButtonWrapper from '@/components/Shared/ButtonWrapper';

// const roleOptions = [
//     { label: "Owner", value: "owner" },
//     { label: "Developer", value: "developer" },
//     { label: "Designer", value: "designer" },
//     { label: "Manager", value: "manager" },
//     { label: "Marketer", value: "marketer" },
//     { label: "Other", value: "other" },
// ];
// const regionOptions = [
//     { label: "Bangladesh", value: "bangladesh" },
//     { label: "India", value: "india" },
//     { label: "United States", value: "usa" },
//     { label: "United Kingdom", value: "uk" },
//     { label: "Canada", value: "canada" },
//     { label: "Australia", value: "australia" },
// ];


// function AboutCompany() {
//     return (
//         <Container>
//             <form>
//                 <div className="space-y-6">
//                     <div className="space-y-4">
//                         <h2 className="text-2xl font-bold text-[#333333] leading-[140%]">
//                             Tell Us About Your Company
//                         </h2>
//                         <p className="text-[#777777] text-lg leading-[160%]">
//                             This is your company's opportunity to shine provide some basice details to help potential candidates <br /> understand your business better
//                         </p>
//                     </div>
//                     <div className='space-y-6'>
//                         {/* company name */}
//                         <FormInput label="Company Name" placeholder="SM Technology" />
//                         <div className="md:flex items-center justify-center gap-6">
//                             {/* industry type */}
//                             <div className="w-full md:w-1/2">
//                                 <FormInput
//                                     label="Industry type"
//                                     placeholder="Tech, Marketing, Finance, etc."
//                                 />
//                             </div>
//                             {/* what is your role */}
//                             <div className="w-full md:w-1/2">
//                                 <DropdownInput label="What is your role in the company?"
//                                     name="role"
//                                     options={roleOptions} />
//                             </div>
//                         </div>
//                         {/* company description */}
//                         <div>
//                             <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
//                                 Company Description
//                             </label>
//                             <textarea
//                                 id="companyDescription"
//                                 name="companyDescription"
//                                 rows={5}
//                                 placeholder="SM Technology"
//                                 className="w-full p-3 border border-[#c2c2c2] rounded-md text-gray-700"
//                             />
//                         </div>
//                     </div>

//                     <div className="flex flex-col md:flex-row items-center justify-center gap-6 gap-y-4">
//                         {/* Company Country/Region */}
//                         <div className="w-full md:w-[30%]">
//                             <DropdownInput
//                                 label="Company Country/Region"
//                                 name="role"
//                                 options={regionOptions}
//                             />
//                         </div>

//                         {/* Company Address */}
//                         <div className="w-full md:w-[70%]">
//                             <FormInput
//                                 label="Company Address"
//                                 placeholder="Section-06, Mirpur, Dhaka"
//                             />
//                         </div>
//                     </div>
//                     <div className="flex flex-col md:flex-row gap-4">
//                         {/* city */}
//                         <div className="w-full md:w-1/3">
//                             <FormInput label="City" placeholder="Dhaka" />
//                         </div>

//                         {/* state */}
//                         <div className="w-full md:w-1/3">
//                             <FormInput label="State" placeholder="Dhaka" />
//                         </div>

//                         {/* zip code */}
//                         <div className="w-full md:w-1/3">
//                             <FormInput label="ZIP Code" placeholder="1216" />
//                         </div>
//                     </div>
//                     <ButtonWrapper
//                         text="Next"
//                         icon="arrow-right"
//                         action="log"
//                         bgColor="#28C76F"
//                     />
//                 </div>
//             </form>
//         </Container>

//     )
// }

// export default AboutCompany




"use client"
import Container from '@/components/Container'
import DropdownInput from '@/components/DropdownInput';
import FormInput from '@/components/FormInput'
import ButtonWrapper from '@/components/Shared/ButtonWrapper';
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    companyName: string;
    industryType: string;
    role: string;
    country: string;
    companyDescription: string;
    companyAddress: string; 
    cityName: string; 
    stateName: string; 
    zipCode: string; 
    
}

const roleOptions = [
    { label: "Owner", value: "owner" },
    { label: "Developer", value: "developer" },
    { label: "Designer", value: "designer" },
    { label: "Manager", value: "manager" },
    { label: "Marketer", value: "marketer" },
    { label: "Other", value: "other" },
];
const regionOptions = [
    { label: "Bangladesh", value: "bangladesh" },
    { label: "India", value: "india" },
    { label: "United States", value: "usa" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "canada" },
    { label: "Australia", value: "australia" },
];


function AboutCompany() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    // console.log(watch("companyName")) // watch input value by passing the name of it

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-[#333333] leading-[140%]">
                            Tell Us About Your Company
                        </h2>
                        <p className="text-[#777777] text-lg leading-[160%]">
                            This is your company's opportunity to shine provide some basice details to help potential candidates <br /> understand your business better
                        </p>
                    </div>
                    <div className='space-y-6'>
                        {/* company name */}
                        <FormInput label="Company Name" placeholder="SM Technology"
                            {...register("companyName", { required: true })}
                        />
                        {errors.companyName && <span>This field is required</span>}
                        <div className="md:flex items-center justify-center gap-6">
                            {/* industry type */}
                            <div className="w-full md:w-1/2">
                                <FormInput
                                    label="Industry type"
                                    placeholder="Tech, Marketing, Finance, etc."
                                    {...register("industryType", { required: true })}
                                />
                                {errors.industryType && <span>This field is required</span>}
                            </div>
                            {/* what is your role */}
                            <div className="w-full md:w-1/2">
                                <DropdownInput label="What is your role in the company?"
                                    // name="role"
                                    options={roleOptions}
                                    {...register("role", { required: true })}
                                />
                                {errors.role && <span>This field is required</span>}
                            </div>
                        </div>
                        {/* company description */}
                        <div>
                            <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
                                Company Description
                            </label>
                            <textarea
                                // id="companyDescription"
                                // name="companyDescription"
                                rows={5}
                                placeholder="SM Technology"
                                className="w-full p-3 border border-[#c2c2c2] rounded-md text-gray-700"
                                {...register("companyDescription", { required: true })}
                            />
                            {errors.companyDescription && <span>This field is required</span>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 gap-y-4">
                        {/* Company Country/Region */}
                        <div className="w-full md:w-[30%]">
                            <DropdownInput
                                label="Company Country/Region"
                                // name="role"
                                options={regionOptions}
                                {...register("country", { required: true })}
                            />
                            {errors.country && <span>This field is required</span>}
                        </div>

                        {/* Company Address */}
                        <div className="w-full md:w-[70%]">
                            <FormInput
                                label="Company Address"
                                placeholder="Section-06, Mirpur, Dhaka"
                                {...register("companyAddress", { required: true })}
                            />
                            {errors.companyAddress && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* city */}
                        <div className="w-full md:w-1/3">
                            <FormInput label="City" placeholder="Dhaka" 
                                {...register("cityName", { required: true })}
                            />
                            {errors.cityName && <span>This field is required</span>}
                        </div>

                        {/* state */}
                        <div className="w-full md:w-1/3">
                            <FormInput label="State" placeholder="Dhaka" 
                                {...register("stateName", { required: true })}
                            />
                            {errors.stateName && <span>This field is required</span>}
                        </div>

                        {/* zip code */}
                        <div className="w-full md:w-1/3">
                            <FormInput label="ZIP Code" placeholder="1216" 
                                {...register("zipCode", { required: true })}
                            />
                            {errors.zipCode && <span>This field is required</span>}
                        </div>
                    </div>
                    <ButtonWrapper
                        text="Next"
                        icon="arrow-right"
                        action="log"
                        bgColor="#28C76F"
                    />
                </div>
            </form>
        </Container>

    )
}

export default AboutCompany


// import { useForm, SubmitHandler } from "react-hook-form"


// type Inputs = {
//   example: string
//   exampleRequired: string
// }


// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<Inputs>()
//   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


//   console.log(watch("example")) // watch input value by passing the name of it


//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
//     </form>
//   )
// }