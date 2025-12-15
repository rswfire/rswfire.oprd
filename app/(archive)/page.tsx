// app/(archive)/page.tsx

import Link from "next/link";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto mb-8">
            <div className="w-full p-8 rounded-xl bg-green-50 border border-green-300 text-base">

                {/* OPENING STATEMENT */}

                <div className="mb-6 p-6 bg-emerald-50 border-l-4 border-emerald-700 rounded-r-lg">
                    <div className="text-lg sm:text-xl font-semibold leading-snug">
                        When evidence of queer targeting by state employees was presented,
                        Oregon’s leadership chose institutional protection over accountability.
                    </div>
                </div>

                <div className="mb-4 text-base sm:text-lg leading-relaxed">
                    In early 2025, I served as an unpaid volunteer at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>. What began as a routine volunteer assignment became two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link>. This archive documents those events and the subsequent responses of park leadership, agency executives, and the Governor’s office — with audio, video, and written evidence.
                </div>

                {/* Main Content */}

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="font-bold text-lg text-center tracking-wide">
                    THIS ARCHIVE CENTERS AN OPEN LETTER<br/>
                    TO THE DIRECTOR OF OREGON STATE PARKS &mdash; LISA SUMPTION
                </h2>

                <hr className="my-6 border-t border-gray-300" />

                <div className="text-base">

                    <div className="mt-4">
                        I entered the state parks system anticipating alignment &mdash;
                    </div>
                    <div className="ml-4">to protect the commons,</div>
                    <div className="ml-4">to hold space with integrity,</div>
                    <div className="ml-4">to support the land,</div>
                    <div className="ml-4">and to give freely without ownership.</div>

                    <div className="mt-4">That was the offer.</div>

                    <div className="mt-4">What I found instead was systematic abuse by those entrusted to supervise me.</div>
                    <div className="mt-4 sm:mt-0">This archive documents every decision they made when given the opportunity to stop.</div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4">
                        On August 25, 2025, I sent a comprehensive{" "}
                        <Link href="/lisa-sumption/open-letter" className="underline text-emerald-800 hover:text-emerald-600">
                            Open Letter to Director Lisa Sumption
                        </Link>
                        .
                    </div>

                    <div className="mt-4">It acknowledged her accomplishments.</div>
                    <div>It documented systemic abuse with evidence.</div>
                    <div>It named the power imbalance plainly.</div>
                    <div>It called for institutional protections for volunteers.</div>
                    <div>It outlined a clear path forward.</div>

                    <div className="mt-4">She responded within twelve hours.</div>
                    <div>Her reply:</div>
                    <ul className="ml-8 list-disc">
                        <li>Formally acknowledged receipt.</li>
                        <li>Offered no specific commitments.</li>
                        <li>Deferred responsibility to "appropriate channels."</li>
                        <li>Upheld institutional protection over volunteer accountability.</li>
                    </ul>

                    <div className="mt-4">
                        Earlier that week, I filed a{" "}
                        <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">
                            Public Records Request
                        </Link>
                        .
                    </div>
                    <div className="mt-4 sm:mt-0">I received an automated acknowledgment, then a phone call attempting to narrow its scope.</div>
                    <div className="mt-4 sm:mt-0">I declined and requested all further communication in writing.</div>

                    <div className="mt-4">Oregon Parks & Recreation Department responded 90 days later &mdash;</div>
                    <div className="ml-4">
                        only after I issued a formal demand for compliance.
                    </div>

                    <div className="mt-4">They claimed they had responded on August 29, 2025.</div>
                    <div>They provided <em>a screenshot</em> of an internal portal system as proof.</div>
                    <div>No email was sent to notify me.</div>
                    <div>No letter was mailed.</div>
                    <div>I was never told this portal system existed.</div>
                    <div>I had no access credentials.</div>

                    <div className="mt-4">
                        For 90 days, they remained silent while I waited at the email and mailing address listed in my request.
                    </div>
                    <div>
                        When finally pressed, they provided a cost estimate in the tens of thousands of dollars.
                    </div>

                    <div className="mt-4">I withdrew the request &mdash; their response had become the evidence.</div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4 text-lg font-bold">
                        Let me be very plainspoken about this:
                    </div>

                    <div className="mt-4 pl-4 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                        <div>Humans did this to another human being.</div>
                        <div>Not policies. Not procedures. Humans.</div>
                        <div>Humans with names, with faces, with the capacity to choose differently.</div>
                    </div>

                    <div className="mt-4">They made these decisions with the evidence in front of them.</div>
                    <div>They felt the weight of their choices in real time.</div>
                    <div>They are responsible &mdash; whether they are willing to admit that to themselves or not.</div>

                    <ul className="mt-4 space-y-2 sm:space-y-0 list-disc ml-6 sm:list-none sm:ml-0">
                        <li>
                            Kati Baker, Park Supervisor, <Link href="/how-it-started" className="underline text-emerald-800 hover:text-emerald-600">orchestrated it</Link>.
                        </li>
                        <li>
                            Ryan Warren, Park Manager, <Link href="/coercion" className="underline text-emerald-800 hover:text-emerald-600">executed it</Link>.
                        </li>
                        <li>
                            Logan Bliss, Volunteer Services Lead, <Link href="/trust-broken" className="underline text-emerald-800 hover:text-emerald-600">weaponized friendship to enable it</Link>.
                        </li>
                        <li>
                            Allison Watson, Engagement Programs Manager, <Link href="/expulsion" className="underline text-emerald-800 hover:text-emerald-600">formalized the retaliation in writing</Link>.
                        </li>
                        <li>
                            Lisa Sumption, Director, <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">acknowledged it and chose to protect them</Link>.
                        </li>
                        <li>
                            The agency violated public records law for 90+ days <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">to avoid transparency about it</Link>.
                        </li>
                    </ul>

                    <div className="mt-4">Every person documented in this archive had the power to stop this.</div>
                    <div>Every person chose not to.</div>
                    <div>Every person who abused their position remains in their position.</div>
                    <div>No investigations occurred.</div>
                    <div>No protections were implemented.</div>
                    <div>No one was held accountable.</div>

                    <div className="mt-4">Those choices are now permanent.</div>
                    <div>They don't fade with time.</div>
                    <div>They don't disappear because they refuse to act.</div>
                    <div>They don't get absolved by silence.</div>

                    <div className="mt-6 flex">
                        <div className="mr-2">&mdash;</div>
                        <div>
                            <div className="font-bold">Samuel White</div>
                            <div className="font-semibold text-gray-700">Former Oregon State Parks Volunteer</div>
                            <div className="text-gray-700">December 1, 2025</div>
                        </div>
                    </div>
                </div>

                {/* CLOSING STATEMENT */}

                <hr className="my-6 border-t border-gray-300" />

                <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="text-lg font-bold mb-4">
                        THIS IS THE MAP. THIS IS THE PATTERN. THIS IS THE MIRROR.
                    </div>

                    <div className="mt-4">This archive is not for revenge.</div>

                    <div className="mt-4">It is for those who have been told they imagined it.</div>
                    <div>It is for those about to walk into something similar.</div>
                    <div>It is for the future, when denial no longer holds.</div>

                    <div className="mt-4">It does not ask for apology.</div>
                    <div>It does not ask for repair.</div>
                    <div>It exists so that the next distortion cannot pretend it was the first.</div>
                </div>

                {/* OPEN SOURCE NOTICE */}
                <hr className="my-6 border-t border-gray-300" />

                <div className="text-base text-gray-700 tracking-tight">
                    <div className="text-md font-semibold text-gray-900 mb-2 underline">
                        This archive is open source and permanent.
                    </div>

                    <div className="mb-2">
                        The complete source code, documentation, and evidence structure are publicly available on <Link href="https://github.com/rswfire/rswfire.oprd" target="_blank" rel="noopener noreferrer" className="underline text-emerald-800 hover:text-emerald-600">GitHub</Link>. This ensures the archive cannot be silenced, cannot be altered without detection, and cannot disappear.
                        If this domain is ever taken down, the repository can be forked, rebuilt, and redeployed by anyone. The evidence is distributed. The accountability is permanent.
                    </div>

                    <div>
                        Other documentation projects are welcome to fork this codebase for their own institutional accountability archives under the Creative Commons Attribution-NoDerivatives 4.0 International license. <Link href="https://rswfire.com/contact" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Contact me</Link> if you need my assistance and I will try to help you.
                    </div>
                </div>

            </div>
        </section>
    );
}