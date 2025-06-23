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
                    <FormInput label="Company Name" placeholder="SM Technology" />
                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        <div className="w-full md:w-1/2">
                            <FormInput
                                label="Industry type"
                                placeholder="Tech, Marketing, Finance, etc."
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <DropdownInput label="What is your role in the company?"
                                name="role"
                                options={roleOptions}/>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default AboutCompany