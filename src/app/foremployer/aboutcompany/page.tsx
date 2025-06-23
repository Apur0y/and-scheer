import Container from '@/components/Container'
import DropdownInput from '@/components/DropdownInput';
import FormInput from '@/components/FormInput'

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
    return (
        <Container>
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
                    <FormInput label="Company Name" placeholder="SM Technology" />
                    <div className="md:flex items-center justify-center gap-6">
                        {/* industry type */}
                        <div className="w-full md:w-1/2">
                            <FormInput
                                label="Industry type"
                                placeholder="Tech, Marketing, Finance, etc."
                            />
                        </div>
                        {/* what is your role */}
                        <div className="w-full md:w-1/2">
                            <DropdownInput label="What is your role in the company?"
                                name="role"
                                options={roleOptions} />
                        </div>
                    </div>
                    {/* company description */}
                    <div>
                        <label htmlFor="companyDescription" className="block text-sm font-medium text-gray-700 mb-1">
                            Company Description
                        </label>
                        <textarea
                            id="companyDescription"
                            name="companyDescription"
                            rows={5}
                            placeholder="SM Technology"
                            className="w-full p-3 border border-[#c2c2c2] rounded-md text-gray-700"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 gap-y-4">
                    {/* Company Country/Region */}
                    <div className="w-full md:w-[30%]">
                        <DropdownInput
                            label="Company Country/Region"
                            name="role"
                            options={regionOptions}
                        />
                    </div>

                    {/* Company Address */}
                    <div className="w-full md:w-[70%]">
                        <FormInput
                            label="Company Address"
                            placeholder="Section-06, Mirpur, Dhaka"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                    {/* city */}
                    <div className="w-full md:w-1/3">
                        <FormInput label="City" placeholder="Dhaka" />
                    </div>

                    {/* state */}
                    <div className="w-full md:w-1/3">
                        <FormInput label="State" placeholder="Dhaka" />
                    </div>

                    {/* zip code */}
                    <div className="w-full md:w-1/3">
                        <FormInput label="ZIP Code" placeholder="1216" />
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default AboutCompany