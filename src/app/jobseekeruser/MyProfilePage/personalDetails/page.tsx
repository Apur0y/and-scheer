import Image from "next/image";
import React from "react";

export default function ProfilePersonalDetails() {
  return (
    <div>
      <div className=" mx-auto shadow-sm rounded-xl overflow-hidden relative p-6 space-y-4 text-scheer-body-gray border border-gray-200">
        <div className="flex gap-8 items-center flex-col md:flex-row   ">
          <Image
            src={""}
            alt="Profile"
            height={215}
            width={215}
            className="bg-blue-200 rounded-full"
          />

          <div>
            {/* Name & Title */}
            <div className="flex flex-col justify-center md:block items-center">
              <h2 className="text-xl md:text-5xl text-primary-dark font-bold">
                SAIFUR RAHMAN
              </h2>
              <p className="text-[28px] mt-2 mb-6">UI/UX Designer</p>

              {/* Contact Info */}
              <div className="text-xl flex flex-col md:flex-row items-center gap-6 md:divide-x divide-gray-300">
                <p className="md:pr-6 flex flex-col">
                  <p className="text-primary-dark">Phone:</p> +880 1567-808747
                </p>
                <p className="md:pr-6 flex flex-col">
                  <p className="text-primary-dark">Email:</p>{" "}
                  ux.saifur.info@gmail.com
                </p>
                <p className=" flex flex-col">
                  <p className="text-primary-dark">Location:</p> Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Edit Button */}
        <button className="absolute bg-primary-dark text-white px-3 py-2 rounded-md top-4 right-4 text-sm hover:underline">
          Edit
        </button>
      </div>
    </div>
  );
}
