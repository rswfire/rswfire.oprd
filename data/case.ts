// data/case.ts
//
// The homepage timeline: the case, in their documents. Each card is one
// moment in the sequence, in chronological order, and its body text
// carries the story for a reader arriving cold. A card that carries a
// `ulid` is a register document — the timeline shows an image of its first
// page (public/case/<ULID>.jpg, rendered from the published PDF) and opens
// it in the document viewer. A card that carries a `signalId` is an
// Autonomy Realms recording — the timeline shows its poster frame and
// plays it in place through the media proxy.
//
// To add a card: add an entry here, and if it is a document, render its
// thumbnail:
//   pdftoppm -jpeg -jpegopt quality=82 -f 1 -l 1 -scale-to-x 640 \
//     public<pdf path> public/case/<ULID> && rename to <ULID>.jpg

// "state" is the State of Oregon. "federal" is the U.S. Forest Service — a
// third party, not an accused agency: the landholder whose written account
// contradicts the state record. It gets its own visual class so the two are
// never conflated.
export type CaseAuthor = "state" | "recorded" | "federal" | "volunteer";

export interface CaseCard {
    id: string; // hash slug — the card is addressable as #case-<id>
    date: string; // display date
    d: string; // ISO date, for the rail
    author: CaseAuthor;
    authorLabel: string; // who produced the document or recording
    typeLabel: string; // EMAIL | LETTER | VIDEO | RECORDING | DISPATCH RECORD
    title: string;
    body: string; // the story at this moment, for a reader arriving cold
    quote?: string; // the document's own words
    ulid?: string; // register document — thumbnail + viewer
    signalId?: string; // Autonomy recording — poster + player
    duration?: string; // recordings only
    href: string; // where this moment lives in the archive
    hrefLabel: string;
}

export const CASE_CARDS: CaseCard[] = [
    {
        id: "trust",
        date: "March 2, 2025",
        d: "2025-03-02",
        author: "volunteer",
        authorLabel: "Written by the volunteer",
        typeLabel: "Email",
        title: "I saw the writing on the wall.",
        body: "One month into my service at Honeyman, trust was already broken. I had an entire year of other parks lined up. I could not simply leave, and I could not trust them with the relationships ahead of me.\n\nI wrote to the OPRD staff member responsible for the volunteers, named each failure, and committed to finishing my service professionally. I believed putting it on the record would protect my future at Oregon State Parks.\n\nEverything that follows is what the State of Oregon did in response to an unpaid volunteer who kept a record.",
        quote: "At every critical moment, you have failed to act with integrity.",
        ulid: "01JNBNSRN04NEM4MEZJG40Q3N5",
        href: "/evidence/trust",
        hrefLabel: "Evidence: Trust",
    },
    {
        id: "picnic-table",
        date: "March 5, 2025",
        d: "2025-03-05",
        author: "recorded",
        authorLabel: "Park Manager and Park Supervisor, OPRD",
        typeLabel: "Video · 62:12",
        title: "They pressured me to leave.",
        body: "Three days after my letter, the park manager and the park supervisor called me to a picnic table in the park’s public day-use area. Two officials with authority over my housing and my placements, one unpaid volunteer with no protections, no notice of the subject, and no one at my side. I recorded all sixty-two minutes.\n\nThe park manager worked from a handwritten list. He presented minor interactions as a pattern of concerning behavior, claimed things were in my emails that were not there, and could not be specific when I asked. He told me to chew glass and swallow it. He admitted he had never given me the benefit of the doubt. And he repeatedly suggested I leave.\n\nThe park supervisor was silent for the first nineteen minutes. Her first word was “tone.” Fifty minutes in, she reached back to a text message we had already resolved, and confirmed on tape that the interpretation she brought to that table was one she had invented.",
        signalId: "01JNK2TKG01JTERAMB7J6AKPK1",
        duration: "62:12",
        href: "/evidence/coercion",
        hrefLabel: "Evidence: Coercion",
    },
    {
        id: "photographer",
        date: "March 18, 2025",
        d: "2025-03-18",
        author: "state",
        authorLabel: "Park Supervisor, OPRD",
        typeLabel: "Email",
        title: "They sent someone to build a case against me.",
        body: "The picnic table had not gotten them what they needed. I was still there, and sixty-two minutes of their own conduct now existed on tape. The program manager’s answer to that tape was a rule: no recording without notification.\n\nThirteen days later, with every ranger away at meetings, a man with no uniform, no name, and no identification walked up to the yurts I was cleaning and photographed them. Then the questions: how did I like the park, and how was I being treated here.\n\nI reported him the same day. Within two hours the park supervisor had a story. Two days later she repeated it, unprompted.",
        ulid: "01JPTVM380TK5VF35A8TSM9EGJ",
        href: "/evidence/surveillance",
        hrefLabel: "Evidence: Surveillance",
    },
    {
        id: "dismissal",
        date: "March 24, 2025",
        d: "2025-03-24",
        author: "volunteer",
        authorLabel: "Recorded by the volunteer",
        typeLabel: "Video · 16:47",
        title: "Then they dismissed me.",
        body: "Four days after they sent the man with the camera, they used what they had built. The park manager called and dismissed me, six days before my term was due to end. They could not wait even six days.\n\nWithin the hour he was at my RV for the keys with twenty-four hours to vacate the site where I had lived and worked for nearly two months.\n\nAnd they put nothing on paper. Nothing to sign, nothing to appeal, nothing that would ever have to be defended. His words, on tape: “just the conversation we had.”",
        signalId: "01JQ51HAK8QR862VWGK0RKTFXN",
        duration: "16:47",
        href: "/evidence/dismissal",
        hrefLabel: "Evidence: Dismissal",
    },
    {
        id: "the-call",
        date: "March 25, 2025",
        d: "2025-03-25",
        author: "recorded",
        authorLabel: "Program Manager, OPRD",
        typeLabel: "Recording · 30:56",
        title: "Then they dismissed the evidence.",
        body: "Less than a day later, the program manager called from Salem. I told her I was still processing what had just happened and needed more time. She said okay, and in the next breath: “That dismissal is still moving forward.”\n\nThen she worked through the file they had built. Unnamed sources. A found journal. Conversations I never had, including words I never said. I answered every item with specifics, and every answer was filed as “perspective.”\n\nShe closed by promising a process, with a determination about my year of placements by Friday.",
        signalId: "01JQ59R3S0SHQ18E23BC0BM696",
        duration: "30:56",
        href: "/evidence/expulsion",
        hrefLabel: "Evidence: Expulsion",
    },
    {
        id: "exclusion",
        date: "March 26, 2025",
        d: "2025-03-26",
        author: "state",
        authorLabel: "Program Manager, OPRD",
        typeLabel: "Letter",
        title: "They put the retaliation in writing.",
        body: "The determination took one day. On department letterhead, over the program manager’s signature: dismissed from volunteer service statewide. The year of placements ahead of me, gone in a paragraph.\n\nThe grounds were stated in writing: the public comments made about staff. They named the speech itself as the offense, signed it, and mailed it.",
        quote: "…the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement.",
        ulid: "01JQA2WM60RX7MSJQ5QPFD8AR2",
        href: "/evidence/expulsion",
        hrefLabel: "Evidence: Expulsion",
    },
    {
        id: "open-letter",
        date: "August 25, 2025",
        d: "2025-08-25",
        author: "state",
        authorLabel: "Director Lisa Sumption, OPRD",
        typeLabel: "Email",
        title: "The director responds to an open letter.",
        body: "Five months later, I sent the Director of the agency an open letter documenting everything above. Her answer arrived within a day.\n\nIt thanked me for my service, said my voice mattered, and declined to respond to a single specific claim. No investigation followed.",
        quote: "While I cannot respond here to the specific claims you have outlined, I want to assure you that I take concerns about our volunteer program seriously.",
        ulid: "01K3HPAXBG8F4QZG4DJNDY5QY8",
        href: "/evidence/containment",
        hrefLabel: "Evidence: Containment",
    },
    {
        id: "closure",
        date: "December 8, 2025",
        d: "2025-12-08",
        author: "state",
        authorLabel: "Director Lisa Sumption, OPRD",
        typeLabel: "Letter",
        title: "Then the director dismisses the matter.",
        body: "What followed was mostly silence. My public records request sat unanswered for ninety days, drawing a formal notice and a complaint to the Governor. In December I wrote the Director directly. Her answer came the next morning: the documented record answered in therapeutic language, and the channel closed.",
        quote: "I can see that this has been deeply painful for you… I hear the frustration and hurt in your words. …we’ve reached a point where I don’t believe further correspondence will lead to the resolution you’re seeking.",
        ulid: "01KBZ9S95G2W5B44TTGT6HA69N",
        href: "/evidence/containment",
        hrefLabel: "Evidence: Containment",
    },
    {
        id: "collier",
        date: "February 13, 2026",
        d: "2026-02-13",
        author: "state",
        authorLabel: "Deputy Director J.R. Collier, OPRD",
        typeLabel: "Letter",
        title: "The deputy director tries to isolate me.",
        body: "In January, I sent the agency formal notice of First Amendment retaliation: dismissal and statewide exclusion for protected speech. Three weeks later the Deputy Director answered without addressing a word of it. He instructed me to stop writing to agency staff. I refused the same day. No official has authority over what a citizen may say to his own government.",
        quote: "Please do not communicate further with [Program Manager] or other OPRD staff, and please do not expect any responses from them.",
        ulid: "01KHCRFBDG3DMYZSSTGV5WC7E7",
        href: "/evidence/containment",
        hrefLabel: "Evidence: Containment",
    },
    {
        id: "police",
        date: "March 24, 2026",
        d: "2026-03-24",
        author: "recorded",
        authorLabel: "Oregon State Police",
        typeLabel: "Video · 0:55",
        title: "The police show up at my door.",
        body: "Exactly one year after the dismissal, police came through a locked gate posted against public access, onto the federal land where I live and work as caretaker, and knocked on my door. Three officers, no agency identified, concerned about what I was posting online.\n\nI declined to speak without an attorney and closed my door. I recorded them leaving.",
        signalId: "01KMFMJW809QNR8PVTXT8HAAG7",
        duration: "0:55",
        href: "/evidence/police",
        hrefLabel: "Evidence: Police Intimidation",
    },
    {
        id: "cad",
        date: "March 24, 2026",
        d: "2026-03-24",
        author: "state",
        authorLabel: "Oregon State Police",
        typeLabel: "Dispatch record",
        title: "The state’s record blames the forest service.",
        body: "I pursued the record of that visit. The state police answered first that a search identified no records. Ten days later, a record existed, behind a fee. Three months after that, they released it in full.\n\nOfficer-initiated. No call type. Priority low. No action taken. Unit type: Criminal. My date of birth, entered ten days before I gave it to them. And the comment field claims who the visit was for.",
        quote: "FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE",
        ulid: "01KXGXZNCREXD3GRQ2PJ4MGAP0",
        href: "/evidence/police",
        hrefLabel: "Evidence: Police Intimidation",
    },
    {
        id: "ranger",
        date: "July 24, 2026",
        d: "2026-07-24",
        author: "federal",
        authorLabel: "District Ranger, U.S. Forest Service",
        typeLabel: "Letter",
        title: "The forest service demonstrates accountability.",
        body: "The state record said the visit was for the Forest Service, the federal agency whose land I live on and care for. They are not a party to any of this. I asked them directly, in writing. The district ranger’s answer:",
        quote: "…the Forest Service did not initiate the interview. The agency’s involvement was limited to assisting OSP by providing access…",
        ulid: "01KYAG3J7GMK1RV66MTGQ2VFN8",
        href: "/accountability/usfs",
        hrefLabel: "USFS accountability",
    },
    {
        id: "records-exist",
        date: "August 11, 2026",
        d: "2026-08-11",
        author: "state",
        authorLabel: "Oregon State Police",
        typeLabel: "Letter",
        title: "The state police continue to block the record.",
        body: "In April they said no records existed. Ten days later, one did: the CAD record, for a $12.50 fee by check or money order. In July they released it at no charge. I asked the questions the record itself raises: the source of my date of birth, the source of the location, my name in the caller field of an officer-initiated event, the identity of the other officers. The answers never came, and I petitioned the Attorney General.\n\nFive days after the petition, the Department found additional records \u201cnot in our system at the time of the original request\u201d and reopened the request. In August it identified what it holds: incident reports and attachments, officer notes, dispatch records, electronic communications, and body camera video of the encounter, withheld. Processing was conditioned on $157.50 before any work begins.\n\nI paid the fee. Their Risk office has acknowledged a litigation hold over the records of the event. They are in their window now, to produce or to assert.",
        quote: "Body Cam Video – Body Cam video will be withheld pursuant to ORS 192.345(40).",
        ulid: "01KZS0AAY88AYPJ32PDEZABW03",
        href: "/accountability/osp",
        hrefLabel: "OSP accountability",
    },
];
