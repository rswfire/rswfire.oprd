// app/(archive)/ethics/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "A Note About Ethics",
    description: "On maintaining ethical clarity in the face of institutional dysfunction.",
};

export default function EthicsPage() {
    return (
        <SectionPage title="A NOTE ABOUT ETHICS">

            <div className="mt-4">I thought ethics were the rulebook.</div>

            <div className="mt-4">They're not.</div>

            <div className="mt-4"> Ethics are what you maintain when the institution abandons its own standards.</div>
            <div>When documentation of harm becomes more threatening than the harm itself.</div>
            <div>When accountability requests are reframed as attacks.</div>
            <div>When maintaining boundaries makes you the problem.</div>

            <div className="mt-4">I documented interactions. I communicated clearly. I held boundaries.</div>
            <div>I expected good faith responses to legitimate concerns.</div>

            <div className="mt-4">These should be unremarkable standards. Instead, they made me what the institution considered an impossible adversary.</div>

            <div className="mt-4">Not because I was unreasonable.</div>
            <div>Not because I was vindictive.</div>
            <div>Not because I operated outside ethical guidelines.</div>
            <div>But because &mdash;</div>
            <div className="ml-4">I refused to abandon them when doing so became inconvenient for people with power.</div>

            <div className="mt-4">This archive documents what happens when someone approaches institutional dysfunction with uncompromising ethical clarity.</div>
            <div>It shows what retaliation looks like when deployed against someone whose only &quot;weapon&quot; is documented truth.</div>

            <div className="mt-4">Every person in this archive had the opportunity to maintain the standards they claimed to uphold.</div>

            <div className="mt-4">Every person chose institutional protection instead.</div>

            <div className="mt-4">That choice &mdash; to abandon ethics when ethics became costly &mdash; is what this archive makes permanent.</div>

            <div className="mt-4">I thought ethics were the rulebook.</div>

            <div className="mt-4">I bet you did too.</div>

            <div className="mt-4">What follows is proof that they're not &mdash;</div>
            <div className="ml-4">and what happens when someone refuses to accept that corruption as normal.</div>

        </SectionPage>
    );
}