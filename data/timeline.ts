// data/timeline.ts
//
// The timeline, as data. One list feeds two surfaces: the /timeline page
// renders every section and entry; the homepage walker steps through the
// entries marked `major`. Bodies are segment arrays so both surfaces
// render the same text with working links and role-name spans.
//
// The entries follow the published rules at /#ai. Institutions appear as
// what they did and what they wrote; their words are quoted exactly or
// not at all.
//
// A claim in the timeline carries the same citation as a claim anywhere
// else in this archive, and it carries the same mark: blue for a document,
// emerald for a second of a recording, orange for their own file, violet
// for a photograph, rose for ground, indigo for a walk, sky for a period.
// A segment with a `href` is a link to a page. A segment with a source is
// a citation.

import type { RegisterSlug } from "@/components/Cite";

export type TimelineSegment =
    | string
    | { t: string; href: string; external?: boolean }
    | { person: string; label?: string }
    /** A document in the registers. */
    | { doc: string; thread: RegisterSlug; t: string }
    /** A second of a recording. Omit `t` for a bare timestamp citation. */
    | { rec: string; at: string | number; t?: string }
    /** An entry of their own file, by its sunlight anchor. */
    | { sun: string; t: string }
    /** A photograph, by its signal and photo ULIDs. */
    | { photo: string; signal: string; t: string; caption?: string; taken?: string }
    /** Ground, by the name the realm holds it under. */
    | { place: string; t?: string }
    /** A recorded walk. */
    | { trace: string; t: string }
    /** A period of the record, with its analysis and reflections. */
    | { cluster: string; t: string };

export interface TimelineEntry {
    d: string;          // ISO date for ordering
    date: string;       // displayed date heading
    title?: string;     // short label, required on major entries
    major?: boolean;    // walked on the homepage
    body: TimelineSegment[];
}

export interface TimelineSection {
    heading: string;
    entries: TimelineEntry[];
}

// Recordings cited more than once, by ULID, so a citation reads as the
// moment it points at rather than as an identifier.
const PICNIC = "01JNK2TKG01JTERAMB7J6AKPK1";
const DISMISSAL = "01JQ51HAK8QR862VWGK0RKTFXN";
const EXPULSION = "01JQ59R3S0SHQ18E23BC0BM696";

export const TIMELINE: TimelineSection[] = [
    {
        heading: "February — March 2025.",
        entries: [
            {
                d: "2025-02-09", date: "February 9, 2025",
                body: [
                    { t: "I raise the park supervisor's response", href: "/evidence/origin" },
                    " to operational questions about power outage protocols in ",
                    { doc: "01JKMXJCF8D4M3JQHEH9G94SBP", thread: "oprd", t: "a follow-up email the same day" },
                    ". ",
                    { t: "The park manager speaks to me alone", href: "/evidence/escalation" },
                    ", listing first-week mistakes. I try to reset. Their file logs the day as ",
                    { sun: "02-09-25-the-power-outage", t: "“Sam then emails Ranger Supervisor [Park Supervisor] and Ranger [Volunteer Services Lead] expressing [Park Supervisor] made him feel small/not appreciated in her texts.”" },
                ],
            },
            {
                d: "2025-03-02", date: "March 2, 2025",
                body: [
                    { t: "I document the pattern in my working relationships", href: "/evidence/trust" },
                    " in the ",
                    { doc: "01JNBNSRN04NEM4MEZJG40Q3N5", thread: "oprd", t: "“Trust” email" },
                    ". Their file quotes four sentences from the end of it and nothing else: ",
                    { sun: "03-02-25-the-trust-email", t: "“You will ensure that my contributions are recognized appropriately in your system. I will not allow the dysfunction here to interfere with my larger trajectory. If there is any pushback on this, understand that I am fully prepared for it.”" },
                ],
            },
            {
                d: "2025-03-05", date: "March 5, 2025", major: true,
                title: "The picnic table.",
                body: [
                    { rec: PICNIC, at: "0:00", t: "The park manager and the park supervisor hold me at a picnic table for sixty-two minutes" },
                    ". I record it in full. Their file logs the meeting as held ",
                    { sun: "03-05-25-the-meeting", t: "“to set clear expectations for behavior and actions needed from Sam to continue being a park host.”" },
                    " On the recording: ",
                    { rec: PICNIC, at: "15:45", t: "a handwritten sheet and no emails at the table" },
                    ", ",
                    { rec: PICNIC, at: "4:39", t: "“You don’t have to agree with it”" },
                    ", ",
                    { rec: PICNIC, at: "22:40", t: "fifteen years in the agency, the disciplinary processes, HR" },
                    ", ",
                    { rec: PICNIC, at: "23:17", t: "“chew glass and swallow it”" },
                    ", ",
                    { rec: PICNIC, at: "44:42", t: "one day and one text message counted as two incidents and called a pattern" },
                    ", ",
                    { rec: PICNIC, at: "50:10", t: "“I may not be able to help you with that”" },
                    ". ",
                    { t: "Chapter Six", href: "/testimony/#c6" },
                    " of the testimony is this meeting.",
                ],
            },
            {
                d: "2025-03-10", date: "March 10, 2025",
                body: [
                    "The ", { person: "program manager" },
                    " calls about the March 5 recording and tells me I was “acting as an agent of the state.” In a second call the same day: “get through my time.” Their file words it as ",
                    { sun: "03-10-25-the-admonition", t: "“as a volunteer, Sam is an agent of the state and as such is held to a higher standard, so... he cannot record conversations without informing the other parties present.”" },
                ],
            },
            {
                d: "2025-03-18", date: "March 18, 2025",
                body: [
                    "While I clean yurts alone during a regional event, ",
                    { t: "an unidentified man approaches me", href: "/evidence/surveillance" },
                    " and asks how leadership treats me. I ",
                    { doc: "01JPNSRRZ0358ZTTN8NMXHESYP", thread: "oprd", t: "document the encounter with the park supervisor the same day" },
                    ". ",
                    { doc: "01JPNX0J88PQE161MCS09FZA6C", thread: "oprd", t: "Her explanation" },
                    ": I.T. staff updating site photos. No photos were ever produced.",
                ],
            },
            {
                d: "2025-03-24", date: "March 24, 2025", major: true,
                title: "The dismissal.",
                body: [
                    { t: "The park manager dismisses me by phone", href: "/evidence/dismissal" },
                    ", six days before my scheduled completion, with ",
                    { rec: DISMISSAL, at: "16:27", t: "twenty-four hours to vacate the park where I live" },
                    ". The stated reason: a lost journal. An hour later he collects the keys at my RV and ",
                    { rec: DISMISSAL, at: 738, t: "states on camera that no formal documentation exists" },
                    ". Their file logs the call as ",
                    { sun: "03-24-25-the-dismissal", t: "“Sam kept talking over [Park Manager], and as the conversation was no longer productive...”" },
                ],
            },
            {
                d: "2025-03-25", date: "March 25, 2025",
                body: [
                    "The ", { person: "program manager" }, " ",
                    { t: "calls", href: "/evidence/expulsion" },
                    ". I record the call. She opens by telling me the dismissal is ",
                    { rec: EXPULSION, at: "2:38", t: "“still moving forward” and “that’s not going to be overturned”" },
                    ".",
                ],
            },
            {
                d: "2025-03-26", date: "March 26, 2025", major: true,
                title: "The statewide exclusion.",
                body: [
                    "I send ",
                    { doc: "01JQ8HA5JRRCWX12W7B52YRVAT", thread: "oprd", t: "a detailed letter to the program manager" },
                    ". Hours later OPRD ",
                    { doc: "01JQA2WM60RX7MSJQ5QPFD8AR2", thread: "oprd", t: "excludes me permanently from every state parks volunteer program" },
                    ", citing “the public comments made about staff.” ",
                    { t: "The call the letter answers", href: "/evidence/expulsion" },
                    " is in the archive.",
                ],
            },
        ],
    },
    {
        heading: "May — December 2025.",
        entries: [
            {
                d: "2025-05-26", date: "May 26, 2025",
                body: [
                    "I name the March 18 encounter ",
                    { t: "directly to the program manager", href: "/evidence/surveillance" },
                    " in ",
                    { doc: "01JW7QYBXRQ096VC43S9EQJC94", thread: "oprd", t: "“For the Record - March 20 Field Encounter”" },
                    ", and what the email thread shows. No response.",
                ],
            },
            {
                d: "2025-08-15", date: "August 15, 2025",
                body: [
                    "I raise the March 18 encounter ",
                    { t: "with Director Lisa Sumption", href: "/evidence/surveillance" },
                    " in ",
                    { doc: "01K2QNT3G0QP8S42VBMG49CD7Y", thread: "oprd", t: "“The Setup You Now Own”" },
                    " and ask three questions: do the photos exist, were they published, was the encounter logged. No response.",
                ],
            },
            {
                d: "2025-08-22", date: "August 22, 2025", major: true,
                title: "The first records request.",
                body: [
                    "I submit ",
                    { doc: "01K399TM7GG3FNAXSR4BX9TB1X", thread: "oprd", t: "a comprehensive public records request" },
                    " carrying a mailing address and an email address. On August 28 the institution calls to narrow the scope; I decline and ask for everything in writing. Nothing arrives at either address.",
                ],
            },
            {
                d: "2025-08-24", date: "August 24, 2025", major: true,
                title: "The open letter.",
                body: [
                    "I send ",
                    { doc: "01K3FDT5P09S9N9QSZYWS9KN7A", thread: "oprd", t: "the open letter to Director Lisa Sumption" },
                    ": five protections for every volunteer, none for myself. ",
                    { doc: "01K3HPAXBG8F4QZG4DJNDY5QY8", thread: "oprd", t: "She replies within a day" },
                    " that concerns will be reviewed “through the appropriate channels within the Department.” She never identifies the channel, the person, or the standard.",
                ],
            },
            {
                d: "2025-11-15", date: "November 15, 2025",
                body: [
                    "I issue ",
                    { doc: "01KA45NDXG8VA4XB2YG7M8G0F5", thread: "oprd", t: "notice of violation" },
                    ": the August 22 request stands unanswered.",
                ],
            },
            {
                d: "2025-11-18", date: "November 18, 2025", major: true,
                title: "The complaint to the Governor.",
                body: [
                    "I send ",
                    { doc: "01KACE2348G8VG3XPB3BGW3F1N", thread: "governor", t: "a formal complaint" },
                    " to Governor Tina Kotek's office.",
                ],
            },
            {
                d: "2025-11-20", date: "November 20, 2025", major: true,
                title: "“The response we provided.”",
                body: [
                    { doc: "01KAHTQ0ZG656XCF1G2Q9X15KY", thread: "oprd", t: "Katie Gauthier writes" },
                    ": “Below is an image of the response we provided to you on August 29, 2025.” Nothing had been sent to either address on the request. The response sat in a portal I had no access to, carrying estimates in the tens of thousands of dollars. I withdraw the request.",
                ],
            },
            {
                d: "2025-11-25", date: "November 25, 2025",
                body: [
                    { doc: "01KAY09GQ05E6NJGGSARDNA1AC", thread: "oprd", t: "The records platform writes to me for the first time" },
                    ": request #25-42, closed. No message had ever come from that system, including on August 29 when the institution says it answered there. ",
                    { doc: "01KAY3YPQ02V2AKRNAAJ3RZAXA", thread: "oprd", t: "I write the same morning" },
                    " that I will ask CivicPlus to audit how my address entered it.",
                ],
            },
            {
                d: "2025-12-08", date: "December 7 — 8, 2025", major: true,
                title: "The archive begins.",
                body: [
                    "I send ",
                    { doc: "01KBY6KNMGEGV4MZ98QEK6R8JP", thread: "oprd", t: "a final message to Director Sumption" },
                    " with the surveillance documentation and video. ",
                    { doc: "01KBZ9S95G2W5B44TTGT6HA69N", thread: "oprd", t: "She closes the correspondence on December 8" },
                    ". The same day I register oprdvolunteerabuse.org with my last $7 and begin building this archive.",
                ],
            },
            {
                d: "2025-12-10", date: "December 10, 2025",
                body: [
                    "I write to the ", { person: "volunteer services lead" },
                    ", copying the ", { person: "park supervisor" },
                    ", the ", { person: "park manager" },
                    ", the ", { person: "program manager" },
                    ", and Director Sumption. ",
                    { t: "The letter", href: "/evidence/trust" }, ".",
                ],
            },
        ],
    },
    {
        heading: "January — March 2026.",
        entries: [
            {
                d: "2026-01-16", date: "January 16, 2026", major: true,
                title: "The formal notice.",
                body: [
                    "I serve ",
                    { doc: "01KF4NTAT878BQNBK345SZCJQS", thread: "oprd", t: "formal notice" },
                    " on the program manager: written reversal of the expulsion, an independent investigation, and acknowledgment. Deadline: March 26, 2026, one year from the expulsion.",
                ],
            },
            {
                d: "2026-02-09", date: "February 9, 2026",
                body: [
                    "I send ",
                    { doc: "01KH32THCG9NNRQCG0B07353AR", thread: "oprd", t: "the letter titled “Harm”" },
                    " to the program manager.",
                ],
            },
            {
                d: "2026-02-13", date: "February 13 — 14, 2026",
                body: [
                    "Deputy Director J.R. Collier ",
                    { doc: "01KHFDVVV82TVEJPHPYAMAD3JH", thread: "oprd", t: "directs all correspondence away from named staff" },
                    " and writes that legal correspondence will go to Department of Justice counsel. I answer the same day, and on February 14 send the full declaration to Collier, every named individual, and Governor Kotek.",
                ],
            },
            {
                d: "2026-02-25", date: "Late February 2026",
                body: [
                    { t: "I encounter the same man from March 18", href: "/evidence/surveillance" },
                    " on a Forest Service trail on my regular route. He is local. He drives a state vehicle with no agency markings. He has not returned. On March 2 I document the encounter to all named individuals, and on March 11 I send the final correspondence.",
                ],
            },
        ],
    },
    {
        heading: "March 2026.",
        entries: [
            {
                d: "2026-03-03", date: "March 3, 2026", major: true,
                title: "The referral to the police.",
                body: [
                    "OPRD Emergency Manager Jamen Lee ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "sends my letters to Captain Kyle Kennedy, OSP Government and Media Relations" },
                    ", copying Deputy Director J.R. Collier: “Fyi — sharing for situational awareness since he is now including the Governor as well as our Director.” No crime alleged, no threat quoted. The entire chain below was unknown to me until OSP produced the file on September 3, 2026.",
                ],
            },
            {
                d: "2026-03-04", date: "March 4, 2026",
                body: [
                    "The dispatch record reads “Capt. Kennedy is requesting that a threat assessment be conducted asap.” Kennedy ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "forwards Lee's email to Lieutenant Haley McQuillan" },
                    ", Criminal Investigations Division: “Would you take a look at the info below?”",
                ],
            },
            {
                d: "2026-03-06", date: "March 6, 2026",
                body: [
                    "Lieutenant McQuillan ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "routes it to Detective Jake Hyde" },
                    ", OSP Portland, a Task Force Officer with the Portland FBI Joint Terrorism Task Force: “some concerns in the Florence area.” Before noon, Hyde forwards my name from his FBI account to FBI personnel: “Name is Robert Samuel White out of Florence Oregon. But I don't have a DOB.” At 1:14 PM Hyde reports back: “Based on the website nothing is standing out to me more than what Parks and Rec sent you. Sounds like this person does have a grievance with the former employer.” That afternoon Lee sends Hyde the dismissal letter, the Timeline of Events, and a February 2026 email chain, and offers more.",
                ],
            },
            {
                d: "2026-03-10", date: "March 10, 2026",
                body: [
                    "Hyde ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "forwards the OPRD documents to Detective Jerred Nelson" },
                    ", Major Crimes Section: “FYI for the guy in Florence. Give me a call later this week and we can talk about heading down there.”",
                ],
            },
            {
                d: "2026-03-11", date: "March 11, 2026",
                body: [
                    "Dianne Greenlee, Criminal Intelligence Analyst at the Oregon TITAN Fusion Center, Oregon Department of Justice, ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "writes to Hyde" },
                    ": “I'm documenting this activity for our internal awareness since Mr. White's actions border on harassment due to the volume of emails that he has forwarded to OPRD staff over the last year.” Hyde answers: “Yes, that is correct. Just OSP it is not an FBI case.” Her records sit in systems I cannot see or correct.",
                ],
            },
            {
                d: "2026-03-13", date: "March 13, 2026",
                body: [
                    "From his FBI account, Hyde sends Nelson ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "my DMV record and a report" },
                    ": “WHITE,ROBERT SAMUEL DMV.pdf” and “ReportRobertWhite.pdf.”",
                ],
            },
            {
                d: "2026-03-22", date: "March 17 — 22, 2026",
                body: [
                    "Hyde works with Forest Service Special Agent Matthew Oliver to locate me. On March 22 Oliver ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "delivers the reconnaissance" },
                    ": my volunteer schedule, my duties, my RV and Jeep, two screenshots from the onX Hunt hunting application with a waypoint pinned on the work center where I live, the gate and its lock, and the note that my Forest Service supervisor “was told not to advise WHITE that FS LE was inquiring about his whereabouts.”",
                ],
            },
            {
                d: "2026-03-23", date: "March 23, 2026",
                body: [
                    { rec: "01KME4GSG02JSTJ45Z1QYH90JD", at: 0, t: "The eve of the anniversary of the dismissal" },
                    ". ",
                    { t: "Launch of Autonomy Realms", href: "https://autonomyrealms.com", external: true },
                    ", a sovereign platform with Atlas mode, geotagged signals, and traces mapped to ",
                    { t: "the exact ground where events occurred", href: "https://rswfire.com/?mode=atlas&center=43.93035%2C-124.10868&zoom=15", external: true },
                    ". The anniversary email goes out with a map screenshot showing signals linked to their park.",
                ],
            },
            {
                d: "2026-03-23", date: "March 23, 2026", major: true,
                title: "“Suspect.”",
                body: [
                    "At 2:21 PM Detective Nelson ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "opens the dispatch event naming me “Suspect”" },
                    ", with the basis: sending “concerning emails to former supervisors in parks department and publicly airing grievances.” At 2:33 PM he sends Sergeant Sean Henderson the “Hasty Plan for Robert White knock and talk.”",
                ],
            },
            {
                d: "2026-03-24", date: "March 24, 2026", major: true,
                title: "Three men at the door.",
                body: [
                    "One year after the dismissal. ",
                    { t: "Three men with guns arrive at a locked federal gate", href: "/evidence/police" },
                    " on federal land where I serve as a volunteer caretaker. They state they are concerned about what I am posting online. I decline to speak without an attorney and shut the door. ",
                    { rec: "01KMFMJW809QNR8PVTXT8HAAG7", at: 0, t: "I record them leaving" },
                    ". Twenty minutes later a man identifying himself as Forest Service calls and tells me this isn't going away. He is later confirmed as Special Agent Matthew Oliver, Law Enforcement & Investigations.",
                ],
            },
            {
                d: "2026-03-27", date: "March 27, 2026", major: true,
                title: "The transfer to a deputy.",
                body: [
                    "Three days after I was told at my door that I was not in trouble, ",
                    { doc: "01M23SJK7GFQVZK7TBD2XQSVTG", thread: "usfs", t: "Special Agent Oliver emails a Lane County deputy" },
                    ": my name, date of birth, driver's license number, residence, work schedule, duties, correspondence, and text messages, with the words “multiple veil threats” and a commitment to “keep you up to date.” The same day I file the ",
                    { t: "Siuslaw National Forest incident report", href: "/evidence/police" },
                    " on the March 24 visit, with the license plate of one vehicle: 731 QRV.",
                ],
            },
            {
                d: "2026-03-30", date: "March 30, 2026",
                body: [
                    { doc: "01KMZX2130HZT1EXN359G5EKFJ", thread: "usfs", t: "Patrol Captain Felicia Sloan confirms Special Agent Oliver is employed by USFS Law Enforcement & Investigations" },
                    " and does not need to coordinate with local law enforcement. Asked who authorized the visit and its purpose, ",
                    { doc: "01KMZZ4ZNGEDGDCH6EQ3E3644G", thread: "usfs", t: "she directs me to FOIA" },
                    ".",
                ],
            },
        ],
    },
    {
        heading: "April — June 2026.",
        entries: [
            {
                d: "2026-04-02", date: "April 2, 2026",
                body: [
                    "I issue a litigation preservation notice to Oregon State Police and file a records request with OPRD. ",
                    { doc: "01KP78BZ8RTQ3SJ3RXKJ4M1GGT", thread: "oprd", t: "The April 10 estimate" },
                    " prices the volunteer program categories at forty to eighty hours each. ",
                    { doc: "01KP79KZHGGJ2XH73FXBDJGG2G", thread: "oprd", t: "I dispute it" },
                    ".",
                ],
            },
            {
                d: "2026-04-03", date: "April 3, 2026", major: true,
                title: "“No records.”",
                body: [
                    "I file ",
                    { doc: "01KNABETW098C3GP2NN7D3JR33", thread: "osp", t: "a public records request with Oregon State Police" },
                    " for all records related to the March 24 visit, including all coordination with Special Agent Oliver or any OPRD employee. ",
                    { doc: "01KNAV7K70M1CKA57ZJW6M6X1R", thread: "osp", t: "OSP answers the same day" },
                    ": a search “identified no records responsive to your request.” ",
                    { t: "The chaptered record", href: "/evidence/police" },
                    " is in the archive.",
                ],
            },
            {
                d: "2026-04-03", date: "April 3, 2026",
                body: [
                    "While walking the Waxmyrtle Trail in the Oregon Dunes, ",
                    { t: "the displacement framework is named", href: "/displacement" },
                    ": one year after the first displacement, one week after the second, when they brought police to my door. The weapon that connects all nine stages of documented institutional conduct is identified, named, and ",
                    { rec: "01KN9KDSG0H3W0WZ9GBCJDJMG5", at: 0, t: "recorded on the trail" },
                    ". The archive is restructured around it, and ",
                    { t: "a resource page for volunteers", href: "/resources/volunteers" },
                    " gives the pattern a name for those still inside it.",
                ],
            },
            {
                d: "2026-04-13", date: "April 13, 2026",
                body: [
                    "Ten days after the “no records” answer, ",
                    { t: "a CAD dispatch record for the March 24 visit", href: "/evidence/police" },
                    " is printed inside OSP's Central Records Section. ",
                    { doc: "01KP4N822RW0N8WZ47YG8MG4W8", thread: "osp", t: "The fee letter" },
                    " lists one located record, “CAD, $12.50,” and elsewhere recites the body camera statute over no named record. The CAD is then withheld for three months behind the fee. The same day I ",
                    { doc: "01KP4QJMSRND2R8EMVMP6X8XTZ", thread: "osp", t: "request a fee waiver" },
                    " and ",
                    { doc: "01KP4R7HR0TXFFE9GJTEGX8AMT", thread: "osp", t: "supplement it" },
                    "; on April 14 I ",
                    { doc: "01KP6XKNP8Z56VTGA4MZGJG1N2", thread: "osp", t: "answer the waiver form" },
                    ".",
                ],
            },
            {
                d: "2026-04-15", date: "April 15, 2026", major: true,
                title: "“No evidence of any crimes.”",
                body: [
                    "Two days after ",
                    { doc: "01KP4QJMSRND2R8EMVMP6X8XTZ", thread: "osp", t: "the fee waiver requests" },
                    ", Detective Nelson ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "closes the threat assessment" },
                    ": “there is no evidence White has committed any crimes.” The file remains, “documented for information only.”",
                ],
            },
            {
                d: "2026-05-04", date: "May 4, 2026",
                body: [
                    "I send ",
                    { t: "A Final Statement to the Oregon Parks and Recreation Department", href: "/final-statement-to-oprd.pdf" },
                    ". Every actor named in sequence, and what each did. I close the chapter on my own terms.",
                ],
            },
            {
                d: "2026-06-30", date: "June 30, 2026",
                body: [
                    "A Lane County deputy jokes to my face about access to a high-powered rifle stored overnight at the work center. I turn my camera on, address it, and publish the video the same afternoon. On September 3 I learn the deputy's office had been holding Special Agent Oliver's March 27 email for three months.",
                ],
            },
        ],
    },
    {
        heading: "July — August 2026.",
        entries: [
            {
                d: "2026-07-06", date: "July 6, 2026",
                body: [
                    "The Department of Administrative Services ",
                    { doc: "01KWWCTCW09VNDMKKGABWBSKHT", thread: "das", t: "closes my records request R000879" },
                    ", stating it “is not the custodian of the requested records,” and refers me to OPRD. The request sought the institution's own communications.",
                ],
            },
            {
                d: "2026-07-14", date: "July 14, 2026",
                body: [
                    "Oregon State Police ",
                    { doc: "01KXGXZNCREXD3GRQ2PJ4MGAP0", thread: "osp", t: "release CAD record SP26097765" },
                    ". No call type, priority low, officer initiated, no action taken; criminal unit; role “Other”; comment “FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE”; primary unit Trooper Jake Hyde. The same day I send ",
                    { doc: "01KXHJEEGRMX497NRT0E5DBY7G", thread: "osp", t: "six questions" },
                    " to the responding unit's supervisor.",
                ],
            },
            {
                d: "2026-07-21", date: "July 21, 2026",
                body: [
                    "The four named staff are identified by role rather than by name throughout the archive. ",
                    { t: "The reasoning, stated publicly", href: "https://x.com/rswfire/status/2079630338322760159", external: true },
                    ".",
                ],
            },
            {
                d: "2026-07-22", date: "July 22, 2026", major: true,
                title: "The first petition.",
                body: [
                    { doc: "01KY60646RADM37YNZ40W07Z47", thread: "osp", t: "Petition for Public Records Order filed with the Oregon Attorney General" },
                    " under ORS 192.411, concerning PR27478 and CAD event SP26097765. The petition and twenty-five exhibits published in full.",
                ],
            },
            {
                d: "2026-07-24", date: "July 24, 2026", major: true,
                title: "The District Ranger's statement.",
                body: [
                    { doc: "01KYAG3J7GMK1RV66MTGQ2VFN8", thread: "usfs", t: "The District Ranger" },
                    ", U.S. Forest Service, writes that the Forest Service did not initiate the March 24 interview and only unlocked the gate for OSP, which “does not have keys to Forest Service gates.” ",
                    { doc: "01KYAPE3NRCKQVEVS41K20GJA7", thread: "osp", t: "Filed with the Attorney General the same day" },
                    ".",
                ],
            },
            {
                d: "2026-07-27", date: "July 27, 2026", major: true,
                title: "The reopening.",
                body: [
                    "Oregon State Police ",
                    { t: "reopens PR27478", href: "/evidence/police" },
                    ", citing a “thorough review” that found “additional records, not in our system at the time of the original request.” Everything later produced had been in its systems since March and April. The same day the Department of Administrative Services ",
                    { doc: "01KYJZ4KB0YJ0DCQ1D70KMHA52", thread: "das", t: "answers R000885" },
                    ": thirty-one requests closed on a not-the-custodian basis since 2024, with no written standard for the determination.",
                ],
            },
            {
                d: "2026-07-29", date: "July 29, 2026", major: true,
                title: "The first order.",
                body: [
                    { doc: "01KYR0GMBRR83WH7FTFC90Y6DB", thread: "osp", t: "The Attorney General order, DOJ File No. 257001-GA0140-26" },
                    ", decides the petition on an exemption claim Oregon State Police never made to me, and calls the remainder moot. The same day I ",
                    { doc: "01KYR9AFWRGCR1B546XC2YK3EP", thread: "osp", t: "request the recorded video of the March 24 contact" },
                    ".",
                ],
            },
            {
                d: "2026-07-30", date: "July 30, 2026",
                body: [
                    "Holly Bolton, OSP, answers the order by ",
                    { doc: "01KYSZGF6GK4HMAJ6KRCDBAY46", thread: "osp", t: "providing the fee letter as the exemption assertion" },
                    ". David Pitcher, Department of Justice, ",
                    { doc: "01KYSZQ430YWS431STFM7QVWAD", thread: "osp", t: "identifies page 20 of my own exhibits as the source of the exemption reference" },
                    ". I answer with ",
                    { doc: "01KYT3WXB0SQYDSBMW57E9RFSA", thread: "osp", t: "the checklist with one item" },
                    " and ",
                    { doc: "01KYTC9F30N5YX1ZNDM5A0563G", thread: "osp", t: "a records request on the fee letter itself" },
                    ", acknowledged as PR36445.",
                ],
            },
            {
                d: "2026-08-04", date: "August 4, 2026",
                body: [
                    { doc: "01KZ7BFZ2090R3D63P7YXCT68M", thread: "das", t: "The Attorney General order, DOJ File No. 107062-GA0144-26" },
                    ", denies the petition on R000879. The order states a response is complete when a public body notifies the requester that it is not the custodian of the records requested.",
                ],
            },
            {
                d: "2026-08-11", date: "August 11, 2026", major: true,
                title: "$16,315.",
                body: [
                    "Micah Hubbard, OSP Central Records, identifies the PR27478 records and ",
                    { doc: "01KZS0AAY88AYPJ32PDEZABW03", thread: "osp", t: "names a fee" },
                    ". The same day he prices PR36445, the request about the fee letter itself, at ",
                    { doc: "01KZS0AEV8KA95QQZVJBCKBQEM", thread: "osp", t: "$16,315: approximately 27,000 letters, 650 hours, release 130 weeks after payment" },
                    ".",
                ],
            },
            {
                d: "2026-08-29", date: "August 14 — 29, 2026",
                body: [
                    "I pay the PR27478 fee by money order; ",
                    { doc: "01M17CQRV0SHYB8VS0NYPP06B0", thread: "osp", t: "USPS resolves the delivery on August 29" },
                    ".",
                ],
            },
        ],
    },
    {
        heading: "September 2026.",
        entries: [
            {
                d: "2026-09-01", date: "September 1, 2026",
                body: [
                    "Chelsea Bradley, OSP Risk, ",
                    { doc: "01M1EVZDA0BRTQTJ9JET9VCS8Y", thread: "osp", t: "confirms preservation of the records, except item seven" },
                    ", which she calls beyond the scope of the process. I answer that ",
                    { doc: "01M1EWKHV0WY1DBBNKH2RZVC0F", thread: "osp", t: "item seven is a record" },
                    ". She ", { doc: "01M1EXBBJ0PB7VJXJA7FPVT6NZ", thread: "osp", t: "forwards it to the CJIS team" }, ".",
                ],
            },
            {
                d: "2026-09-03", date: "September 3, 2026", major: true,
                title: "The production.",
                body: [
                    "Micah Hubbard ",
                    { doc: "01M1M4WF78XJPEJJ48D1JZ4SJ8", thread: "osp", t: "produces the PR27478 file" },
                    ". I publish it in full the same day: the first sight of the March 3 email, the “asap” order, the task force distribution, the March 11 Department of Justice characterization, the “Suspect” dispatch event, and the “Hasty Plan.” The same day I ",
                    { doc: "01M1M6H4RR51K8RXNASW5AB9RC", thread: "osp", t: "state the production is not sufficient" },
                    ", serve ",
                    { doc: "01M1N523F0WNM96C18DTDMK0NP", thread: "osp", t: "formal notice of tort claim" },
                    ", and write to the Governor: ",
                    { doc: "01M1MEQP4GVGV0ED9D555043P2", thread: "governor", t: "your office was the reason" },
                    ".",
                ],
            },
            {
                d: "2026-09-04", date: "September 4, 2026",
                body: [
                    "DAS Risk Management assigns ",
                    { doc: "01M1PJ5NSR125CJQ606QX5ZXM1", thread: "osp", t: "claim number P195403 and an adjuster" },
                    ".",
                ],
            },
            {
                d: "2026-09-05", date: "September 5 — 7, 2026",
                body: [
                    "I file ",
                    { doc: "01M1SQ1ZF04E04FHP6PEEXPVH2", thread: "governor", t: "a records request with the Office of the Governor" },
                    " and ",
                    { doc: "01M1SWHHM8QSPN71SK56Q97F8C", thread: "oprd", t: "one with OPRD for the Director's and Deputy Director's records" },
                    ", write to OPRD that ",
                    { doc: "01M1SFPP5GMVGVEX6CR6G74FK1", thread: "oprd", t: "the record says you lied" },
                    ", and send the Director ",
                    { doc: "01M1T0PHFRWQNERYJENF7MVRZV", thread: "oprd", t: "The choices are still yours" },
                    "; ",
                    { doc: "01M1YH9QSR0JAGXR04DGFYV7VD", thread: "oprd", t: "the final version goes on September 7" },
                    ": tell the truth, withdraw the bar, build a real process. I also write to ",
                    { doc: "01M1S53NH8C3YG644R0W1TG0DS", thread: "oprd", t: "the emergency manager" },
                    " and ",
                    { doc: "01M1S5AS2G1PK98P6VYW8M9RSQ", thread: "osp", t: "Captain Kennedy" },
                    " about what each set in motion.",
                ],
            },
            {
                d: "2026-09-08", date: "September 8, 2026",
                body: [
                    "ODOT ",
                    { doc: "01M20YMVX0Y7FBDFVH6QPR70RQ", thread: "oprd", t: "closes a records request as not the custodian" },
                    ", ",
                    { doc: "01M211VD50GEMFA0115K4FSWF6", thread: "oprd", t: "“confirmed with Lisa Sumption”" },
                    ". I put ",
                    { doc: "01M21706K0KZKPM48E0E14936B", thread: "oprd", t: "ODOT's statement, attributed to her, on the record" },
                    ". The Governor's office ",
                    { doc: "01M2130110ZFY7MYKJHFN7X6RA", thread: "governor", t: "states it will begin gathering records" },
                    ".",
                ],
            },
            {
                d: "2026-09-09", date: "September 9 — 11, 2026",
                body: [
                    "Patrol Captain Sloan confirms the referral of my complaint is ",
                    { doc: "01M23VZK3887N5QPA6F01CSFH4", thread: "usfs", t: "an administrative investigation" },
                    ". I notify all records officers that ",
                    { doc: "01M23HPNPR6XQVRBZHPF2F1HYD", thread: "osp", t: "the requests are now tracked publicly" },
                    ", ",
                    { doc: "01M23SJK7GFQVZK7TBD2XQSVTG", thread: "usfs", t: "correct the record on Special Agent Oliver's March 27 email" },
                    ", send OSP ",
                    { doc: "01M2670AB06W82K8B7XVZ9D5RW", thread: "osp", t: "Report SP26096984, and what all of you have been doing" },
                    ", and on September 11 publish ",
                    { doc: "01M29ZRKJ8KB38SPR38V64HH2C", thread: "oprd", t: "sunlight" },
                    ": OPRD's Timeline of Events answered claim by claim.",
                ],
            },
            {
                d: "2026-09-18", date: "September 18, 2026", major: true,
                title: "$1,728, and $80 for the version histories.",
                body: [
                    "Katie Gauthier prices the September 5 request for the Director's and Deputy Director's records at ",
                    { doc: "01M2VE25T0WZXS6PE4BXJK0693", thread: "oprd", t: "$1,728" },
                    ", and the “Timeline of Events” version histories at ",
                    { doc: "01M2VEFTARQHQW029628GQA1Y7", thread: "oprd", t: "$80" },
                    ". Under OAR 736-001-0030 the fee waiver decision belongs to the Director, the subject of the request. ",
                    { doc: "01M2VF2JXGC49DZZZDFKKMXS2J", thread: "oprd", t: "I dispute both estimates; neither will be paid" },
                    ", send ",
                    { doc: "01M2VMP7Y86Z7WBP079M7NP6WZ", thread: "oprd", t: "the same letter as a PDF" },
                    ", and then ",
                    { doc: "01M2VPA710TYH54HFAQ7T3SFYM", thread: "oprd", t: "say plainly what I had softened" },
                    ".",
                ],
            },
            {
                d: "2026-09-20", date: "September 20, 2026",
                body: [
                    "I serve OPRD ",
                    { doc: "01M30GCBNRZCAEMX90B6T5D710", thread: "oprd", t: "notice of conclusion of direct correspondence" },
                    ", and ask Dianne Greenlee ",
                    { doc: "01M30EACB8FXZB4SQ3TA1ED1N3", thread: "osp", t: "what exactly she documented about me, where it is maintained, and who received it" },
                    ".",
                ],
            },
            {
                d: "2026-09-22", date: "September 22, 2026", major: true,
                title: "The waiver denied.",
                body: [
                    "The Governor's office estimates $572.50 for its records and ",
                    { doc: "01M35TPA3RXRP0HY3NM9JHDJ8F", thread: "governor", t: "denies the fee waiver" },
                    ", writing that I have “not demonstrated the ability to disseminate the public records but merely stated that he can post it on a website.” My answer, two minutes later, in full: ",
                    { doc: "01M35TT090PFYFTHZ1GFFA5MKA", thread: "governor", t: "“I will pay it. Send the instructions.”" },
                    " I also tell Greenlee ",
                    { doc: "01M34REGP0WY727F9TQGS959Q7", thread: "osp", t: "a response is expected" },
                    ".",
                ],
            },
            {
                d: "2026-09-23", date: "September 23, 2026", major: true,
                title: "Federal oversight.",
                body: [
                    "The March 13 transfer goes to ",
                    { doc: "01M37K9WT8ZHPBH432JWXH3TYV", thread: "outreach", t: "Senator Wyden's whistleblower intake, the FBI, and the Department of Justice Inspector General" },
                    ", with every named officer copied. I file ",
                    { doc: "01M37MV4ZRW7F535J16WXD8TJ4", thread: "outreach", t: "the complaint with the Inspector General" },
                    ", then ",
                    { doc: "01M382W278SJK9CDV86VW0PM2A", thread: "outreach", t: "the complaint to the FBI's Portland field office" },
                    " naming Task Force Officer Jake Hyde. I file ",
                    { doc: "01M36H37GR1NF6QE4JC7TEMVSE", thread: "doj", t: "a records request with the Oregon Department of Justice" },
                    ", nine categories, from the fusion center to counsel's files, and ask the Joint Committee on Legislative Audits to ",
                    { doc: "01M36JQV3RZHQCT4RRPP35JRJC", thread: "outreach", t: "recommend an audit of OPRD volunteer-program controls" },
                    ". I write to the Governor's attorney: ",
                    { doc: "01M37EHDX8XTVS3H3STMBSXZD8", thread: "oprd", t: "you named a price, and I accepted it" },
                    ". Lane County prices two items of request #26-825 at $71.91, denies the fee waiver in one sentence, and closes the request four minutes later. I demand it reopen.",
                ],
            },
            {
                d: "2026-09-24", date: "September 24, 2026", major: true,
                title: "The office refuses to decide.",
                body: [
                    { doc: "01M3AJNQ0RYYQSV41172KZJYDZ", thread: "governor", t: "The payment instructions arrive" },
                    ". I had already ",
                    { doc: "01M3ABNN38T76YFJBZQ510DPD8", thread: "governor", t: "petitioned the Attorney General" },
                    " that morning on the waiver denial and the withheld instructions. The office ",
                    { doc: "01M3AMJFBGZ3MHAAPFM82QTEFV", thread: "governor", t: "acknowledges the petition" },
                    ", then ",
                    { doc: "01M3AW7K3GZCPA4CD5YQ0FR2R6", thread: "governor", t: "refuses to decide it" },
                    ": ORS 192.427 turns on an elected official claiming the right to withhold a record, no record was withheld, and the Governor claimed nothing. I ",
                    { doc: "01M3AZD078K7HBZ71XR4Z0XJ9P", thread: "governor", t: "ask for reconsideration" },
                    ". That night I write to Oregon State Police that ",
                    { doc: "01M3BEJ1PR4JHJ2X3VRPT2Z9V5", thread: "osp", t: "what they withheld is where the characterizations live" },
                    ". The same afternoon the Department of Justice ",
                    { doc: "01M3APMQF8Z8NRH088RB9N765Z", thread: "doj", t: "calls my request for my own records “very broad in scope”" },
                    "; I ",
                    { doc: "01M3ARW6JRNP6YE36HCJ5A6CAC", thread: "doj", t: "ask which of the nine categories carry the burden" },
                    ".",
                ],
            },
            {
                d: "2026-09-25", date: "September 25, 2026",
                body: [
                    "The statute provides no mechanism for reconsideration, so I file ",
                    { doc: "01M3CP80C8CQTHRYGGJ0X91VBJ", thread: "governor", t: "a second petition on the fee waiver: custody is not the test" },
                    ".",
                ],
            },
            {
                d: "2026-09-26", date: "September 26, 2026", major: true,
                title: "Follow the Statute.",
                body: [
                    "I send all four agencies one letter: ",
                    { doc: "01M3FDMFP0VRBZCTGXQRXJ7CM3", thread: "oprd", t: "Follow the Statute." },
                    " What each did, in its own words, from the record, and what following the statute means for each.",
                ],
            },
        ],
    },
];

// The homepage walker steps through these, newest first.
export const MAJORS: TimelineEntry[] = TIMELINE.flatMap((s) => s.entries).filter((e) => e.major).reverse();
