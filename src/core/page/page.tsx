import { useState } from "react"
import { RedirectModule } from "../hoook/RedirectModule";
import { ContainerPage } from "../shared/ContainerPage";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUs";
import { OurServices } from "./components/OurService";
import { WhyChooseSection } from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialSection";
import { HeroSection } from "./components/HeroSection";
import { ContactParalax } from "./components/ContactParalax";
import Footer from "./components/Footer";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";

export const PageMain = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            console.log(element);
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    if (loading) {
        return (
            <RedirectModule setLoading={setLoading} />
        )
    }

    return (
        <ContainerPage >
            <WhatsAppButton phoneNumber="1124555" />
            <Header onScrollToSection={scrollToSection} />
            <HeroSection />
            <AboutUs />
            <OurServices />
            <WhyChooseSection />
            <ProcessSection onScrollToSection={scrollToSection} />
            <TestimonialsSection />
            <ProjectsSection onScrollToSection={scrollToSection}/>
            <ContactParalax />
            <Footer onScrollToSection={scrollToSection}/>
        </ContainerPage>
    )
}