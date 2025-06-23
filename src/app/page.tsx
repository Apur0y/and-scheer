
import Banner from "@/page-components/Banner/Banner";
import Loginform from "@/page-components/LoginForm";
import Navbar from "@/page-components/Navbar";
import ChooseUs from "../components/ChooseUs";
import RecentJob from "./alloveruser/recentJobs/RecentJob";
import AboutUs from "./alloveruser/AboutUs/page";
import PerfectJob from "./alloveruser/perfectJob/page";
import TopTalent from "./alloveruser/TopTalent/page";
import SuggestedCourses from "./alloveruser/Suggested/page";



export default function Home() {

  

  return (
    <div>
          <Navbar></Navbar>
          <Banner></Banner>
          <RecentJob></RecentJob>
          <ChooseUs></ChooseUs>
          <AboutUs></AboutUs>
          <PerfectJob></PerfectJob>
          <TopTalent></TopTalent>
          <SuggestedCourses></SuggestedCourses>




         <div className="flex justify-center items-center">
 

     <Loginform></Loginform>


    </div>
    </div>
 
  );
}
