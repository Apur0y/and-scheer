import Banner from "@/page-components/Banner/Banner";
import Navbar from "@/page-components/Navbar";
import ChooseUs from "../components/ChooseUs";
import RecentJob from "./alloveruser/recentJobs/RecentJob";
import AboutUs from "./alloveruser/AboutUs/page";
import PerfectJob from "./alloveruser/perfectJob/page";
import TopTalent from "./alloveruser/TopTalent/page";
import SuggestedCourses from "./alloveruser/Suggested/page";
import JObSeekerPlan from "./alloveruser/JobSeekerPlan/page";
import EmployerPlan from "./alloveruser/EmployerPlan/page";
import Newslatter from "./alloveruser/Newslatter/page";
import Footer from "./alloveruser/Footer/page";
import ScrollTop from "@/page-components/Banner/ScrollTop";



export default function Home() {

  const navitem=[
    { name: "Home", href: "#" },
    { name: "For Job Seekers", href: "/jobseekeruser/jobSeekerHome" },
    { name: "For Employers", href: "#" },
    { name: "Course", href: "#" },
    { name: "Pricing", href: "#" },
  ];



  return (
    <div className="black-main relative">
      <Navbar navItem={navitem}></Navbar>
      <Banner></Banner>
      <RecentJob title={"Recent Job"}></RecentJob>

      <ChooseUs></ChooseUs>
      <AboutUs></AboutUs>
      <PerfectJob></PerfectJob>
      <TopTalent></TopTalent>
      <SuggestedCourses></SuggestedCourses>


      <JObSeekerPlan></JObSeekerPlan>
      <EmployerPlan></EmployerPlan>
      <Newslatter></Newslatter>
      <Footer></Footer>

      <ScrollTop></ScrollTop>
    </div>

  );
}
