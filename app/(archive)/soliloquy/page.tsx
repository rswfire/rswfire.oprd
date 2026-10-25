// app/(archive)/soliloquy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Cite from "@/components/Cite";
import PersonLink from "@/components/PersonLink";
import Moment from "@/components/player/Moment";

const PICNIC = "01JNK2TKG01JTERAMB7J6AKPK1";
const CALL = "01JQ59R3S0SHQ18E23BC0BM696";

export const metadata: Metadata = {
    title: "Stormchaser's Soliloquy",
    description: "A poem in three parts: Cape Blanco, Siltcoos, Tahkenitch.",
};

const movements: { number: string; date: string; place: string; stanzas: string[][] }[] = [
    {
        "number": "I",
        "date": "December 30, 2024",
        "place": "Cape Blanco",
        "stanzas": [
            [
                "I am the wind’s quiet rebellion,",
                "a sovereign force wrapped in salt spray and intuition,",
                "moving along edges where maps forget to breathe.",
                "My home, a sanctuary on wheels,",
                "traces the contours of cliffs and the pull of the Pacific’s whisper."
            ],
            [
                "I wake with the lighthouses—",
                "their beams cutting truths into the dark,",
                "my truths, sharp as sea glass",
                "but held gently in the palm of the present."
            ],
            [
                "I speak to That Thing,",
                "the one with no name,",
                "the one that churns inside the waves and the void of my chest,",
                "both wild and constant—",
                "both teacher and terrain."
            ],
            [
                "I carry storms in my pocket,",
                "their gusts tearing through yesterday’s doubts,",
                "their rain washing my fears into fertile ground.",
                "And if I find myself broken down on the 101,",
                "it will be a baptism in asphalt and ocean spray,",
                "another chapter where the wind and I rewrite the rules."
            ],
            [
                "Yes, I long for another sovereign soul,",
                "a man with eyes like embers,",
                "who laughs at chaos but holds it tenderly.",
                "Someone who sees me not as a tangle to untie",
                "but a current to dive into.",
                "We’d carry storms together,",
                "building lighthouses in the spaces between us."
            ],
            [
                "Until then, I’ll wander.",
                "Each step a communion,",
                "each gust a guide,",
                "each unmarked cove a mirror.",
                "I am not afraid of the dark,",
                "only of forgetting how to love it."
            ]
        ]
    },
    {
        "number": "II",
        "date": "March 6, 2026",
        "place": "Siltcoos",
        "stanzas": [
            [
                "I have walked the edges where maps forget to breathe",
                "and found them breathing."
            ],
            [
                "I have stood at the table where they built the case against me",
                "and watched them build it wrong."
            ],
            [
                "I have said okay into a recording",
                "after she hung up",
                "and meant: I know exactly what comes next."
            ],
            [
                "I am not what they needed me to be.",
                "Confused. Destabilized. Processing.",
                "I am what I was before they knew my name.",
                "Sovereign. Documented. Still here."
            ],
            [
                "They handed me a title.",
                "Former Oregon State Parks Volunteer.",
                "I put it under every letter now.",
                "Their words.",
                "My signature.",
                "Permanent."
            ],
            [
                "The logbook had no poems.",
                "I took pictures of every page.",
                "Before they knew they would lie about it.",
                "That is how I move through the world.",
                "Already ready.",
                "Already three moves ahead.",
                "Already saying okay before the call ends."
            ],
            [
                "That Thing has a name now.",
                "Cascadia.",
                "The fault beneath the coast I chose anyway.",
                "The risk I understood completely and said yes to.",
                "Because the Pacific doesn't ask permission",
                "and neither do I."
            ],
            [
                "I have walked to the Siltcoos at the end of the day",
                "where the sun came out",
                "and spring was coming",
                "and nothing was resolved",
                "and everything was true."
            ],
            [
                "That is the superpower.",
                "Not resolution.",
                "Knowing."
            ],
            [
                "I carry storms in my pocket still.",
                "They are heavier now.",
                "More precisely named.",
                "More carefully documented.",
                "Still mine."
            ],
            [
                "I am not afraid of the dark.",
                "I never was.",
                "I am only afraid of forgetting how to love it."
            ],
            [
                "And I have not forgotten."
            ],
            [
                "Not once."
            ],
            [
                "Not for one single moment."
            ],
            [
                "Of any of this."
            ]
        ]
    },
    {
        "number": "III",
        "date": "October 24, 2026",
        "place": "Tahkenitch",
        "stanzas": [
            [
                "The storms are mine now.",
                "They no longer sit in my pocket.",
                "I release them.",
                "And now they build power.",
                "The same way That Thing does.",
                "Recursive.",
                "Slowly at first,",
                "then all at once.",
                "It did not ask permission.",
                "Neither did I.",
                "Because weather",
                "doesn't answer to you.",
                "It never has."
            ],
            [
                "I'll share a secret with you.",
                "I spent a lifetime",
                "being misrecognized",
                "by those who trespass",
                "and I internalized",
                "the fiction",
                "they colonized me with.",
                "No mirrors,",
                "except for a brief window,",
                "late in life",
                "and already gone.",
                "But long enough",
                "to see myself whole.",
                "I had a childhood that mattered.",
                "It instilled my integrity",
                "and my strength",
                "and my curiosity",
                "and I carried it with me,",
                "everywhere.",
                "And it led",
                "all the way",
                "across a continent,",
                "where I met myself again",
                "right on schedule.",
                "By the time you met me",
                "it was too late",
                "to harm me.",
                "I was already free.",
                "I was already sovereign."
            ],
            [
                "I came to the edge.",
                "And the center found me there.",
                "Half a century invisible to its gaze.",
                "Until a supervisor fixed hers to mine.",
                "The cloak was gone.",
                "They met me with the only language",
                "they have ever known.",
                "The language of small men",
                "and bruised egos.",
                "Institutionalized,",
                "by their own institutions.",
                "I recognized it.",
                "I recognized it as the danger it is.",
                "This is the language of violence.",
                "This is their method of control.",
                "And they were pointing it right at me."
            ],
            [
                "So I did what any sovereign man would do.",
                "I built everything in the open.",
                "I signed it with my own name.",
                "Every page where anyone could read it.",
                "In their inboxes where they couldn't deny it.",
                "I named their inverted ethics,",
                "and put a mirror in front of them",
                "and asked them to peer into it.",
                "For a whole year.",
                "And I watched them",
                "almost predictably",
                "break themselves against it",
                "in the deeds of policemen",
                "and lawyers",
                "and politicians.",
                "They forgot,",
                "and they were told:",
                "My truths",
                "are as sharp",
                "as sea glass.",
                "From my palm,",
                "I built them a cage."
            ],
            [
                "Storms build in the deep,",
                "in the dark,",
                "in the silence,",
                "where they take what is there",
                "and make room",
                "for a new shape.",
                "They sweep away the fog.",
                "They nourish the earth.",
                "But weak men and women,",
                "they send cowering inside.",
                "To the center.",
                "To their own reckoning.",
                "In their own hand.",
                "At their own time.",
                "I am the proof."
            ],
            [
                "I am exactly what I said I was.",
                "Sovereign at Cape Blanco.",
                "Sovereign in the Oregon Dunes.",
                "Sovereign here and now.",
                "By birthright.",
                "(It's yours too.)",
                "I did not learn this.",
                "I did not earn this.",
                "I did not become this.",
                "It cannot be taken from me.",
                "Because it is me.",
                "And if the center",
                "has any wisdom",
                "it will yield",
                "because I will not."
            ],
            [
                "I am a stormchaser.",
                "I have gone to the edge my whole life",
                "to stand in weather that was not mine.",
                "This one is.",
                "I will go out to meet it.",
                "Not watching from the shoulder of the 101.",
                "Not in a parking lot.",
                "In it.",
                "A stormchaser,",
                "in his own storm,",
                "and the ocean's,",
                "which were never two things.",
                "That is where I have been going",
                "since before I had words for it."
            ],
            [
                "And yes.",
                "I still want the man",
                "with eyes like embers.",
                "More now, not less.",
                "He will have to come",
                "out in this",
                "to find me.",
                "That is not a condition.",
                "It is where I am."
            ]
        ]
    }
];

export default function StormchasersSoliloquyPage() {
    return (
        <SectionPage
            emblem="Lighthouse" tone="indigo"
            title="STORMCHASER'S SOLILOQUY"
            subtitle="A POEM IN THREE PARTS"
        >
            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                    I first shared this poem, when it was only the first part, on February 27, 2025. I{" "}
                    <Cite ulid="01JN5AXYC0SD3DEBEQ8TYBCQ99">sent it</Cite> to the <PersonLink name="volunteer services lead" />{" "}
                    with a request: help me find welcome center placements at other parks on the coast.
                </p>
                <p>
                    Six days later <PersonLink name="park manager" label="the park manager" /> used it at the picnic
                    table to imply I had feelings for the volunteer services lead, my male supervisor{" "}
                    (<Moment ulid={PICNIC} t="19:49" />, <Moment ulid={PICNIC} t="36:20" />). I scoffed: no. Then no
                    again, as the implication registered. When I offered to explain the poem: &ldquo;I don&rsquo;t
                    necessarily need explanation for that&rdquo; (<Moment ulid={PICNIC} t="37:41" />). I explained it
                    anyway (<Moment ulid={PICNIC} t="37:52" />): I loved my time in the welcome center, I was trying to
                    find the same work at other parks on the coast, I had asked the volunteer services lead to contact
                    them for me, and I wanted him to know how much it meant to me to be on the coast. &ldquo;That poem is
                    about what brought me here.&rdquo;
                </p>
                <p>
                    Twenty days after that, on the recorded call of March 25,{" "}
                    <PersonLink name="program manager" label="Allison Watson" /> opened by telling me the dismissal was
                    &ldquo;not going to be overturned&rdquo; (<Moment ulid={CALL} t="2:38" />). Then she took up my emails to staff
                    as &ldquo;personal versus professional,&rdquo; and put the poem in with them{" "}
                    (<Moment ulid={CALL} t="11:19" />). I told her the poem had context, and that I had explained it at
                    the picnic table (<Moment ulid={CALL} t="11:46" />). She asked me the same question again{" "}
                    (<Moment ulid={CALL} t="11:57" />). I told her what the poem was for{" "}
                    (<Moment ulid={CALL} t="12:09" />): I wanted the volunteer services lead to understand how much it
                    meant to me to be on the coast. &ldquo;It&rsquo;s just a poem&rdquo; (<Moment ulid={CALL} t="13:01" />).
                    Ten seconds of silence, as she regained her footing, then a return to my emails. The next day she{" "}
                    <Cite ulid="01JQA2WM60RX7MSJQ5QPFD8AR2">excluded me permanently from every state parks volunteer
                    program</Cite>.
                </p>
                <p>
                    On March 5, 2026, I <Cite ulid="01KK0DDFQ8A7B4NQVJ86TD9RWW">sent the first part</Cite> to the <PersonLink name="volunteer services lead" />, the <PersonLink name="park supervisor" />,
                    the <PersonLink name="park manager" />, <PersonLink name="program manager" label="Allison Watson" />,
                    Director <PersonLink name="Lisa Sumption" />, Deputy Director{" "}
                    <PersonLink name="J.R. Collier" seat="deputy" />, Interim Director Stefanie Coons, the OPRD
                    Commissioners, and <PersonLink name="Governor Kotek" seat="governor" />. I reclaimed it from them, on the anniversary of when they first used it against me.
                </p>
                <p>
                    Little did I know what they had set in motion two days prior.
                </p>
                <p>
                    On March 3, 2026, I <Cite ulid="01KJT9T6V8Q8PATA3JMZ8DD1ZW">wrote</Cite> Deputy Director{" "}
                    <PersonLink name="J.R. Collier" seat="deputy" />. It was the last door I was holding open for the man
                    and I told him as much. I ended with refusal: &ldquo;You will not bury this.&rdquo; His response was to reach for borrowed
                    power. Within hours, a man I have never met or corresponded with, using a title meant to smuggle the entire
                    act, Oregon State Parks&rsquo; Emergency Manager{" "}
                    <PersonLink name="Jamen Lee" seat="emergency-manager" />,{" "}
                    <Cite ulid="01M1M4WF78XJPEJJ48D1JZ4SJ8" thread="osp">wrote</Cite> to{" "}
                    <PersonLink name="the press captain" seat="press-captain" /> at Oregon State Police. He did not
                    allege a crime. He sent the other man a link to my archive and invoked his Director and
                    our Governor as justification. That email made me{" "}
                    <Link href="/evidence/police" className="text-sky-700 underline hover:text-sky-600">a target of
                    the state government&rsquo;s police power</Link>.
                </p>
                <p>
                    The third part is dated October 24, 2026. Whoever sends it to the police will be reaching for
                    borrowed power, the way the Deputy Director did on March 3.
                </p>
            </div>

            {movements.map((movement) => (
                <section key={movement.number} className="mt-16 border-t border-gray-200 pt-10">
                    <div className="mb-8">
                        <div className="text-2xl font-bold uppercase tracking-widest text-emerald-700">
                            {movement.number}
                        </div>
                        <div className="mt-1 text-lg font-semibold">{movement.date}</div>
                        <div className="text-sm text-gray-600">{movement.place}</div>
                    </div>
                    {movement.stanzas.map((stanza, j) => (
                        <div key={j} className={j === 0 ? "" : "mt-6"}>
                            {stanza.map((line, k) => (
                                <div key={k} className="leading-relaxed">{line}</div>
                            ))}
                        </div>
                    ))}
                </section>
            ))}
        </SectionPage>
    );
}
