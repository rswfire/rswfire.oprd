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

export type TimelineSegment =
    | string
    | { t: string; href: string; external?: boolean }
    | { person: string; label?: string };

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

export const TIMELINE: TimelineSection[] = [
    {
        heading: "February — March 2025.",
        entries: [
            {
                d: "2025-02-09", date: "February 9, 2025",
                body: [
                    { t: "I raise the park supervisor's response", href: "/evidence/origin" },
                    " to operational questions about power outage protocols in a follow-up email the same day. ",
                    { t: "The park manager speaks to me alone", href: "/evidence/escalation" },
                    ", listing first-week mistakes. I try to reset.",
                ],
            },
            {
                d: "2025-03-02", date: "March 2, 2025",
                body: [
                    "I document the pattern in my working relationships in the ",
                    { t: "“Trust” email", href: "/evidence/trust" },
                    ".",
                ],
            },
            {
                d: "2025-03-05", date: "March 5, 2025", major: true,
                title: "The picnic table.",
                body: [
                    { t: "The park manager and the park supervisor hold me at a picnic table for sixty-two minutes", href: "/evidence/coercion" },
                    ". The park manager tells me to “chew glass and swallow it.” I record the meeting in full.",
                ],
            },
            {
                d: "2025-03-10", date: "March 10, 2025",
                body: [
                    "The ", { person: "program manager" },
                    " calls about the March 5 recording and tells me I was “acting as an agent of the state.” In a second call the same day: “get through my time.”",
                ],
            },
            {
                d: "2025-03-18", date: "March 18, 2025",
                body: [
                    "While I clean yurts alone during a regional event, ",
                    { t: "an unidentified man approaches me", href: "/evidence/surveillance" },
                    " and asks how leadership treats me. I document the encounter with the park supervisor the same day. Her explanation: I.T. staff updating site photos. No photos were ever produced.",
                ],
            },
            {
                d: "2025-03-24", date: "March 24, 2025", major: true,
                title: "The dismissal.",
                body: [
                    { t: "The park manager dismisses me by phone", href: "/evidence/dismissal" },
                    ", six days before my scheduled completion, with twenty-four hours to vacate the park where I live. The stated reason: a lost journal. An hour later he collects the keys at my RV and states on camera that no formal documentation exists.",
                ],
            },
            {
                d: "2025-03-25", date: "March 25, 2025",
                body: [
                    "The ", { person: "program manager" }, " ",
                    { t: "calls", href: "/evidence/expulsion" },
                    ". I record the call.",
                ],
            },
            {
                d: "2025-03-26", date: "March 26, 2025", major: true,
                title: "The statewide exclusion.",
                body: [
                    "I send ",
                    { t: "a detailed letter to the program manager", href: "/evidence/expulsion" },
                    ". Hours later OPRD excludes me permanently from every state parks volunteer program, citing “the public comments made about staff.”",
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
                    ", and what the email thread shows. No response.",
                ],
            },
            {
                d: "2025-08-15", date: "August 15, 2025",
                body: [
                    "I raise the March 18 encounter ",
                    { t: "with Director Lisa Sumption", href: "/evidence/surveillance" },
                    " and ask three questions: do the photos exist, were they published, was the encounter logged. No response.",
                ],
            },
            {
                d: "2025-08-22", date: "August 22, 2025", major: true,
                title: "The first records request.",
                body: [
                    "I submit ",
                    { t: "a comprehensive public records request", href: "/record/oprd/01K399TM7GG3FNAXSR4BX9TB1X" },
                    " carrying a mailing address and an email address. On August 28 the institution calls to narrow the scope; I decline and ask for everything in writing. Nothing arrives at either address.",
                ],
            },
            {
                d: "2025-08-24", date: "August 24, 2025", major: true,
                title: "The open letter.",
                body: [
                    "I send ",
                    { t: "the open letter to Director Lisa Sumption", href: "/record/oprd/01K3FDT5P09S9N9QSZYWS9KN7A" },
                    ": five protections for every volunteer, none for myself. ",
                    { t: "She replies within a day", href: "/record/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8" },
                    " that concerns will be reviewed “through the appropriate channels within the Department.” She never identifies the channel, the person, or the standard.",
                ],
            },
            {
                d: "2025-11-15", date: "November 15, 2025",
                body: [
                    "I issue ",
                    { t: "notice of violation", href: "/record/oprd/01KA45NDXG8VA4XB2YG7M8G0F5" },
                    ": the August 22 request stands unanswered.",
                ],
            },
            {
                d: "2025-11-18", date: "November 18, 2025", major: true,
                title: "The complaint to the Governor.",
                body: [
                    "I send ",
                    { t: "a formal complaint", href: "/record/governor/01KACE2348G8VG3XPB3BGW3F1N" },
                    " to Governor Tina Kotek's office.",
                ],
            },
            {
                d: "2025-11-20", date: "November 20, 2025", major: true,
                title: "“The response we provided.”",
                body: [
                    { t: "Katie Gauthier writes", href: "/record/oprd/01KAHTQ0ZG656XCF1G2Q9X15KY" },
                    ": “Below is an image of the response we provided to you on August 29, 2025.” Nothing had been sent to either address on the request. The response sat in a portal I had no access to, carrying estimates in the tens of thousands of dollars. I withdraw the request.",
                ],
            },
            {
                d: "2025-11-25", date: "November 25, 2025",
                body: [
                    { t: "The records platform writes to me for the first time", href: "/record/oprd/01KAY09GQ05E6NJGGSARDNA1AC" },
                    ": request #25-42, closed. No message had ever come from that system, including on August 29 when the institution says it answered there. ",
                    { t: "I write the same morning", href: "/record/oprd/01KAY3YPQ02V2AKRNAAJ3RZAXA" },
                    " that I will ask CivicPlus to audit how my address entered it.",
                ],
            },
            {
                d: "2025-12-08", date: "December 7 — 8, 2025", major: true,
                title: "The archive begins.",
                body: [
                    "I send ",
                    { t: "a final message to Director Sumption", href: "/record/oprd/01KBY6KNMGEGV4MZ98QEK6R8JP" },
                    " with the surveillance documentation and video. ",
                    { t: "She closes the correspondence on December 8", href: "/record/oprd/01KBZ9S95G2W5B44TTGT6HA69N" },
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
                    { t: "formal notice", href: "/record/oprd/01KF4NTAT878BQNBK345SZCJQS" },
                    " on the program manager: written reversal of the expulsion, an independent investigation, and acknowledgment. Deadline: March 26, 2026, one year from the expulsion.",
                ],
            },
            {
                d: "2026-02-09", date: "February 9, 2026",
                body: [
                    "I send ",
                    { t: "the letter titled “Harm”", href: "/record/oprd/01KH32THCG9NNRQCG0B07353AR" },
                    " to the program manager.",
                ],
            },
            {
                d: "2026-02-13", date: "February 13 — 14, 2026",
                body: [
                    "Deputy Director J.R. Collier ",
                    { t: "directs all correspondence away from named staff", href: "/record/oprd/01KHFDVVV82TVEJPHPYAMAD3JH" },
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
                    { t: "sends my letters to Captain Kyle Kennedy, OSP Government and Media Relations", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ", copying Deputy Director J.R. Collier: “Fyi — sharing for situational awareness since he is now including the Governor as well as our Director.” No crime alleged, no threat quoted. The entire chain below was unknown to me until OSP produced the file on September 3, 2026.",
                ],
            },
            {
                d: "2026-03-04", date: "March 4, 2026",
                body: [
                    "The dispatch record reads “Capt. Kennedy is requesting that a threat assessment be conducted asap.” Kennedy ",
                    { t: "forwards Lee's email to Lieutenant Haley McQuillan", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ", Criminal Investigations Division: “Would you take a look at the info below?”",
                ],
            },
            {
                d: "2026-03-06", date: "March 6, 2026",
                body: [
                    "Lieutenant McQuillan ",
                    { t: "routes it to Detective Jake Hyde", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ", OSP Portland, a Task Force Officer with the Portland FBI Joint Terrorism Task Force: “some concerns in the Florence area.” Before noon, Hyde forwards my name from his FBI account to FBI personnel: “Name is Robert Samuel White out of Florence Oregon. But I don't have a DOB.” At 1:14 PM Hyde reports back: “Based on the website nothing is standing out to me more than what Parks and Rec sent you. Sounds like this person does have a grievance with the former employer.” That afternoon Lee sends Hyde the dismissal letter, the Timeline of Events, and a February 2026 email chain, and offers more.",
                ],
            },
            {
                d: "2026-03-10", date: "March 10, 2026",
                body: [
                    "Hyde ",
                    { t: "forwards the OPRD documents to Detective Jerred Nelson", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ", Major Crimes Section: “FYI for the guy in Florence. Give me a call later this week and we can talk about heading down there.”",
                ],
            },
            {
                d: "2026-03-11", date: "March 11, 2026",
                body: [
                    "Dianne Greenlee, Criminal Intelligence Analyst at the Oregon TITAN Fusion Center, Oregon Department of Justice, ",
                    { t: "writes to Hyde", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ": “I'm documenting this activity for our internal awareness since Mr. White's actions border on harassment due to the volume of emails that he has forwarded to OPRD staff over the last year.” Hyde answers: “Yes, that is correct. Just OSP it is not an FBI case.” Her records sit in systems I cannot see or correct.",
                ],
            },
            {
                d: "2026-03-13", date: "March 13, 2026",
                body: [
                    "From his FBI account, Hyde sends Nelson ",
                    { t: "my DMV record and a report", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ": “WHITE,ROBERT SAMUEL DMV.pdf” and “ReportRobertWhite.pdf.”",
                ],
            },
            {
                d: "2026-03-22", date: "March 17 — 22, 2026",
                body: [
                    "Hyde works with Forest Service Special Agent Matthew Oliver to locate me. On March 22 Oliver ",
                    { t: "delivers the reconnaissance", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ": my volunteer schedule, my duties, my RV and Jeep, two screenshots from the onX Hunt hunting application with a waypoint pinned on the work center where I live, the gate and its lock, and the note that my Forest Service supervisor “was told not to advise WHITE that FS LE was inquiring about his whereabouts.”",
                ],
            },
            {
                d: "2026-03-23", date: "March 23, 2026",
                body: [
                    "The eve of the anniversary of the dismissal. ",
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
                    { t: "opens the dispatch event naming me “Suspect”", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ", with the basis: sending “concerning emails to former supervisors in parks department and publicly airing grievances.” At 2:33 PM he sends Sergeant Sean Henderson the “Hasty Plan for Robert White knock and talk.”",
                ],
            },
            {
                d: "2026-03-24", date: "March 24, 2026", major: true,
                title: "Three men at the door.",
                body: [
                    "One year after the dismissal. ",
                    { t: "Three men with guns arrive at a locked federal gate", href: "/evidence/police" },
                    " on federal land where I serve as a volunteer caretaker. They state they are concerned about what I am posting online. I decline to speak without an attorney and shut the door. I record them leaving. Twenty minutes later a man identifying himself as Forest Service calls and tells me this isn't going away. He is later confirmed as Special Agent Matthew Oliver, Law Enforcement & Investigations.",
                ],
            },
            {
                d: "2026-03-27", date: "March 27, 2026", major: true,
                title: "The transfer to a deputy.",
                body: [
                    "Three days after I was told at my door that I was not in trouble, ",
                    { t: "Special Agent Oliver emails a Lane County deputy", href: "/record/usfs/01M23SJK7GFQVZK7TBD2XQSVTG/" },
                    ": my name, date of birth, driver's license number, residence, work schedule, duties, correspondence, and text messages, with the words “multiple veil threats” and a commitment to “keep you up to date.” The same day I file the ",
                    { t: "Siuslaw National Forest incident report", href: "/evidence/police" },
                    " on the March 24 visit, with the license plate of one vehicle: 731 QRV.",
                ],
            },
            {
                d: "2026-03-30", date: "March 30, 2026",
                body: [
                    "Patrol Captain Felicia Sloan confirms Special Agent Oliver is employed by USFS Law Enforcement & Investigations and does not need to coordinate with local law enforcement. Asked who authorized the visit and its purpose, she directs me to FOIA.",
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
                    { t: "The April 10 estimate", href: "/record/oprd/01KP78BZ8RTQ3SJ3RXKJ4M1GGT/" },
                    " prices the volunteer program categories at forty to eighty hours each. ",
                    { t: "I dispute it", href: "/record/oprd/01KP79KZHGGJ2XH73FXBDJGG2G/" },
                    ".",
                ],
            },
            {
                d: "2026-04-03", date: "April 3, 2026", major: true,
                title: "“No records.”",
                body: [
                    "I file ",
                    { t: "a public records request with Oregon State Police", href: "/evidence/police" },
                    " for all records related to the March 24 visit, including all coordination with Special Agent Oliver or any OPRD employee. OSP answers the same day: a search “identified no records responsive to your request.”",
                ],
            },
            {
                d: "2026-04-03", date: "April 3, 2026",
                body: [
                    "While walking the Waxmyrtle Trail in the Oregon Dunes, ",
                    { t: "the displacement framework is named", href: "/displacement" },
                    ": one year after the first displacement, one week after the second, when they brought police to my door. The weapon that connects all nine stages of documented institutional conduct is identified, named, and ",
                    { t: "recorded on the trail", href: "https://rswfire.com/library/signal/01KN9KDSG0H3W0WZ9GBCJDJMG5", external: true },
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
                    { t: "The fee letter", href: "/record/osp/01KP4N822RW0N8WZ47YG8MG4W8/" },
                    " lists one located record, “CAD, $12.50,” and elsewhere recites the body camera statute over no named record. The CAD is then withheld for three months behind the fee. The same day I ",
                    { t: "request a fee waiver", href: "/record/osp/01KP4QJMSRND2R8EMVMP6X8XTZ/" },
                    " and ",
                    { t: "supplement it", href: "/record/osp/01KP4R7HR0TXFFE9GJTEGX8AMT/" },
                    "; on April 14 I ",
                    { t: "answer the waiver form", href: "/record/osp/01KP6XKNP8Z56VTGA4MZGJG1N2/" },
                    ".",
                ],
            },
            {
                d: "2026-04-15", date: "April 15, 2026", major: true,
                title: "“No evidence of any crimes.”",
                body: [
                    "Two days after ",
                    { t: "the fee waiver requests", href: "/record/osp/01KP4QJMSRND2R8EMVMP6X8XTZ/" },
                    ", Detective Nelson ",
                    { t: "closes the threat assessment", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
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
                    { t: "closes my records request R000879", href: "/record/das/01KWWCTCW09VNDMKKGABWBSKHT/" },
                    ", stating it “is not the custodian of the requested records,” and refers me to OPRD. The request sought the institution's own communications.",
                ],
            },
            {
                d: "2026-07-14", date: "July 14, 2026",
                body: [
                    "Oregon State Police release ",
                    { t: "CAD record SP26097765", href: "/evidence/police" },
                    ". No call type, priority low, officer initiated, no action taken; criminal unit; role “Other”; comment “FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE”; primary unit Trooper Jake Hyde. The same day I send ",
                    { t: "six questions", href: "/evidence/police" },
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
                    { t: "Petition for Public Records Order filed with the Oregon Attorney General", href: "/evidence/police" },
                    " under ORS 192.411, concerning PR27478 and CAD event SP26097765. The petition and twenty-five exhibits published in full.",
                ],
            },
            {
                d: "2026-07-24", date: "July 24, 2026", major: true,
                title: "The District Ranger's statement.",
                body: [
                    { t: "The District Ranger", href: "/evidence/police" },
                    ", U.S. Forest Service, writes that the Forest Service did not initiate the March 24 interview and only unlocked the gate for OSP, which “does not have keys to Forest Service gates.” Filed with the Attorney General the same day.",
                ],
            },
            {
                d: "2026-07-27", date: "July 27, 2026", major: true,
                title: "The reopening.",
                body: [
                    "Oregon State Police ",
                    { t: "reopens PR27478", href: "/evidence/police" },
                    ", citing a “thorough review” that found “additional records, not in our system at the time of the original request.” Everything later produced had been in its systems since March and April. The same day the Department of Administrative Services ",
                    { t: "answers R000885", href: "/record/das/01KYJZ4KB0YJ0DCQ1D70KMHA52/" },
                    ": thirty-one requests closed on a not-the-custodian basis since 2024, with no written standard for the determination.",
                ],
            },
            {
                d: "2026-07-29", date: "July 29, 2026", major: true,
                title: "The first order.",
                body: [
                    { t: "The Attorney General order, DOJ File No. 257001-GA0140-26", href: "/record/osp/01KYR0GMBRR83WH7FTFC90Y6DB" },
                    ", decides the petition on an exemption claim Oregon State Police never made to me, and calls the remainder moot. The same day I ",
                    { t: "request the recorded video of the March 24 contact", href: "/record/osp/01KYR9AFWRGCR1B546XC2YK3EP" },
                    ".",
                ],
            },
            {
                d: "2026-07-30", date: "July 30, 2026",
                body: [
                    "Holly Bolton, OSP, answers the order by ",
                    { t: "providing the fee letter as the exemption assertion", href: "/record/osp/01KYSZGF6GK4HMAJ6KRCDBAY46" },
                    ". David Pitcher, Department of Justice, ",
                    { t: "identifies page 20 of my own exhibits as the source of the exemption reference", href: "/record/osp/01KYSZQ430YWS431STFM7QVWAD" },
                    ". I answer with ",
                    { t: "the checklist with one item", href: "/record/osp/01KYT3WXB0SQYDSBMW57E9RFSA" },
                    " and ",
                    { t: "a records request on the fee letter itself", href: "/record/osp/01KYTC9F30N5YX1ZNDM5A0563G" },
                    ", acknowledged as PR36445.",
                ],
            },
            {
                d: "2026-08-04", date: "August 4, 2026",
                body: [
                    { t: "The Attorney General order, DOJ File No. 107062-GA0144-26", href: "/record/das/01KZ7BFZ2090R3D63P7YXCT68M/" },
                    ", denies the petition on R000879. The order states a response is complete when a public body notifies the requester that it is not the custodian of the records requested.",
                ],
            },
            {
                d: "2026-08-11", date: "August 11, 2026", major: true,
                title: "$16,315.",
                body: [
                    "Micah Hubbard, OSP Central Records, identifies the PR27478 records and ",
                    { t: "names a fee", href: "/record/osp/01KZS0AAY88AYPJ32PDEZABW03" },
                    ". The same day he prices PR36445, the request about the fee letter itself, at ",
                    { t: "$16,315: approximately 27,000 letters, 650 hours, release 130 weeks after payment", href: "/record/osp/01KZS0AEV8KA95QQZVJBCKBQEM" },
                    ".",
                ],
            },
            {
                d: "2026-08-29", date: "August 14 — 29, 2026",
                body: [
                    "I pay the PR27478 fee by money order; ",
                    { t: "USPS resolves the delivery on August 29", href: "/record/osp/01M17CQRV0SHYB8VS0NYPP06B0" },
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
                    { t: "confirms preservation of the records, except item seven", href: "/record/osp/01M1EVZDA0BRTQTJ9JET9VCS8Y" },
                    ", which she calls beyond the scope of the process. I answer that ",
                    { t: "item seven is a record", href: "/record/osp/01M1EWKHV0WY1DBBNKH2RZVC0F" },
                    ". She ", { t: "forwards it to the CJIS team", href: "/record/osp/01M1EXBBJ0PB7VJXJA7FPVT6NZ" }, ".",
                ],
            },
            {
                d: "2026-09-03", date: "September 3, 2026", major: true,
                title: "The production.",
                body: [
                    "Micah Hubbard ",
                    { t: "produces the PR27478 file", href: "/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" },
                    ". I publish it in full the same day: the first sight of the March 3 email, the “asap” order, the task force distribution, the March 11 Department of Justice characterization, the “Suspect” dispatch event, and the “Hasty Plan.” The same day I ",
                    { t: "state the production is not sufficient", href: "/record/osp/01M1M6H4RR51K8RXNASW5AB9RC" },
                    ", serve ",
                    { t: "formal notice of tort claim", href: "/record/osp/01M1N523F0WNM96C18DTDMK0NP" },
                    ", and write to the Governor: ",
                    { t: "your office was the reason", href: "/record/governor/01M1MEQP4GVGV0ED9D555043P2" },
                    ".",
                ],
            },
            {
                d: "2026-09-04", date: "September 4, 2026",
                body: [
                    "DAS Risk Management assigns ",
                    { t: "claim number P195403 and an adjuster", href: "/record/osp/01M1PJ5NSR125CJQ606QX5ZXM1" },
                    ".",
                ],
            },
            {
                d: "2026-09-05", date: "September 5 — 7, 2026",
                body: [
                    "I file ",
                    { t: "a records request with the Office of the Governor", href: "/record/governor/01M1SQ1ZF04E04FHP6PEEXPVH2" },
                    " and ",
                    { t: "one with OPRD for the Director's and Deputy Director's records", href: "/record/oprd/01M1SWHHM8QSPN71SK56Q97F8C" },
                    ", write to OPRD that ",
                    { t: "the record says you lied", href: "/record/oprd/01M1SFPP5GMVGVEX6CR6G74FK1/" },
                    ", and send the Director ",
                    { t: "The choices are still yours", href: "/record/oprd/01M1T0PHFRWQNERYJENF7MVRZV/" },
                    "; ",
                    { t: "the final version goes on September 7", href: "/record/oprd/01M1YH9QSR0JAGXR04DGFYV7VD/" },
                    ": tell the truth, withdraw the bar, build a real process. I also write to ",
                    { t: "the emergency manager", href: "/record/oprd/01M1S53NH8C3YG644R0W1TG0DS/" },
                    " and ",
                    { t: "Captain Kennedy", href: "/record/osp/01M1S5AS2G1PK98P6VYW8M9RSQ/" },
                    " about what each set in motion.",
                ],
            },
            {
                d: "2026-09-08", date: "September 8, 2026",
                body: [
                    "ODOT ",
                    { t: "closes a records request as not the custodian", href: "/record/oprd/01M20YMVX0Y7FBDFVH6QPR70RQ/" },
                    ", ",
                    { t: "“confirmed with Lisa Sumption”", href: "/record/oprd/01M211VD50GEMFA0115K4FSWF6" },
                    ". I put ",
                    { t: "ODOT's statement, attributed to her, on the record", href: "/record/oprd/01M21706K0KZKPM48E0E14936B/" },
                    ". The Governor's office ",
                    { t: "states it will begin gathering records", href: "/record/governor/01M2130110ZFY7MYKJHFN7X6RA" },
                    ".",
                ],
            },
            {
                d: "2026-09-09", date: "September 9 — 11, 2026",
                body: [
                    "Patrol Captain Sloan confirms the referral of my complaint is ",
                    { t: "an administrative investigation", href: "/record/usfs/01M23VZK3887N5QPA6F01CSFH4" },
                    ". I notify all records officers that ",
                    { t: "the requests are now tracked publicly", href: "/record/osp/01M23HPNPR6XQVRBZHPF2F1HYD" },
                    ", ",
                    { t: "correct the record on Special Agent Oliver's March 27 email", href: "/record/usfs/01M23SJK7GFQVZK7TBD2XQSVTG/" },
                    ", send OSP ",
                    { t: "Report SP26096984, and what all of you have been doing", href: "/record/osp/01M2670AB06W82K8B7XVZ9D5RW/" },
                    ", and on September 11 publish ",
                    { t: "sunlight", href: "/record/oprd/01M29ZRKJ8KB38SPR38V64HH2C/" },
                    ": OPRD's Timeline of Events answered claim by claim.",
                ],
            },
            {
                d: "2026-09-18", date: "September 18, 2026", major: true,
                title: "$1,728, and $80 for the version histories.",
                body: [
                    "Katie Gauthier prices the September 5 request for the Director's and Deputy Director's records at ",
                    { t: "$1,728", href: "/record/oprd/01M2VE25T0WZXS6PE4BXJK0693" },
                    ", and the “Timeline of Events” version histories at ",
                    { t: "$80", href: "/record/oprd/01M2VEFTARQHQW029628GQA1Y7" },
                    ". Under OAR 736-001-0030 the fee waiver decision belongs to the Director, the subject of the request. ",
                    { t: "I dispute both estimates; neither will be paid", href: "/record/oprd/01M2VF2JXGC49DZZZDFKKMXS2J" },
                    ", send ",
                    { t: "the same letter as a PDF", href: "/record/oprd/01M2VMP7Y86Z7WBP079M7NP6WZ/" },
                    ", and then ",
                    { t: "say plainly what I had softened", href: "/record/oprd/01M2VPA710TYH54HFAQ7T3SFYM/" },
                    ".",
                ],
            },
            {
                d: "2026-09-20", date: "September 20, 2026",
                body: [
                    "I serve OPRD ",
                    { t: "notice of conclusion of direct correspondence", href: "/record/oprd/01M30GCBNRZCAEMX90B6T5D710" },
                    ", and ask Dianne Greenlee ",
                    { t: "what exactly she documented about me, where it is maintained, and who received it", href: "/record/osp/01M30EACB8FXZB4SQ3TA1ED1N3" },
                    ".",
                ],
            },
            {
                d: "2026-09-22", date: "September 22, 2026", major: true,
                title: "The waiver denied.",
                body: [
                    "The Governor's office estimates $572.50 for its records and ",
                    { t: "denies the fee waiver", href: "/record/governor/01M35TPA3RXRP0HY3NM9JHDJ8F" },
                    ", writing that I have “not demonstrated the ability to disseminate the public records but merely stated that he can post it on a website.” My answer, two minutes later, in full: ",
                    { t: "“I will pay it. Send the instructions.”", href: "/record/governor/01M35TT090PFYFTHZ1GFFA5MKA" },
                    " I also tell Greenlee ",
                    { t: "a response is expected", href: "/record/osp/01M34REGP0WY727F9TQGS959Q7" },
                    ".",
                ],
            },
            {
                d: "2026-09-23", date: "September 23, 2026", major: true,
                title: "Federal oversight.",
                body: [
                    "The March 13 transfer goes to ",
                    { t: "Senator Wyden's whistleblower intake, the FBI, and the Department of Justice Inspector General", href: "/record/outreach/01M37K9WT8ZHPBH432JWXH3TYV/" },
                    ", with every named officer copied. I file ",
                    { t: "the complaint with the Inspector General", href: "/record/outreach/01M37MV4ZRW7F535J16WXD8TJ4/" },
                    ", then ",
                    { t: "the complaint to the FBI's Portland field office", href: "/record/outreach/01M382W278SJK9CDV86VW0PM2A/" },
                    " naming Task Force Officer Jake Hyde. I file ",
                    { t: "a records request with the Oregon Department of Justice", href: "/record/doj/01M36H37GR1NF6QE4JC7TEMVSE/" },
                    ", nine categories, from the fusion center to counsel's files, and ask the Joint Committee on Legislative Audits to ",
                    { t: "recommend an audit of OPRD volunteer-program controls", href: "/record/outreach/01M36JQV3RZHQCT4RRPP35JRJC/" },
                    ". I write to the Governor's attorney: ",
                    { t: "you named a price, and I accepted it", href: "/record/oprd/01M37EHDX8XTVS3H3STMBSXZD8/" },
                    ". Lane County prices two items of request #26-825 at $71.91, denies the fee waiver in one sentence, and closes the request four minutes later. I demand it reopen.",
                ],
            },
            {
                d: "2026-09-24", date: "September 24, 2026", major: true,
                title: "The office refuses to decide.",
                body: [
                    { t: "The payment instructions arrive", href: "/record/governor/01M3AJNQ0RYYQSV41172KZJYDZ/" },
                    ". I had already ",
                    { t: "petitioned the Attorney General", href: "/record/governor/01M3ABNN38T76YFJBZQ510DPD8/" },
                    " that morning on the waiver denial and the withheld instructions. The office ",
                    { t: "acknowledges the petition", href: "/record/governor/01M3AMJFBGZ3MHAAPFM82QTEFV/" },
                    ", then ",
                    { t: "refuses to decide it", href: "/record/governor/01M3AW7K3GZCPA4CD5YQ0FR2R6/" },
                    ": ORS 192.427 turns on an elected official claiming the right to withhold a record, no record was withheld, and the Governor claimed nothing. I ",
                    { t: "ask for reconsideration", href: "/record/governor/01M3AZD078K7HBZ71XR4Z0XJ9P/" },
                    ". That night I write to Oregon State Police that ",
                    { t: "what they withheld is where the characterizations live", href: "/record/osp/01M3BEJ1PR4JHJ2X3VRPT2Z9V5/" },
                    ". The same afternoon the Department of Justice ",
                    { t: "calls my request for my own records “very broad in scope”", href: "/record/doj/01M3APMQF8Z8NRH088RB9N765Z/" },
                    "; I ",
                    { t: "ask which of the nine categories carry the burden", href: "/record/doj/01M3ARW6JRNP6YE36HCJ5A6CAC/" },
                    ".",
                ],
            },
            {
                d: "2026-09-25", date: "September 25, 2026",
                body: [
                    "The statute provides no mechanism for reconsideration, so I file ",
                    { t: "a second petition on the fee waiver: custody is not the test", href: "/record/governor/01M3CP80C8CQTHRYGGJ0X91VBJ/" },
                    ".",
                ],
            },
            {
                d: "2026-09-26", date: "September 26, 2026", major: true,
                title: "Follow the Statute.",
                body: [
                    "I send all four agencies one letter: ",
                    { t: "Follow the Statute.", href: "/record/oprd/01M3FDMFP0VRBZCTGXQRXJ7CM3/" },
                    " What each did, in its own words, from the record, and what following the statute means for each.",
                ],
            },
        ],
    },
];

// The homepage walker steps through these, newest first.
export const MAJORS: TimelineEntry[] = TIMELINE.flatMap((s) => s.entries).filter((e) => e.major).reverse();
