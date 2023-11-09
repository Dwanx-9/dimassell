import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import AboutSection from "@/components/AboutSection"
import Project from '@/components/ProjectsSection';
import EmailSection from '@/components/EmailSection';
import Footer from '@/components/Footer';
import AchievementsSection from '@/components/AchievementsSection';
import SplineAnimation from '@/components/SplineAnimation';
import Exprience from '@/components/Exprience';
import ProfileSection from '@/components/ProfileSection';
import MessageSection from '@/components/MessageSelection';

export default function Home() {
  return (
    <main className="bg-black">
      <div>
      <Navbar />
      <SplineAnimation />
      <AchievementsSection />
      
      </div>

     <div class='container mt-24 mx-auto px-12 py-4 '>
     <HeroSection />
     <AboutSection />
     <div className=' flex justify-center' >
     <MessageSection />
     </div>
     <Exprience  />
     <Project />
     <EmailSection />
     <Footer />
    </div>
    
    
    </main>

  )
}
