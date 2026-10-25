// app/(archive)/ethics/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Cite from "@/components/Cite";

export const metadata: Metadata = {
    title: "A Note About Ethics",
    description: "On maintaining ethical clarity in the face of institutional dysfunction.",
};

export default function EthicsPage() {
    return (
        <SectionPage
            emblem="Scale" tone="indigo"
            title="A NOTE ABOUT ETHICS"
            subtitle="AN INTRODUCTION"
            previousPage={{ href: "/", label: "Home" }}
            nextPage={{ href: "/displacement", label: "The Displacement Framework" }}
        >

                <div className="mb-6 p-6 border-l-4 border-black rounded-r-lg">
                        <div className="text-lg sm:text-xl font-semibold leading-snug">
                                I thought ethics were the rulebook.
                        </div>
                </div>

            <div className="mt-4">They're not.</div>

            <div className="mt-4"> Ethics are what you maintain when the institution abandons its own standards.</div>
            <div>When documentation of harm becomes more threatening than the harm itself.</div>
            <div>When accountability requests are reframed as attacks.</div>
            <div>When maintaining boundaries makes you the problem.</div>

            <div className="mt-4">I documented interactions. I communicated clearly. I held boundaries.</div>
            <div>I expected good faith responses to legitimate concerns.</div>

            <div className="mt-4">These should be unremarkable standards.</div>
            <div>Instead, they made me what the institution considered an impossible adversary.</div>

            <div className="mt-4">Not because I was unreasonable.</div>
            <div>Not because I wanted conflict.</div>
            <div>Not because I operated outside ethical guidelines.</div>
            <div>But because &mdash;</div>
            <div className="ml-4">I refused to abandon them when doing so became inconvenient for people with power.</div>

            <div className="mt-4">This archive documents what happens when someone approaches institutional dysfunction with uncompromising ethical clarity.</div>

            <div className="mt-4">It shows what retaliation looks like when deployed against someone whose only &quot;weapon&quot; is documented truth.</div>

            <div className="mt-4">Every person in this archive had the opportunity to maintain the standards they claimed to uphold.</div>

            <div className="mt-4">Every person chose the preservation of institutional impunity instead.</div>

            <div className="mt-4">That choice &mdash; to abandon ethics when ethics became costly &mdash; is what this archive makes permanent.</div>

            <div className="mt-4">I thought ethics were the rulebook.</div>

            <div className="mt-4">I bet you did too.</div>

            <div className="mt-4">What follows is proof that they're not &mdash;</div>
            <div className="ml-4">and what happens when someone refuses to accept that corruption as normal.</div>

            {/* The line has a date. He wrote it before he asked them for
                anything, which is the fact worth keeping next to it. */}
            <div className="mt-10 border-t border-gray-200 pt-5">
                <div className="text-xs font-bold uppercase tracking-widest text-indigo-700">
                    First written
                </div>
                <div className="mt-2 text-sm text-gray-600">
                    August 17, 2025, on rswfire.com. Five days later I filed{" "}
                    <Cite ulid="01K399TM7GG3FNAXSR4BX9TB1X" thread="oprd">my first public records request</Cite>.
                    Seven days later I published{" "}
                    <Cite ulid="01K3FDT5P09S9N9QSZYWS9KN7A" thread="oprd">an open letter to the Director</Cite>{" "}
                    asking for five protections for every volunteer. I wrote this before I asked them for anything.
                </div>
            </div>

        </SectionPage>
    );
}