
import Banner from "@/page-components/Banner/Banner";
import Loginform from "@/page-components/LoginForm";
import Navbar from "@/page-components/Navbar";
import RecentJob from "./components/RecentJob";



export default function Home() {

  

  return (
    <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <RecentJob></RecentJob>





         <div className="flex justify-center items-center">
 

     <Loginform></Loginform>


    </div>
    </div>
 
  );
}
