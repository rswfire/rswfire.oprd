// app/(archive)/advocates/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PrimaryDocuments from "@/components/PrimaryDocuments";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import { SEEKING_ATTORNEY_TRANSMISSION } from "@/data/20260323";

export const metadata: Metadata = {
    title: "For Advocates",
    description: "A request for advocacy and awareness. Oregon State Parks permanently expelled a volunteer for speaking publicly about documented abuse — and sent police to his door a year later. This case raises questions about First Amendment retaliation and the constitutional rights of volunteers.",
};

export default function AdvocatesPage() {
    return (
        <SectionPage
            title="FOR ADVOCATES"
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/faq", label: "Frequently Asked Questions" }}
        >

            <div className="mt-6 space-y-4 text-base leading-relaxed">

                <p>
                    <strong>My name is Robert Samuel White.</strong> I am a U.S. Forest Service volunteer caretaker on the Oregon Coast, and I am writing to you because what Oregon State Parks did to me &mdash; and what they did when I wouldn&apos;t stop talking about it &mdash; raises questions about First Amendment retaliation and the constitutional rights of volunteers that I hope will interest you.
                </p>

                <p>
                    I am writing to you from the federal land where I currently serve. On March 24, 2026 &mdash; the one-year anniversary of my retaliatory dismissal from Oregon State Parks &mdash; a U.S. Forest Service Special Agent from the investigative branch arrived at the locked gate of my federal work center with two unidentified state officers.
                </p>

                <p>
                    They told me they were concerned about what I was posting online. I maintain a professional archive of my experience &mdash; <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link> &mdash; which is publicly accessible and has never been legally challenged. The supervisory officer has confirmed the investigative branch contact but will not disclose who authorized the visit, what its purpose was, or who the state officers were.
                </p>

                <p className="font-semibold">I do not feel safe.</p>

                <p>
                    And there is no mechanism &mdash; legal, institutional, or constitutional &mdash; that has protected me. Not from Oregon State Parks. And now not from the United States Forest Service.
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

                <p>I spent a year trying every legitimate channel available to me. Every one failed.</p>

                <p>
                    <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption</Link> closed communication by characterizing my comprehensive documented evidence <em>emotional processing</em>. <Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek</Link> never responded &mdash; not once, not even an acknowledgment. Deputy Director <Link href="/evidence/containment" className="underline text-emerald-800 hover:text-emerald-600">J.R. Collier</Link> characterized documented constitutional violation as <em>dissatisfaction with a volunteer management decision</em>.
                </p>

                <p>
                    I served formal &sect;1983 notices citing personal liability for First Amendment retaliation. They remained silent. For a full year.
                </p>

                <p className="font-semibold">And then.</p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What They Did on the Anniversary</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>
                    On March 24, 2026 &mdash; the one year anniversary of my dismissal &mdash; three officers arrived at a locked federal gate on restricted federal land where I serve as U.S. Forest Service caretaker. They did not identify their agency. They told me they were <em>concerned about what I was posting online</em>.
                </p>

                <p>
                    I declined to speak without an attorney and closed the door. Twenty minutes later, one of the officers called. He was hostile. He told me <em>this matter was not going away</em> and that the state police wanted to talk to me.
                </p>

                <p>
                    The Forest Service has since confirmed that officer &mdash; Matthew Oliver, badge 555 &mdash; is a Special Agent from the investigative branch, assigned to both the Willamette and Siuslaw National Forests. When I asked the supervisory officer who authorized the visit and what its stated purpose was, she redirected me to FOIA. When I asked for the names of the two state officers who accompanied him, she redirected me to FOIA.
                </p>

                <p>
                    I still do not know who the two state cops were who tried to intimidate me on protected federal land.
                </p>

                <p>
                    And I still do not have confirmation this was sanctioned activity by any of them. The visit is <Link href="/evidence/police-intimidation" className="underline text-emerald-800 hover:text-emerald-600">documented</Link>.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What This Case Is Actually About</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p className="font-semibold">There was no mechanism that kept me safe in their parks.</p>

                <p>That sentence is the whole story.</p>

                <p>
                    Volunteers have no protection from institutional retaliation. No HR. No grievance process. No due process requirement before removal. A state agency can sit an unpaid laborer down at a picnic table, tell them to <em>chew glass and swallow it</em>, expel them for speaking publicly about it &mdash; and then send police to their door a year later on the very anniversary of their retaliatory dismissal &mdash; behind a locked gate on restricted federal land.
                </p>

                <p>
                    This lack of protection is not an oversight. It is a deliberate design choice that serves every institution that depends on unpaid labor.
                </p>

                <p>
                    I am seeking an attorney willing to take this case to the United States Supreme Court to establish that volunteers retain First Amendment protections and cannot be subjected to institutional retaliation without recourse. I am not seeking a settlement. I am not willing to sign an NDA. I want the structural gap closed. For everyone.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">Why I Am Writing to You</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>
                    I am not asking you to take on the case.
                </p>

                <p>
                    I am writing because this situation belongs in your awareness &mdash; and I hope you will consider sharing it with your network.
                </p>

                <p>
                    I have reached out to <Link href="/press" className="underline text-emerald-800 hover:text-emerald-600">journalists</Link>. I have reached out to <Link href="/legislators" className="underline text-emerald-800 hover:text-emerald-600">legislators</Link>. I have spent an entire year trying to get accountability within the institution itself.
                </p>

                <p>
                    And my efforts have revealed this structural gap is so pervasive in our society that it is met with deafening silence far too often.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">The Record</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>Everything described above is documented, independently verifiable, and never legally challenged.</p>
                <p>The full archive: <Link href="/" className="underline text-emerald-800 hover:text-emerald-600">oprdvolunteerabuse.org</Link></p>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <div className="mt-4 space-y-1 text-sm text-gray-600">
                <div className="font-semibold text-gray-900">Robert Samuel White</div>
                <div>Founder, Autonomy Realms</div>
                <div>Owner, eNetwizard, Inc.</div>
                <div>Former Oregon State Parks Volunteer</div>
                <div>Current U.S. Forest Service Caretaker</div>
                <div>Steward, oprdvolunteerabuse.org</div>
            </div>

            <hr className="my-8 border-t border-gray-300" />

            <PrimaryDocuments />

        </SectionPage>
    );
}
