// app/(archive)/governor-kotek/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "Governor Tina Kotek",
    description: "Oregon's first openly LGBTQ+ governor's response to documented targeting of gay volunteer by state employees under her administration.",
    openGraph: {
        title: "Governor Kotek: When It Was Time to Protect One of Your Own",
        description: "A gay volunteer documented abuse. Your Director protected the abusers. You were notified. You chose silence.",
    }
};

export default function GovernorKotekPage() {
    return (
        <SectionPage
            title="GOVERNOR TINA KOTEK"
            subtitle="WHEN IT WAS TIME TO PROTECT ONE OF YOUR OWN"
            supplemental="YOU CHOSE SILENCE"
        >
            <div className="mt-4 text-base leading-relaxed">
                <div className="font-semibold text-lg mb-4">
                    February 15, 2025
                </div>

                <div className="mb-4">
                    Governor Kotek,
                </div>

                <div className="mb-4">
                    I want to begin by acknowledging what you represent.
                </div>

                <div className="mb-4">
                    You are Oregon's first openly LGBTQ+ governor. You shattered a barrier that existed for 166 years. You've spent your career fighting for affordable housing, education funding, and healthcare access. As Speaker of the House, you were one of the most powerful legislative leaders in Oregon history. Your 2022 victory was historic — not just for you, but for every queer Oregonian who finally saw themselves reflected in the state's highest office.
                </div>

                <div className="mb-4">
                    I believed in what you represented. I still want to.
                </div>

                <div className="mb-4">
                    But I need you to understand what happened under your administration — and what you've chosen to do about it.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What Happened to Me
                </div>

                <div className="mb-4">
                    In early 2025, I volunteered at Honeyman State Park. I'm a gay man. I came to serve Oregon's natural spaces without compensation, offering my time and labor freely because I believed in the mission.
                </div>

                <div className="mb-4">
                    What I experienced instead was two months of systematic psychological abuse by the people entrusted to supervise me.
                </div>

                <div className="mb-4">
                    My direct supervisor elicited trust through reciprocal vulnerability. I set an explicit boundary with him — I told him our conversation was not romantic. He transmitted what I shared in confidence to park management, who weaponized it against me.
                </div>

                <div className="mb-4">
                    The Park Manager mocked my sexuality in front of other staff, suggesting I "thought I had a future" with my male supervisor — a deliberate distortion of ordinary human connection into something inappropriate, something shameful.
                </div>

                <div className="mb-4">
                    That same manager told me to "chew glass and swallow it." He admitted he never gave me the benefit of the doubt. He suggested repeatedly that I should leave. When I wouldn't quit, they removed me six days before my scheduled completion, using a fabricated pretext, with no formal documentation.
                </div>

                <div className="mb-4">
                    When I reported this abuse, citing my right to speak about my experience, your Engagement Programs Manager issued a permanent ban from all Oregon State Parks volunteer programs — explicitly stating in writing that my removal was for speaking publicly about what happened to me.
                </div>

                <div className="mb-4">
                    First Amendment retaliation. On state letterhead. In black and white.
                </div>

                <div className="mb-4">
                    I have recordings. I have video. I have emails. I have documents. Every claim I'm making is independently verifiable.
                </div>

                <div className="mb-4">
                    This is not a complaint. This is a documented pattern of institutional abuse, identity-based targeting, and constitutional violation.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What Your Director Did
                </div>

                <div className="mb-4">
                    In August 2025, I sent comprehensive documentation to Director Lisa Sumption — the woman you appointed to lead Oregon Parks & Recreation Department.
                </div>

                <div className="mb-4">
                    I gave her:
                </div>

                <ul className="list-disc ml-8 mb-4 space-y-2">
                    <li>Audio recordings of coercive meetings</li>
                    <li>Video documentation of dismissal without paperwork</li>
                    <li>Email chains establishing the timeline</li>
                    <li>Written evidence of First Amendment retaliation</li>
                    <li>A clear path forward requiring accountability</li>
                </ul>

                <div className="mb-4">
                    She responded within twelve hours with procedural language and no commitments.
                </div>

                <div className="mb-4">
                    No investigation was ordered.
                </div>

                <div className="mb-4">
                    No employees were held accountable.
                </div>

                <div className="mb-4">
                    No protections were implemented.
                </div>

                <div className="mb-4">
                    In December, she closed communication entirely, reframing my comprehensive documentation as "emotional processing" and stating that further correspondence would not "lead to the resolution you're seeking."
                </div>

                <div className="mb-4">
                    Every person who abused their authority remains in their position.
                </div>

                <div className="mb-4">
                    Your Director chose to protect them.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What I Expected From You
                </div>

                <div className="mb-4">
                    When I learned you were Oregon's first openly LGBTQ+ governor, I felt hope.
                </div>

                <div className="mb-4">
                    I thought: She understands what it means to be targeted for your identity. She knows what institutional discrimination looks like. She's fought against it her entire career. If anyone would hold state employees accountable for weaponizing a gay volunteer's sexuality, it would be her.
                </div>

                <div className="mb-4">
                    On December 12, 2025, I notified your campaign directly. I provided the full archive of documentation. I explained the electoral vulnerability this creates. I gave you the timeline and the stakes.
                </div>

                <div className="mb-4">
                    I expected — at minimum — acknowledgment.
                </div>

                <div className="mb-4">
                    I received nothing.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    The Question That Matters
                </div>

                <div className="mb-4">
                    Governor Kotek, I need you to sit with something:
                </div>

                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="font-semibold mb-2">
                        A gay man came to serve Oregon without asking for anything in return.
                    </div>
                    <div className="mb-2">
                        He was targeted by state employees who weaponized his sexuality after he set clear boundaries.
                    </div>
                    <div className="mb-2">
                        He documented everything — not with accusations, but with recordings, video, and written evidence.
                    </div>
                    <div className="mb-2">
                        He reported it to the Director you appointed.
                    </div>
                    <div className="mb-2">
                        She protected the people who targeted him.
                    </div>
                    <div className="mb-2">
                        He notified your campaign.
                    </div>
                    <div>
                        You remained silent.
                    </div>
                </div>

                <div className="mb-4 mt-6">
                    When it was time to protect one of your own — when a gay volunteer needed Oregon's first openly LGBTQ+ governor to demonstrate that her commitment to queer protection was real and not just rhetorical — you chose institutional loyalty over human accountability.
                </div>

                <div className="mb-4">
                    Why?
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What You Need to Understand
                </div>

                <div className="mb-4">
                    I'm not asking you to believe me over your Director.
                </div>

                <div className="mb-4">
                    I'm providing you with independently verifiable evidence that removes the need for belief.
                </div>

                <div className="mb-4">
                    I'm not asking for personal remedy. The harm already happened. What I'm asking for is institutional accountability that protects the next person.
                </div>

                <div className="mb-4">
                    I'm not threatening you. I'm giving you visibility into electoral vulnerability that already exists in public record, whether you acknowledge it or not.
                </div>

                <div className="mb-4">
                    And I need you to understand something about the political reality you're facing:
                </div>

                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="font-semibold mb-2">
                        You won your election by 3.3% — roughly 65,000 votes.
                    </div>
                    <div className="mb-2">
                        Your base is LGBTQ+ Oregonians and progressive allies who expect authentic protection, not symbolic gestures.
                    </div>
                    <div className="mb-2">
                        I have documented evidence that contradicts every public statement you've made about protecting queer people.
                    </div>
                    <div className="mb-2">
                        Opposition research teams are professional, well-funded, and actively searching for exactly this kind of material.
                    </div>
                    <div>
                        You have eleven months until election day.
                    </div>
                </div>

                <div className="mb-4 mt-6">
                    If your opposition discovers this archive before you address it, they will use it to devastating effect — not because they care about LGBTQ+ protection, but because it demolishes your credibility with the base you need to win.
                </div>

                <div className="mb-4">
                    The attack ad writes itself:
                </div>

                <div className="mb-4 ml-8 p-4 bg-gray-50 border-l-2 border-gray-400 italic">
                    "Tina Kotek says she protects LGBTQ+ Oregonians. But when a gay volunteer documented abuse by her state employees — including weaponization of his sexuality — her appointed Director protected the abusers. She had the evidence. She chose silence. When it mattered most, she failed one of her own."
                </div>

                <div className="mb-4">
                    Every word of that is factually accurate.
                </div>

                <div className="mb-4">
                    Every claim is supported by documentation your campaign can verify right now.
                </div>

                <div className="mb-4">
                    And when your base sees it two weeks before the election, 2-3% of them will stay home.
                </div>

                <div className="mb-4">
                    That's all it takes.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What Leadership Would Look Like
                </div>

                <div className="mb-4">
                    You have the power to resolve this right now.
                </div>

                <div className="mb-4">
                    Order an independent investigation into documented misconduct at Honeyman State Park.
                </div>

                <div className="mb-4">
                    Hold your Director accountable for protecting employees who targeted a gay volunteer.
                </div>

                <div className="mb-4">
                    Implement systemic protections for volunteers across Oregon State Parks.
                </div>

                <div className="mb-4">
                    Make a public commitment to LGBTQ+ volunteer safety that's backed by action, not just words.
                </div>

                <div className="mb-4">
                    If you do these things now — before external discovery forces your hand — this becomes a story about authentic accountability. It becomes evidence that your commitment to queer protection is real even when it's politically uncomfortable.
                </div>

                <div className="mb-4">
                    Your opposition loses the weapon before they can acquire it.
                </div>

                <div className="mb-4">
                    Your base sees leadership that matches your rhetoric.
                </div>

                <div className="mb-4">
                    And I stop escalating because you've done what I've been asking for since August: held people accountable.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What Silence Will Cost You
                </div>

                <div className="mb-4">
                    If you continue the path your Director chose — institutional protection over human accountability — here's what happens:
                </div>

                <div className="mb-4">
                    On February 15, 2026, I will contact media outlets, LGBTQ+ advocacy organizations, legislative oversight committees, and other external parties. This is not a threat. This is a timeline I've stated publicly and will follow through on.
                </div>

                <div className="mb-4">
                    Those contacts will generate coverage, organizational pressure, and institutional scrutiny you cannot control.
                </div>

                <div className="mb-4">
                    Opposition research — if they haven't found the archive already — will discover it during the resulting media attention or through their own systematic vetting. They will develop attack messaging and wait for maximum electoral impact.
                </div>

                <div className="mb-4">
                    When it surfaces publicly, every response option damages you:
                </div>

                <ul className="list-disc ml-8 mb-4 space-y-2">
                    <li><span className="font-semibold">"I wasn't aware"</span> — The archive proves you were notified</li>
                    <li><span className="font-semibold">"It's being investigated"</span> — Why did you wait until it became public?</li>
                    <li><span className="font-semibold">"I can't comment on personnel matters"</span> — This is constitutional violation and identity targeting</li>
                    <li><span className="font-semibold">Silence</span> — Validates every criticism in the archive</li>
                </ul>

                <div className="mb-4">
                    And while you're trying to manage the political fallout, your base — the LGBTQ+ Oregonians and allies who elected you — will be asking one simple question:
                </div>

                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg font-semibold text-lg">
                    "If she won't protect a gay volunteer with documented evidence, will she protect me?"
                </div>

                <div className="mb-4 mt-6">
                    The answer they arrive at determines whether they show up in November.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    A Personal Appeal
                </div>

                <div className="mb-4">
                    Governor Kotek, I don't want to be your opposition's research.
                </div>

                <div className="mb-4">
                    I don't want to see Oregon's first openly LGBTQ+ governor lose reelection because she protected the people who targeted one of her own.
                </div>

                <div className="mb-4">
                    I don't want the archive I built for accountability to become a weapon in the hands of people who don't actually care about queer protection.
                </div>

                <div className="mb-4">
                    But I also won't let institutional abuse go unaddressed because it's politically inconvenient for you.
                </div>

                <div className="mb-4">
                    So I'm asking you directly, as one queer person to another:
                </div>

                <div className="mb-4 p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg">
                    <div className="font-semibold text-lg mb-2">
                        Do you believe a gay volunteer who documented retaliation and identity-based targeting by state employees deserves an independent investigation?
                    </div>
                    <div className="text-lg">
                        Yes or no?
                    </div>
                </div>

                <div className="mb-4 mt-6">
                    That's the only question that matters now.
                </div>

                <div className="mb-4">
                    Your answer — or your continued silence — will determine everything that follows.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4 font-semibold text-lg">
                    What I Need You to Know
                </div>

                <div className="mb-4">
                    I have spent nine months building permanent accountability infrastructure because every internal channel failed.
                </div>

                <div className="mb-4">
                    I have given every person in the chain of authority — from park supervisors to your Director to your campaign — the opportunity to do the right thing.
                </div>

                <div className="mb-4">
                    I have been patient far beyond what anyone who experienced what I experienced should be expected to be.
                </div>

                <div className="mb-4">
                    And I have documented every choice, every non-response, every moment when institutional protection was chosen over human accountability.
                </div>

                <div className="mb-4">
                    You are the final institutional authority before external escalation becomes necessary.
                </div>

                <div className="mb-4">
                    You have the power to end this with accountability instead of exposure.
                </div>

                <div className="mb-4">
                    But that power comes with a timeline.
                </div>

                <div className="mb-4">
                    February 15, 2026 is when I move beyond giving you the opportunity to act and begin ensuring others know you were given that opportunity and refused.
                </div>

                <div className="mb-4">
                    November 4, 2026 is when Oregon voters decide whether your leadership matches your rhetoric.
                </div>

                <div className="mb-4">
                    What happens between now and then is your choice.
                </div>

                <div className="mb-4">
                    But the documentation is permanent.
                </div>

                <div className="mb-4">
                    The evidence is irrefutable.
                </div>

                <div className="mb-4">
                    And the choice you make now will be part of your legacy — whether you win or lose, whether you serve four years or eight, whether history remembers you as barrier-breaker or institution-protector.
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="mb-4">
                    I was harmed by people you supervise.
                </div>

                <div className="mb-4">
                    Your Director failed to protect me.
                </div>

                <div className="mb-4">
                    You have failed to hold her accountable.
                </div>

                <div className="mb-4">
                    When it was time to protect one of your own, you chose silence.
                </div>

                <div className="mb-4 font-semibold text-lg">
                    Why?
                </div>

                <div className="mb-4">
                    And what are you going to do about it now?
                </div>

                <div className="mt-8 flex">
                    <div className="mr-2">&mdash;</div>
                    <div>
                        <div className="font-bold">Samuel White</div>
                        <div className="font-semibold text-gray-700">Former Oregon State Parks Volunteer</div>
                        <div className="text-gray-700">Gay Oregonian</div>
                        <div className="text-gray-700">December 14, 2025</div>
                    </div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <div className="text-sm text-gray-600 mt-8">
                    <div className="font-semibold mb-2">SUPPORTING DOCUMENTATION:</div>
                    <ul className="list-disc ml-6 space-y-1">
                        <li><Link href="/timeline" className="underline text-emerald-800 hover:text-emerald-600">Complete Timeline: February - December 2025</Link></li>
                        <li><Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">Director Lisa Sumption's Documented Decisions</Link></li>
                        <li><Link href="/coercion" className="underline text-emerald-800 hover:text-emerald-600">March 5 Coercive Meeting (Audio Recording)</Link></li>
                        <li><Link href="/dismissal" className="underline text-emerald-800 hover:text-emerald-600">March 24 Dismissal (Video Documentation)</Link></li>
                        <li><Link href="/expulsion" className="underline text-emerald-800 hover:text-emerald-600">First Amendment Retaliation Letter</Link></li>
                        <li><Link href="/trust-broken" className="underline text-emerald-800 hover:text-emerald-600">Weaponization of Queer Vulnerability</Link></li>
                    </ul>
                </div>
            </div>
        </SectionPage>
    );
}