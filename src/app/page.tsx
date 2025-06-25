
import Banner from "@/page-components/Banner/Banner";
import Loginform from "@/page-components/LoginForm";
import Navbar from "@/page-components/Navbar";
import ChooseUs from "../components/ChooseUs";
import RecentJob from "./alloveruser/recentJobs/RecentJob";
import AboutUs from "./alloveruser/AboutUs/page";
import PerfectJob from "./alloveruser/perfectJob/page";
import TopTalent from "./alloveruser/TopTalent/page";
import SuggestedCourses from "./alloveruser/Suggested/page";
import PackageCard from "@/PlanCard";
import JObSeekerPlan from "./alloveruser/JobSeekerPlan/page";
import EmployerPlan from "./alloveruser/EmployerPlan/page";
import Newslatter from "./alloveruser/Newslatter/page";
import Footer from "./alloveruser/Footer/page";
import SimpleSlider from "@/page-components/Banner/RecentSwiper";



export default function Home() {



  return (
    <div className="black-main">
  
      <Banner></Banner>
      <RecentJob></RecentJob>
    
      <ChooseUs></ChooseUs>
      <AboutUs></AboutUs>
      <PerfectJob></PerfectJob>
      <TopTalent></TopTalent>
      <SuggestedCourses></SuggestedCourses>

      
      <JObSeekerPlan></JObSeekerPlan>
      <EmployerPlan></EmployerPlan>
      <Newslatter></Newslatter>
      <Footer></Footer>
      


    </div>

  );
}
