// app/(archive)/press/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import { SEEKING_ATTORNEY_TRANSMISSION } from "@/data/20260323";

export const metadata: Metadata = {
    title: "For Journalists",
    description: "A summary of the case against Oregon State Parks, written for press. First Amendment retaliation, institutional containment, and a structural gap that affects every volunteer in the country.",
};

export default function PressPage() {
    return (
        <SectionPage
            title="FOR JOURNALISTS"
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <div className="mt-6 space-y-4 text-base leading-relaxed">

                <p>
                    <strong>My name is Robert Samuel White.</strong> I am a U.S. Forest Service volunteer caretaker on the Oregon Coast, and I am writing to you because what Oregon State Parks did to me &mdash; and what they did when I wouldn&apos;t stop talking about it &mdash; is a story that needs to be told.
                </p>

                <p className="italic">
                    I am a gay man. I mention it not to center it, but because it is part of the documented pattern &mdash; a park supervisor who sat silently while her manager mocked my sexuality, a volunteer coordinator who extracted personal disclosures in confidence and delivered them to management, a regional coordinator with an explicit DEI background who weaponized those disclosures to construct a narrative of instability and justify permanent expulsion. A gay governor who has been silent through all of it. The full context is in the archive.
                </p>

            </div>

            <TransmissionDisclosure transmission={SEEKING_ATTORNEY_TRANSMISSION} />

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What They Did</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>
                    In February 2025, I was a volunteer at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link> on the Oregon Coast. I sent an email at 6AM asking for operational clarity during a power outage. My supervisor responded dismissively. I named her tone in a follow-up email.
                </p>

                <p>That email became the origin of everything that followed.</p>

                <p>
                    Over the next two months, Oregon State Parks subjected me to a systematic pattern of abuse and retaliation:
                </p>

                <p>
                    They sat me down at a public picnic table for over an hour. The park manager told me to <em>chew glass and swallow it</em>. He admitted I was never given the benefit of the doubt from day one. He suggested repeatedly that I leave. He framed my emails as unprofessional and my interactions with everyone as problematic, while never once engaging with a single fact. I recorded all <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">62 minutes</Link>.
                </p>

                <p>
                    While I was cleaning yurts alone &mdash; while all rangers were away at a regional event &mdash; an unidentified man arrived out of uniform, with no credentials, in an unmarked state vehicle, with the demeanor of an off-duty law enforcement officer. He interrogated me about how leadership was treating me. He reframed the questions each time I refused to answer them. I documented the encounter the same day. Oregon State Parks provided a cover story within hours and then that man appeared on a Forest Service trail a year later &mdash; he is local, not IT, and has not returned since he realized who I was.
                </p>

                <p>
                    They <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">dismissed me by phone</Link> six days before my scheduled completion, citing a homeless man&apos;s lost journal. One hour later the park manager arrived at my RV to collect the keys and admitted on camera that no formal documentation existed. I immediately recorded a video recounting the retaliation I experienced over the previous two months and posted it online.
                </p>

                <p>
                    The following day, their regional coordinator called to contain the situation. She weaponized personal disclosures I had made in trust to paint me as unstable. She ignored every declaration I made about the inappropriate treatment I had received and instead framed me as paranoid and delusional. And this from someone with explicit DEI training and employment background. I recorded <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">30 minutes and 56 seconds</Link> of that call.
                </p>

                <p>
                    The day after, they permanently expelled me from every Oregon State Parks volunteer program in the state. The <a href="/oprd-dismissal.pdf" download className="underline text-emerald-800 hover:text-emerald-600">expulsion letter</a> &mdash; on agency letterhead, signed &mdash; cited my public documentation of the abuse as the sole reason. Every excuse they had made for two months, and every justification they made about why I was removed, absent from that letter. And at the bottom, a designation the letter was to be kept secret.
                </p>

                <p className="font-semibold">
                    That is First Amendment retaliation. In writing. On state letterhead.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">Why They Did It</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>
                    They expelled me because I documented what they did. That&apos;s not an allegation. That&apos;s what the letter says.
                </p>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What Happened When I Tried to Get Accountability</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>I spent a year trying every legitimate channel available to me.</p>

                <p>
                    I wrote to every named individual. No substantive response. No response at all. From any of them.
                </p>

                <p>
                    I escalated to <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption</Link> with full documentation, asking three direct questions about the surveillance. She ignored it completely.
                </p>

                <p>
                    I submitted a comprehensive <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">public records request</Link>. Oregon State Parks remained silent for 90 days in violation of state law. When I issued a formal Notice of Violation they claimed to have posted a response to an inaccessible internal portal. The cost estimate for the records: tens of thousands of dollars. I withdrew the request and documented their lack of transparency.
                </p>

                <p>
                    I sent a formal <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">open letter</Link> to the Director. She responded with procedural language and no commitments. And then several months later, she <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">closed communication</Link> by calling my comprehensive documented evidence <em>emotional processing</em>. She used the same pathologizing language to avoid accountability that their regional coordinator used to justify the retaliation.
                </p>

                <p>
                    I filed formal complaints with <Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek&apos;s office</Link>. Her office has never responded. Not once. Not even an acknowledgement they received anything. Her campaign manager has been CC&apos;d on every significant piece of correspondence for months. She has been totally silent.
                </p>

                <p>
                    I served formal &sect;1983 notices to the Director and the regional coordinator individually, citing personal liability for First Amendment retaliation.
                </p>

                <p>
                    They sent Deputy Director J.R. Collier to redirect all correspondence away from the named individuals. His letter characterized documented constitutional violation as <em>dissatisfaction with a volunteer management decision</em>.
                </p>

                <p>Then they went silent.</p>

                <p>For a full year.</p>

                <p className="font-semibold">And then.</p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What They Did on the Anniversary</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>
                    On March 24, 2026 &mdash; the one year anniversary of my dismissal from Honeyman State Park &mdash; three officers arrived at a locked federal gate on restricted federal land where I serve as U.S. Forest Service caretaker.
                </p>

                <p>
                    This is not a public road. It is restricted federal land. The gate is marked with signage citing 36 CFR 261.9(E).
                </p>

                <p>
                    They did not identify their agency. They told me they were <em>concerned about what I was posting online</em>. They said I was not in trouble.
                </p>

                <p>
                    I declined to speak without an attorney and closed the door. I recorded them leaving. One license plate is clearly visible on camera.
                </p>

                <p>
                    Twenty minutes later, an officer identifying himself as Forest Service called me. He was hostile. He told me <em>this wasn&apos;t going away</em> and that they wanted to talk to me. I told him this was intimidation and retaliation on the anniversary of my dismissal from Oregon State Parks. He acknowledged the visit could have been handled differently.
                </p>

                <p>
                    When I called back two days later to request the names and contact information of all three officers, he refused. He gave me his name as Matt Oliver, badge number 555, stationed in Springfield. He claimed the restricted federal land was not restricted. I corrected him and cited the federal statute. He hung up.
                </p>

                <p>
                    I have filed an official Siuslaw National Forest Host/Caretaker Incident Report documenting the visit as <Link href="/evidence/police-intimidation" className="underline text-emerald-800 hover:text-emerald-600">intimidation</Link>. The license plate &mdash; 731 QRV &mdash; is documented. The federal statute violation is cited.
                </p>

                <p>
                    The Forest Service responded immediately with First Amendment auditor guidance. And I now know Matt Oliver is stationed in a wholly separate Forest Service district. He was operating entirely outside his jurisdiction. And I am actively pulling on that thread.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What This Case Is Actually About</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p className="font-semibold">There was no mechanism that kept me safe in their parks.</p>

                <p>That sentence is the whole story.</p>

                <p>
                    Volunteers have no protection from institutional retaliation anywhere in this country. No HR. No grievance process. No due process requirement before removal. A state agency can sit an unpaid laborer down at a picnic table, tell them to <em>chew glass and swallow it</em>, expel them for speaking publicly about it &mdash; and then send police to their door a year later on the very anniversary of their retaliatory dismissal &mdash; behind a locked gate on restricted federal land.
                </p>

                <p>
                    The void is not an oversight. It is a deliberate design choice that serves every institution that depends on unpaid labor. And that some institutions, like Oregon State Parks under the leadership of Director Lisa Sumption, exploit to the absolute maximum potential, with complete disregard for the humanity they are harming in the process.
                </p>

                <p>
                    I am seeking an attorney willing to take this case to the United States Supreme Court to establish that volunteers retain First Amendment protections and cannot be subjected to institutional retaliation without recourse.
                </p>

                <p>
                    I am not seeking a settlement. I am not willing to sign an NDA. I want the structural gap closed. For everyone.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">The Record</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>Everything described above is documented, independently verifiable, and publicly accessible.</p>
                <p>The full archive: <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link></p>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <div className="mt-4 space-y-1 text-sm text-gray-600">
                <div className="font-semibold text-gray-900">Robert Samuel White</div>
                <div>U.S. Forest Service Caretaker</div>
                <div>Oregon Dunes National Recreation Area</div>
                <div>Siltcoos Corridor</div>
                <div className="mt-2">Founder, Autonomy Realms</div>
                <div>Owner, eNetwizard Inc. Since 1998</div>
                <div>Former Oregon State Parks Volunteer</div>
                <div>Steward, oprdvolunteerabuse.org</div>
            </div>

        </SectionPage>
    );
}
