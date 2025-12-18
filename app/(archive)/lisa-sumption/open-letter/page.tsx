// app/(archive)/lisa-sumption/open-letter/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "The Open Letter",
    description:
        "The August 25, 2025 open letter sent to Director Lisa Sumption, her response, and the resulting analysis.",
};

export default function OpenLetterPage() {
    return (
        <SectionPage
            title="THE OPEN LETTER"
            subtitle="AUGUST 25, 2025 — SENT TO DIRECTOR LISA SUMPTION"
            supplemental="HER RESPONSE, AND THE RECORD IT CREATED"
            previousPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            nextPage={{ href: "/governor-kotek", label: "The Governor's Silence" }}
        >

            <div className="mt-4">
                On August 25, 2025, I sent Director Lisa Sumption a comprehensive public letter
                documenting the full scope of the misconduct at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>, the structural
                failures that enabled it, and the institutional silence that followed.
            </div>

            <div className="mt-4">The letter acknowledged her accomplishments, named the harm plainly, and outlined concrete
                protections that would prevent future volunteers from being subjected to what I
                endured.
            </div>

            <div className="mt-4">
                Her response arrived within twelve hours. It was the first direct acknowledgment
                from anyone at OPRD — and, simultaneously, a refusal to engage with the substance
                of the evidence.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* OPEN LETTER */}

            <h2 className="text-xl font-semibold">THE OPEN LETTER I SENT</h2>

            <Email
                from="Sam White <rsw@rswfire.com>"
                to="Director Lisa Sumption"
                date="August 25, 2025"
                subject="An Open Letter"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Director Sumption,

I am writing this letter publicly because private channels have been met with silence, and the issues at stake extend far beyond my individual experience. I want to begin by acknowledging what you have built during your tenure at Oregon Parks & Recreation Department, an institution I had remarkable respect for, that I wanted to be part of, that I wanted to support and grow with.

Recognition Where It's Due

Your career speaks to genuine dedication to public service. As the first woman to lead OPRD, you have overseen millions in infrastructure investments, championed diversity and accessibility initiatives, and built a national reputation for leadership through your role as President of the National Association of State Park Directors. Your recent appointment to the National Parks Service Advisory Board reflects the respect you have earned in the field.

The statements you have made publicly about breaking down barriers and ensuring that Oregon's parks welcome everyone resonate with the values that brought me to volunteer at Honeyman in the first place. I believed then, as I believe now, that parks should be spaces where all people can serve and find belonging.

Silence Is Not Neutral

Earlier this year, I served as an unpaid volunteer at Honeyman State Park. What I experienced there was not a miscommunication or personality conflict. It was systematic institutional misconduct executed against someone serving without compensation. I have documented this experience thoroughly, including audio recordings of coercive meetings and video evidence of dismissal without cause or paperwork.

The evidence shows:

  * Park Manager Ryan Warren telling me to "chew glass and swallow it" as leadership advice
  * Admission that I was never given the benefit of the doubt from day one
  * Two months of psychological pressure designed to force my resignation
  * Weaponization of my identity and normal human communication as "problematic behavior"
  * Dismissal six days before my scheduled completion, using fabricated pretenses

This is not about whether misconduct occurred — it is documented. The only question is whether you will respond to documented misconduct with silence or with leadership.

My Concerns About Moving Forward

I want to be direct about something that weighs on me: you have significant institutional power, and I am aware that speaking publicly about documented coercion and retaliation could result in further reprisal. Your connections extend across state government and the parks community. You have resources I do not have. This power imbalance is real, and it factors into every decision I make about how to seek accountability.

I am sharing this concern not to accuse you of anything, but to name the reality that many volunteers face when considering whether to report misconduct. The very people who harm volunteers often have the institutional power to compound that harm through retaliation. It has literally already happened at Honeyman. This dynamic keeps abuse hidden and allows harmful patterns to persist.

Why This Matters Beyond My Experience

What happened to me at Honeyman was not unique—it was systematic. The institutional response to documented misconduct has been complete silence, which sends a clear message to other volunteers about what they can expect if they report harm. This creates an environment where unpaid service comes with exposure to psychological pressure, and accountability requests disappear into administrative silence.

Volunteers are not disposable labor. We are community members who choose to serve without compensation, often sacrificing time, income, and stability to support public institutions. We deserve basic protection from institutional retaliation, and we deserve leadership that responds to evidence of harm with presence rather than silence.

Oregon Parks & Recreation Department is facing budget challenges and actively recruiting community support through volunteer programs. But how can you ask for community trust and unpaid labor while protecting managers who systematically undermine and retaliate against those who answer that call?

What Leadership Could Look Like

I am not asking for apologies or personal remedies. I am asking for institutional accountability that protects future volunteers from experiencing what I experienced. This could include:

  * Transparent investigation of the documented misconduct at Honeyman State Park
  * Clear consequences for managers who deploy coercive tactics against volunteers
  * Systemic protections that prevent retaliation against volunteers who report misconduct
  * Accessible grievance processes that don't depend on the good faith of the managers causing harm
  * Training and oversight that ensures volunteer supervision meets basic professional standards

These are not extraordinary requests. They are basic institutional protections that should exist in any organization that depends on unpaid community service.

The Choice Before You

You have built a career on public service values and institutional leadership. The question now is whether those values extend to protecting volunteers when institutional loyalty conflicts with human accountability.

The evidence of systematic misconduct at Honeyman State Park is public and permanent. Community awareness continues to grow. Every day of continued silence becomes part of the documented institutional response to volunteer harm.

This is not about whether you believe me. The recordings exist. The only choice is whether you meet that documentation with integrity or avoidance.

My Commitment

I want to be clear about my intentions. I am not appealing for personal repair. There is no repair possible — the harm already happened, and it is real. I am documenting the record and naming the choice in front of you. The documentation I have created exists to prevent future harm, not to punish past mistakes. If real accountability emerges—if systemic protections are implemented and harmful managers are held responsible—this becomes a story of institutional learning rather than institutional failure.

But accountability cannot happen through silence. It requires acknowledgment, investigation, and change. It requires leadership that chooses human dignity over institutional self-protection.

I remain hopeful that you will choose to be that leader.

The volunteer community is watching. The Oregon community is watching. The question is not whether you have the power to address this—you clearly do. The question is whether you will use that power to protect the people who serve your institution, or to protect the institution from the people it has harmed.

In nearly fifty years of life, this was the worst institutional harm I have ever experienced. It deserved acknowledgment, not strategic avoidance.

Would you accept silence if this happened to someone you care about?

I was harmed, and others remain unprotected.

Silence now only ensures it will happen again.

Please choose wisely.

Respectfully,

Sam White
Former Oregon State Parks Volunteer
rsw@rswfire.com
rswfire.com/honeyman
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* DIRECTOR'S RESPONSE */}

            <h2 className="text-xl font-semibold">THE DIRECTOR'S RESPONSE</h2>

            <Email
                from="Lisa Sumption"
                to="Sam White <rsw@rswfire.com>"
                date="August 26, 2025"
                subject="Re: An Open Letter"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Dear Sam,

Thank you for taking the time to share your perspective and for your service as a volunteer with Oregon State Parks. I hear the depth of your concern, and I recognize the effort you have put into documenting and expressing your experience.

Volunteers are an essential part of Oregon State Parks, and I want to be clear that I value the contributions you and others make to our mission. The issues you have raised touch on matters of respect, accountability, and the importance of ensuring that those who give their time to serve the public feel supported.

While I cannot respond here to the specific claims you have outlined, I want to assure you that I take concerns about our volunteer program seriously. I am committed to ensuring that we continue to foster an environment where volunteers and staff alike can contribute meaningfully, feel safe, and be treated with professionalism.

I appreciate you sharing your perspective, and I will make sure your concerns are reviewed through the appropriate channels within the department.

Respectfully,

Lisa Sumption
`}
                </pre>
            </Email>

        </SectionPage>
    );
}
