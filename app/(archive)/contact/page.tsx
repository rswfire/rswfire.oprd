import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import IfThisIsHappening from "@/components/IfThisIsHappening";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Write to Robert Samuel White directly. There is no cost, and nothing you send is published without your word.",
};

export default function ContactPage() {
    return (
        <SectionPage
            title="CONTACT"
            subtitle="WRITE TO ME DIRECTLY"
            previousPage={{ href: "/reading", label: "Selected Reading" }}
        >
            <div className="mt-8">
                <IfThisIsHappening />
            </div>

            <div className="mt-10">
                <ContactForm />
            </div>
        </SectionPage>
    );
}
