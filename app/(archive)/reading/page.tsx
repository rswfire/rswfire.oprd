// app/(archive)/selected-reading/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Selected Reading",
    description: "Transmissions from the interior record. Who was building the archive and why.",
};

export default function SelectedReadingPage() {
    return (
        <SectionPage
            title="SELECTED READING"
            subtitle="FROM THE INTERIOR RECORD"
        >

            <div className="mt-4">
                The archive documents what they did.
            </div>
            <div className="mt-4">These transmissions document who was building it and why.
            </div>

            <div className="mt-8 space-y-4">

                {/* THE COMPASS */}
                <Link
                    href="https://rswfire.com/signal/01KKD32X00FHMNP5MDZQ1N1HP2"
                    className="group block border border-gray-200 rounded-lg p-6 bg-white transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-sm"
                    target="_blank"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold group-hover:text-emerald-600 transition-colors duration-200">March 11, 2026</div>
                            <h2 className="text-xl font-bold mt-1 text-gray-900">The Compass</h2>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-emerald-600 whitespace-nowrap ml-4 mt-1 transition-colors duration-200">
                            Read →
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                        Written the day the final correspondence was sent. On what it means to follow what is true before you have language for that process. On building from whatever reality provides — including $7, a domain, and an institution with state authority arrayed against you.
                    </div>
                    <div className="mt-4 text-sm italic text-gray-400 border-l-2 border-gray-200 group-hover:border-emerald-400 pl-3 transition-colors duration-200">
                        "The compass doesn't wait for conditions to be right. It just points. And I just follow."
                    </div>
                </Link>

                {/* STORMCHASER'S SOLILOQUY II */}
                <Link
                    href="https://rswfire.com/signal/01KK1G9NG0DN009HPGW9N4E2VB"
                    className="group block border border-gray-200 rounded-lg p-6 bg-white transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-sm"
                    target="_blank"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold group-hover:text-emerald-600 transition-colors duration-200">March 6, 2026</div>
                            <h2 className="text-xl font-bold mt-1 text-gray-900">Stormchaser&apos;s Soliloquy II: Proof of Life</h2>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-emerald-600 whitespace-nowrap ml-4 mt-1 transition-colors duration-200">
                            Read →
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                        Written five days before the final correspondence. On saying okay into a recording after she hung up — and meaning: I know exactly what comes next. On anticipatory documentation. On Cascadia. On the Siltcoos at the end of a day where spring was coming and nothing was resolved and everything was true.
                    </div>
                    <div className="mt-4 text-sm italic text-gray-400 border-l-2 border-gray-200 group-hover:border-emerald-400 pl-3 transition-colors duration-200">
                        "That is the superpower. Not resolution. Knowing."
                    </div>
                </Link>

                {/* THE STORY OF HONEYMAN */}
                <Link
                    href="https://rswfire.com/signal/01JQ7VZB00NEQK4NYZMW5WYW04"
                    className="group block border border-gray-200 rounded-lg p-6 bg-white transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-sm"
                    target="_blank"
                >
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-gray-400 font-semibold group-hover:text-emerald-600 transition-colors duration-200">March 26, 2025</div>
                            <h2 className="text-xl font-bold mt-1 text-gray-900">The Story of Honeyman</h2>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-emerald-600 whitespace-nowrap ml-4 mt-1 transition-colors duration-200">
                            Read →
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-600 leading-relaxed">
                        The original archive. Written the day of expulsion — before the evidentiary structure, before the domain, before oprdvolunteerabuse.org existed. The story as it was first written, when all he had was the record and somewhere to put it. This is where the documentation began.
                    </div>
                    <div className="mt-4 text-sm italic text-gray-400 border-l-2 border-gray-200 group-hover:border-emerald-400 pl-3 transition-colors duration-200">
                        "I had already built the archive."
                    </div>
                </Link>

                {/* STORMCHASER'S SOLILOQUY I — PLACEHOLDER */}
                <div className="border border-gray-100 rounded-lg p-6 bg-white opacity-50">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs uppercase tracking-widest text-gray-300 font-semibold">2025</div>
                            <h2 className="text-xl font-bold mt-1 text-gray-400">Stormchaser&apos;s Soliloquy I</h2>
                        </div>
                        <span className="text-sm text-gray-300 whitespace-nowrap ml-4 mt-1">
                            Coming →
                        </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-400 leading-relaxed">
                        The poem that became evidence. Written before Honeyman. Sent to a volunteer coordinator as an explanation of why the coast mattered — why it was worth moving into an RV and driving across the country for. Used at the coercion meeting as an attempt to establish inappropriate boundaries. It was a poem about the ocean.
                    </div>
                </div>

            </div>

        </SectionPage>
    );
}
