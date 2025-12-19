// app/(archive)/evidence/confrontation/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Confrontation",
    description: "The February 9, 2025 email exchange with Park Supervisor Kati Baker that triggered systematic retaliation.",
};

export default function ConfrontationPage() {
    return (
        <SectionPage
            title="CONFRONTATION"
            subtitle="KATI BAKER, PARK SUPERVISOR"
            previousPage={{ href: "/evidence", label: "Evidence" }}
            nextPage={{ href: "/evidence/response", label: "Response" }}
            summary="Kati Baker, Park Supervisor, responded dismissively to operational questions about power outage protocols and escalated after receiving feedback about her tone."
        >

            <h2 className="text-xl font-semibold">FEBRUARY 9, 2025</h2>

            <div className="mt-4">
                During a power outage in H Loop, I contacted Park Supervisor Kati Baker at 6:00 AM after interacting with concerned guests since 3:00 AM. I asked for clarity on:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li>Who to contact during off-hours utility issues.</li>
                <li>How status updates are communicated to volunteers and staff.</li>
                <li>What information I should provide to guests.</li>
            </ul>

            <div className="mt-4">
                Her response was dismissive. I sent a follow-up email naming her tone and requesting the operational clarity I needed to serve effectively.
            </div>

            <Email
                from="Samuel White"
                to="Kati Baker, Park Supervisor"
                date="February 9, 2025"
                subject="Following Up on the Power Outage"
            >
<pre className="whitespace-pre-wrap">{`Hi Kati,

I wanted to follow up on our exchange about the H Loop power outage. When I choose my sites as a volunteer host, I'm always conscious of what each position means for guest interaction. Being across from the gate means being a natural point of contact, especially during overnight issues.

I'm a systems thinker by nature and profession. When I reached out at 6 AM, after interacting with concerned guests since 3 AM, I was seeking to understand how to best serve within this system. Having clear protocols helps me provide better service, especially during situations like yesterday's water outage where guests became agitated.

I hesitated to contact you at that hour because I wasn’t sure if other volunteers had already done so or if that was the correct protocol. And when I did reach out, the response I received made me feel small—like my concern wasn’t valid, when in reality, I was simply trying to do my job well. That hesitation is something I shouldn’t have to feel when I’m only seeking to be as effective as possible in a role that ultimately serves both guests and the park.

I’m still seeking clarity on:

1. Who to contact during off-hours utility issues

2. How status updates are communicated so that volunteers and staff can access the same information

3. What specific details I should provide to guests to ensure they feel informed

I choose to be here because I care about making these parks work well for everyone. I want to be a valuable resource, but I also need to know my role is respected. Having clearer guidance on these points would help me serve both guests and staff more effectively.

Additionally, I see an opportunity to improve how real-time updates are shared across teams. If there’s interest, I’d be happy to discuss a simple system for tracking and communicating outages, reducing redundant contacts while keeping everyone better informed.

Best, 
Sam
`}</pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE ESCALATION</h2>

            <div className="mt-4">
                This email &mdash; a request for operational clarity and feedback about dismissive tone &mdash; was weaponized repeatedly as justification for subsequent institutional actions:
            </div>

            <ul className="list-disc list-outside ml-8 mt-2 space-y-1">
                <li><strong>Same day</strong>: Ryan Warren confronted me alone, cataloging first-week mistakes.</li>
                <li><strong>March 5</strong>: Referenced at the day-use meeting as evidence of problematic behavior.</li>
                <li><strong>March 25</strong>: Cited by Allison Watson during dismissal proceedings.</li>
            </ul>

            <div className="mt-4">
                Every institutional action taken against me traced back to this exchange &mdash; not because I did anything wrong, but because I named her tone and insisted on the operational support I needed to serve effectively.
            </div>

        </SectionPage>
    );
}