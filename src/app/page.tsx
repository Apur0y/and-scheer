
import Banner from "@/page-components/Banner/Banner";
import Loginform from "@/page-components/LoginForm";
import Navbar from "@/page-components/Navbar";
import RecentJob from "./components/RecentJob";
import ChooseUs from "./components/ChooseUs";



export default function Home() {

  

  return (
    <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <RecentJob></RecentJob>
          <ChooseUs></ChooseUs>





         <div className="flex justify-center items-center">
 

     <Loginform></Loginform>


    </div>
    </div>
 
  );
}
