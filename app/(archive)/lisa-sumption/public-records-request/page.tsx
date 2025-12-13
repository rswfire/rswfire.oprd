// app/(archive)/lisa-sumption/public-records-request/page.tsx

import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";
import Link from "next/link";

export const metadata: Metadata = {
    title: "The Public Records Request",
    description:
        "Documentation of the August 22, 2025 Public Records Request to OPRD, the Notice of Violation, the institutional response, and the final withdrawal.",
};

export default function PublicRecordsRequestPage() {
    return (
        <SectionPage
            title="THE PUBLIC RECORDS REQUEST"
            subtitle="AUGUST 22, 2025 — FORMAL REQUEST FOR TRANSPARENCY"
            supplemental="THE NOTICE OF VIOLATION, THE RESPONSE, AND THE WITHDRAWAL"
        >

            <div className="mt-4">
                On August 22, 2025, I submitted a comprehensive public records request to Oregon
                Parks and Recreation Department seeking documentation related to volunteer
                management, administrative conduct, and decisions made by leadership following
                my removal from Honeyman State Park.
            </div>

            <div className="mt-4">
                What followed was ninety days of silence, an inaccessible posting to an internal
                portal I was never told existed, and finally — only after issuing a Notice of
                Violation — a response that hinged on a five-figure cost estimate.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* ORIGINAL REQUEST */}

            <h2 className="text-xl font-semibold">THE ORIGINAL REQUEST</h2>

            <Email
                from="Robert Samuel White"
                to="OPRD Public Records Officer"
                cc="Director Lisa Sumption"
                date="August 22, 2025"
                subject="Public Records Request — Volunteer Program Operations and Management"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`PUBLIC RECORDS REQUEST
TO: Oregon Parks and Recreation Department Public Records Officer
CC: Director Lisa Sumption
FROM: Robert Samuel White
DATE: August 22, 2025
RE: Public Records Request - Volunteer Program Operations and Management

Dear Public Records Officer,

Pursuant to Oregon Revised Statutes Chapter 192 (Oregon Public Records Law), I hereby request access to and copies of the following public records:

SECTION 1: VOLUNTEER PROGRAM DOCUMENTATION

1. All policies, procedures, manuals, and guidelines related to volunteer management, discipline, and termination (2020-present)
2. All training materials provided to staff regarding volunteer supervision and communication
3. All documents related to volunteer program reviews, assessments, or evaluations
4. All communications regarding changes to volunteer program policies or procedures since January 2025

SECTION 2: HONEYMAN STATE PARK OPERATIONS

5. All incident reports, complaint logs, or documentation of volunteer issues at Honeyman State Park (2020-present)
6. All communications between Honeyman State Park staff and OPRD administration regarding volunteer management
7. All documents related to staffing changes, transfers, reassignments, or personnel actions at Honeyman State Park since January 2025
8. All training records, policy updates, or procedural changes implemented at Honeyman State Park since January 2025

SECTION 3: ADMINISTRATIVE COMMUNICATIONS

9. All communications, emails, memos, and documents involving Director Lisa Sumption regarding volunteer relations, Honeyman State Park operations, or volunteer program issues (January 2025-present)
10. All communications between OPRD and other state agencies regarding volunteer program operations or specific volunteer incidents
11. All briefings, reports, or analyses provided to executive leadership regarding volunteer program performance or issues
12. All documents related to budget planning or resource allocation for volunteer program management

SECTION 4: EXTERNAL COMMUNICATIONS

13. All communications with legal counsel regarding volunteer program operations, policies, or specific incidents
14. All communications with insurance providers regarding volunteer program liability or risk management
15. All media monitoring reports, public relations assessments, or reputation management documents
16. All communications with Governor's office or other external agencies regarding OPRD volunteer programs

SECTION 5: INVESTIGATIVE AND COMPLIANCE RECORDS

17. All investigation files, complaint responses, or disciplinary actions related to volunteer program management
18. All documents related to workplace conduct investigations at any OPRD facility
19. All ethics complaints, HR investigations, or compliance reviews involving volunteer supervision
20. All documentation of corrective actions, policy changes, or training implemented following volunteer-related incidents

SECTION 6: OPERATIONAL RECORDS

21. All meeting minutes, notes, or agendas from staff meetings discussing volunteer program operations or systemic volunteer issues
22. All documentation related to volunteer recruitment, retention, or satisfaction assessments
23. All contracts, agreements, or memoranda of understanding related to volunteer services
24. All budget documents or financial records related to volunteer program operations

SECTION 7: DIGITAL COMMUNICATIONS

25. All work-related text messages, instant messages, or other digital communications between OPRD staff regarding volunteer program operations
26. All electronic calendars, scheduling records, or meeting documentation related to volunteer program management
27. All digital files, databases, or electronic records related to volunteer tracking or management

SECTION 8: EMPLOYMENT AND APPLICATION RECORDS

28. All employment applications, job postings, and hiring documentation for positions at Honeyman State Park (January 2025-present)
29. All communications, evaluations, or documentation related to employment applications submitted by Robert Samuel White
30. All hiring committee records, interview notes, or selection documentation for Honeyman State Park positions during 2025
31. All communications between Honeyman State Park staff and OPRD HR regarding employment applications or hiring decisions
32. All policies and procedures related to volunteer-to-employee transitions or internal hiring processes
33. All documentation of hiring decisions, rejection notifications, or application status communications for Honeyman State Park positions

REQUEST SPECIFICATIONS

Time Period: January 1, 2020 to present, unless otherwise specified
Format: Electronic copies preferred (PDF), physical copies acceptable
Fee Limitation: Please provide fee estimate if costs exceed $25

Clarifications:

"Volunteer program" includes all unpaid service positions across OPRD facilities
"Communications" includes emails, letters, memos, text messages, and verbal communication summaries

Please include documents where responsive information appears as part of larger communications

If any requested records are claimed to be exempt, please provide a detailed explanation citing specific statutory authority

PUBLIC INTEREST FEE WAIVER REQUEST

I hereby request a waiver of all fees associated with this public records request pursuant to ORS 192.440(4) and the public interest in disclosure.

Grounds for Fee Waiver:

Public Interest: This request seeks information regarding the management and treatment of unpaid volunteers who provide essential services to Oregon's state park system. During OPRD's current budget crisis and public appeals for community support, transparency regarding volunteer program operations serves significant public interest.

Government Accountability: The requested records will contribute to public understanding of how a state agency manages volunteer relations, implements policies, and ensures appropriate oversight of public employees supervising unpaid community members.

Educational Purpose: The information will be used to inform public discourse about institutional accountability, volunteer program best practices, and the effective use of public resources during budgetary constraints.

No Commercial Interest: This request is not made for commercial purposes. The information sought relates to government operations and public employee conduct in their official capacity.

Public Benefit: Given OPRD's stated need for increased volunteer participation and community partnerships to address funding shortfalls, transparency regarding current volunteer management practices serves the public interest in ensuring effective and ethical program operations.

The public interest in disclosure substantially outweighs any administrative burden or cost to the agency, particularly given the agency's public appeals for volunteer support during its financial crisis.

CONTACT INFORMATION

Robert Samuel White
{Contact}

I understand that Oregon law requires a response within a reasonable time, and that fees may apply for extensive copying. Please contact me if you need clarification on any aspect of this request.

Please ensure all responsive records are preserved and not deleted, altered, or destroyed pending completion of this request, pursuant to Oregon public records retention requirements.

Given the documented history of communication breakdowns and institutional opacity surrounding volunteer dismissal procedures, this request also serves as an accountability mechanism to restore public trust.

Thank you for your attention to this matter.

Sincerely,

Robert Samuel White
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* NOTICE OF VIOLATION */}

            <h2 className="text-xl font-semibold">NOTICE OF VIOLATION &mdash; NOVEMBER 15, 2025</h2>

            <Email
                from="Robert Samuel White"
                to="OPRD Public Records Officer"
                cc="Director Lisa Sumption"
                date="November 15, 2025"
                subject="Notice of Violation - Failure to Respond to Public Records Request (Submitted August 22, 2025)"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Dear Public Records Officer and Director Sumption,

On August 22, 2025, I submitted a comprehensive public records request pursuant to Oregon Revised Statutes Chapter 192 seeking documentation related to OPRD volunteer program operations, management practices, and administrative communications.

It has now been 85 days since that request was submitted.

Oregon law is unambiguous regarding agency obligations:

ORS 192.329(1) requires public bodies to acknowledge receipt of a public records request "without unreasonable delay" and to provide a reasonable estimate of time and fees.

ORS 192.329(3) requires completion of requests "within a reasonable time."

ORS 192.338 establishes that failure to respond within a reasonable time constitutes denial of the request.

ORS 192.355 provides statutory remedies including court-ordered compliance and attorney fees.

TIMELINE OF OPRD'S NON-COMPLIANCE

August 22, 2025: Public records request submitted via email

August 28, 2025: OPRD representative contacted me by phone (not in writing) attempting to narrow the scope of the request

August 28, 2025: I declined to limit scope and requested all communications in writing

August 28, 2025 - November 15, 2025: Complete silence from OPRD - no written response, no acknowledgment, no fee estimate, no timeline, no records produced

LEGAL VIOLATIONS

OPRD's conduct constitutes clear violations of Oregon Public Records Law:

  1. Failure to acknowledge receipt in writing as required by ORS 192.329(1)
  2. Failure to provide fee estimate as required by ORS 192.324
  3. Failure to establish reasonable timeline for response
  4. Failure to produce any responsive records within reasonable time
  5. Improper attempt to negotiate scope via phone rather than written correspondence
  6. Ghosting requestor after refusing informal scope limitation
  
85 days of complete silence is not "reasonable" under any interpretation of Oregon law.

PATTERN OF INSTITUTIONAL OPACITY

This non-response is consistent with OPRD's documented pattern of:

  * Refusing to investigate substantiated complaints
  * Avoiding written documentation of institutional decisions
  * Deploying informal pressure tactics rather than transparent processes
  * Abandoning accountability when informal methods fail

The same institution that:

  * Dismissed a volunteer without written documentation of cause
  * Refused to acknowledge documented evidence of staff misconduct
  * Provided only vague, legally meaningless responses to formal complaints
  * Has now ignored a lawful public records request for nearly three months

This is not administrative delay. This is institutional defiance of legal obligations.

DEMAND FOR IMMEDIATE COMPLIANCE

I hereby demand that OPRD:

  1. Immediately acknowledge this public records request in writing
  2. Provide a complete fee estimate for all responsive records
  3. Establish a definite timeline for production of records
  4. Explain in writing the legal basis for 85 days of silence
  5. Produce all responsive records not subject to valid exemptions
  6. Cite specific statutory authority for any claimed exemptions

This demand must be satisfied within 10 business days of receipt of this letter.

NOTIFICATION OF INTENT TO PURSUE LEGAL REMEDIES

  * If OPRD fails to comply with this demand within 10 business days, I will pursue all available remedies under Oregon law, including:
  * Filing a petition pursuant to ORS 192.355 to compel disclosure
  * Seeking attorney fees and costs as provided by statute
  * Requesting civil penalties for willful violation of public records law
  * Notifying the Oregon Department of Justice Public Records Advocate
  * Notifying the Oregon Government Ethics Commission
  * Referring this matter to the Oregon Legislature's Committee on Conduct
  * Making this complete record of non-compliance publicly available
  
PUBLIC INTEREST STATEMENT

The public interest in OPRD's compliance with this request has only intensified since August:

  * OPRD continues soliciting volunteers while refusing transparency about volunteer management
  * Budget crisis deepens while agency avoids accountability for institutional dysfunction
  * Former volunteers continue reporting similar patterns of institutional abuse
  * Director Sumption's response to my documented complaints established precedent of institutional protection over accountability

The public has a right to know how their state parks agency treats unpaid volunteers, manages taxpayer resources, and responds to substantiated complaints.

FINAL NOTICE

This letter serves as final notice before pursuing formal legal action.

OPRD has demonstrated through silence that it does not intend to comply voluntarily with Oregon Public Records Law. That refusal to comply is itself a matter of significant public interest and will be documented accordingly.

Every day of continued non-compliance strengthens the public record that Oregon State Parks operates with contempt for legal transparency requirements.

You have 10 business days to respond.

All communications regarding this matter must be in writing. I will not participate in phone calls or informal negotiations designed to avoid creating written records.

Preserve all documents.

Sincerely,

Robert Samuel White

https://rswfire.com/honeyman 
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* INSTITUTIONAL RESPONSE */}

            <h2 className="text-xl font-semibold">INSTITUTIONAL RESPONSE &mdash; NOVEMBER 20, 2025</h2>

            <Email
                from="Katie Gauthier — OPRD"
                to="Robert Samuel White"
                date="November 20, 2025"
                subject="Re: Notice of Violation - Failure to Respond to Public Records Request (Submitted August 22, 2025)"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Mr. White,

I received your message regarding your public records request from August 22, 2025. Below is an image of the response we provided to you on August 29, 2025, and attached is the information we provided at the time regarding your initial request. 

OPRD has not received any response from you regarding whether you would like to refine the request or provide payment for the additional staff time necessary to complete the request as written. Once you provide that information, will develop a plan and timeline for completion of this request.

Please let me know if you have questions.

Katie

(embedded image of internal system screenshot)
`}
                </pre>
            </Email>

            <hr className="my-6 border-t border-gray-300" />

            {/* MY FINAL REPLY */}

            <h2 className="text-xl font-semibold">MY FINAL REPLY &mdash; WITHDRAWAL</h2>

            <Email
                from="Robert Samuel White"
                to="Katie Gauthier — OPRD"
                date="November 20, 2025"
                subject="Re: Notice of Violation - Failure to Respond to Public Records Request (Submitted August 22, 2025)"
            >
                <pre className="whitespace-pre-wrap font-mono text-sm">
{`Dear Ms. Gauthier,

I acknowledge receipt of your November 20, 2025 email, which includes a screenshot of a document you indicate was posted on August 29, 2025 to an internal portal I do not have access to and was never informed existed.

For over 90 days, OPRD provided no communication to the mailing address or email listed in my August 22, 2025 public records request. Your November 20 email is the first accessible correspondence I have received—arriving only after I issued a formal demand for compliance.

Based on the cost estimates now provided, OPRD is seeking tens of thousands of dollars for records directly related to how your agency treated an unpaid volunteer who documented institutional abuse.

The timeline is clear:
  - A response posted to an inaccessible system without notice.
  - Ninety days of complete silence to the contact information I provided.
  - A cost barrier large enough to function as a denial of access.
  - Accessible communication only after external oversight was engaged.

Given these circumstances, I am withdrawing my public records request. Your handling of the request—including the inaccessible posting, the prolonged silence, and the prohibitive cost estimate—will be documented as part of the public record of how OPRD responds when asked for transparency regarding documented volunteer abuse.

Your August 29 posting and your November 20 cost estimates are now part of the permanent record of OPRD’s approach to transparency.

Robert Samuel White
`}
                </pre>
            </Email>

            <div className="mt-8 pt-6 border-t border-gray-300">
                <Link href="/lisa-sumption" className="text-emerald-700 hover:underline">
                    ← Back to The Director's Decisions
                </Link>
            </div>

        </SectionPage>
    );
}
