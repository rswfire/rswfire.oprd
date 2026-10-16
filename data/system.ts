// data/system.ts
//
// System: the State of Oregon, mapped as a system. One source for the page:
// the seats and how they connect, the seven patterns with the tactics inside
// them, and the tactics set side by side by institution. Every line rests on
// the document or recording it cites. Quoted words are the words at the
// place cited.
import type { RegisterSlug } from "@/components/Cite";

export const PRODUCTION = "01M1M4WF78XJPEJJ48D1JZ4SJ8";

export type Src = { u: string; t?: RegisterSlug } | { href: string };

export interface Doc {
    who: string;
    when?: string;
    /** The file inside the cited record the words come from. */
    att?: { label: string; href: string; page?: number; from?: string };
    /** ISO date, for placing the entry in time. */
    d?: string;
    text: string;
    src: Src;
}

/** One thing a seat did, from the record. noreply: a letter left unanswered. */
export interface Act {
    d: string;
    when: string;
    text: string;
    src: Src;
    noreply?: boolean;
    /** The file inside the cited record the words come from. */
    att?: { label: string; href: string; page?: number; from?: string };
}

// ── The structure ────────────────────────────────────────────────────────────

export interface Seat {
    /**
     * A public records office, not a person. Its card leads its agency's
     * group under the agency's full name, with a newspaper for a face and
     * its role called the agency's.
     */
    office?: boolean;
    /** The agency's full name, where an office card carries it. */
    agency?: string;
    /** An office that is not a records office: a building for a face. */
    building?: boolean;
    id: string;
    title: string;
    /** The institution the seat sits in, where the rung or branch does not already say. */
    inst?: string;
    /** The person in the seat, where the archive names them. */
    name?: string;
    /** A note from him about this seat, shown apart on the card. */
    note?: { text: string; src?: Src };
    /** The role as it is expected to function. */
    fn: string;
    /** What the seat does in this system. */
    real: string;
    docs: Doc[];
    empty?: boolean;
}

/** What passes between two rungs: what went up, what came back down. */
export interface Edge {
    id: string;
    up: string;
    down: string;
    docs: Doc[];
    /** A seat whose acts in the record are the letters this edge names. */
    acts?: string;
    /** Last date of those acts that belong to this edge. */
    until?: string;
}

/** A line of seats that leaves the trunk sideways. */
export interface Branch {
    id: string;
    name: string;
    out: string;
    seats: Seat[];
    docs: Doc[];
}

export interface Rung {
    id: string;
    name?: string;
    seats: Seat[];
    /** The edge between this rung and the one below it. */
    below?: Edge;
    branch?: Branch;
}

const NO_STANDARDS: Doc = {
    who: "What does not exist for volunteers",
    when: "His letter of September 7, 2026",
    text: "“Written standards. Notice. A hearing before removal from the ground a person lives on. An appeal that reaches someone other than the supervisor whose account is in question. Protection from retaliation for documentation.”",
    src: { u: "01M1YH9QSR0JAGXR04DGFYV7VD" },
};

const POLICE: Branch = {
    id: "police",
    name: "The police",
    out: "His letters, sent to the state police",
    docs: [
        { who: "Oregon State Parks", when: "March 3, 2026", text: "Sends his letters to the state police press captain: “since he is now including the Governor as well as our Director.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 2, from: "Oregon State Police" } },
    ],
    seats: [
        {
            id: "emergency-manager",
            note: { text: "An agency facing a real threat does not email the press captain." },
            name: "Jamen Lee",
            title: "Emergency Manager",
            inst: "Oregon State Parks",
            fn: "Emergency management for the state’s parks: fires, storms, evacuations, threats to the public.",
            real: "Gives the agency its cover for calling the police. He sent the volunteer’s website to the state police press captain, framed as a safety matter, “since he is now including the Governor as well as our Director.”",
            docs: [
                { who: "A man at Oregon State Parks", when: "March 3, 2026", text: "Sends the letters to the press captain: “since he is now including the Governor as well as our Director.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 2, from: "Oregon State Police" } },
                { who: "A man at Oregon State Parks", when: "March 6, 2026", text: "Sends the detective the dismissal letter and the “timeline of events”.", src: { u: PRODUCTION, t: "osp" } },
            ],
        },
        {
            id: "press-captain",
            note: { text: "A press captain doesn’t order a threat assessment on a member of the public." },
            name: "Kyle Kennedy",
            title: "Press Captain",
            inst: "Oregon State Police",
            fn: "Government and media relations for the state police. Speaks for the agency to the public and the press.",
            real: "Gives a state agency a back channel into the police. The agency emailed him, and he handed it to criminal investigations with an order that a “threat assessment be conducted asap.”",
            docs: [
                { who: "Sergeant, to a detective", when: "March 4, 2026", text: "“Capt. Kennedy is requesting that a threat assessment be conducted asap.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 1, from: "Oregon State Police" } },
                { who: "Press captain", text: "Two letters to him since. No answer.", src: { u: "01M3GWDQSGQ34YBJFFKTMJYAF5", t: "osp" } },
            ],
        },
        {
            id: "sergeant",
            name: "Sean Henderson",
            title: "Sergeant",
            inst: "Oregon State Police",
            fn: "Supervises investigators. Assigns cases where there are grounds to suspect a crime.",
            real: "Carries out the captain’s order. He assigned a detective to run a “threat assessment” on the volunteer, and supervised him through the “knock and talk”.",
            docs: [
                { who: "Sergeant, to a detective", when: "March 4, 2026", d: "2026-03-04", text: "“Capt. Kennedy is requesting that a threat assessment be conducted asap.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 1, from: "Oregon State Police" } },
            ],
        },
        {
            id: "lieutenant",
            name: "Haley McQuillan",
            title: "Lieutenant",
            inst: "Oregon State Police",
            fn: "Commands criminal investigators. Answers for what they open, and why.",
            real: "Takes the volunteer to a terrorism task force. She passed the captain’s order down, then brought “some concerns in the Florence area” to a detective on the FBI’s Joint Terrorism Task Force.",
            docs: [

            ],
        },
        {
            id: "case-detective",
            name: "Jerred Nelson",
            title: "Detective",
            inst: "Oregon State Police",
            fn: "Investigates crimes. Bound by ORS 181A.250: no information on a volunteer’s political, religious or social views or activities without reasonable grounds to suspect criminal conduct.",
            real: "Turns the volunteer’s speech into a police file. He listed the volunteer as a “Suspect” for “publicly airing grievances,” planned the “knock and talk,” and stood armed at his door.",
            docs: [
                { who: "Detective", when: "March 6, 2026", text: "Sends his name to FBI personnel from an FBI account.", src: { u: PRODUCTION, t: "osp" } },
                { who: "Detective", when: "March 23, 2026", text: "“Suspect”: “concerning emails to former supervisors in parks department and publicly airing grievances.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "CAD Record SP26096984", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Dispatch-SP26096984-CAD.pdf", page: 1, from: "Oregon State Police" } },
                { who: "Detective", when: "April 15, 2026", text: "“Case and assessment to be documented for information only at this time.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Report SP26096984 — Threat Assessment", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-SP26096984.pdf", page: 4, from: "Oregon State Police" } },
            ],
        },
        {
            id: "task-force-detective",
            note: { text: "Federal guidelines bar investigating anyone solely for what the First Amendment protects.", src: { href: "https://www.justice.gov/archive/opa/docs/guidelines.pdf#page=13" } },
            name: "Jake Hyde",
            title: "Detective; FBI Task Force Officer",
            inst: "Oregon State Police",
            fn: "Trusted with federal intelligence systems on the condition, set by the Attorney General’s Guidelines, that no one is investigated solely for exercising First Amendment rights. Also bound by ORS 181A.250.",
            real: "Puts an armed officer at the volunteer’s door. He carried the agency’s account into federal hands, to FBI personnel and to a Forest Service agent he enlisted to find him, then drove sixty-eight minutes to stand there.",
            docs: [

            ],
        },
        {
            id: "fusion-center-analyst",
            note: { text: "A U.S. Senate investigation found fusion center intelligence often shoddy, and sometimes a danger to civil liberties.", src: { href: "https://www.hsgac.senate.gov/imo/media/doc/10-3-2012%20PSI%20STAFF%20REPORT%20re%20FUSION%20CENTERS.2.pdf" } },
            name: "Dianne Greenlee",
            title: "Fusion Center Analyst",
            inst: "Department of Justice",
            fn: "Criminal intelligence at the state’s fusion center: files kept on people who never see them. The easiest power in the state to abuse, which is why ORS 181A.250 bars keeping information on anyone’s political, religious or social views or activities without reasonable grounds to suspect criminal conduct.",
            real: "Gathers intelligence on the volunteer. She wrote that she was documenting what Oregon State Parks shared “for our internal awareness.”",
            docs: [
                { who: "Fusion center analyst", when: "March 11, 2026", text: "Documents his letters “for our internal awareness,” on what Oregon State Parks shared.", src: { u: PRODUCTION, t: "osp" }, att: { label: "Electronic Communications", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Electronic-Communications.pdf", page: 6, from: "Oregon State Police" } },
                { who: "Fusion center analyst", text: "Asked what she documented. No answer.", src: { u: "01M30EACB8FXZB4SQ3TA1ED1N3", t: "osp" } },
            ],
        },
        {
            id: "forest-service-agent",
            name: "Matthew Oliver",
            title: "Special Agent",
            inst: "U.S. Forest Service",
            fn: "Law enforcement on national forest land. Protects the people who live and work there, volunteers among them.",
            real: "Turns his own agency against its volunteer. A Forest Service special agent with the keys, he unlocked the federal gate for the state police, stood at the volunteer’s door, called afterward to tell him it wasn’t going away, and refused to give him the officers’ names.",
            docs: [
                { who: "Forest Service agent", when: "March 22, 2026", text: "His schedule, his duties, his vehicles, and a hunting-app waypoint on the work center where he lives. His supervisor “was told not to advise WHITE that FS LE was inquiring about his whereabouts.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Electronic Communications", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Electronic-Communications.pdf", page: 11, from: "Oregon State Police" } },
            ],
        },
        {
            id: "door",
            title: "The door",
            inst: "The door",
            fn: "",
            real: "Three men with guns at a locked federal gate.",
            docs: [
                { who: "March 24, 2026", text: "Three men with guns at a locked federal gate, on federal land where he serves as a volunteer caretaker.", src: { href: "/evidence/police" } },
            ],
        },
    ],
};

const RECORDS: Branch = {
    id: "records",
    name: "The records",
    out: "Records requests, to every institution",
    docs: [
        { who: "Oregon State Police", when: "April 3, 2026", text: "“no records responsive to your request.”", src: { u: "01KNAV7K70M1CKA57ZJW6M6X1R", t: "osp" }, att: { label: "Response Letter", href: "/records/osp/attachments/01knav7k70m1cka57zjw6m6x1r-Response-Letter.pdf", page: 1, from: "Oregon State Police" } },
        { who: "Department of Justice", when: "October 15, 2026", text: "1,350 records. $599. “pertain primarily to you and your private interests.”", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
    ],
    seats: [
        {
            id: "oprd-pr",
            office: true,
            agency: "Oregon State Parks",
            title: "Public Records",
            inst: "Oregon State Parks",
            fn: "Finds the agency’s records and releases them as soon as practicable. The records belong to the public.",
            real: "Prices the volunteer out of the agency’s records. It posted its answer to his first request on a portal he had no access to, then wrote that it had “not received any response from you,” and priced the Director and her Deputy’s own notes at up to $1,728.",
            docs: [],
        },
        {
            id: "osp-cr",
            office: true,
            agency: "Oregon State Police",
            title: "Central Records",
            inst: "Oregon State Police",
            fn: "Finds the agency’s records and releases them as soon as practicable.",
            real: "Hides the police file from the volunteer. It told him there were no records while it held the file on the armed visit to his door, then charged him for it in pieces, and kept back the body-camera video and the FBI report on him.",
            docs: [],
        },
        {
            id: "osp-risk",
            building: true,
            title: "Risk Management",
            inst: "Oregon State Police",
            fn: "Preserves the records when a claim is coming.",
            real: "Contains the volunteer’s claim. It keeps the claim inside the state’s own process: a hold on the records that he must renew “every six months.”",
            docs: [],
        },
        {
            id: "das-pr",
            office: true,
            agency: "Department of Administrative Services",
            title: "Public Records",
            inst: "Administrative Services",
            fn: "Finds the agency’s records and releases them as soon as practicable.",
            real: "Sends the volunteer back to the agency he is asking about. It said the records were someone else’s, then that there were none.",
            docs: [],
        },
        {
            id: "das-communications-director",
            name: "Chris Liedle",
            title: "Communications Director",
            inst: "Administrative Services",
            fn: "Speaks for the agency to the public and the press.",
            real: "Speaks for the records office without answering for it. He wrote to the volunteer that the requests were being processed, and addressed none of them.",
            docs: [],
        },
        {
            id: "doj-pr",
            office: true,
            agency: "Department of Justice",
            title: "Public Records",
            inst: "Department of Justice",
            fn: "Finds the department’s records and releases them as soon as practicable. Waives the fee when disclosure benefits the public.",
            real: "Charges the volunteer $599 to see his own file. It counted 1,350 records about him and called them his “private interests.”",
            docs: [],
        },
        {
            id: "public-records-counsel",
            name: "David Pitcher",
            title: "Public Records Counsel",
            inst: "Department of Justice",
            fn: "Holds the Department of Justice to the public records law. Supports the Oregon Sunshine Committee, whose work is to enhance transparency and speed the fulfillment of records requests.",
            real: "Guards his department’s file on the volunteer from both sides of the records law. He answered for the Attorney General’s orders on the volunteer’s petitions, then denied the fee waiver on the volunteer’s request for that file: $599.",
            docs: [],
        },
        {
            id: "deputy-attorney-general",
            name: "Benjamin Gutman",
            title: "Deputy Attorney General",
            inst: "Department of Justice",
            fn: "Reviews records denials on petition, for the Attorney General.",
            real: "Judges petitions against his own department’s clients. The Department of Justice advises the agencies; he decided every petition the volunteer brought against them in their favor, and twice threw out his petitions against the Governor’s office.",
            docs: [
                { who: "Deputy Attorney General", when: "September 24, 2026", d: "2026-09-24", text: "“We lack jurisdiction to consider your appeal and must respectfully dismiss your petition.”", src: { u: "01M3AW7K3GZCPA4CD5YQ0FR2R6", t: "governor" }, att: { label: "Petition for Public Records Disclosure Order: dismissed", href: "/records/governor/attachments/01m3aw7k3gzcpa4cd5yq0fr2r6-PRO-White-Robert-Samuel-09-24-26.pdf", page: 1, from: "Department of Justice" } },
                { who: "Deputy Attorney General", when: "October 1, 2026", d: "2026-10-01", text: "Dismissed again: “the authority to review decisions made by elected officials.”", src: { u: "01M3WAH79RY4KVVHRYVY9T726S", t: "governor" }, att: { label: "Petition for Public Records Disclosure Order: dismissed", href: "/records/governor/attachments/01m3wah79ry4kvvhryvy9t726s-PRO-White-Robert-10-01-26.pdf", page: 1, from: "Department of Justice" } },
            ],
        },
        {
            id: "attorney-general",
            note: { text: "His department claims 1,350 “potentially responsive records” on the volunteer.", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
            name: "Dan Rayfield",
            title: "Attorney General",
            inst: "Department of Justice",
            fn: "The state’s chief lawyer. Enforces the public records law, and runs the department that holds the fusion center and counsels the agencies.",
            real: "Runs the department that sits on every side. It holds the fusion center file on the volunteer, advises the agencies, prices the records, and decides the appeals.",
            docs: [
                { who: "Department of Justice", when: "March 11, 2026", d: "2026-03-11", text: "Its fusion center analyst documents what Oregon State Parks shared “for our internal awareness.”", src: { u: PRODUCTION, t: "osp" } },
                { who: "Department of Justice", when: "October 1, 2026", d: "2026-10-01", text: "Its Deputy Attorney General dismisses both petitions against the Governor’s office.", src: { u: "01M3WAH79RY4KVVHRYVY9T726S", t: "governor" } },
                { who: "Department of Justice", when: "October 15, 2026", d: "2026-10-15", text: "Its public records office counts 1,350 records on the volunteer and prices them at $599.", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
            ],
        },
        {
            id: "government-accountability-attorney",
            name: "Cameron D. Miles",
            title: "Government Accountability Attorney",
            inst: "Office of the Governor",
            fn: "Holds the Governor’s office to the public records law. Waives the fee when disclosure benefits the public.",
            real: "Shields the Governor’s office from the volunteer. He called the request for its records about him “a personal, rather than a public interest,” and priced them at $572.50.",
            docs: [
                { who: "Office of the Governor", when: "September 22, 2026", d: "2026-09-22", text: "$572.50. “The requester has demonstrated that this request relates to a personal, rather than a public interest.”", src: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" } },
            ],
        },
        {
            id: "public-records-advocate",
            name: "Todd Albert",
            title: "Public Records Advocate",
            inst: "Public Records Advocate",
            fn: "Mediates public records disputes between the public and the agencies.",
            real: "To be determined.",
            docs: [
                { who: "Public Records Advocate", when: "October 13, 2026", d: "2026-10-13", text: "“does not have the authority to compel the governor’s office to take action.”", src: { u: "01M4VG3NVGMSVPH7TCES6W2SW8", t: "governor" } },
            ],
        },
    ],
};

/** Top to bottom: the empty seat, then down the ladder to the volunteer. */
export const RUNGS: Rung[] = [
    {
        id: "none",
        seats: [
            {
                id: "none",
                title: "No one",
                fn: "Sees the whole: the park, the agency, the police, the records, and the volunteer inside them. Holds each seat to account for what the others do.",
                real: "Leaves the volunteer without recourse. There is no appeal above the seats that harmed him, no one to answer for them, and no one to repair what allowed it.",
                empty: true,
                docs: [
                    NO_STANDARDS,
                    { who: "Attorney General", text: "Reviews none of the Governor’s office.", src: { u: "01M3AW7K3GZCPA4CD5YQ0FR2R6", t: "governor" } },
                    { who: "Public Records Advocate", text: "Compels no one.", src: { u: "01M4VG3NVGMSVPH7TCES6W2SW8", t: "governor" } },
                ],
            },
        ],
    },
    {
        id: "governor",
        seats: [
            {
                id: "governor",
                name: "Tina Kotek",
                title: "Governor",
                fn: "Chief executive of Oregon. Answers to the people for every state agency, and holds the power to correct any of them. Sworn to uphold the Constitution and the civil rights of every Oregonian.",
                real: "Shields her agencies by staying out of it. She holds the authority to step in when one of them harms someone, and she does not use it.",
                docs: [
                    { who: "Office of the Governor", when: "November 18, 2025 to September 3, 2026", text: "Thirteen letters. Not one answered.", src: { u: "01KACE2348G8VG3XPB3BGW3F1N", t: "governor" } },
                ],
            },
        ],
        below: {
            id: "to-governor",
            up: "Thirteen letters",
            down: "No reply",
            docs: [
                { who: "Oregon State Parks, to the state police press captain", when: "March 3, 2026", text: "Sends his letters to the state police press captain, copying the deputy director: “since he is now including the Governor as well as our Director.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 2, from: "Oregon State Police" } },
            ],
            acts: "governor",
            until: "2026-09-03",
        },
    },
    {
        id: "agency",
        name: "The agency",
        seats: [
            {
                id: "director",
                note: { text: "Used therapeutic language in both of her letters to dismiss the volunteer." },
                name: "Lisa Sumption",
                title: "Director",
                fn: "Head of Oregon Parks and Recreation. Answers to the public for what its staff do. The last word on a complaint about them, and the one who corrects it.",
                real: "Runs the parks on unpaid labor without the protections owed to it. Volunteers work with no written standards, no notice, no hearing, and no appeal. Asked in writing for basic protections, she put in none.",
                docs: [
                    { who: "Director", when: "August 25, 2025", text: "“through the appropriate channels within the Department.” No channel is named. No review is reported.", src: { u: "01K3HPAXBG8F4QZG4DJNDY5QY8" } },
                    { who: "Director", when: "December 8, 2025", text: "“deeply painful”; “a sense of purpose and healing.”", src: { u: "01KBZ9S95G2W5B44TTGT6HA69N" } },
                ],
            },
            {
                id: "deputy",
                name: "JR Collier",
                title: "Deputy Director",
                fn: "Second in command of Oregon Parks and Recreation. Runs the agency’s operations, and its duty to the public it serves: fair treatment, due process, and the volunteer’s right to speak about it.",
                real: "Closes the agency to the people it harms, and opens it to the police. Cuts the volunteer off from staff, routes all agency communication through himself.",
                docs: [
                    { who: "Deputy director", when: "February 14, 2026", text: "Do not write to staff. Legal correspondence goes to Department of Justice counsel.", src: { u: "01KHFDVVV82TVEJPHPYAMAD3JH" } },
                    { who: "Oregon State Parks", when: "March 3, 2026", text: "Copied on the letters sent to the press captain.", src: { u: PRODUCTION, t: "osp" } },
                ],
            },
        ],
        below: {
            id: "to-director",
            up: "Letters on how staff treated him",
            down: "“through the appropriate channels”",
            docs: [
                { who: "His open letter to the Director", when: "August 24, 2025", text: "“An Open Letter”: what happened at Honeyman, and five “basic institutional protections” for volunteers.", src: { u: "01K3FDT5P09S9N9QSZYWS9KN7A" } },
                { who: "Director", when: "August 25, 2025", text: "“through the appropriate channels within the Department.” No channel is named. No review is reported.", src: { u: "01K3HPAXBG8F4QZG4DJNDY5QY8" } },
            ],
            acts: "director",
        },
        branch: POLICE,
    },
    {
        id: "program",
        seats: [
            {
                id: "program",
                note: { text: "On July 8, 2026, the volunteer declined to pursue his 42 U.S.C. § 1983 claim against her personally.", src: { u: "01KX28CF90H15CJVJRJWKXCP5N" } },
                title: "Program Manager",
                fn: "Runs the volunteer program across every state park. The volunteer’s recourse when a park fails them: hears the complaint, protects the volunteer, holds the park to the standard.",
                real: "Writes the agency’s file on the volunteer. She treated his recording as the violation, ratified the dismissal, and extended it statewide. Her “timeline of events” went to the police.",
                docs: [
                    { who: "Program manager", when: "March 10, 2025", text: "A call about the recording.", src: { href: "/sunlight/#03-10-25-the-admonition" } },
                    { who: "Program manager", when: "March 26, 2025", text: "Exclusion from every park in Oregon for “the disparaging public comments made about staff.”", src: { u: "01JQA2WM60RX7MSJQ5QPFD8AR2" }, att: { label: "Robert Samuel White Letter", href: "/records/oprd/attachments/01jqa2wm60rx7msjq5qpfd8ar2-Robert-Samuel-White-Letter.pdf", page: 1, from: "Oregon State Parks" } },
                    { who: "Program manager", text: "Writes the “timeline of events” that goes to the police.", src: { href: "/sunlight/#01-06-26" } },
                ],
            },
        ],
        below: {
            id: "to-program",
            up: "“Request for Review and Immediate Support”",
            down: "“that’s not going to be overturned”",
            docs: [
                { who: "His email to the program manager", when: "March 24, 2025", text: "“Urgent: Dismissal from Honeyman State Park – Request for Review and Immediate Support.”", src: { u: "01JQ51JFPRZVFQ28F1R1ASPWNE" } },
                { who: "Program manager", when: "March 25, 2025", text: "The call opens with the decision: “Just wanted to confirm that’s not going to be overturned.”", src: { href: "/evidence/expulsion/?t=2:38" } },
                { who: "Program manager", when: "March 26, 2025", text: "Exclusion from every park in Oregon for “the disparaging public comments made about staff.”", src: { u: "01JQA2WM60RX7MSJQ5QPFD8AR2" }, att: { label: "Robert Samuel White Letter", href: "/records/oprd/attachments/01jqa2wm60rx7msjq5qpfd8ar2-Robert-Samuel-White-Letter.pdf", page: 1, from: "Oregon State Parks" } },
            ],
        },
    },
    {
        id: "park",
        name: "The park",
        seats: [
            {
                id: "supervisor",
                title: "Park Supervisor",
                fn: "Supervises the park’s rangers and its daily operations. Treats staff and volunteers fairly, and answers to the park manager for it.",
                real: "The source of the case. As hiring manager, she drove the volunteer to withdraw his application, then held the withdrawal against him. She explained away the unidentified man at his work. Her account became the agency’s file.",
                docs: [
                    { who: "Park supervisor", when: "March 5, 2025", text: "Supplies a reason for a withdrawn job application the volunteer never gave.", src: { href: "/evidence/coercion/?t=46:29" } },
                    { who: "“timeline of events”", text: "Her reason, entered as fact, and given to the state police.", src: { href: "/sunlight/#02-15-25-and-02-16-25-the-withdrawal" } },
                ],
            },
            {
                id: "manager",
                title: "Park Manager",
                fn: "Runs the park. Holds authority over its staff and volunteers, and the duty to hear a volunteer’s concern and resolve it fairly.",
                real: "Forces the volunteer out. He pressed him to quit, and when he wouldn’t, dismissed him by phone with twenty-four hours to leave.",
                docs: [
                    { who: "Park manager", when: "March 5, 2025", text: "“the most false thing I’ve ever heard,” of a claim the volunteer never made. The supervisor’s version stands.", src: { href: "/evidence/coercion/?t=45:30" } },
                    { who: "Park manager", when: "March 5, 2025", text: "“It’s kind of that eating glass a little bit.”", src: { href: "/evidence/coercion/?t=42:05" } },
                    { who: "Park manager", when: "March 24, 2025", text: "Dismissal by phone. Twenty-four hours to leave.", src: { u: "01JQ5ES9ZGPRFAZ2AFRK83PCV8" } },
                ],
            },
            {
                id: "lead",
                title: "Volunteer Services Lead",
                fn: "The volunteer’s supervisor. The one a volunteer confides in, and their advocate inside the park.",
                real: "Weaponizes the volunteer’s sexuality. He used his own youth and attractiveness, and the bond between them, against the volunteer.",
                docs: [
                    { who: "Park manager", when: "March 5, 2025", text: "“it’s not the volunteer services lead doing a dismissal. It’s the park supervisor or myself.”", src: { href: "/evidence/coercion/?t=29:52" } },
                    { who: "His letter to the volunteer services lead", when: "December 9, 2025", text: "“You took what I shared in confidence and disclosed it to management.”", src: { u: "01KC32EJP8NEFBWH0YGJKV3A4S" } },
                ],
            },
        ],
        below: {
            id: "to-park",
            up: "Concerns, at the picnic table",
            down: "Dismissal by phone. Twenty-four hours to leave.",
            docs: [
                { who: "Park manager", when: "March 5, 2025", text: "“It’s kind of that eating glass a little bit.”", src: { href: "/evidence/coercion/?t=42:05" } },
                { who: "Park manager", when: "March 24, 2025", text: "Dismissal by phone. Twenty-four hours to leave.", src: { u: "01JQ5ES9ZGPRFAZ2AFRK83PCV8" } },
            ],
        },
    },
    {
        id: "volunteer",
        seats: [
            {
                id: "volunteer",
                name: "Robert Samuel White",
                title: "Volunteer",
                fn: "Serves the park, unpaid. Gives time and work to the public’s land.",
                real: "Unpaid labor with no protection. The volunteer was removed from every park in the state for documenting what was done to him, then met at his door by three men with guns for writing to his government about it.",
                docs: [
                    { who: "Park manager", when: "March 24, 2025", d: "2025-03-24", text: "Dismissal by phone. Twenty-four hours to leave.", src: { u: "01JQ5ES9ZGPRFAZ2AFRK83PCV8" } },
                    { who: "Program manager", when: "March 26, 2025", d: "2025-03-26", text: "Exclusion from every park in Oregon for “the disparaging public comments made about staff.”", src: { u: "01JQA2WM60RX7MSJQ5QPFD8AR2" }, att: { label: "Robert Samuel White Letter", href: "/records/oprd/attachments/01jqa2wm60rx7msjq5qpfd8ar2-Robert-Samuel-White-Letter.pdf", page: 1, from: "Oregon State Parks" } },
                    { who: "His open letter to the Director", when: "August 24, 2025", d: "2025-08-24", text: "“An Open Letter”: what happened at Honeyman, and five “basic institutional protections” for volunteers.", src: { u: "01K3FDT5P09S9N9QSZYWS9KN7A" } },
                    { who: "Detective", when: "March 23, 2026", d: "2026-03-23", text: "“Suspect”: “concerning emails to former supervisors in parks department and publicly airing grievances.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "CAD Record SP26096984", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Dispatch-SP26096984-CAD.pdf", page: 1, from: "Oregon State Police" } },
                    { who: "March 24, 2026", d: "2026-03-24", text: "Three men with guns at a locked federal gate, on federal land where he serves as a volunteer caretaker.", src: { href: "/evidence/police" } },
                    { who: "Seven estimates, four institutions", when: "April 13 to October 15, 2026", text: "$19,336.50 to $19,464.50 to see what the state wrote about him.", src: { href: "/records-requests" } },
                    NO_STANDARDS,
                ],
            },
        ],
        branch: RECORDS,
    },
];

// ── The patterns ─────────────────────────────────────────────────────────────

export type FigureId = "spread" | "silence" | "counts" | "prices" | "waiver" | "department";

/** Docs under a pattern, alone or under the name of a tactic. */
export interface Group {
    tactic?: string;
    words?: string;
    wordsSrc?: Src;
    figure?: FigureId;
    docs: Doc[];
}

export interface Pattern {
    id: string;
    title: string;
    figure?: FigureId;
    groups: Group[];
}

export const PATTERNS: Pattern[] = [
    {
        id: "routed-back",
        title: "The complaint goes back to the people it is about.",
        groups: [
            {
                docs: [
                    { who: "Park manager", when: "March 5, 2025", text: "Of the volunteer services lead: “it’s not the volunteer services lead doing a dismissal. It’s the park supervisor or myself.”", src: { href: "/evidence/coercion/?t=29:52" } },
                    { who: "Program manager", when: "March 25, 2025", text: "The call opens with the decision: “Just wanted to confirm that’s not going to be overturned.”", src: { href: "/evidence/expulsion/?t=2:38" } },
                    { who: "Program manager", when: "March 25, 2025", text: "Takes the park manager’s explanation of his “eating glass” words by phone, and writes it into the file.", src: { href: "/sunlight/#03-25-25-eat-glass" } },
                ],
            },
            {
                tactic: "Closing the channel",
                words: "“through the appropriate channels within the Department”",
                wordsSrc: { u: "01K3HPAXBG8F4QZG4DJNDY5QY8" },
                docs: [
                    { who: "Director", when: "August 25, 2025", text: "No channel is named. No review is reported.", src: { u: "01K3HPAXBG8F4QZG4DJNDY5QY8" } },
                    { who: "Deputy director", when: "February 14, 2026", text: "Do not write to staff. Legal correspondence goes to Department of Justice counsel.", src: { u: "01KHFDVVV82TVEJPHPYAMAD3JH" } },
                ],
            },
            {
                tactic: "Therapeutic language",
                words: "“deeply painful”; “a sense of purpose and healing”",
                wordsSrc: { u: "01KBZ9S95G2W5B44TTGT6HA69N" },
                docs: [
                    { who: "Director", when: "December 8, 2025", text: "Closing the correspondence. Not one word on the five protections.", src: { u: "01KBZ9S95G2W5B44TTGT6HA69N" } },
                    { who: "Program manager", when: "“timeline of events”", text: "In the file that went to the police: “While Sam was able to express how these situations mad him feel.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Attachment — Timeline of Events (docx)", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Attachments-Timeline-of-Events.docx", from: "Oregon State Police" } },
                ],
            },
        ],
    },
    {
        id: "documenting",
        title: "What they punish is the documenting.",
        groups: [
            {
                docs: [
                    { who: "Program manager", when: "March 10, 2025", text: "The first call after the picnic table is about the recording, not what was said at it.", src: { href: "/sunlight/#03-10-25-the-admonition" } },
                    { who: "Program manager", when: "March 26, 2025", text: "Statewide exclusion for “the disparaging public comments made about staff.”", src: { u: "01JQA2WM60RX7MSJQ5QPFD8AR2" }, att: { label: "Robert Samuel White Letter", href: "/records/oprd/attachments/01jqa2wm60rx7msjq5qpfd8ar2-Robert-Samuel-White-Letter.pdf", page: 1, from: "Oregon State Parks" } },
                    { who: "Program manager", when: "“timeline of events”", text: "Of his emails and texts to staff: “not included as a reference, but should be noted for excessive communication.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Attachment — Timeline of Events (docx)", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Attachments-Timeline-of-Events.docx", from: "Oregon State Police" } },
                    { who: "Fusion center analyst", when: "March 11, 2026", text: "Documents his letters “for our internal awareness.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Electronic Communications", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Electronic-Communications.pdf", page: 6, from: "Oregon State Police" } },
                    { who: "Detective", when: "March 23, 2026", text: "“Suspect”: “concerning emails to former supervisors in parks department and publicly airing grievances.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "CAD Record SP26096984", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Dispatch-SP26096984-CAD.pdf", page: 1, from: "Oregon State Police" } },
                ],
            },
        ],
    },
    {
        id: "their-account",
        title: "Their account travels. The volunteer’s never does.",
        figure: "spread",
        groups: [
            {
                docs: [
                    { who: "Program manager", when: "January 2026", text: "The “timeline of events”, edited for ten months; the last edit five days after notice under 42 U.S.C. § 1983.", src: { href: "/sunlight/#01-06-26" } },
                    { who: "“timeline of events”", text: "A quotation dated to a day it could not have happened.", src: { href: "/sunlight/#02-12-25-the-fabricated-quotation" } },
                    { who: "Detective", when: "March 6, 2026", text: "“Based on the website nothing is standing out to me more than what Parks and Rec sent you.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Electronic Communications", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Electronic-Communications.pdf", page: 1, from: "Oregon State Police" } },
                ],
            },
            {
                tactic: "The press captain",
                words: "“Capt. Kennedy is requesting that a threat assessment be conducted asap”",
                wordsSrc: { u: PRODUCTION, t: "osp" },
                docs: [
                    { who: "A man at Oregon State Parks", when: "March 3, 2026", text: "To the press captain, copying the deputy director: “since he is now including the Governor as well as our Director.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 2, from: "Oregon State Police" } },
                    { who: "Sergeant, to a detective", when: "March 4, 2026", text: "The press captain’s request, passed on.", src: { u: PRODUCTION, t: "osp" } },
                    { who: "Press captain", text: "Two letters to him since. No answer.", src: { u: "01M3GWDQSGQ34YBJFFKTMJYAF5", t: "osp" } },
                ],
            },
            {
                tactic: "Sending someone",
                docs: [
                    { who: "Forest Service agent", when: "March 22, 2026", text: "His supervisor “was told not to advise WHITE that FS LE was inquiring about his whereabouts.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Electronic Communications", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Electronic-Communications-Electronic-Communications.pdf", page: 11, from: "Oregon State Police" } },
                    { who: "March 24, 2026", text: "Three men with guns at a locked federal gate.", src: { href: "/evidence/police" } },
                    { who: "Detective", when: "April 15, 2026", text: "“Case and assessment to be documented for information only at this time.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "Report SP26096984 — Threat Assessment", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-SP26096984.pdf", page: 4, from: "Oregon State Police" } },
                ],
            },
        ],
    },
    {
        id: "speed",
        title: "They move fast for each other, and not at all for the volunteer.",
        groups: [
            {
                docs: [
                    { who: "Oregon State Parks → state police", when: "March 3 → March 4, 2026", text: "Letters to the press captain; a threat assessment requested “asap” the next afternoon.", src: { u: PRODUCTION, t: "osp" } },
                    { who: "Park manager → program manager", when: "March 24 → March 26, 2025", text: "Dismissal; statewide exclusion two days later.", src: { u: "01JQA2WM60RX7MSJQ5QPFD8AR2" } },
                    { who: "Oregon State Police", when: "July 22 → July 27, 2026", text: "A petition to the Attorney General; five days later, “additional records, not in our system at the time of the original request.”", src: { u: "01KYJM548RW64XYRSCMJM9F6T9", t: "osp" } },
                ],
            },
            {
                tactic: "Silence",
                figure: "silence",
                docs: [],
            },
        ],
    },
    {
        id: "ladder",
        title: "The agency’s ladder has a top. The volunteer’s does not.",
        groups: [
            {
                docs: [
                    { who: "Oregon State Parks", when: "March 3, 2026", text: "Up and out in one email: “since he is now including the Governor as well as our Director.”", src: { u: PRODUCTION, t: "osp" }, att: { label: "From the RMS — Original email from State Parks, Honeyman State Park", href: "/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-Original-email-from-State-Parks-Honeyman-State-Park.pdf", page: 2, from: "Oregon State Police" } },
                    { who: "Director", when: "December 8, 2025", text: "“I don’t believe further correspondence will lead to the resolution you’re seeking.”", src: { u: "01KBZ9S95G2W5B44TTGT6HA69N" } },
                    { who: "Governor", text: "Silent.", src: { href: "/records/governor/" } },
                    { who: "Public Records Advocate", when: "October 13, 2026", text: "“does not have the authority to compel the governor’s office to take action.”", src: { u: "01M4VG3NVGMSVPH7TCES6W2SW8", t: "governor" } },
                ],
            },
        ],
    },
    {
        id: "gatekeepers",
        title: "The people who wrote about the volunteer decide whether the volunteer can see it.",
        groups: [
            {
                tactic: "No records",
                words: "“The Department has conducted a search which identified no records responsive to your request.”",
                wordsSrc: { u: "01KNAV7K70M1CKA57ZJW6M6X1R", t: "osp" },
                figure: "counts",
                docs: [
                    { who: "Oregon State Parks", when: "September 18, 2026", text: "“This is not a record we have,” of a version log, on the page that agrees to produce the version history of the same file.", src: { u: "01M2VEFTARQHQW029628GQA1Y7" }, att: { label: "The invoice", href: "/records/oprd/attachments/01m2veftarqhqw029628gqa1y7-invoice-public-records-Robert-Samuel-White-request-09112026.pdf", page: 1, from: "Oregon State Parks" } },
                ],
            },
            {
                tactic: "The fee",
                words: "“Please issue a check or money order”",
                wordsSrc: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" },
                figure: "prices",
                docs: [],
            },
            {
                tactic: "“Personal”",
                words: "“a personal, rather than a public interest”",
                wordsSrc: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" },
                figure: "waiver",
                docs: [],
            },
            {
                tactic: "The exemption with its condition cut out",
                docs: [
                    { who: "Oregon State Police", when: "April 13, August 11, September 28, 2026", text: "ORS 192.345(40), quoted three times, each time without the condition ORS 192.345 places on every subsection: “unless the public interest requires disclosure in the particular instance.”", src: { u: "01M3MJAZY0G31KFSSTRM6QBCNH", t: "osp" } },
                    { who: "Oregon State Police", when: "September 28, 2026", text: "The “OSP Hasty Form Robert White,” the plan for the visit to his door, withheld under ORS 192.345(23).", src: { u: "01M3MJAZY0G31KFSSTRM6QBCNH", t: "osp" }, att: { label: "The exemptions letter, REF# PR27478", href: "/records/osp/attachments/01m3mjazy0g31kfsstrm6qbcnh-PR27478-Exemptions.pdf", page: 1, from: "Oregon State Police" } },
                    { who: "Oregon State Police", when: "September 28, 2026", text: "His own DMV record, withheld from him under ORS 192.355(9).", src: { u: "01M3MJAZY0G31KFSSTRM6QBCNH", t: "osp" } },
                ],
            },
        ],
    },
    {
        id: "no-one",
        title: "No one owns the whole. That is the design.",
        groups: [
            {
                docs: [NO_STANDARDS],
            },
            {
                tactic: "No jurisdiction",
                words: "“We lack jurisdiction to consider your appeal and must respectfully dismiss your petition.”",
                wordsSrc: { u: "01M3AW7K3GZCPA4CD5YQ0FR2R6", t: "governor" },
                docs: [
                    { who: "Deputy Attorney General", when: "September 24, 2026", text: "Dismissed: “records in the custody of the Governor, an elected official.”", src: { u: "01M3AW7K3GZCPA4CD5YQ0FR2R6", t: "governor" }, att: { label: "Petition for Public Records Disclosure Order: dismissed", href: "/records/governor/attachments/01m3aw7k3gzcpa4cd5yq0fr2r6-PRO-White-Robert-Samuel-09-24-26.pdf", page: 1, from: "Department of Justice" } },
                    { who: "Deputy Attorney General", when: "October 1, 2026", text: "Dismissed: “the authority to review decisions made by elected officials.”", src: { u: "01M3WAH79RY4KVVHRYVY9T726S", t: "governor" }, att: { label: "Petition for Public Records Disclosure Order: dismissed", href: "/records/governor/attachments/01m3wah79ry4kvvhryvy9t726s-PRO-White-Robert-10-01-26.pdf", page: 1, from: "Department of Justice" } },
                    { who: "Administrative Services", text: "“not the custodian of the requested records,” of its own correspondence.", src: { u: "01KWWCTCW09VNDMKKGABWBSKHT", t: "das" } },
                    { who: "Public Records Advocate", when: "October 13, 2026", text: "“does not have the authority to compel the governor’s office to take action.”", src: { u: "01M4VG3NVGMSVPH7TCES6W2SW8", t: "governor" } },
                ],
            },
            {
                tactic: "One department",
                figure: "department",
                docs: [],
            },
        ],
    },
];

// ── The figures ──────────────────────────────────────────────────────────────

export const SPREAD_LANES = [
    "Oregon State Parks",
    "Oregon State Police",
    "FBI",
    "Department of Justice",
    "Forest Service",
    "The door",
];

/** day = days after March 1, 2026; from and to index SPREAD_LANES. */
export const SPREAD: { day: number; date: string; from: number; to: number; text: string; src: Src }[] = [
    { day: 2, date: "March 3", from: 0, to: 1, text: "A man at Oregon State Parks sends the letters to the press captain.", src: { u: PRODUCTION, t: "osp" } },
    { day: 3, date: "March 4", from: 1, to: 1, text: "“threat assessment be conducted asap”", src: { u: PRODUCTION, t: "osp" } },
    { day: 5, date: "March 6", from: 1, to: 2, text: "A detective sends his name to FBI personnel from an FBI account.", src: { u: PRODUCTION, t: "osp" } },
    { day: 5, date: "March 6", from: 0, to: 1, text: "The dismissal letter and the “timeline of events”, to the detective.", src: { u: PRODUCTION, t: "osp" } },
    { day: 10, date: "March 11", from: 0, to: 3, text: "The analyst writes that Oregon State Parks “shared the information about Mr. White’s activities with the fusion center.”", src: { u: PRODUCTION, t: "osp" } },
    { day: 10, date: "March 11", from: 3, to: 1, text: "The analyst documents his letters “for our internal awareness.”", src: { u: PRODUCTION, t: "osp" } },
    { day: 12, date: "March 13", from: 2, to: 1, text: "His DMV record and “ReportRobertWhite,” from an FBI account.", src: { u: PRODUCTION, t: "osp" } },
    { day: 21, date: "March 22", from: 4, to: 1, text: "His schedule, duties, vehicles, and a waypoint on where he lives.", src: { u: PRODUCTION, t: "osp" } },
    { day: 22, date: "March 23", from: 1, to: 1, text: "“Suspect”: “publicly airing grievances.”", src: { u: PRODUCTION, t: "osp" } },
    { day: 23, date: "March 24", from: 1, to: 5, text: "Three men with guns at a locked federal gate.", src: { href: "/evidence/police" } },
    { day: 45, date: "April 15", from: 1, to: 1, text: "“documented for information only at this time”", src: { u: PRODUCTION, t: "osp" } },
];

export const SILENCE: { who: string; from: string; to: string; days: number; text: string; src: Src }[] = [
    { who: "Office of the Governor", from: "November 18, 2025", to: "September 8, 2026", days: 294, text: "Thirteen letters. The first message back acknowledges a records request.", src: { u: "01KACE2348G8VG3XPB3BGW3F1N", t: "governor" } },
    { who: "Administrative Services", from: "July 10, 2026", to: "October 15, 2026", days: 97, text: "What search produced “no records.” No answer.", src: { u: "01KX6NGF001WN65P3N29Z0EBY5", t: "das" } },
    { who: "Oregon State Police", from: "April 14, 2026", to: "July 14, 2026", days: 91, text: "After the fee waiver form. One record released on July 14.", src: { u: "01KP6XKNP8Z56VTGA4MZGJG1N2", t: "osp" } },
    { who: "Oregon State Parks", from: "August 22, 2025", to: "November 20, 2025", days: 90, text: "The first reply at the addresses given. The answer had been posted to a portal on August 29.", src: { u: "01KAHTQ0ZG656XCF1G2Q9X15KY" } },
    { who: "Oregon State Parks", from: "September 18, 2026", to: "October 15, 2026", days: 27, text: "Both estimates disputed. The fee waiver undecided.", src: { u: "01M2VF2JXGC49DZZZDFKKMXS2J" } },
    { who: "Department of Justice", from: "September 20, 2026", to: "October 15, 2026", days: 25, text: "The fusion center analyst, asked what she documented. No answer.", src: { u: "01M30EACB8FXZB4SQ3TA1ED1N3", t: "osp" } },
    { who: "Department of Justice", from: "September 24, 2026", to: "October 15, 2026", days: 21, text: "Which categories carry the burden. Two letters back; neither answers.", src: { u: "01M3ARW6JRNP6YE36HCJ5A6CAC", t: "doj" } },
];

export const COUNTS: { who: string; count: string; lines: { text: string; src: Src }[] }[] = [
    {
        who: "Oregon State Police",
        count: "0 → 16",
        lines: [
            { text: "April 3, 2026: “no records responsive to your request.”", src: { u: "01KNAV7K70M1CKA57ZJW6M6X1R", t: "osp" } },
            { text: "September 3, 2026: sixteen files.", src: { u: PRODUCTION, t: "osp" } },
        ],
    },
    {
        who: "Administrative Services",
        count: "0",
        lines: [
            { text: "July 10, 2026: no records.", src: { u: "01KX6H9018F0C5Z247YFT52JME", t: "das" } },
            { text: "July 27, 2026: “reviewed its files”; no records.", src: { u: "01KYJXBM38DF8Q0GJ3KSKXGKXK", t: "das" } },
        ],
    },
    {
        who: "Department of Justice",
        count: "1,350",
        lines: [
            { text: "October 15, 2026: “identified 1,350 potentially responsive records.”", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
        ],
    },
];

export const PRICE_TOTAL = "$19,336.50 – $19,464.50";
export const PRICE_NOTE = "Seven estimates, four institutions, April 13 to October 15, 2026. Every one payable by mailed check before any work.";

export const PRICES: { who: string; amount: string; date: string; text: string; src: Src }[] = [
    { who: "Oregon State Police", amount: "$16,315", date: "August 11, 2026", text: "The fee letter template, its versions, and the letters issued on it.", src: { u: "01KZS0AEV8KA95QQZVJBCKBQEM", t: "osp" } },
    { who: "Oregon State Parks", amount: "$1,600 – $1,728", date: "September 18, 2026", text: "Every record concerning him held by the Director and the Deputy Director.", src: { u: "01M2VE25T0WZXS6PE4BXJK0693" } },
    { who: "Department of Justice", amount: "$599", date: "October 15, 2026", text: "1,350 potentially responsive records. “we do not accept credit cards or digital/electronic forms of payment.”", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
    { who: "Office of the Governor", amount: "$572.50", date: "September 22, 2026", text: "The office’s records concerning him.", src: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" } },
    { who: "Oregon State Police", amount: "$157.50", date: "August 11, 2026", text: "The file on the March 24 visit, after the answer that there were no records.", src: { u: "01KZS0AAY88AYPJ32PDEZABW03", t: "osp" } },
    { who: "Oregon State Parks", amount: "$80", date: "September 18, 2026", text: "Every version of the “timeline of events”.", src: { u: "01M2VEFTARQHQW029628GQA1Y7" } },
    { who: "Oregon State Police", amount: "$12.50", date: "April 13, 2026", text: "One dispatch record, by check or money order.", src: { u: "01KP4N822RW0N8WZ47YG8MG4W8", t: "osp" } },
];

export const WAIVER_FACTORS = [
    "Identity of the requester",
    "Purpose",
    "Character of the information",
    "Already public",
    "Ability to disseminate",
    "Reduction under ORS 192.324(5)",
];

/** What each letter says on each factor, in its words. null: the letter says nothing on it; `none` says what that silence is. */
export const WAIVER: { who: string; requested: string; outcome: string; text: string; says: (string | null)[]; none: string; src: Src }[] = [
    {
        who: "Office of the Governor", requested: "September 5, 2026", outcome: "Denied",
        text: "One sentence on each factor.",
        says: [
            "“The requester has demonstrated that this request relates to a personal, rather than a public interest.”",
            "“the use of records for a personal issue does not weigh in favor of the request being in the public interest”",
            "“the fee waiver request form does not explain how the release of records is in the public interest other than by stating a general interest in transparency”",
            "“The requester has not demonstrated that this factor weighs in favor of granting a fee waiver.” No reason given.",
            "“The requester has not demonstrated the ability to disseminate the public records but merely stated that he can post it on a website.”",
            null,
        ],
        none: "Not mentioned.",
        src: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" },
    },
    {
        who: "Department of Justice", requested: "September 23, 2026", outcome: "Denied",
        text: "No factor named. “the records you seek pertain primarily to you and your private interests.” “Given the burden on our agency.”",
        says: [null, null, null, null, null, null],
        none: "Not named.",
        src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" },
    },
    {
        who: "Oregon State Parks", requested: "April 14 and September 5, 2026", outcome: "Never decided",
        text: "Neither estimate grants, denies, or mentions the waiver.",
        says: [null, null, null, null, null, null],
        none: "Never decided.",
        src: { u: "01M2VE25T0WZXS6PE4BXJK0693" },
    },
    {
        who: "Oregon State Police", requested: "April 3, April 13, and July 29, 2026", outcome: "Never decided",
        text: "A statement of indigence answered with a form to print, sign, and mail.",
        says: [null, null, null, null, null, null],
        none: "Never answered.",
        src: { u: "01KP69QF9G4R2E53N9EZMQCXEM", t: "osp" },
    },
];

export const DEPARTMENT: { seat: string; text: string; words?: string; src: Src }[] = [
    { seat: "Counsel to the agency", text: "The agency’s deputy director routes the volunteer’s legal correspondence to Department of Justice counsel.", src: { u: "01KHFDVVV82TVEJPHPYAMAD3JH" } },
    { seat: "Counsel to the state police", text: "The state police withhold the department’s advice to them, citing ORS 40.225(2), “which covers attorney client privilege.”", src: { u: "01KZS0AEV8KA95QQZVJBCKBQEM", t: "osp" } },
    { seat: "The fusion center", text: "Its analyst writes that she is “documenting this activity.”", src: { u: PRODUCTION, t: "osp" } },
    { seat: "Judge of petitions", text: "Its Deputy Attorney General dismisses both petitions against the Governor’s office.", words: "we lack jurisdiction", src: { u: "01M3WAH79RY4KVVHRYVY9T726S", t: "governor" } },
    { seat: "Custodian of the file", text: "Its public records attorney counts 1,350 records on the volunteer, denies the waiver, and prices them at $599.", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
];

// ── Side by side ─────────────────────────────────────────────────────────────

export const INSTITUTIONS = [
    "Oregon State Parks",
    "Oregon State Police",
    "Office of the Governor",
    "Department of Justice",
    "Administrative Services",
] as const;

export type Cell = { text: string; src: Src } | null;

export const SIDE_BY_SIDE: { id: string; move: string; cells: [Cell, Cell, Cell, Cell, Cell] }[] = [
    {
        id: "silence",
        move: "Silence",
        cells: [
            { text: "Eighty-five days without a word after the August 22, 2025 request.", src: { u: "01KA45NDXG8VA4XB2YG7M8G0F5" } },
            { text: "The April 2, 2026 preservation notice, never acknowledged; three months of nothing after April 14.", src: { u: "01KN9Z85WRSKY8YYBJB8C5H0ZN", t: "osp" } },
            { text: "Thirteen letters from November 18, 2025 to September 3, 2026, none answered.", src: { u: "01KACE2348G8VG3XPB3BGW3F1N", t: "governor" } },
            { text: "Two letters to the analyst who wrote she was documenting him, unanswered.", src: { u: "01M30EACB8FXZB4SQ3TA1ED1N3", t: "osp" } },
            { text: "The request to describe the search behind the no-records answer, never answered.", src: { u: "01KX6NGF001WN65P3N29Z0EBY5", t: "das" } },
        ],
    },
    {
        id: "elsewhere",
        move: "The answer goes somewhere else",
        cells: [
            { text: "The August 29, 2025 answer posted to a portal he had no access to and was never told existed.", src: { u: "01KAHTQ0ZG656XCF1G2Q9X15KY" } },
            { text: "A statement of indigence answered with a form to print, complete by hand, sign, and mail.", src: { u: "01KP69QF9G4R2E53N9EZMQCXEM", t: "osp" } },
            { text: "Payment instructions asked for twice before they were sent.", src: { u: "01M3AJNQ0RYYQSV41172KZJYDZ", t: "governor" } },
            { text: "“Please issue a check or money order”; “we do not accept credit cards or digital/electronic forms of payment.”", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
            { text: "“Not the custodian”; referred to Oregon State Parks for its own correspondence.", src: { u: "01KWWCTCW09VNDMKKGABWBSKHT", t: "das" } },
        ],
    },
    {
        id: "no-records",
        move: "No records",
        cells: [
            { text: "“This is not a record we have,” of a version log, on the page that agrees to produce the version history of the same file.", src: { u: "01M2VEFTARQHQW029628GQA1Y7" } },
            { text: "April 3, 2026: no records. September 3, 2026: sixteen files.", src: { u: "01KNAV7K70M1CKA57ZJW6M6X1R", t: "osp" } },
            null,
            null,
            { text: "July 10 and July 27, 2026: “reviewed its files” and found none. The Department of Justice counts 1,350.", src: { u: "01KYJXBM38DF8Q0GJ3KSKXGKXK", t: "das" } },
        ],
    },
    {
        id: "price",
        move: "The fee",
        cells: [
            { text: "Forty to eighty hours per category in 2025; $1,600 to $1,728 for two officials’ own notes in 2026.", src: { u: "01M2VE25T0WZXS6PE4BXJK0693" } },
            { text: "$12.50 by check for one record; $157.50 for the file; $16,315 for a form letter.", src: { u: "01KZS0AEV8KA95QQZVJBCKBQEM", t: "osp" } },
            { text: "$572.50.", src: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" } },
            { text: "$599 for 1,350 records: thirteen hours of managerial time and one of paralegal time.", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
            null,
        ],
    },
    {
        id: "waiver",
        move: "“Personal”",
        cells: [
            { text: "Requested April 14 and September 5, 2026. Neither granted, denied, nor mentioned in any estimate since.", src: { u: "01M2VE25T0WZXS6PE4BXJK0693" } },
            { text: "Requested April 3, April 13, and July 29, 2026. Never answered on the public interest.", src: { u: "01KYR9AFWRGCR1B546XC2YK3EP", t: "osp" } },
            { text: "Denied, one sentence on each factor; on whether the records are already public, no reason at all. A reduction never mentioned.", src: { u: "01M35TPA3RXRP0HY3NM9JHDJ8F", t: "governor" } },
            { text: "Denied, naming no factor: “pertain primarily to you and your private interests.” A reduction never mentioned.", src: { u: "01M50S7NEG8CQV2R6TF6Y6BKXZ", t: "doj" } },
            null,
        ],
    },
    {
        id: "exemption",
        move: "The exemption with its condition cut out",
        cells: [
            null,
            { text: "ORS 192.345(40) quoted three times, April 13, August 11, and September 28, 2026, each time without the condition: “unless the public interest requires disclosure in the particular instance.”", src: { u: "01M3MJAZY0G31KFSSTRM6QBCNH", t: "osp" } },
            null,
            null,
            null,
        ],
    },
    {
        id: "narrow",
        move: "Narrow it",
        cells: [
            { text: "A telephone call six days after the request, asking him to narrow it. He asked for everything in writing. Eighty-five days without a word.", src: { u: "01K399TM7GG3FNAXSR4BX9TB1X" } },
            null,
            null,
            { text: "“very broad in scope.” Asked which of nine categories carry the burden: no answer in three letters.", src: { u: "01M3APMQF8Z8NRH088RB9N765Z", t: "doj" } },
            null,
        ],
    },
    {
        id: "jurisdiction",
        move: "No jurisdiction",
        cells: [
            null,
            null,
            { text: "Two petitions dismissed, citing ORS 192.427 and a sentence copied from a 2014 order, where no record had been denied.", src: { u: "01M3WAH79RY4KVVHRYVY9T726S", t: "governor" } },
            { text: "The office that wrote both dismissals.", src: { u: "01M3AW7K3GZCPA4CD5YQ0FR2R6", t: "governor" } },
            { text: "“not the custodian of the requested records,” of its own correspondence.", src: { u: "01KWWCTCW09VNDMKKGABWBSKHT", t: "das" } },
        ],
    },
    {
        id: "question",
        move: "The question, never answered",
        cells: [
            { text: "The basis of its hours, asked September 18 and 26, 2026.", src: { u: "01M2VF2JXGC49DZZZDFKKMXS2J" } },
            { text: "Five questions on the April 3 search; seven letters in July. None answered.", src: { u: "01KNAYFS6GDSY2F2K0AXZKAJ46", t: "osp" } },
            { text: "Thirteen letters.", src: { u: "01KACE2348G8VG3XPB3BGW3F1N", t: "governor" } },
            { text: "Which categories carry the burden. “It appears that we need additional time.”", src: { u: "01M4XTMS38EGWH974M4GQDDG2X", t: "doj" } },
            { text: "What search produced “no records.”", src: { u: "01KX6NGF001WN65P3N29Z0EBY5", t: "das" } },
        ],
    },
];
