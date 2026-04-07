// app/(archive)/key-individuals/matthew-oliver/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Matthew Oliver",
    description: "Special Agent, U.S. Forest Service Law Enforcement & Investigations — documented interactions following the March 24, 2026 police visit.",
};

const interactions = [
    {
        date: "March 24, 2026",
        title: "The Visit",

        body: `Oliver arrived at the Siltcoos Work Center behind a locked federal gate on the one-year anniversary of the dismissal from Honeyman State Park — accompanied by two unidentified Oregon State Police officers. He did not identify his agency. He stated the purpose was concern about posts online. He stated: "you are not in trouble."

I declined to speak without an attorney. I recorded them leaving. One license plate captured on camera: 731 QRV.

Oliver is an investigative special agent. Investigators do not conduct welfare checks.`,
        significance: `He needed the gate. OSP had jurisdiction concerns; Oliver had access. His role was escort — until the moment I named what was happening, at which point the roles inverted. He became the most exposed person at that gate.`,
    },
    {
        date: "March 24, 2026 — approximately 20 minutes after the visit",
        title: "The Phone Call",

        body: `Oliver called. He stated: "this matter isn't going away."

I laughed. I said: "you're right. It's not going away."

I told him with heat that this was retaliation and intimidation on the anniversary of my dismissal. He heard the legal vocabulary, the timeline, the significance of the date — and he tried to deescalate.

He said he could have handled it better — meaning without the state police. He said something about protecting constitutional rights. I said: "it doesn't look like that from my perspective — does it? Does it?" He said he didn't mean to upset me.`,
        significance: `You don't deescalate a welfare check. You deescalate when the person on the other end has correctly named what you did and continuing to press creates more exposure than retreating. His deescalation is a behavioral admission.

"I could have handled it better" is an acknowledgment that the decision to bring the state police was his, that he had options, and that in retrospect the choice he made was wrong.`,
    },
    {
        date: "March 27, 2026",
        title: "Second Call — The False Claim",

        body: `I called Oliver back and asked for the names of the two unidentified officers he brought to the gate.

He refused. He said he would talk to them.

I reminded him that he had brought them to restricted federal land.

He said it wasn't restricted.

I said with conviction: yet it is.

He hung up.`,
        significance: `A federal investigative agent made a false claim about federal land access status to the federal caretaker of that land — and hung up when corrected. This is not a miscommunication. This is a man trying to reframe the encounter and running out of room to do it.`,
    },
    {
        date: "March 27, 2026 — five minutes after the hang-up",
        title: "The Text Exchange",

        body: `I texted: "this isn't going away. Your exact words. I want their names."

Oliver replied immediately: "who is this?"

To the number he called twenty minutes after leaving my door. To the man he had spoken with days earlier. In response to a text quoting his own words back to him verbatim.`,
        significance: `"Who is this" is not confusion. It is a decision — made in writing, in real time — to pretend not to recognize the number rather than respond to a documented request for the names of officers he brought to restricted federal land. The reply is itself part of the record.`,
    },
    {
        date: "March 27, 2026",
        title: "The Incident Report",

        body: `I filed an official Siuslaw National Forest Host/Caretaker Incident Report documenting the visit as intimidation. The report includes the date, time, location, narrative, and license plate 731 QRV.

This placed the encounter inside Forest Service documentation before Oliver had time to characterize it otherwise.`,
        significance: `The incident report is filed within the same institutional structure Oliver operates in. It is not a complaint to an outside body. It is an internal record that required his chain of command to acknowledge the visit formally.`,
        download: "/usfs-incident-report.jpg",
        downloadLabel: "Download Incident Report (JPG)",
    },
    {
        date: "March 30, 2026",
        title: "Captain Sloan Confirms Oliver",

        body: `Patrol Captain Felicia Sloan confirmed in writing that Matthew Oliver — U.S. Forest Service Law Enforcement & Investigations, Willamette and Siuslaw National Forests — was present at the gate on March 24.

This confirmation was not volunteered. It was the Forest Service's calculated response: confirm Oliver's presence rather than deny it, which would have been worse.`,
        significance: `Sloan's written confirmation placed Oliver's name, agency, and investigative role in a permanent record associated with this case. The Forest Service chose disclosure over denial. That choice tells you something about what denial would have cost them.`,
    },
    {
        date: "April 3, 2026",
        title: "OSP Public Records Request Filed",

        body: `Public records request filed with Oregon State Police: REF# PR27478.

Requested: names, badge numbers, unit assignments, all communications related to planning, authorization, or coordination of the March 24 visit; all communications referencing my name, the archive, or oprdvolunteerabuse.org; any incident reports, case files, or after-action documentation; all communications between any OSP officer and Special Agent Matthew Oliver or any OPRD employee in connection with the visit.

OSP responded the same day with a blanket denial: no records responsive to the request.`,
        significance: `A same-day blanket denial of a request spanning communications, coordination records, and cross-agency contact cannot have involved an adequate search. The speed of the denial is itself evidence of the nature of the decision.`,
        download: "/osp-foia-response-1.pdf",
        downloadLabel: "Download OSP Public Records Response (PDF)",
    },
    {
        date: "April 4, 2026",
        title: "Follow-Up Filed with OSP",

        body: `Follow-up filed requesting the scope and method of search used to produce the same-day blanket denial.

Two officers were physically present at a documented location on a documented date. The claim that no records exist for that presence is not a defensible position. It is a position that looks worse the longer it is held.`,
        significance: `The follow-up forces OSP to either defend an indefensible search timeline or revise the response. Either outcome adds to the record.`,
    },
];

export default function MatthewOliverPage() {
    return (
        <SectionPage
            title="MATTHEW OLIVER"
            subtitle="U.S. FOREST SERVICE LAW ENFORCEMENT & INVESTIGATIONS"
            supplemental="WILLAMETTE AND SIUSLAW NATIONAL FORESTS"
            previousPage={{ href: "/key-individuals/tina-kotek", label: "Tina Kotek" }}
            nextPage={{ href: "/evidence/police", label: "Police Intimidation" }}
        >


            <div className="text-sm text-gray-500 mb-8">
                Special Agent · U.S. Forest Service Law Enforcement &amp; Investigations
            </div>

            {/* Verdict */}
            <blockquote className="border-l-4 border-gray-900 pl-6 py-2 mb-12 text-lg leading-relaxed">
                He came to apply terminal pressure to a First Amendment retaliation case.
                He left having confirmed his own presence, made a false claim about federal land,
                hung up when corrected, and replied &ldquo;who is this&rdquo; to a number he initiated contact with.
                Every decision he made after the visit compounded the one before it.
            </blockquote>

            <hr className="my-6 border-t border-gray-300" />

            {/* Role & Significance */}
            <h2 className="text-xl font-semibold mb-4">ROLE &amp; SIGNIFICANCE</h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed mb-8">
                <div>
                    Matthew Oliver is not an Oregon State Parks employee. His presence on March 24, 2026
                    represents the expansion of this case beyond OPRD &mdash; cross-agency coordination
                    to use federal access and federal authority in service of what originated as a
                    state park supervisor who could not tolerate documentation &mdash; shielded at every level of the institution
                    until federal law enforcement crossed agency lines to reach a volunteer&rsquo;s front door.
                </div>
                <div>
                    He is an investigative special agent. Investigators do not conduct welfare checks.
                    His presence required a reason. That reason is not in any record Oregon State Police
                    claims to hold.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            {/* Interaction Timeline */}
            <h2 className="text-xl font-semibold mb-6">DOCUMENTED INTERACTIONS</h2>

            {interactions.map((item, i) => (
                <div key={i} className="mb-10">
                    <div className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-1">
                        {item.date}
                    </div>
                    <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                    <div className="text-base text-gray-700 leading-relaxed whitespace-pre-line mb-2">
                        {item.body}
                    </div>
                    {item.significance && (
                        <div className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4 mt-3 italic whitespace-pre-line">
                            {item.significance}
                        </div>
                    )}
                    {item.download && (
                        <div className="mt-4">
                            <a
                                className="inline-block px-4 py-2 text-sm font-semibold text-emerald-700 border border-emerald-700 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors"
                                href={item.download}
                                download
                            >
                                {item.downloadLabel} &darr;
                            </a>
                        </div>
                    )}
                    {i < interactions.length - 1 && (
                        <hr className="mt-8 border-t border-gray-200" />
                    )}
                </div>
            ))}

            <hr className="my-6 border-t border-gray-300" />

            {/* Text Messages */}
            <h2 className="text-xl font-semibold mb-4">TEXT MESSAGES</h2>
            <div className="text-base text-gray-700 leading-relaxed mb-4">
                The exchange below includes the &ldquo;who is this&rdquo; response &mdash; sent to the number
                Oliver himself called twenty minutes after leaving the gate.
            </div>
            <div className="border border-dashed border-gray-300 rounded p-6 mb-8 text-center text-sm text-gray-400 italic">
                [ Text message thread &mdash; correspondence to be added ]
            </div>

            {/* Emails with Oliver */}
            <h2 className="text-xl font-semibold mb-4">CORRESPONDENCE &mdash; MATTHEW OLIVER</h2>
            <div className="border border-dashed border-gray-300 rounded p-6 mb-8 text-center text-sm text-gray-400 italic">
                [ Direct emails with Oliver &mdash; correspondence to be added ]
            </div>

            {/* Emails with Captain Sloan */}
            <h2 className="text-xl font-semibold mb-4">CORRESPONDENCE &mdash; CAPTAIN FELICIA SLOAN</h2>
            <div className="text-base text-gray-700 leading-relaxed mb-4">
                Sloan confirmed Oliver&rsquo;s presence in writing on March 30, 2026. She directed
                the records inquiry through FOIA. The confirmation itself &mdash; its speed,
                its framing, its source &mdash; is part of the record.
            </div>
            <div className="border border-dashed border-gray-300 rounded p-6 mb-8 text-center text-sm text-gray-400 italic">
                [ Emails with Captain Sloan &mdash; correspondence to be added ]
            </div>

            {/* Emails with District Ranger */}
            <h2 className="text-xl font-semibold mb-4">CORRESPONDENCE &mdash; DISTRICT RANGER</h2>
            <div className="border border-dashed border-gray-300 rounded p-6 mb-8 text-center text-sm text-gray-400 italic">
                [ Emails with District Ranger &mdash; correspondence to be added ]
            </div>

            {/* OSP Records Status */}
            <h2 className="text-xl font-semibold mb-4">OREGON STATE POLICE &mdash; RECORDS STATUS</h2>
            <div className="border-l-4 border-red-600 bg-red-50 p-6 mb-8">
                <div className="text-xs font-mono uppercase tracking-widest text-red-600 mb-3">
                    Active &mdash; Records Withheld
                </div>
                <div className="text-base text-gray-700 leading-relaxed mb-3">
                    <strong>Request filed:</strong> April 3, 2026 &mdash; REF# PR27478<br />
                    <strong>OSP response:</strong> Same-day blanket denial. No records found.<br />
                    <strong>Follow-up filed:</strong> April 4, 2026 &mdash; requesting scope and method of search.
                </div>
                <div className="text-sm text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-4">
                    Two officers were physically present at a documented location on a documented date.
                    A vehicle with plate 731 QRV was photographed on camera. The claim that no records
                    exist for that presence is not a defensible position. It is a position that looks
                    worse the longer it is held &mdash; and worse still in discovery.
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="text-sm text-gray-500 leading-relaxed">
                This page will be updated as correspondence is added and records requests
                are resolved. All information reflects firsthand experience and contemporaneous
                documentation. Independently verifiable. Never legally challenged. Not going away.
            </div>

        </SectionPage>
    );
}
