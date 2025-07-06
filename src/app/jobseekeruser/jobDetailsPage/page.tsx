"use client";
import React, { useState } from "react";
import companies from "@/data/companies.json";
import RecentJobCard from "@/app/alloveruser/recentJobs/RecentJobCard";
import JobSeekerNavbar from "../jobSeekerHome/Navbar";
import Container from "@/components/Container";
import JobDetailsCard from "./JobDetailsCard";
import AllFilterSection from "./AllfilterSection";

export type Company = {
  icnos: string;
  name: string;
  position: string;
  location: string;
  salary: string;
};

export default function JobDetailspage() {
  const [currentCompany, setCurrentCompany] = useState<Company | undefined>(
    companies[0]
  );
  return (
    <div>
      <JobSeekerNavbar />
      <Container>
        <AllFilterSection />
        <div className="flex mt-16 ">
          <div className="space-y-6  w-[457px]">
            {companies.map((company) => (
              <div
                className={`${
                  currentCompany === company
                    ? "border border-primary rounded-lg shadow-xs shadow-primary"
                    : ""
                }`}
                onClick={() => setCurrentCompany(company)}
              >
                <RecentJobCard key={company.name} job={company} />{" "}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <JobDetailsCard currentCompany={currentCompany} />
          </div>
        </div>
      </Container>
    </div>
  );
}
