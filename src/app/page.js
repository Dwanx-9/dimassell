import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from "@/components/AboutSection"
import Project from '@/components/ProjectsSection';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import AchievementsSection from '@/components/AchievementsSection';
// import SplineAnimation from '@/components/SplineAnimation';
import VideoSection from "@/components/VideoSection";
import Exprience from '@/components/Exprience';
import ProfileSection from '@/components/ProfileSection';
import MessageSection from '@/components/MessageSelection';
import { FooterSection } from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black scroll-smooth focus:scroll-auto">
      <div>
      <Navbar />
      // <SplineAnimation />
      <VideoSection />
      
      </div>

     <div class='container mt-24 mx-auto px-12 py-4 '>
     <HeroSection />
     <AchievementsSection />
     <AboutSection />
     <div className=' flex justify-center' >
     <MessageSection />
     </div>
     <Exprience  />
     <Project />
     <EmailSection />
     <div className=''>
     <FooterSection />
     </div>
    </div>
    
    
    </main>

  )
}
