// app/(archive)/final-statement/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A Final Statement to the Oregon Parks and Recreation Department",
    description:
        "A closing statement to the Oregon Parks and Recreation Department. Sent May 4, 2026.",
};

export default function FinalStatementPage() {
    return (
        <div className="w-full bg-white border border-gray-300 rounded-2xl p-6 sm:p-10 md:p-14">
            <div className="max-w-2xl mx-auto">

                {/* HEADER */}
                <header className="text-center pb-10 border-b border-gray-200">
                    <div className="text-xs text-gray-500 uppercase tracking-[0.25em]">
                        Sent May 4, 2026
                    </div>
                    <h1 className="mt-4 text-2xl sm:text-[28px] font-semibold text-gray-900 leading-snug tracking-tight">
                        A Final Statement to the Oregon Parks
                        <br className="hidden sm:block" />{" "}and Recreation Department
                    </h1>
                </header>

                {/* LETTER */}
                <div className="mt-10 text-[17px] text-gray-900 leading-[1.75] space-y-5">

                    <p><strong>To the Directors and Staff of the Oregon Parks and Recreation Department,</strong></p>

                    <p>I am writing this letter to close a chapter that your institution opened and that I have spent over a year documenting.</p>

                    <p>I recently received your Volunteer Dismissal Guidance in response to my public records request. I did not need it to know what you did. But it confirmed, in your own words and your own policy framework, what I have known since March 2025: that you did not follow your own procedures. That the dismissal of a volunteer for speaking publicly about his treatment has no category in your guidance because you invented one. That what was done to me fell outside every ethical and professional boundary your own institution had established for how volunteers are to be treated.</p>

                    <p><em>Put plainly: when you couldn&rsquo;t manufacture a reason to dismiss me, you just did it anyway and then went silent. I had no idea a public institution could operate with such clear disregard for truth and honor. You educated me.</em></p>

                    <p>What you did was this:</p>

                    <p><strong>Kati Baker</strong> responded dismissively to a new volunteer at 6AM during a power outage who was trying to do his job. When he named how that response made him feel in a follow-up email &mdash; professionally, without naming her &mdash; she brought it to management. She sat silent for nineteen minutes at a public picnic table while Ryan Warren catalogued mistakes and told a volunteer to chew glass. Her first word was &ldquo;tone&rdquo; &mdash; spoken once, precisely timed, to reframe every email a new volunteer had ever written as threatening. When Ryan Warren&rsquo;s coercion destabilized his own argument fifty minutes in, she attacked &mdash; returning to the only thing they ever had: a text message from the first week that had already been resolved. She confirmed on tape that she had invented an interpretation of a job application withdrawal email and brought it to that table as evidence. She provided the cover story for a covert surveillance encounter and reinforced it unprompted two days later. Every level of this institution shielded her. <em>Nine stages of documented abuse because one park supervisor could not tolerate a written record.</em></p>

                    <p><strong>Logan Bliss</strong> was my direct supervisor. He spent 90 minutes alone, at night, with me in the Welcome Center making himself personal and present with a new volunteer who had no reason not to trust him. The following day I reciprocated because it felt like the right thing to do. I set a clear boundary before I said a word, and he knows it &mdash; I told him explicitly our relationship was not romantic. I did this because I have had to navigate the distortions of straight men my entire life. Then I told him why I had come to the coast, what I had left behind, what it meant to me, and my concerns as a queer person about institutional targeting. He disclosed all of it to Kati Baker, Ryan Warren, and Allison Watson. Ryan Warren used it to mock my sexuality at a coercive meeting, suggesting I &ldquo;thought I had a future&rdquo; with a supervisor I had explicitly told otherwise. Allison Watson used it to construct a fabricated psychological profile in dismissal proceedings. Logan Bliss said nothing. He enabled it actively, with full knowledge of what they were doing with what he had given them. When I told him that in authoritarian contexts, institutional actors become the mechanism through which queer people are targeted, he visibly recoiled. He was already doing it.</p>

                    <p><strong>Ryan Warren</strong> confronted me alone the same day as the origin incident &mdash; without my direct supervisor present &mdash; to catalogue every minor mistake I had made in my first week learning the job. Not to correct me. To establish consequences for documentation. Three days later I sent him an email trying to de-escalate. I asked him to get to know me. I conformed. That email is proof I was trying to make this work while he was already escalating. He escalated anyway &mdash; all the way to summoning me to a public picnic table for 62 minutes of sustained psychological pressure, the entirety of which is recorded. He told me to chew glass and swallow it. He mocked my sexuality using disclosures Logan Bliss had no right to share. He admitted on tape that he had never given me the benefit of the doubt and never would. When I finally called him a bully, he asked if he should call the cops. This is who you have managing a flagship state park. He dismissed me by phone six days before my scheduled completion. When he arrived at my RV to collect my keys, I was already recording. He confirmed on camera that no formal documentation existed for my removal. He gave me 24 hours to vacate. No paperwork. No process. No cause.</p>

                    <p><strong>Allison Watson</strong> called me the day after my dismissal. I told her at the start of that recorded call that I was still processing and didn&rsquo;t have full clarity yet. She said okay and proceeded with the agenda she arrived with. She presented unnamed sources. She deployed Logan&rsquo;s disclosures to frame me as paranoid and delusional. She produced a fabrication &mdash; that I had told someone a staff member would be used to kill me when the end of the world occurs &mdash; and when I told her I had no idea what she was talking about, she proceeded anyway. She heard me describe the glass. She heard the benefit of the doubt admission. She filed all of it under perspective. At minute 26 I built her a door &mdash; I named my positive intent, acknowledged learning, offered to adjust. She said thank you for sharing that and walked past it. She promised a review process, steps, a timeline, Friday at the latest. She confirmed I could book a site at Tugman as a citizen &mdash; knowing the volunteer placement was the entire point, knowing what she was about to do to it. Hours after receiving a detailed letter from me attempting to move forward, she permanently expelled me from every Oregon State Parks volunteer program and put the reason in writing on agency letterhead: my public comments about staff. She called the truth disparaging, which says more about what they did than anything I said. Her professional background is in Diversity, Equity, and Inclusion. She built a career on protecting people from exactly what she did to me, and then inverted that training to target someone she should have protected. She has been silent for more than a year since.</p>

                    <p><strong>Lisa Sumption</strong> received comprehensive documentation of every stage of this pattern &mdash; recordings, email chains, video, written evidence of First Amendment retaliation. She responded to my open letter within twelve hours with procedural language and no commitments. She never responded to direct questions about the surveillance encounter. When I sent supplemental evidence of that encounter in December, she said nothing, again. Then she closed communication with a letter that reframed a complete documented record of abuse and retaliation into a fictional narrative about a person who is hurting. She said she did not believe further correspondence would lead to the resolution I was seeking. Every sentence cynically deployed therapeutic language to neutralize a factual record. She did not address a single piece of evidence. She did not reference the recordings. She did not reference the retaliation written on agency letterhead. She further victimized me while shielding every person responsible.</p>

                    <p>I did nothing. I documented reality. Every escalation that followed was yours.</p>

                    <p>Every action I took was documented, named, and submitted through legitimate channels. Public records requests. Letters to commissioners. Correspondence to the governor&rsquo;s office. A detailed public archive with my name on it. I asked for accountability for a wrong that could have been acknowledged and resolved at any point in the past year.</p>

                    <p>In response your institution sent police to my federal residence on the anniversary of my dismissal. And someone left a box of urine-soaked shotgun shells at my gate just yesterday.</p>

                    <p>The distance between those two things is the record.</p>

                    <p>I am abandoning all future contact with your institution. I will not be sending further letters. I will not be filing further requests. I will not be waiting for responses that have never come and will not come. I want to be clear: the police visit and the shotgun shells left at my gate did not intimidate me. I am closing this chapter on my own terms, at a moment of my choosing. I was always leading here.</p>

                    <p>The archive at oprdvolunteerabuse.org will never be taken down. It is complete. It is factual. It has never been legally challenged. <strong>It corrects the distortions your institution created when it decided that a gay volunteer who documented his own treatment deserved to be constructed as paranoid, unstable, and dangerous rather than heard.</strong></p>

                    <p>What this cost me is not abstract. I came to the Oregon coast to build something &mdash; a life, a presence in a community I was genuinely trying to join. I was building relationships along this coast. I was participating as a citizen, as a volunteer, as someone who legitimately cared. I was exploring a path toward becoming a park ranger &mdash; I wanted the second half of my life to be spent in service of something I believed in. What your institution set in motion cost me that circuit. It cost me that life, which is your loss as well. It cost me trust in the people and structures I was trying to integrate into. It cost me community at a moment when I was extending myself toward one.</p>

                    <p>That is what retaliation costs. That is what weaponizing someone&rsquo;s epistemic reality costs.</p>

                    <p>You were not responding to a threat. You were responding to documentation. The escalations were yours. The fabrications were yours. The silence was yours.</p>

                    <p>I am done responding to them.</p>

                    <p>The archive never will be.</p>

                    <p>Goodbye.</p>

                </div>

                {/* SIGNATURE */}
                <div className="mt-12 pt-8 border-t border-gray-200 text-[15px] text-gray-800 leading-relaxed">
                    <div className="font-semibold text-gray-900">Robert Samuel White</div>
                    <div className="mt-1 text-gray-600">
                        <div>Founder, Autonomy Realms</div>
                        <div>Owner, eNetwizard Inc. Since 1998</div>
                        <div>Former Oregon State Parks Volunteer</div>
                        <div>Current U.S. Forest Service Caretaker</div>
                        <div>Steward, oprdvolunteerabuse.org</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
