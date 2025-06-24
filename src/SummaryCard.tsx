import { FaCheckCircle } from "react-icons/fa";
import Container from "./components/Container";

// components/PlanSummaryCard.tsx
interface PlanSummaryProps {
    planName: string;
    price: number;
    permissions: string[];
    roleName: string
}

const PlanSummaryCard: React.FC<PlanSummaryProps> = ({ planName, price, permissions, roleName }) => {
    return (
        <div>
            <Container>

                <h1 className="text-3xl md:text-5xl font-semibold">Plan Summary Card</h1>
                <div className="flex flex-col md:flex-row gap-6 mt-12 ">
                    <div className="flex flex-col border border-gray-50 lg:flex-row gap-6 xl:w-[941px]  rounded-xl">
                        {/* Plan Details Section */}
                        <div className="bg-white p-6 rounded-lg shadow w-full">
                            <h3 className="text-2xl font-semibold text-scheer-body-gray">{roleName}</h3>
                            <h2 className="text-2xl md:text-5xl font-semibold text-gray-800">{planName}</h2>
                            <p className="text-3xl font-bold text-scheer-primary mt-2">€{price.toFixed(2)} <span className="text-base text-scheer-body-gray font-normal">/month</span> </p>
                            <p className="text-sm text-gray-500 mb-4"></p>
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">Permissions:</h3>
                            <ul className="  text-gray-700 space-y-4">
                                {permissions.map((perm, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <FaCheckCircle className="text-green-500 mt-1" />
                                        <span>{perm}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Payment Section */}

                    </div>
                    <div className="bg-white p-6 h-full rounded-lg shadow border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700">Payment Medium</h3>
                        <p className="text-gray-600 mt-1">You can change your plan at any time.</p>
                        <p className="text-3xl font-bold text-scheer-primary mt-2">€{price.toFixed(2)} <span className="text-base text-scheer-body-gray font-normal">/month</span> </p>

                        <button className="w-full px-4 py-2 bg-scheer-primary text-white rounded-md hover:bg-scheer-primary transition">
                            Next
                        </button>
                    </div>
                </div>

            </Container>

        </div>

    );
};

export default PlanSummaryCard;