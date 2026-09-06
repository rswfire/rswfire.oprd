// app/(archive)/for-volunteers/what-it-means/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "What It Means to Volunteer",
    description: "Volunteering in a public agency is civic participation and unpaid labor — inside the structure, without the protections drawn around the people who are paid.",
};

export default function WhatItMeansPage() {
    return (
        <SectionPage
            title="WHAT IT MEANS TO VOLUNTEER"
            previousPage={{ href: "/for-volunteers", label: "For Volunteers" }}
            nextPage={{ href: "/reading", label: "Selected Reading" }}
        >
            <div className="mt-8 space-y-4 text-base leading-relaxed text-gray-800">
<div className="space-y-4">

                <div>The word smuggles something in. It suggests that because you are there by choice, you need no protection. That whatever happens to you, you chose it, and can simply choose otherwise. It treats the decision to arrive as proof that you are free to leave.</div>

                <div>That is not what volunteering in a public agency is.</div>

                <div>Volunteers provide a public service to public institutions that need them. It is civic participation. It is how a citizen engages directly with the function of government, on public land, in the open, for no pay.</div>

                <div>For the institution, it is labor they could not otherwise afford. Volunteers cover the shortfall. We clean the facilities, maintain the trails, meet the visitors, and hold the ground the agency cannot staff. The work is not incidental to how these places operate. In many parks and forests, it is how they operate.</div>

                <div>And we receive none of the benefits or protections that the people supervising us receive.</div>

                <div>No union. No human resources access. No grievance process. No appeal. No progressive discipline. No requirement that a reason be given. A supervisor&rsquo;s account of you is the only account, and there is no mechanism by which it can be questioned.</div>

            </div>

            <h3 className="mt-8 text-lg font-bold">You cannot always leave</h3>

            <div className="mt-4 space-y-4">

                <div>The idea that a volunteer can simply walk away assumes a relationship that ends at the property line. Many of these do not.</div>

                <div>We live on the land we steward. The position comes with a site, a hookup, a place to live. It is arranged months in advance and often built around a long-term commitment. Leaving is not resignation from a role. It is losing your housing, on a date you did not choose, with somewhere to be next and no time to arrange it.</div>

                <div>Every park and every forest is different. What does not vary is the dependence. Your entire experience, and often your entire situation, rests on fair supervision. On the assumption that the person with authority over your placement will not use that authority against you.</div>

                <div>When that assumption fails, there is nothing underneath it.</div>

            </div>

            <h3 className="mt-8 text-lg font-bold">What happened to me</h3>

            <div className="mt-4 space-y-4">

                <div>I served as an unpaid volunteer at Honeyman State Park in early 2025. I asked an operational question during a power outage and followed up with an email that named a dismissive tone. That email created a record, and the record is what everything after it responded to.</div>

                <div>I was confronted alone. Personal disclosures were drawn out of me and passed up the chain. I was held at a picnic table for sixty-two minutes and told to chew glass and swallow it. My sexuality was used against me. I was pressured to resign and I did not.</div>

                <div>I was dismissed by phone six days before my term ended. The park manager arrived at my RV within the hour to collect keys and gave me twenty-four hours to vacate. Two days later I was permanently expelled from every Oregon State Parks volunteer program, in writing, on agency letterhead, for documenting my treatment.</div>

                <div>A year later, on the anniversary of that dismissal, armed officers arrived at a locked gate where I live and work. My date of birth reached the police record from a volunteer file.</div>

                <div>Every mechanism that could have protected me was pointed the other way.</div>

            </div>

            <h3 className="mt-8 text-lg font-bold">The instrument</h3>

            <div className="mt-4 space-y-4">

                <div>Oregon has a statewide policy, 50.010.02, Violence-Free Workplace. It applies to every executive branch agency.</div>

                <div>Section 7 names volunteers among those who may be barred and terminated under it.</div>

                <div>Section 8 prohibits retaliation against those who report workplace violence. It names employees only.</div>

                <div>The same document brings volunteers inside its enforcement reach and leaves them outside its protection. It can be pointed at us. It offers us nothing pointed back.</div>

                <div>Twice I reported conduct that meets that policy&rsquo;s own definition of workplace violence. Once in writing. Once on the call where I was dismissed. Both times, the half of the instrument that would have protected me did not reach me. The half that could remove me did.</div>

            </div>

            <h3 className="mt-8 text-lg font-bold">Why this is here</h3>

            <div className="mt-4 space-y-4">

                <div>This is not a claim that volunteers deserve special treatment. It is a claim that we are inside the structure, doing the work the structure depends on, and that the protections stop at a line drawn around the people who are paid.</div>

                <div>That line is not an oversight in one park. It is written into a policy that governs an entire executive branch, and it has been in force since at least November 1, 2024.</div>

                <div>I am one volunteer who kept the records, and that is the only reason this archive is possible.</div>

                <div>If you volunteer for a public agency, document what happens to you, and do it with integrity, and you will already be on the right side of any action they take against you.</div>

            </div>
            </div>
        </SectionPage>
    );
}
