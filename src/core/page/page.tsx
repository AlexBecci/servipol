import { useState } from "react"
import { RedirectModule } from "../hoook/RedirectModule";
import { ContainerPage } from "../shared/ContainerPage";
import { WhatsAppButton } from "../shared/WhatsAppButton";
import { Header } from "./components/Header";
import { Service } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { Experiencie } from "./components/Experience";
import { Contact } from "./components/Contact";
import { OurServices } from "./components/OurService";
import { Benefits } from "./components/Benefits";
import { WorkProcessSection } from "./components/WorkProcessSection";

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
            <Service />
            <AboutUs />
            <OurServices />
            <Benefits />
            <WorkProcessSection />
            <Experiencie />
            <Contact /> 
        </ContainerPage>
    )
}