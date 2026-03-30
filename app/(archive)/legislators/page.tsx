// app/(archive)/legislators/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import TransmissionDisclosure from "@/components/TransmissionDisclosure";
import { SEEKING_ATTORNEY_TRANSMISSION } from "@/data/20260323";

export const metadata: Metadata = {
    title: "For Legislators",
    description: "A request for legislative action to protect volunteers from institutional retaliation. Oregon State Parks exploited a structural gap in volunteer protections — that gap exists in every state.",
};

export default function LegislatorsPage() {
    return (
        <SectionPage
            title="FOR LEGISLATORS"
            previousPage={{ href: "/press", label: "For Journalists" }}
            nextPage={{ href: "/attorney", label: "For Lawyers" }}
        >

            <div className="mt-6 text-sm text-gray-500 uppercase tracking-widest font-semibold">
                March 2026
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">

                <p>
                    <strong>My name is Robert Samuel White.</strong> I am a U.S. Forest Service volunteer caretaker on the Oregon Coast. I am writing to you because what happened to me at Oregon State Parks exposed a structural gap in volunteer protections that exists in every state &mdash; and closing it requires legislation.
                </p>

                <p className="italic">
                    I am a gay man. I mention it not to center it, but because it is part of the documented pattern &mdash; a park supervisor who sat silently while her manager mocked my sexuality, a volunteer coordinator who extracted personal disclosures in confidence and delivered them to management, a regional coordinator with an explicit DEI background who weaponized those disclosures to construct a narrative of instability and justify permanent expulsion. A gay governor who has been silent through all of it. The full context is in the archive.
                </p>

            </div>

            <TransmissionDisclosure transmission={SEEKING_ATTORNEY_TRANSMISSION} />

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What Happened</h2>

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
                    While I was cleaning yurts alone &mdash; while all rangers were away at a regional event &mdash; an unidentified man arrived out of uniform, with no credentials, in an unmarked state vehicle, with the demeanor of an off-duty law enforcement officer. He interrogated me about how leadership was treating me. He reframed the questions each time I refused to answer them. I documented the encounter the same day.
                </p>

                <p>
                    They <Link href="/evidence/dismissal" className="underline text-emerald-800 hover:text-emerald-600">dismissed me by phone</Link> six days before my scheduled completion, citing a homeless man&apos;s lost journal. One hour later the park manager arrived at my RV to collect the keys and admitted on camera that no formal documentation existed. I immediately recorded a video recounting the retaliation I experienced over the previous two months and posted it online.
                </p>

                <p>
                    The following day, their regional coordinator called to contain the situation. She weaponized personal disclosures I had made in trust to paint me as unstable. I recorded <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">30 minutes and 56 seconds</Link> of that call.
                </p>

                <p>
                    The day after, they permanently expelled me from every Oregon State Parks volunteer program in the state. The <a href="/oprd-dismissal.pdf" download className="underline text-emerald-800 hover:text-emerald-600">expulsion letter</a> &mdash; on agency letterhead, signed &mdash; cited my public documentation of the abuse as the sole reason.
                </p>

                <p className="font-semibold">
                    That is First Amendment retaliation. In writing. On state letterhead.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">Every Channel Failed</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>I spent a year trying every legitimate channel available to me. Every one failed.</p>

                <p>
                    Direct correspondence to every named individual. No response from any of them.
                </p>

                <p>
                    Escalation to <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption</Link> with full documentation. Ignored completely.
                </p>

                <p>
                    A comprehensive <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">public records request</Link>. Oregon State Parks remained silent for 90 days in violation of state law. The cost estimate for the records: tens of thousands of dollars.
                </p>

                <p>
                    A formal <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">open letter</Link> to the Director. She <Link href="/lisa-sumption/closure" className="underline text-emerald-800 hover:text-emerald-600">closed communication</Link> by calling my comprehensive documented evidence <em>emotional processing</em>.
                </p>

                <p>
                    Formal complaints to <Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Tina Kotek&apos;s office</Link>. Never responded. Not once.
                </p>

                <p>
                    Formal &sect;1983 notices citing personal liability for First Amendment retaliation. They sent a deputy director to characterize documented constitutional violation as <em>dissatisfaction with a volunteer management decision</em>.
                </p>

                <p>Then they went silent. For a full year.</p>

                <p>
                    On March 24, 2026 &mdash; the one year anniversary of my dismissal &mdash; three officers arrived at a locked federal gate on restricted federal land where I serve as U.S. Forest Service caretaker. They told me they were <em>concerned about what I was posting online</em>. I declined to speak without an attorney. The visit is <Link href="/evidence/police-intimidation" className="underline text-emerald-800 hover:text-emerald-600">documented</Link>.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">The Structural Gap</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p className="font-semibold">There was no mechanism that kept me safe in their parks.</p>

                <p>That sentence is the whole story.</p>

                <p>
                    Volunteers have no protection from institutional retaliation anywhere in this country. No HR. No grievance process. No due process requirement before removal. No mandatory reporting channel. No whistleblower protection. No recourse of any kind.
                </p>

                <p>
                    A state agency can sit an unpaid laborer down at a picnic table, tell them to <em>chew glass and swallow it</em>, expel them for speaking publicly about it &mdash; and then send police to their door a year later on the anniversary of their retaliatory dismissal &mdash; behind a locked gate on restricted federal land.
                </p>

                <p>
                    This is not an Oregon problem. This is a structural vacuum that exists in every state. Every institution that depends on unpaid labor operates inside it. Most simply don&apos;t exploit it to the degree Oregon State Parks did under the leadership of Director Lisa Sumption.
                </p>

                <p>
                    But the gap is there. And it will be exploited again. By other agencies, in other states, against other volunteers who have no idea they have no rights until the moment those rights are needed.
                </p>

            </div>

            <hr className="my-8 border-t border-gray-300" />

            <h2 className="text-lg font-bold uppercase tracking-widest text-gray-900">What Legislation Could Do</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">

                <p>At minimum, volunteers serving state agencies need:</p>

                <ul className="list-disc pl-6 space-y-2">
                    <li>A mandatory grievance process before removal or expulsion</li>
                    <li>Whistleblower protection for reporting abuse, retaliation, or unsafe conditions</li>
                    <li>An independent reporting channel outside the agency chain of command</li>
                    <li>Due process requirements proportional to the duration and nature of service</li>
                    <li>Explicit First Amendment protections for public speech about volunteer service conditions</li>
                    <li>Prohibition on retaliatory expulsion from statewide programs based on speech</li>
                </ul>

                <p>
                    None of these protections currently exist for volunteers in Oregon or in most states. The absence is not an oversight. It is a design choice that serves institutional convenience at the expense of the people who serve for free.
                </p>

                <p>
                    I am asking you to change that.
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
                <div className="mt-2">
                    <a href="mailto:rsw@rswfire.com" className="underline text-emerald-800 hover:text-emerald-600">rsw@rswfire.com</a>
                </div>
                <div>458-230-1869</div>
            </div>

        </SectionPage>
    );
}
