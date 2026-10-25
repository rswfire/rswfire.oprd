// app/(archive)/soliloquy/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

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
            previousPage={{ href: "/ethics", label: "A Note About Ethics" }}
            nextPage={{ href: "/displacement", label: "The Displacement Framework" }}
        >
            {movements.map((movement, i) => (
                <section key={movement.number} className={i === 0 ? "" : "mt-16 border-t border-gray-200 pt-10"}>
                    <div className="mb-8">
                        <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">
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
