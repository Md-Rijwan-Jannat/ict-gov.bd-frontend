import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import MembersSection from "../members/MemberSection";
import NoticeBroad from "../noticeBroad/NoticeBroad";
import AdmissionForm from "../AdmissionForm";
import AnnualSportsEvent from "../AnnualSportsEvent";
import EService from "../EService";
import ImportantLink from "../ImportantLink";
import WebsiteVisitorCounter from "../WebsiteVisitorCounter ";
import Card from "../Card";
import EmergencyHotline from "../EmergencyHotline";
import PreventDengue from "../PreventDengue";
import OurResponsibility from "../OurResponsibility";
import VideoGallery from "../VideoGallery";

const MainLayout = () => {
  return (
    <main className="container mx-auto px-2 md:-px-4 bg-white-50 shadow">
      <nav>
        <Navbar />
      </nav>
      <header>
        <Header />
      </header>
      <Banner />
      <section className="my-5">
        <MembersSection />
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full">
            <NoticeBroad />
            <OurResponsibility />
            <VideoGallery />
          </div>
          <div className="w-full md:w-4/12  mt-6 md:mt-10">
            <AdmissionForm />
            <AnnualSportsEvent />
            <EService />
            <ImportantLink />
            <WebsiteVisitorCounter />
            <Card />
            <EmergencyHotline />
            <PreventDengue />
          </div>
        </div>
      </section>
      <footer className="mt-12">
        <Footer />
      </footer>
    </main>
  );
};

export default MainLayout;
