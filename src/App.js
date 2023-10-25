import './App.css';
import Header from './components/Header/Header';
import ShowcaseSection from './components/Main/ShowcaseSection/ShowcaseSection';
import PartnersSection from './components/Main/PartnersSection/PartnersSection';
import FeaturesSection from './components/Main/FeaturesSection/FeaturesSection';
// import MeetOurTeamSection from './components/Main/MeetOurTeamSection/MeetOurTeamSection';
// import NewsAndUpdatesSection from './components/Main/NewsAndUpdatesSection/NewsAndUpdatesSection';
import OurServicesSection from './components/Main/OurServicesSection/OurServicesSection';
// import ProjectAndCaseStudiesSection from './components/Main/ProjectAndCaseStudiesSection/ProjectAndCaseStudiesSection';
// import TestimonialsSection from './components/Main/TestimonialsSection/TestimonialsSection';
// import WhyChooseUsSection from './components/Main/WhyChooseUsSection/WhyChooseUsSection';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <ShowcaseSection />
      <PartnersSection />
      <FeaturesSection />
      {/* <AboutCompanySection /> */}
      <OurServicesSection />
      {/* <WhyChooseUsSection />
      <ProjectAndCaseStudiesSection />
      <MeetOurTeamSection />
      <TestimonialsSection />
      <ArticleAndNewsSection />
      <NewsAndUpdatesSection />
      <Footer /> */}
    </div>
  );
}

export default App;