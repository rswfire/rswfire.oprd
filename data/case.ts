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
export type CaseAuthor = "state" | "federal" | "volunteer";

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
        title: "Trust.",
        body: "Two months into my term as a park host, after weeks of escalating pressure, I put it in writing — to the OPRD staff member responsible for the volunteers.",
        quote: "At every critical moment, you have failed to act with integrity.",
        ulid: "01JNBNSRN04NEM4MEZJG40Q3N5",
        href: "/accountability/oprd/01JNBNSRN04NEM4MEZJG40Q3N5",
        hrefLabel: "OPRD accountability",
    },
    {
        id: "picnic-table",
        date: "March 5, 2025",
        d: "2025-03-05",
        author: "volunteer",
        authorLabel: "Recorded by the volunteer",
        typeLabel: "Video · 62:12",
        title: "The picnic table",
        body: "Three days later, two managers sat me down at a picnic table in a public day-use area. No notice of what the meeting was, no representation. I recorded all sixty-two minutes. One manager’s advice for my situation: “chew glass and swallow it.”",
        signalId: "01JNK2TKG01JTERAMB7J6AKPK1",
        duration: "62:12",
        href: "/evidence/coercion",
        hrefLabel: "Coercion",
    },
    {
        id: "photographer",
        date: "March 20, 2025",
        d: "2025-03-20",
        author: "state",
        authorLabel: "Park Supervisor, OPRD",
        typeLabel: "Email",
        title: "The park supervisor’s account",
        body: "On March 18, a man with no uniform, no name, and no identification photographed the yurts while I cleaned them — and asked how leadership was treating me. I reported it the same day. The supervisor confirmed the explanation that day — an I.T. employee updating site photos — then wrote again, unprompted, two days later:",
        quote: "…it was indeed them who was out getting photos of yurts in A loop",
        ulid: "01JPTVM380TK5VF35A8TSM9EGJ",
        href: "/evidence/surveillance",
        hrefLabel: "Surveillance",
    },
    {
        id: "dismissal",
        date: "March 24, 2025",
        d: "2025-03-24",
        author: "volunteer",
        authorLabel: "Recorded by the volunteer",
        typeLabel: "Video · 16:47",
        title: "Dismissal",
        body: "Four days after that, I was dismissed — six days before my term was due to end. Keys collected within the hour. Twenty-four hours to vacate the park. I recorded it as it happened.",
        signalId: "01JQ51HAK8QR862VWGK0RKTFXN",
        duration: "16:47",
        href: "/evidence/dismissal",
        hrefLabel: "Dismissal",
    },
    {
        id: "the-call",
        date: "March 25, 2025",
        d: "2025-03-25",
        author: "state",
        authorLabel: "Program Manager, OPRD",
        typeLabel: "Recording · 30:56",
        title: "The call",
        body: "The next day, the program manager called from headquarters. The decision was already final before I was asked a single question.",
        quote: "That dismissal is still moving forward.",
        signalId: "01JQ59R3S0SHQ18E23BC0BM696",
        duration: "30:56",
        href: "/evidence/expulsion",
        hrefLabel: "Expulsion",
    },
    {
        id: "exclusion",
        date: "March 26, 2025",
        d: "2025-03-26",
        author: "state",
        authorLabel: "Program Manager, OPRD",
        typeLabel: "Letter",
        title: "The exclusion letter",
        body: "The next day, the letter arrived: excluded from the volunteer park host program statewide. The stated grounds — my public comments about staff.",
        quote: "…the public comments made about staff regarding your volunteer service, were not in line with expectations set forth in the agreement.",
        ulid: "01JQA2WM60RX7MSJQ5QPFD8AR2",
        href: "/evidence/expulsion",
        hrefLabel: "Expulsion",
    },
    {
        id: "open-letter",
        date: "August 25, 2025",
        d: "2025-08-25",
        author: "state",
        authorLabel: "Director Lisa Sumption, OPRD",
        typeLabel: "Email",
        title: "The Director’s answer",
        body: "Five months later, I sent the head of the agency an open letter documenting everything above. Her answer arrived within a day.",
        quote: "While I cannot respond here to the specific claims you have outlined, I want to assure you that I take concerns about our volunteer program seriously.",
        ulid: "01K3HPAXBG8F4QZG4DJNDY5QY8",
        href: "/evidence/containment",
        hrefLabel: "Containment",
    },
    {
        id: "closure",
        date: "December 8, 2025",
        d: "2025-12-08",
        author: "state",
        authorLabel: "Director Lisa Sumption, OPRD",
        typeLabel: "Letter",
        title: "The Director closes communication",
        body: "What followed was mostly silence. My public records request sat unanswered for ninety days, drawing a formal notice and a complaint to the Governor. In December I wrote the Director directly. Her answer came the next morning: the documented record answered in therapeutic language, and the channel closed.",
        quote: "I can see that this has been deeply painful for you… I hear the frustration and hurt in your words. …we’ve reached a point where I don’t believe further correspondence will lead to the resolution you’re seeking.",
        ulid: "01KBZ9S95G2W5B44TTGT6HA69N",
        href: "/evidence/containment",
        hrefLabel: "Containment",
    },
    {
        id: "collier",
        date: "February 13, 2026",
        d: "2026-02-13",
        author: "state",
        authorLabel: "Deputy Director J.R. Collier, OPRD",
        typeLabel: "Letter",
        title: "The Deputy Director’s letter",
        body: "In January, I sent the agency formal notice of First Amendment retaliation: dismissal and statewide exclusion for protected speech. Three weeks later the Deputy Director answered without addressing a word of it. He instructed me to stop writing to agency staff. I refused the same day. No official has authority over what a citizen may say to his own government.",
        quote: "Please do not communicate further with [Program Manager] or other OPRD staff, and please do not expect any responses from them.",
        ulid: "01KHCRFBDG3DMYZSSTGV5WC7E7",
        href: "/evidence/containment",
        hrefLabel: "Containment",
    },
    {
        id: "police",
        date: "March 24, 2026",
        d: "2026-03-24",
        author: "volunteer",
        authorLabel: "Recorded by the volunteer",
        typeLabel: "Video · 0:55",
        title: "Police at the gate",
        body: "Exactly one year after the dismissal, police came through a locked gate posted against public access, onto the federal land where I live and work as caretaker, and knocked on my door. Three officers, no agency identified, concerned about what I was posting online. I declined to speak without an attorney and closed my door. I recorded them leaving.",
        signalId: "01KMFMJW809QNR8PVTXT8HAAG7",
        duration: "0:55",
        href: "/evidence/police",
        hrefLabel: "Police Intimidation",
    },
    {
        id: "cad",
        date: "March 24, 2026",
        d: "2026-03-24",
        author: "state",
        authorLabel: "Oregon State Police",
        typeLabel: "Dispatch record",
        title: "CAD event SP26097765",
        body: "I pursued the record of that visit. The state police answered first that a search identified no records. Ten days later, a record existed, behind a fee. Three months after that, they released it in full. Officer-initiated. No call type. Priority low. No action taken. Unit type: Criminal. My date of birth, entered ten days before I gave it to them. And the comment field claims who the visit was for.",
        quote: "FOR THE FOREST SERVICE // FOLLOWUP INTERVIEW W/ ROBERT WHITE",
        ulid: "01KXGXZNCREXD3GRQ2PJ4MGAP0",
        href: "/evidence/police",
        hrefLabel: "Police Intimidation",
    },
    {
        id: "ranger",
        date: "July 24, 2026",
        d: "2026-07-24",
        author: "federal",
        authorLabel: "District Ranger Michele Holman, U.S. Forest Service",
        typeLabel: "Letter",
        title: "The District Ranger, in writing",
        body: "The state record said the visit was for the Forest Service — the federal agency whose land I live on and care for. They are not a party to any of this. I asked them directly, in writing. The District Ranger’s answer:",
        quote: "…the Forest Service did not initiate the interview. The agency’s involvement was limited to assisting OSP by providing access…",
        ulid: "01KYAG3J7GMK1RV66MTGQ2VFN8",
        href: "/accountability/usfs/01KYAG3J7GMK1RV66MTGQ2VFN8",
        hrefLabel: "USFS accountability",
    },
    {
        id: "records-exist",
        date: "August 11, 2026",
        d: "2026-08-11",
        author: "state",
        authorLabel: "Oregon State Police",
        typeLabel: "Letter",
        title: "The records identified",
        body: "So I kept asking the state police: for the video, the reports, the communications around the visit. In August they answered. Six categories of records exist, including body camera video of the encounter. The video is withheld.",
        quote: "Body Cam Video – Body Cam video will be withheld pursuant to ORS 192.345(40).",
        ulid: "01KZS0AAY88AYPJ32PDEZABW03",
        href: "/accountability/osp/01KZS0AAY88AYPJ32PDEZABW03",
        hrefLabel: "OSP accountability",
    },
];
