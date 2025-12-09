// app/(archive)/page.tsx
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function OverviewPage() {
    const [activeTab, setActiveTab] = useState<'archive' | 'external'>('archive');

    return (
        <section className="w-full mx-auto mb-8">
            <div className="w-full p-8 rounded-xl bg-green-50 border border-green-300 text-base">

                {/* OPENING STATEMENT */}
                <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="text-lg font-bold mb-4">
                        THIS IS THE MAP. THIS IS THE PATTERN. THIS IS THE MIRROR.
                    </div>

                    <div className="mt-4">This archive is not for revenge.</div>
                    <div>It is for those who have been told they imagined it.</div>
                    <div>It is for those about to walk into something similar.</div>
                    <div>It is for the future, when denial no longer holds.</div>

                    <div className="mt-4">It does not ask for apology.</div>
                    <div>It does not ask for repair.</div>
                    <div>It exists so that the next distortion cannot pretend it was the first.</div>
                </div>

                {/* ESSENTIAL READING - TABBED */}
                <div className="mt-8 p-6 bg-gray-50 border border-gray-300 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">📚 Essential Reading</h2>

                    {/* Tab Headers */}
                    <div className="flex gap-2 mb-4 border-b border-gray-300">
                        <button
                            onClick={() => setActiveTab('archive')}
                            className={`px-4 py-2 font-medium transition-colors ${
                                activeTab === 'archive'
                                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Archive Documents
                        </button>
                        <button
                            onClick={() => setActiveTab('external')}
                            className={`px-4 py-2 font-medium transition-colors ${
                                activeTab === 'external'
                                    ? 'text-emerald-700 border-b-2 border-emerald-700'
                                    : 'text-gray-600 hover:text-gray-900'
                            }`}
                        >
                            Analysis & Context
                        </button>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'archive' && (
                        <div className="space-y-3">
                            <div>
                                <Link href="/open-letter" className="text-emerald-700 font-semibold hover:underline">
                                    Open Letter to Director Lisa Sumption
                                </Link>
                                <div className="text-sm text-gray-600">
                                    First public accountability attempt with comprehensive documentation
                                </div>
                            </div>
                            <div>
                                <Link href="/executive-summary" className="text-emerald-700 font-semibold hover:underline">
                                    Executive Summary
                                </Link>
                                <div className="text-sm text-gray-600">
                                    Complete overview of systematic abuse, coercive tactics, and institutional retaliation
                                </div>
                            </div>
                            <div>
                                <Link href="/day-use-meeting" className="text-emerald-700 font-semibold hover:underline">
                                    The Day-Use Meeting (March 5, 2025)
                                </Link>
                                <div className="text-sm text-gray-600">
                                    60+ minutes of recorded psychological pressure - "chew glass and swallow it"
                                </div>
                            </div>
                            <div>
                                <Link href="/permanent-dismissal" className="text-emerald-700 font-semibold hover:underline">
                                    Permanent Dismissal Letter
                                </Link>
                                <div className="text-sm text-gray-600">
                                    Written admission of retaliation for protected speech
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'external' && (
                        <div className="space-y-3">
                            <div>
                                <Link
                                    href="https://rswfire.com/fieldcraft/01K3QGHKJ9M4FK1TEJ8RS70D6R"
                                    className="text-emerald-700 font-semibold hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    On the Invisibility of Unpaid Labor Abuse →
                                </Link>
                                <div className="text-sm text-gray-600">
                                    Why volunteer abuse remains hidden and how documentation changes that
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="https://rswfire.com/fieldcraft/01K3RWVK2ZXARFNTEDCNHKMHCM"
                                    className="text-emerald-700 font-semibold hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    The Weight of Documentation →
                                </Link>
                                <div className="text-sm text-gray-600">
                                    What it costs to hold institutional memory when institutions choose erasure
                                </div>
                            </div>
                            <div>
                                <Link
                                    href="https://rswfire.com/fieldcraft/01K3SY18HCQFW9J1QB878TZ62J"
                                    className="text-emerald-700 font-semibold hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    The Harm That Didn't Have to Happen →
                                </Link>
                                <div className="text-sm text-gray-600">
                                    Tracing institutional choice through every opportunity for intervention
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Main Content */}
                <div className="pt-6 md:px-6 sm:px-0 text-base">

                    <div className="font-bold text-lg text-center">
                        This Archive Centers an Open Letter to the Director of Oregon State Parks
                    </div>

                    <div className="mt-4">
                        I entered the state parks system anticipating alignment —
                    </div>
                    <div className="ml-4">to protect the commons,</div>
                    <div className="ml-4">to hold space with integrity,</div>
                    <div className="ml-4">to support the land,</div>
                    <div className="ml-4">and to give freely without ownership.</div>

                    <div className="mt-4">That was the offer.</div>
                    <div>That was the signal I carried into the field.</div>

                    <div className="mt-4">
                        What I found instead was conflict I did not create — and had no choice but to navigate.
                    </div>
                    <div>
                        This archive documents their actions — and what those actions made visible.
                    </div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4">
                        On August 25, 2025, I sent a comprehensive{" "}
                        <Link href="https://rswfire.com/fieldcraft/01K3F8X412D5GEY1CXB4WRRPRK" className="underline">
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
                        <Link href="https://rswfire.com/fieldcraft/01K39AD52EG9K31B48YSTH3E7X" className="underline">
                            Public Records Request
                        </Link>
                        .
                    </div>
                    <div>
                        I received an automated acknowledgment, then a phone call attempting to narrow its scope.
                    </div>
                    <div>I declined and requested all further communication in writing.</div>

                    <div className="mt-4">Oregon Parks & Recreation responded 90 days later —</div>
                    <div className="ml-4">
                        only after I issued a formal demand for compliance and filed a complaint with the Governor's office.
                    </div>

                    <div className="mt-4">They claimed they had responded on August 29, 2025.</div>
                    <div>They provided a screenshot of an internal portal system.</div>
                    <div>I was never informed this system existed.</div>
                    <div>I had no access to it.</div>
                    <div>They sent no notification to the contact information I provided.</div>

                    <div className="mt-4">
                        For 90 days, they remained silent while I waited at the email and mailing address listed in my request.
                    </div>
                    <div>
                        When finally pressed, they provided a cost estimate in the tens of thousands of dollars.
                    </div>

                    <div className="mt-4">I withdrew the request.</div>
                    <div>
                        Not because I could not proceed — but because their response to the request had become the evidence.
                    </div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4 font-bold">This archive is now complete.</div>
                    <div>This is no longer just about what happened to me.</div>
                    <div>It is about how they responded to what happened to me.</div>

                    <div className="mt-4">It documents:</div>
                    <ul className="ml-8 list-disc">
                        <li>Systematic abuse of an unpaid volunteer (February-March 2025).</li>
                        <li>Explicit retaliation for protected speech, stated in writing (March 26, 2025).</li>
                        <li>Director-level acknowledgment without corrective action (August 25, 2025).</li>
                        <li>90+ days of public records law violation and institutional obstruction (August-November 2025).</li>
                        <li>A complete institutional response pattern when accountability was requested.</li>
                    </ul>

                    <div className="mt-4">It stands as:</div>
                    <ul className="ml-8 list-disc">
                        <li>A permanent record of institutional choice at every level of oversight.</li>
                        <li>A warning system for future volunteers.</li>
                        <li>Evidence for future accountability efforts.</li>
                        <li>Proof that awareness at the highest level did not produce protection.</li>
                    </ul>

                    <div className="mt-4">One day, something like this will happen again.</div>
                    <div>This archive will be there to meet it.</div>
                    <div>
                        To prove: they knew, they were told, they were given every opportunity to self-correct —
                    </div>
                    <div className="ml-4">
                        and at every level, they chose institutional protection over accountability.
                    </div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4">
                        <strong>Let me be very plainspoken about this</strong>:
                    </div>

                    <div className="mt-4">Humans did this to another human being.</div>
                    <div>Not policies. Not procedures. Not "organizational complexity."</div>
                    <div>Humans with names, with faces, with the capacity to choose differently.</div>

                    <div className="mt-4">They knew what they were doing while they were doing it.</div>
                    <div>They felt the weight of their choices in real time.</div>
                    <div>
                        They are responsible — whether they are willing to admit that to themselves or not.
                    </div>

                    <div className="mt-4">Kati Baker orchestrated it.</div>
                    <div>Ryan Warren executed it.</div>
                    <div>Logan weaponized friendship to enable it.</div>
                    <div>Allison Watson formalized the retaliation in writing.</div>
                    <div>Lisa Sumption acknowledged it and chose to protect them.</div>
                    <div>The agency violated public records law for 90+ days to avoid transparency about it.</div>

                    <div className="mt-4">Every person documented in this archive had the power to stop this.</div>
                    <div>Every person chose not to.</div>
                    <div>Every person who abused me remains in their positions.</div>
                    <div>No investigations occurred.</div>
                    <div>No protections were implemented.</div>

                    <div className="mt-4">Those choices are now permanent.</div>
                    <div>They don't fade with time.</div>
                    <div>They don't disappear with career advancement.</div>
                    <div>They don't get absolved by silence.</div>

                    <div className="mt-4">Each person documented here faced a choice.</div>
                    <div>That choice is now attached to their name.</div>
                    <div>This archive ensures neither is forgotten.</div>

                    <div className="mt-6 flex">
                        <div className="mr-2">—</div>
                        <div>
                            <div>Samuel White</div>
                            <div>Former Oregon State Parks Volunteer</div>
                            <div>December 1, 2025</div>
                        </div>
                    </div>
                </div>

                {/* AI Synthesis Footer */}
                <div className="mt-6 border-t border-gray-300 pt-6 text-center">
                    <div className="text-black text-center">
                        <Icon name="FlaskConical" className="mx-auto w-4 h-4 text-gray-600" />
                    </div>
                    <div className="text-gray-600 font-medium">
                        <Link
                            href="https://rswfire.com/synthesis/01KBPH3WR31AERARVEVV2K8VTP"
                            className="text-lg text-emerald-700 hover:underline"
                        >
                            Oregon State Parks: Volunteer Entry to Systematic Abuse and Dismissal →
                        </Link>
                    </div>
                    <div className="text-gray-800 text-sm">
                        <Link href="https://rswfire.com/synthesis/01KBPH3WR31AERARVEVV2K8VTP">
                            AI SYNTHESIS OF THIS PERIOD OF MY LIFE
                        </Link>
                    </div>
                </div>

                {/* CLOSING STATEMENT */}
                <div className="mt-6 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="mt-4"><em>I held my shape. Now hold yours</em>.</div>
                    <div className="mt-4">🙃</div>
                </div>

            </div>
        </section>
    );
}