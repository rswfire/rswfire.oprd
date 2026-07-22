import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import PrimaryTransmission from "@/components/PrimaryTransmission";
import IdentityTracker from "@/components/IdentityTracker";
import PersonLink from "@/components/PersonLink";
import EvidenceTabs from "@/components/EvidenceTabs";
import { POLICE_EXPLOITATION } from "@/data/exploitation";
import { POLICE_INTIMIDATION_TRANSMISSION } from "@/data/20260324";

export const metadata: Metadata = {
    title: "Police Intimidation",
    description: "March 24, 2026 — One year to the day after dismissal, police arrived behind a locked federal gate.",
};

export default function PoliceIntimidationPage() {
    return (
        <SectionPage
            title="POLICE INTIMIDATION"
            subtitle="BEHIND A LOCKED FEDERAL GATE"
            previousPage={{ href: "/evidence/containment", label: "Institutional Containment" }}
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
            summary="On March 24, 2026 — exactly one year after the park manager dismissed me from Honeyman State Park — police showed up at my door behind a locked federal gate to intimidate me. I recorded them leaving."

        >

            <EvidenceTabs exploitation={POLICE_EXPLOITATION} stage="police" />

            <h2 className="text-xl font-semibold">MARCH 24, 2026</h2>

            <div className="mt-4">
                One year ago today, the <PersonLink name="park manager" /> called to dismiss me from Honeyman State Park. One hour later he arrived at my RV, collected the keys, and told me to vacate within 24 hours. No paperwork. No documentation. Just the conversation we had.
            </div>

            <div className="mt-4">
                That was March 24, 2025.
            </div>

            <div className="mt-4">
                On the anniversary of that dismissal, police arrived at a locked federal gate — the entrance to the corridor where I serve as caretaker for the U.S. Forest Service — and came to my door.
            </div>

            <div className="mt-4">
                This is not a public road. It is behind a locked gate on federal land. Access requires authorization.
            </div>

            <div className="mt-4">
                Three officers. No agency identified. They told me they were concerned about what I was posting online. They said I was not in trouble.
            </div>

            <div className="mt-4">
                I recorded them leaving.
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <PrimaryTransmission transmission={POLICE_INTIMIDATION_TRANSMISSION} />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE INCIDENT REPORT</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On March 27, 2026, I filed an official Siuslaw National Forest Host/Caretaker Incident Report documenting the visit as intimidation. The report includes the date, time, location, a narrative description of the encounter, and the license plate number of one of the vehicles: 731 QRV.</p>
            </div>

            <div className="mt-4">
                <a href="/usfs-incident-report.jpg" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download Incident Report (JPG) &darr;</a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <IdentityTracker />

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">OREGON STATE POLICE: NO RECORDS</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On April 3, 2026, I filed a public records request with Oregon State Police requesting all records related to the March 24 visit — names, badge numbers, unit assignments, all communications related to planning, authorization, or coordination, all communications referencing my name, the archive, or the domain oprdvolunteerabuse.org, any incident reports, case files, or after-action documentation, and all communications between any OSP officer and U.S. Forest Service <PersonLink name="Matthew Oliver" label="Special Agent Matthew Oliver" /> or any Oregon Parks and Recreation Department employee in connection with the visit.</p>
                <p>Oregon State Police responded the same day with a blanket denial: no records responsive to the request.</p>
                <p>The full response from Oregon State Police is available below.</p>
            </div>

            <div className="mt-4">
                <a href="/osp-foia-response-1.pdf" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download OSP Public Records Response (PDF) &darr;</a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">THE RECORD THEY SAID DID NOT EXIST</h2>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>On April 13, 2026 &mdash; ten days after the &ldquo;no records&rdquo; denial, and after I asked how the search had been conducted &mdash; a CAD dispatch record for the March 24 visit was printed inside OSP&rsquo;s Central Records Section. It was then withheld for three more months.</p>
                <p>On July 14, 2026, Oregon State Police released the record, accompanied by a letter from OSP&rsquo;s legal compliance specialist stating the document was reviewed for exempt material, &ldquo;with none being identified.&rdquo;</p>
                <p>The record, SP26097765, states in the state&rsquo;s own system: event type &ldquo;No Call Type Selected.&rdquo; Priority &ldquo;Low.&rdquo; Source &ldquo;Officer Initiated.&rdquo; Final disposition &ldquo;No Action Taken.&rdquo; The unit dispatched was type &ldquo;Criminal.&rdquo; My role in their system: &ldquo;Other&rdquo; &mdash; not a suspect, not a witness, not a party to any crime. The officer&rsquo;s comment states the purpose: &ldquo;FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.&rdquo; The primary unit is identified by name and badge number: Jake Hyde, 56397.</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
                <a href="/osp-cad-record-sp26097765.pdf" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download OSP CAD Record SP26097765 (PDF) &darr;</a>
                <a href="/osp-foia-response-2.pdf" download className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors">Download OSP Release Letter &mdash; PR27478 (PDF) &darr;</a>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">STATEMENT ON OREGON STATE POLICE RECORD PR27478</h2>

            <div className="mt-2 text-sm text-gray-500">July 14, 2026</div>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>Today the Oregon State Police released the CAD record for the March 24, 2026 visit to my residence on restricted federal land. I requested it months ago. On April 3, I was told records did not exist. On April 13, after I asked how the search was conducted, this record surfaced. It was withheld for three more months. Today it was released with a letter from OSP&rsquo;s own legal compliance specialist stating the document was reviewed for exempt material, &ldquo;with none being identified.&rdquo;</p>
                <p>There was nothing to withhold. By their own final admission, no exemption applied to any part of this record. The months of silence, the fee dispute, and the initial denial that records existed had no legal basis behind them. Their own counsel now certifies it.</p>
                <p>Here is what the record shows, in their own system, in their own words.</p>
                <p>The event was logged as &ldquo;No Call Type Selected.&rdquo; Priority &ldquo;Low.&rdquo; The final disposition was &ldquo;No Action Taken.&rdquo; At the moment their officer created the event, there was no crime, no call type, and no police action to take. Their contemporaneous record establishes there was no law-enforcement basis for the visit. There was no crime. There never was.</p>
                <p>The unit dispatched was designated &ldquo;Criminal.&rdquo; A criminal unit was sent to a man their own record classifies under &ldquo;Role: Other&rdquo; &mdash; not a suspect, not a witness, not a party to any crime. They pointed the criminal apparatus of the state at a person their own system does not connect to any criminal matter.</p>
                <p>And the officer&rsquo;s own comment states the purpose: &ldquo;FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.&rdquo;</p>
                <p>I want to address that comment directly, because it is false, and the falseness matters.</p>
                <p>The United States Forest Service did not need the Oregon State Police to conduct business with me. I live on Forest Service land. I am their volunteer caretaker. The federal officers who manage that land have my phone number, my email, my gate, and a relationship with me built over more than a year. If the Forest Service had a question for me, they had every ordinary means to ask it, directly, as they always have. There was no reason on earth for the state police to be dispatched &ldquo;for the Forest Service&rdquo; to a federal caretaker on federal land. The state has no jurisdiction there and the Forest Service had no need of them. &ldquo;For the Forest Service&rdquo; is not an explanation. It is a cover.</p>
                <p>And this was not a &ldquo;followup interview.&rdquo; A followup implies a prior interview, a continuing lawful process, a thread being continued. There was none. What there was, was a date. March 24, 2026 was the one-year anniversary of my dismissal from Oregon State Parks &mdash; the dismissal I had spent the preceding months documenting publicly as First Amendment retaliation. Three armed officers did not arrive on that specific day to &ldquo;follow up&rdquo; on a process that did not exist. They arrived on the anniversary, because of what I had written, to deliver a message. Their own officer, twenty minutes after I invoked a lawyer and closed my door, called me by phone to say the matter &ldquo;was not going away&rdquo; and that the state police wanted to speak with me. That is not a followup interview. That is intimidation, and the record&rsquo;s own timeline &mdash; arrival at 9:50, my refusal, the phone call after &mdash; bears it out.</p>
                <p>So the record does not resolve the questions. It compounds them. Each explanation the state has offered collapses into the next lie. There was no crime &mdash; their disposition says so. There was no call type &mdash; their event says so. There was no exempt material &mdash; their lawyer says so. And now there is &ldquo;for the Forest Service&rdquo; and &ldquo;followup interview,&rdquo; two more explanations that do not survive contact with the facts: the Forest Service did not need them, and there was no prior interview to follow.</p>
                <p>What the record does give me is a name. The primary unit is identified as Jake Hyde, badge 56397. The Forest Service captain refused to give that name to my own district ranger, a forty-year federal officer, when she asked who had been on her land. The state sealed it on the federal side. Their own records section handed it to me on the state side. I now know one of the officers the federal government would not name.</p>
                <p>I want to be precise about what I am claiming and what I am not. I am not alleging a specific crime by any individual officer. I am stating what the record states: that armed state police, in a criminal-designated unit, were dispatched to a federal caretaker on federal land, on the anniversary of his protected-speech dismissal, for no logged law-enforcement purpose, under a stated justification &mdash; &ldquo;for the Forest Service&rdquo; &mdash; that does not withstand scrutiny, and that this was recorded by the officers themselves. Every fact in this statement comes from the state&rsquo;s own record or from events I documented as they happened.</p>
                <p>I did not go looking for a fight. I documented my treatment, which is my constitutional right. The state&rsquo;s answer to that documentation was to send officers to my home. Its answer to my request for the record of that visit was three months of silence with no lawful basis. And the record it finally released does not exonerate anyone. It confirms what I have said from the beginning, in the state&rsquo;s own hand: there was no crime, there was no basis, and the explanations offered for the visit are not true.</p>
                <p>The full record is in the archive at oprdvolunteerabuse.org. I answer questions there and nowhere else.</p>
                <p>&mdash; Robert Samuel White</p>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">FOLLOW-UP TO OREGON STATE POLICE</h2>

            <div className="mt-2 text-sm text-gray-500">July 14, 2026 &mdash; Sent to OSP Central Records, requesting response from the responding unit&rsquo;s supervisor</div>

            <div className="mt-4 space-y-4 text-base leading-relaxed">
                <p>Ms. Hubbard,</p>
                <p>Thank you again for the production under PR27478. I have reviewed the CAD record for event SP26097765 and I have questions the record itself raises. I am requesting that these be answered by the supervisor of the responding unit, or by whichever OSP official is in a position to speak to the origin and conduct of the event, rather than by the records section &mdash; these are questions about the event, not about the records process, and I do not want to put you in the position of answering for conduct that isn&rsquo;t yours.</p>
                <p>My questions are as follows.</p>
                <p className="font-semibold">1. Source of my date of birth.</p>
                <p>The record lists my date of birth, 04/11/1977. I did not provide it to Oregon State Police. The event is logged as &ldquo;Officer Initiated,&rdquo; with &ldquo;No Call Type Selected,&rdquo; and closed with a disposition of &ldquo;No Action Taken.&rdquo;</p>
                <p>What was the source of my date of birth? Was it provided to the responding unit by another agency or individual, and if so, by whom? Alternatively, was a records or database check performed on me? If a check was performed, under what authorized purpose was it conducted, given that the event carries no call type, no crime, and a disposition of no action taken?</p>
                <p className="font-semibold">2. Source of the location.</p>
                <p>The dispatch address is listed solely as &ldquo;SILTCOOS WORK CENTER.&rdquo; The record contains no street address, no cross street, no county, no beat, no region, and no coordinates. Every geographic field except the facility name is blank.</p>
                <p>Siltcoos Work Center is an internal United States Forest Service facility designation. My residence has no street address. How did the responding unit obtain that location, and from whom? A facility name of that kind is not publicly indexed, and I would like to understand how it came to be the sole locator on an officer-initiated event.</p>
                <p className="font-semibold">3. My name in the &ldquo;Caller&rdquo; field.</p>
                <p>The record lists &ldquo;Caller: WHITE, ROBERT,&rdquo; while simultaneously listing the source of the event as &ldquo;Officer Initiated.&rdquo; I did not call Oregon State Police. I did not request contact. I was separately listed in the record as &ldquo;Person: WHITE, ROBERT &mdash; Role: Other.&rdquo;</p>
                <p>What does the &ldquo;Caller&rdquo; field denote in an officer-initiated event, and why does my name appear in it? If this is a system convention rather than a factual entry, I would like that stated, so that the record is not read by any future party as indicating that I summoned police to my own residence.</p>
                <p className="font-semibold">4. The stated purpose.</p>
                <p>The event comment reads: &ldquo;FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.&rdquo;</p>
                <p>I am the U.S. Forest Service volunteer caretaker at that location. The Forest Service has my phone number, my email address, and direct access to me, and has had throughout. I am asking OSP to state what request or communication from the Forest Service that comment refers to, who at the Forest Service made it, and in what form it was received.</p>
                <p>I would also ask what &ldquo;followup&rdquo; refers to. I had no prior interview with Oregon State Police.</p>
                <p className="font-semibold">5. Origin and travel.</p>
                <p>The record shows dispatch at 08:41:32 and arrival at 09:50:02, with the event closed at 10:18:42. That is approximately sixty-nine minutes of travel each direction for an event logged as low priority with no action taken. What was the origin point of the responding unit, and can OSP provide the total travel time associated with this event?</p>
                <p className="font-semibold">6. Other personnel.</p>
                <p>The record names one unit: Hyde, Jake (56397), unit 9452. Three officers were present at my residence, one of whom has been identified as U.S. Forest Service Special Agent Matthew Oliver. Can OSP identify any other Oregon State Police personnel present at or associated with this event, and identify which officer was associated with the vehicle bearing Oregon license plate 731 QRV, which is visible in my recording of the officers departing?</p>
                <p>To be clear about why I am asking. The record establishes that a criminal-designated unit was dispatched to a private citizen at a location with no street address, on an event with no call type, no crime, and no action taken, with that citizen&rsquo;s date of birth already in hand. Information of that kind &mdash; my identity and my location &mdash; was not available to a responding trooper independently. Someone provided it. The record does not say who, and &ldquo;Officer Initiated&rdquo; does not account for it.</p>
                <p>I am not asking OSP to characterize anything. I am asking OSP to explain the origin of specific information contained in its own record.</p>
                <p>I understand some of this may need to be processed as a new records request rather than as correspondence, and I am content for it to be handled either way. If any portion is withheld, I ask that the specific statutory exemption be cited for each withheld item.</p>
                <p>I would appreciate a response from the responding unit&rsquo;s supervisor or the appropriate OSP official.</p>
                <p>Thank you.</p>
                <p>Robert Samuel White</p>
            </div>

        </SectionPage>
    );
}
