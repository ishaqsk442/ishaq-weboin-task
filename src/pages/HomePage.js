import React from 'react';



import ImageGallery from '../components/ImageGallery';
import IntroSection from '../components/IntroSection/index';
import InsightsSection from '../components/InsightsSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import  {useStudents}  from '../StudentContext'; 
// import InsightsSection from '../components/InsightsSection';
// import Navbar from '../components/Navbar';


const HomePage= () =>{
const { stats } = useStudents();
  return (
    <div style={{ paddingTop: '4rem' }}>
      <IntroSection />
      {/* <Navbar/> */}
      <ImageGallery />
      <InsightsSection />
      <StatsSection stats={stats} />
      <Footer />
    </div>
  );
}

export default HomePage;
