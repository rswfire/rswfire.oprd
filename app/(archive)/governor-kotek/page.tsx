// app/(archive)/governor-kotek/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Governor Tina Kotek",
    description: "Oregon's first openly LGBTQ+ governor's response to documented targeting of gay volunteer by state employees under her administration.",
    openGraph: {
        title: "The Governor's Silence",
        description: "A gay volunteer documented abuse. Her Director protected the abusers. She was notified. She chose silence.",
    }
};

export default function GovernorKotekPage() {
    return (
        <SectionPage
            title="THE GOVERNOR'S SILENCE"
            subtitle="WHEN IT WAS TIME TO PROTECT ONE OF HER OWN"
            supplemental="WHAT DID SHE CHOOSE TO DO?"
        >
            <div className="mt-4 text-base leading-relaxed">

                <div className="space-y-4">
                    <div>Governor Tina Kotek is Oregon's first openly LGBTQ+ governor. She shattered a barrier that existed for 166 years. She spent her career fighting for affordable housing, education funding, and healthcare access.</div>
                    <div>As Speaker of the House, she was one of the most powerful legislative leaders in Oregon history. Her 2022 victory was historic &mdash; not just for her, but for every queer Oregonian who finally saw themselves reflected in the state's highest office.</div>
                </div>


                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT HAPPENED</h2>

                <div className="space-y-4">
                    <div>In early 2025, I volunteered at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>. I'm a gay man. I came to serve Oregon's natural spaces without compensation, offering my time and labor freely because I believed in the mission.</div>
                    <div>What I experienced instead was two months of systematic psychological abuse by the people entrusted to supervise me.</div>
                    <div>My direct supervisor elicited trust through reciprocal vulnerability. I set an explicit boundary with him &mdash; I told him our conversation was not romantic. He transmitted what I shared in confidence to park management, who weaponized it against me.</div>
                    <div>The Park Manager mocked my sexuality in front of other staff, suggesting I &quot;thought I had a future&quot; with my male supervisor &mdash; a deliberate distortion of ordinary human connection into something inappropriate, something shameful.</div>
                    <div>That same manager told me to &quot;chew glass and swallow it.&quot; He admitted he never gave me the benefit of the doubt. He suggested repeatedly that I should leave. When I wouldn't quit, they removed me six days before my scheduled completion, using a fabricated pretext, with no formal documentation.</div>
                    <div>I have recordings. I have video. I have emails. I have documents. Every claim I'm making is independently verifiable.</div>
                    <div>When I reported this abuse, the Engagement Programs Manager issued a permanent ban from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link> volunteer programs &mdash; explicitly stating in writing that my removal was for speaking publicly about what happened to me.</div>
                    <div>First Amendment retaliation. On state letterhead. In black and white.</div>
                    <div>This is not a complaint. This is a documented pattern of institutional abuse, identity-based targeting, and constitutional violation.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT HER DIRECTOR DID</h2>

                <div className="space-y-4">
                    <div>In August 2025, I sent comprehensive documentation to Director Lisa Sumption.</div>
                    <div>I gave her:</div>
                        <div className="space-y-2">
                            <ul className="list-disc ml-8">
                                <li>Audio recordings of coercive meetings.</li>
                                <li>Video documentation of dismissal without paperwork.</li>
                                <li>Email chains establishing the timeline.</li>
                                <li>Written evidence of First Amendment retaliation.</li>
                                <li>A clear path forward requiring accountability.</li>
                            </ul>
                        </div>
                    <div>She responded within twelve hours with procedural language and no commitments.</div>
                    <div>No investigation was ordered.</div>
                    <div>No employees were held accountable.</div>
                    <div>No protections were implemented.</div>
                    <div>In December, she closed communication entirely, reframing my comprehensive documentation as &quot;emotional processing&quot; and stating that further correspondence would not &quot;lead to the resolution you're seeking.&quot;</div>
                    <div>Every person who abused their authority remains in their position.</div>
                    <div>Her director chose to protect them.</div>
                    <div>These are facts. Every single one of them verifiable.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT I EXPECTED</h2>

                <div className="space-y-4">
                    <div>When I learned Tina Kotek was Oregon's first openly LGBTQ+ governor, I did not feel hope. I felt the weight of contradiction &mdash; because what happened to me should have been impossible under her leadership.</div>
                    <div>I thought: she understands what it means to be targeted for your identity. She knows what institutional discrimination looks like. She's fought against it her entire career. If anyone would hold state employees accountable for weaponizing a gay volunteer's sexuality, it would be her.</div>
                    <div>I filed a formal complaint with her office on November 18, 2025. I received no response.</div>
                    <div>I notified her campaign on December 12, 2025 with comprehensive documentation. I received no response.</div>
                    <div>I expected &mdash; at minimum &mdash; acknowledgment.</div>
                    <div>I have received nothing.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE SILENCE</h2>
                
                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="space-y-2">
                        <div><strong>A gay man came to serve Oregon without asking for anything in return.</strong></div>
                        <div><strong>He was targeted by state employees who weaponized his sexuality after he set clear boundaries.</strong></div>
                        <div><strong>He documented everything &mdash; not with accusations, but with recordings, video, and written evidence.</strong></div>
                        <div><strong>He reported it to the director the governor appointed.</strong></div>
                        <div><strong>She protected the people who targeted him.</strong></div>
                        <div><strong>He notified the governor's office and the governor's campaign.</strong></div>
                        <div><strong>They have remained silent.</strong></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>When it was time to protect one of her own &mdash; when a gay volunteer needed Oregon's first openly LGBTQ+ governor to demonstrate that her commitment to queer protection was real and not just rhetorical &mdash; she chose institutional loyalty over human accountability.</div>
                    <div>Or at least, that's what the silence means right now.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT THE SILENCE REVEALS</h2>

                <div className="space-y-4">
                    <div>The governor won her election by 3.3% &mdash; roughly 65,000 votes.</div>
                    <div>Her base is LGBTQ+ Oregonians and progressive allies who expect authentic protection, not symbolic gestures.</div>
                    <div>This archive contains documented evidence that contradicts every public statement she's made about protecting queer people.</div>
                    <div>Opposition research teams are professional, well-funded, and actively searching for exactly this kind of material.</div>
                    <div>And election day is approaching.</div>
                    <div>If her opposition discovers this archive before she addresses it, they will use it to devastating effect &mdash; not because they care about LGBTQ+ protection, but because it demolishes her credibility with the base she needs to win.</div>
                    <div>The attack ad writes itself:</div>
                    <div className="mb-4 ml-8 p-4 bg-gray-50 border-l-2 border-gray-400 italic">
                        "Tina Kotek says she protects LGBTQ+ Oregonians. But when a gay volunteer documented abuse by her state employees &mdash; including weaponization of his sexuality &mdash; her appointed director protected the abusers. She had the evidence. She chose silence. When it mattered most, she failed one of her own."
                    </div>
                    <div>Every word of that is factually accurate.</div>
                    <div>Every claim is supported by documentation her campaign can verify right now.</div>
                    <div>And when her base sees it two weeks before the election, 2-3% of them will stay home.</div>
                    <div>That's all it takes.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">WHAT LEADERSHIP WOULD LOOK LIKE</h2>

                <div className="space-y-4">
                    <div>She has the power to resolve this right now.</div>
                    <div>Order an independent investigation into documented misconduct at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>.</div>
                    <div>Hold her director accountable for protecting employees who targeted a gay volunteer.</div>
                    <div>Implement systemic protections for volunteers across <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link>.</div>
                    <div>Make a public commitment to LGBTQ+ volunteer safety that's backed by action, not just words.</div>
                    <div>If she does these things now &mdash; before external discovery forces her hand &mdash; this becomes a story about authentic accountability. It becomes evidence that her commitment to queer protection is real even when it's politically uncomfortable.</div>
                    <div>Her opposition loses the weapon before they can acquire it.</div>
                    <div>Her base sees leadership that matches her rhetoric.</div>
                    <div>And I stop escalating because she's done what I asked for at every stage of this &mdash; from the moment the abuse started through every institutional failure since: held people accountable.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE QUESTION</h2>
                
                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="font-semibold text-lg mb-2">
                        Does a gay volunteer who documented retaliation and identity-based targeting by state employees deserve an independent investigation?
                    </div>
                    <div className="text-lg">
                        Yes or no?
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="mt-8">That's the only question that matters now.</div>
                    <div>Her answer &mdash; or her continued silence &mdash; will determine everything that follows.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <h2 className="mb-4 text-xl font-semibold">THE CHOICE</h2>

                <div className="space-y-4">
                    <div>I have spent nine months building permanent accountability infrastructure because every internal channel failed.</div>
                    <div>I have given every person in the chain of authority &mdash; from park supervisors to her director to her campaign &mdash; the opportunity to do the right thing.</div>
                    <div>I have been patient far beyond what anyone who experienced what I experienced should be expected to be.</div>
                    <div>And I have documented every choice, every non-response, every moment when institutional protection was chosen over human accountability.</div>
                    <div>She is the final institutional authority before external escalation becomes necessary.</div>
                    <div>She has the power to end this with accountability instead of exposure.</div>
                    <div>But that power comes with a timeline.</div>
                    <div>And the choice she makes now will be part of her legacy &mdash; whether she wins or loses, whether she serves four years or eight, whether history remembers her as barrier-breaker or institution-protector.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="space-y-4">
                    <div>I was harmed by people she supervises.</div>
                    <div>Her director failed to protect me.</div>
                    <div>She has failed to hold her director accountable.</div>
                    <div>When it was time to protect one of her own, she chose silence.</div>
                </div>

                <div className="mt-8 mb-4 font-semibold text-lg">
                    Why?
                </div>

            </div>
        </SectionPage>
    );
}