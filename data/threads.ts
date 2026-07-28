// data/threads.ts
//
// Records-accountability threads. Each thread is one agency / one matter and
// the chronological filings within it. Add a development by appending a Filing.

import type { RecordsThreadData } from "@/components/RecordsThread";

export const OSP_THREAD: RecordsThreadData = {
    slug: "osp",
    title: "Oregon State Police — PR27478",
    agency: "Oregon State Police",
    matter: "Public Records Request PR27478 · CAD event SP26097765",
    status: "Petition before the Oregon Attorney General under ORS 192.411.",
    summary: [
        "My public records request for the March 24, 2026 police visit to my residence on restricted federal land, and Oregon State Police’s responses to it.",
    ],
    filings: [
        {
            id: "request",
            date: "April 3, 2026",
            kind: "request",
            title: "Public records request to Oregon State Police",
            from: "Robert Samuel White",
            to: "OSP Central Records",
            summary:
                "I filed a public records request with Oregon State Police for all records related to the March 24 visit: officer names, badge numbers, and unit assignments; all communications relating to its planning, authorization, or coordination; all communications referencing my name, the archive, or oprdvolunteerabuse.org; any incident reports, case files, or after-action documentation; and all communications between any OSP officer and U.S. Forest Service Special Agent Matthew Oliver or any Oregon Parks and Recreation Department employee. Oregon State Police responded the same day: no records responsive to the request.",
            docs: [
                { label: "OSP Public Records Response", href: "/osp-foia-response-1.pdf" },
            ],
        },
        {
            id: "record",
            date: "April 13 – July 14, 2026",
            kind: "record",
            title: "The record they said did not exist",
            body: [
                "On April 13, 2026, ten days after the “no records” denial and after I asked how the search had been conducted, a CAD dispatch record for the March 24 visit was printed inside OSP’s Central Records Section. It was then withheld for three more months.",
                "On July 14, 2026, Oregon State Police released the record, accompanied by a letter from OSP’s legal compliance specialist stating the document was reviewed for exempt material, “with none being identified.”",
                "The record, SP26097765, states in the state’s own system: event type “No Call Type Selected”; priority “Low”; source “Officer Initiated”; final disposition “No Action Taken”; unit type “Criminal”; my role “Other.” The officer’s comment states the purpose: “FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.” The primary unit is named: Jake Hyde, badge 56397.",
            ],
            docs: [
                { label: "OSP CAD Record SP26097765", href: "/osp-cad-record-sp26097765.pdf" },
                { label: "OSP Release Letter, PR27478", href: "/osp-foia-response-2.pdf" },
            ],
        },
        {
            id: "statement",
            date: "July 14, 2026",
            kind: "statement",
            title: "Statement on Oregon State Police record PR27478",
            body: [
                "Today the Oregon State Police released the CAD record for the March 24, 2026 visit to my residence on restricted federal land. I requested it months ago. On April 3, I was told records did not exist. On April 13, after I asked how the search was conducted, this record surfaced. It was withheld for three more months. Today it was released with a letter from OSP’s own legal compliance specialist stating the document was reviewed for exempt material, “with none being identified.”",
                "There was nothing to withhold. By their own final admission, no exemption applied to any part of this record. The months of silence, the fee dispute, and the initial denial that records existed had no legal basis behind them. Their own counsel now certifies it.",
                "Here is what the record shows, in their own system, in their own words.",
                "The event was logged as “No Call Type Selected.” Priority “Low.” The final disposition was “No Action Taken.” At the moment their officer created the event, there was no crime, no call type, and no police action to take. Their contemporaneous record establishes there was no law-enforcement basis for the visit. There was no crime. There never was.",
                "The unit dispatched was designated “Criminal.” A criminal unit was sent to a man their own record classifies under “Role: Other” — not a suspect, not a witness, not a party to any crime. They pointed the criminal apparatus of the state at a person their own system does not connect to any criminal matter.",
                "And the officer’s own comment states the purpose: “FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.”",
                "I want to address that comment directly, because it is false, and the falseness matters.",
                "The United States Forest Service did not need the Oregon State Police to conduct business with me. I live on Forest Service land. I am their volunteer caretaker. The federal officers who manage that land have my phone number, my email, my gate, and a relationship with me built over more than a year. If the Forest Service had a question for me, they had every ordinary means to ask it, directly, as they always have. There was no reason on earth for the state police to be dispatched “for the Forest Service” to a federal caretaker on federal land. The state has no jurisdiction there and the Forest Service had no need of them. “For the Forest Service” is not an explanation. It is a cover.",
                "And this was not a “followup interview.” A followup implies a prior interview, a continuing lawful process, a thread being continued. There was none. What there was, was a date. March 24, 2026 was the one-year anniversary of my dismissal from Oregon State Parks — the dismissal I had spent the preceding months documenting publicly as First Amendment retaliation. Three armed officers did not arrive on that specific day to “follow up” on a process that did not exist. They arrived on the anniversary, because of what I had written, to deliver a message. Their own officer, twenty minutes after I invoked a lawyer and closed my door, called me by phone to say the matter “was not going away” and that the state police wanted to speak with me. That is not a followup interview. That is intimidation, and the record’s own timeline — arrival at 9:50, my refusal, the phone call after — bears it out.",
                "So the record does not resolve the questions. It compounds them. Each explanation the state has offered collapses into the next lie. There was no crime — their disposition says so. There was no call type — their event says so. There was no exempt material — their lawyer says so. And now there is “for the Forest Service” and “followup interview,” two more explanations that do not survive contact with the facts: the Forest Service did not need them, and there was no prior interview to follow.",
                "What the record does give me is a name. The primary unit is identified as Jake Hyde, badge 56397. The Forest Service captain refused to give that name to my own district ranger, a forty-year federal officer, when she asked who had been on her land. The state sealed it on the federal side. Their own records section handed it to me on the state side. I now know one of the officers the federal government would not name.",
                "I want to be precise about what I am claiming and what I am not. I am not alleging a specific crime by any individual officer. I am stating what the record states: that armed state police, in a criminal-designated unit, were dispatched to a federal caretaker on federal land, on the anniversary of his protected-speech dismissal, for no logged law-enforcement purpose, under a stated justification — “for the Forest Service” — that does not withstand scrutiny, and that this was recorded by the officers themselves. Every fact in this statement comes from the state’s own record or from events I documented as they happened.",
                "I did not go looking for a fight. I documented my treatment, which is my constitutional right. The state’s answer to that documentation was to send officers to my home. Its answer to my request for the record of that visit was three months of silence with no lawful basis. And the record it finally released does not exonerate anyone. It confirms what I have said from the beginning, in the state’s own hand: there was no crime, there was no basis, and the explanations offered for the visit are not true.",
                "The full record is in the archive at oprdvolunteerabuse.org. I answer questions there and nowhere else.",
                "— Robert Samuel White",
            ],
        },
        {
            id: "followup",
            date: "July 14, 2026",
            kind: "followup",
            title: "Follow-up to Oregon State Police",
            from: "Robert Samuel White",
            to: "OSP Central Records, for the responding unit’s supervisor",
            body: [
                "Ms. Hubbard,",
                "Thank you again for the production under PR27478. I have reviewed the CAD record for event SP26097765 and I have questions the record itself raises. I am requesting that these be answered by the supervisor of the responding unit, or by whichever OSP official is in a position to speak to the origin and conduct of the event, rather than by the records section — these are questions about the event, not about the records process, and I do not want to put you in the position of answering for conduct that isn’t yours.",
                "My questions are as follows.",
                { heading: "1. Source of my date of birth." },
                "The record lists my date of birth, 04/11/1977. I did not provide it to Oregon State Police. The event is logged as “Officer Initiated,” with “No Call Type Selected,” and closed with a disposition of “No Action Taken.”",
                "What was the source of my date of birth? Was it provided to the responding unit by another agency or individual, and if so, by whom? Alternatively, was a records or database check performed on me? If a check was performed, under what authorized purpose was it conducted, given that the event carries no call type, no crime, and a disposition of no action taken?",
                { heading: "2. Source of the location." },
                "The dispatch address is listed solely as “SILTCOOS WORK CENTER.” The record contains no street address, no cross street, no county, no beat, no region, and no coordinates. Every geographic field except the facility name is blank.",
                "Siltcoos Work Center is an internal United States Forest Service facility designation. My residence has no street address. How did the responding unit obtain that location, and from whom? A facility name of that kind is not publicly indexed, and I would like to understand how it came to be the sole locator on an officer-initiated event.",
                { heading: "3. My name in the “Caller” field." },
                "The record lists “Caller: WHITE, ROBERT,” while simultaneously listing the source of the event as “Officer Initiated.” I did not call Oregon State Police. I did not request contact. I was separately listed in the record as “Person: WHITE, ROBERT — Role: Other.”",
                "What does the “Caller” field denote in an officer-initiated event, and why does my name appear in it? If this is a system convention rather than a factual entry, I would like that stated, so that the record is not read by any future party as indicating that I summoned police to my own residence.",
                { heading: "4. The stated purpose." },
                "The event comment reads: “FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE.”",
                "I am the U.S. Forest Service volunteer caretaker at that location. The Forest Service has my phone number, my email address, and direct access to me, and has had throughout. I am asking OSP to state what request or communication from the Forest Service that comment refers to, who at the Forest Service made it, and in what form it was received.",
                "I would also ask what “followup” refers to. I had no prior interview with Oregon State Police.",
                { heading: "5. Origin and travel." },
                "The record shows dispatch at 08:41:32 and arrival at 09:50:02, with the event closed at 10:18:42. That is approximately sixty-nine minutes of travel each direction for an event logged as low priority with no action taken. What was the origin point of the responding unit, and can OSP provide the total travel time associated with this event?",
                { heading: "6. Other personnel." },
                "The record names one unit: Hyde, Jake (56397), unit 9452. Three officers were present at my residence, one of whom has been identified as U.S. Forest Service Special Agent Matthew Oliver. Can OSP identify any other Oregon State Police personnel present at or associated with this event, and identify which officer was associated with the vehicle bearing Oregon license plate 731 QRV, which is visible in my recording of the officers departing?",
                "To be clear about why I am asking. The record establishes that a criminal-designated unit was dispatched to a private citizen at a location with no street address, on an event with no call type, no crime, and no action taken, with that citizen’s date of birth already in hand. Information of that kind — my identity and my location — was not available to a responding trooper independently. Someone provided it. The record does not say who, and “Officer Initiated” does not account for it.",
                "I am not asking OSP to characterize anything. I am asking OSP to explain the origin of specific information contained in its own record.",
                "I understand some of this may need to be processed as a new records request rather than as correspondence, and I am content for it to be handled either way. If any portion is withheld, I ask that the specific statutory exemption be cited for each withheld item.",
                "I would appreciate a response from the responding unit’s supervisor or the appropriate OSP official.",
                "Thank you.",
                "Robert Samuel White",
            ],
        },
        {
            id: "petition",
            date: "July 22, 2026",
            kind: "petition",
            title: "Petition to the Attorney General",
            body: [
                "On July 22, 2026, I filed a Petition for Public Records Order with the Oregon Attorney General under ORS 192.411, ORS 192.324(6), and ORS 192.407, asking the Attorney General to order Oregon State Police to complete its response to PR27478.",
                "The petition asks the Attorney General to require Oregon State Police to state, for each category, whether it holds responsive records; to produce them or cite the specific exemption for each withholding; to describe the search; to state whether the March 24 dispatch communications still exist; to rule on the fee waiver; and to impose the penalty available under ORS 192.407 for undue delay. The petition and its twenty-five exhibits are below.",
            ],
            docs: [
                { label: "AG Petition, PR27478", href: "/osp-ag-petition-pr27478.pdf" },
                { label: "Petition Exhibits 1–25", href: "/osp-ag-petition-exhibits-pr27478.pdf" },
            ],
        },
        {
            id: "forest-service",
            date: "July 24, 2026",
            kind: "letter",
            title: "Forest Service Statement",
            from: "Michele Holman, District Ranger, U.S. Forest Service, Central Coast Ranger District",
            body: [
                "On July 24, 2026, Michele Holman, District Ranger for the Central Coast Ranger District of the Siuslaw National Forest, which includes the land where I live and work as caretaker, wrote to me about the “FOR THE FOREST SERVICE” comment in the dispatch record:",
                {
                    quote: [
                        "Mr. White—",
                        "I am glad that you were able to get the documents you request from the Oregon State Patrol. Regarding the CAD entry stating, “FOR THE FOREST SERVICE,” I am unsure why that wording appears, as the Forest Service did not initiate the interview. The agency’s involvement was limited to assisting OSP by providing access and guiding them to the Siltcoos Work Center. This is standard practice, as OSP does not have keys to Forest Service gates, work centers, or other secured facilities. Our law enforcement officer accompanied them solely to facilitate entry and ensure they reached the correct location.",
                        "I hope this clarifies any confusion about the Forest Service’s role.",
                        "Employees in the Reedsport Office have shared positive feedback regarding your work as a volunteer, and I am pleased to hear that. I trust your experience with District staff has been positive, and I look forward to continuing a strong and productive working relationship.",
                        "Michele Holman, District Ranger, Central Coast Ranger District, Siuslaw National Forest",
                    ],
                },
                "I filed this letter with the Attorney General as Exhibit 26, supplementing the petition.",
            ],
        },
        {
            id: "reopening",
            date: "July 27, 2026",
            kind: "supplement",
            title: "Oregon State Police reopens PR27478",
            body: [
                "On July 27, 2026, five days after I filed the petition, Oregon State Police reopened PR27478. The Department’s records unit wrote, in full:",
                { quote: "A thorough review of your request has resulted in the finding of additional records, not in our system at the time of the original request. We are reopening your request for records, and will provide the records, once collected, and reviewed. We estimate this process to take 3 weeks." },
                "I filed a second supplemental filing with the Attorney General in response. It and its exhibits, the reopening notice and my reply, are below.",
            ],
            docs: [
                { label: "Second Supplemental Filing — PR27478", href: "/osp-ag-supplement-2-pr27478.pdf" },
                { label: "Supplemental Exhibits 26–28", href: "/osp-ag-supplement-2-exhibits-pr27478.pdf" },
            ],
        },
    ],
};

export const THREADS: RecordsThreadData[] = [OSP_THREAD];
