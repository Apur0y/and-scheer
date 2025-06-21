'use client'
import Image from "next/image";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import Loginform from "@/page-components/LoginForm";



export default function Home() {


  const { register, handleSubmit } = useForm();


  const onSubmit=(data)=>{
    console.log(data,"Check the data here: ")
  }

  return (
    <div className="flex justify-center items-center">
     

     <Loginform></Loginform>


    </div>
  );
}
