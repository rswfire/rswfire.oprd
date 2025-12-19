// app/(archive)/evidence/response/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Response",
    description: "The February 12, 2025 attempt at reconciliation that demonstrated institutional bad faith.",
};

export default function ResponsePage() {
    return (
        <SectionPage
            title="RESPONSE"
            subtitle="ATTEMPTING RESET"
            previousPage={{ href: "/evidence/confrontation", label: "Confrontation" }}
            nextPage={{ href: "/evidence/betrayal", label: "Betrayal" }}
        >
            <div className="mt-4 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                <div className="font-semibold">
                    Three days after the February 9 confrontation with Ryan Warren, I attempted reconciliation with good faith vulnerability and explicit commitment to conform.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">FEBRUARY 12, 2025</h2>

            <div className="mt-4">
                After Ryan Warren confronted me alone on February 9—cataloging first-week mistakes in response to my email to Kati Baker—I spent days worried about my standing at Honeyman.
            </div>

            <div className="mt-4">
                Logan Bliss had disappeared. I hadn't seen him since the confrontation, and that felt purposeful.
            </div>

            <div className="mt-4">
                I sent this email attempting reset. I named what had happened as a confluence of unfortunate events. I offered to recalibrate. I asked them to get to know me. I committed to conforming to their expectations.
            </div>

            <div className="mt-4">
                I gave them everything they could have wanted from someone who had just been subjected to managerial intimidation: deference, flexibility, explicit commitment to institutional standards.
            </div>

            <Email
                from="Robert Samuel White"
                to="Logan Bliss, Kati Baker, Ryan Warren"
                date="February 12, 2025"
                subject="Re: Jessie M. Honeyman State Park Hosting for March 2025"
            >
<pre className="whitespace-pre-wrap">{`Dear Ryan, Kati, and Logan:

I would like to start by saying what an honor it has been to be at Honeyman and to experience this place firsthand, and I deeply respect the energy and commitment it takes to manage a place like this.

I have had a few days to think about what happened. I would like to offer my perspective for your consideration and a possible path forward, if you'll do me the honor of considering it.

First, there was an unfortunate confluence of events. A water outage, an angry guest, a power outage, an angry guest, a new volunteer, the early morning hour, a hesitant text for clarification, and a reply that didn't quite make the volunteer feel he had his bearings here.

Next, the volunteer asserted a boundary as softly as he could and he felt it was respected and was already moving on, but the system saw it differently, and a park manager showed up at the start of his shift, without his direct supervisor for support, and this created a whole new situation.

This volunteer is new to this life, to volunteering at the state parks, and just trying to navigate it with as much care as he can possibly muster. He's not here trying to stand out or create waves of any kind. He just wants to be supported as he learns to integrate into this rhythm.

I have been worried all week. I have not seen Logan, and that feels purposeful. Because he could have put my mind at ease instantly. I would like to ask we reset. Please take the time to get to know me. I sincerely believe I can be a valuable resource to you. And I want that so much.

And my time here is so limited. If you don't want me back here next year, I will understand this. I will regret it, because I care about this place and I really thought I was building something meaningful here. But I will understand.

I have volunteer assignments lined up all year as I explore this wonderful coast. I don't want to jeopardize that. I will conform. I will recalibrate. I will be a model volunteer. I hope that you will give me that opportunity.

Sam
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">WHAT THIS DEMONSTRATED</h2>

            <div className="mt-4">
                This email proved institutional bad faith.
            </div>

            <div className="mt-4">
                I gave them exactly what healthy institutional response would require: acknowledgment of tension, willingness to adapt, explicit commitment to their standards, and good faith request for reset.
            </div>

            <div className="mt-4">
                If the February 9 exchange had actually been about operational clarity or tone—if Ryan Warren's confrontation had been legitimate supervision rather than intimidation—this email should have resolved everything.
            </div>

            <div className="mt-4">
                Instead:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>Logan Bliss elicited trust through reciprocal vulnerability, then disclosed what I shared to management.</li>
                <li>Ryan Warren mocked my sexuality at the March 5 day-use meeting.</li>
                <li>Kati Baker remained silent while psychological pressure escalated.</li>
                <li>Allison Watson weaponized Logan's disclosures during dismissal proceedings.</li>
            </ul>

            <div className="mt-4">
                This email exists in the record to prove one thing: I attempted reconciliation in good faith.
            </div>

            <div className="mt-4">
                What followed was systematic targeting, identity-based weaponization, and permanent dismissal.
            </div>

            <div className="mt-4">
                They had the opportunity to reset. They chose escalation instead.
            </div>

        </SectionPage>
    );
}