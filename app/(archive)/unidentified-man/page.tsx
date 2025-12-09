// app/(archive)/unidentified-man/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "The Unidentified Man",
    description: "March 18, 2025 - Covert assessment probe six days before dismissal. The photos were never published.",
};

export default function UnidentifiedManPage() {
    return (
        <SectionPage
            title="THE UNIDENTIFIED MAN"
            subtitle="MARCH 18, 2025 — THE MOMENT THEY TRIED TO FRAME ME"
        >

            <div className="mt-4">
                Six days before my removal from Honeyman State Park, I encountered something that still
                defies reasonable explanation.
            </div>

            <div className="mt-4">
                I was alone at the yurts, mid-clean, with all doors propped open as part of my routine.
                The rangers were away at a regional training event. It was quiet, methodical work — the
                kind I had come to appreciate.
            </div>

            <div className="mt-4">
                A man approached. No uniform. No identification. No introduction.
            </div>

            <div className="mt-4">
                He claimed to be with the park service and said he was photographing the yurts for
                documentation — while they were dirty, partially cleaned, completely exposed. Then,
                without transition, he began pressing me with direct, personal questions about my
                experience at the park, how I was being treated, whether leadership was treating me well.
            </div>

            <div className="mt-4">
                This was not casual conversation. It was interrogation. Calculated, pressured, intimate.
                When I didn't respond as expected, he stepped closer, reframed the questions, increased
                the psychological pressure.
            </div>

            <div className="mt-4">
                I recognized what was happening in real time. This was a probe — designed to elicit
                complaints, create admissible statements, or provoke a reaction that could be used to
                justify my removal.
            </div>

            <div className="mt-4">
                I documented the encounter immediately with Kati, my supervisor. Her response was swift:
                he was "from I.T." taking photos for site documentation. She praised how I had "handled it."
            </div>

            <div className="mt-4">
                Within days, I was removed from my position using a <strong>homeless man's journal</strong> as
                pretext.
            </div>

            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-300 rounded-lg">
                <div className="font-semibold mb-2">📹 Supplemental Video Evidence</div>
                <div className="text-sm mb-3">
                    I recorded a video immediately after this encounter—before I understood what it was. At
                    the time, I thought he might have been flirting with me. The video proves I wasn't
                    destabilized, wasn't paranoid, and documented everything in real-time.
                </div>
                <Link
                    href="/unidentified-man/supplemental"
                    className="text-emerald-700 font-semibold hover:underline"
                >
                    Watch the video and read the full analysis →
                </Link>
            </div>

            <div className="mt-8">
                Five months after my permanent dismissal from the Oregon State Parks volunteer program, I
                sent the following letter to Director Lisa Sumption. I had given the institution multiple
                opportunities to address documented harm through internal channels. All had been met with
                silence.
            </div>

            <div className="mt-4">
                This letter represents the moment I moved from private accountability to institutional
                pressure. It documents not just the encounter with the unidentified operative, but the
                broader pattern of covert tactics, systematic retaliation, and institutional protection
                of misconduct.
            </div>

            <div className="mt-4">
                The response to this letter would determine whether Oregon State Parks was capable of
                ethical leadership — or whether external accountability would become necessary.
            </div>

            <div className="mt-4">This letter has gone unanswered.</div>

            <h3 className="mt-8 text-lg font-semibold">
                📝 Letter to Director Lisa Sumption — August 16, 2025
            </h3>

            <div className="text-xs font-bold mb-4">
                Correction: This encounter took place on March 18, not March 20, making it six days before
                my removal.
            </div>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Director Lisa Sumption"
                date="August 16, 2025"
            >
                <div>Lisa,</div>

                <div className="mt-4">
                    Four days before I was removed from Honeyman, a man approached me while I was cleaning
                    the yurts.
                </div>

                <div className="mt-4">
                    He was not in uniform. He offered no name. He carried no identification.
                </div>

                <div className="mt-4">
                    He said he was with the park service and that he was taking photos of the yurts — while
                    they were still dirty, mid-clean, with all doors propped open.
                </div>

                <div className="mt-4">
                    Then, without transition, he pressed me — hard and fast — with direct personal questions:
                </div>
                <div>How do you like the park?</div>
                <div>How are you being treated here?</div>
                <div>Is the leadership treating you well?</div>

                <div className="mt-4">This was not casual.</div>
                <div>It was not polite.</div>
                <div className="mt-4">
                    It was a calculated psychological pressure test, delivered by a stranger while I was
                    isolated and working. And while all the rangers were away for a regional event.
                </div>

                <div className="mt-4">
                    I recognized it in real time. It was disorienting — because it was meant to be. It
                    didn't read like routine oversight. It read like a probe. It read like aggression. When
                    I didn't answer, he asked again — reframed the question, stepped in closer. It was
                    intimate. And it was forced.
                </div>

                <div className="mt-4">
                    I asked Kati about it because I wanted it documented (see attached thread). I understood
                    what this was. She had an immediate justification: he was "from I.T." taking photos for
                    site documentation. She praised how I "handled it."
                </div>

                <div className="mt-4">
                    That wasn't a reassurance. That was a confirmation that I'd been observed and evaluated —
                    and that the probe had failed to elicit the intended response.
                </div>

                <div className="mt-4">Let's name what this was:</div>

                <div className="mt-4">There is no public record of these photos ever being used.</div>

                <div className="mt-4">
                    There is no traceable operational need for unannounced photo capture during an active
                    clean.
                </div>

                <div className="mt-4">
                    There was no follow-up, no supervisor debrief, no procedural accountability.
                </div>

                <div className="mt-4">Just Kati — tying off the thread as quickly as possible.</div>

                <div className="mt-4">It was a setup. It failed.</div>
                <div>
                    And within DAYS, I was removed from my role — using a homeless man's journal as pretext.
                </div>
                <div>The irony is grotesque.</div>

                <div className="mt-4">So I'll ask directly:</div>

                <div className="mt-4">Do those photos exist?</div>

                <div className="mt-4">Were they ever published?</div>

                <div className="mt-4">Was this encounter logged anywhere in your internal systems?</div>

                <div className="mt-4">Because if not, you now have something far worse than negligence.</div>
                <div>
                    You have a covert institutional tactic used against a volunteer — followed by a pattern
                    of containment and silence.
                </div>

                <div className="mt-4">
                    Something I endured for two months. I just wanted to get through my time there so I
                    could move onto the other parks in my trajectory. Kati knew that. Ryan knew that. And
                    that's why they were trying so hard to frame me as a problem. It's why they removed me
                    when I only had ONE SHIFT LEFT.
                </div>

                <div className="mt-4">This is what Kati did to someone who was doing his job.</div>
                <div>Unpaid. Alone. Professional.</div>

                <div className="mt-4">And this is what Allison did in response: nothing.</div>
                <div>No inquiry. No accountability. Just silence.</div>

                <div className="mt-4">That silence is now part of the record.</div>
                <div>And so is this message.</div>

                <div className="mt-4">
                    You've left the same people in charge at your flagship campground — even after direct,
                    documented, and now expanded evidence of unethical conduct.
                </div>

                <div className="mt-4">What happened at Honeyman is not behind you.</div>
                <div>It is with you now.</div>
                <div>And every day you choose not to act becomes part of the breach.</div>

                <div className="mt-4">
                    I know you don't want to hear from me. I know the institutional reflex to frame this as
                    obsession. This is not that. I need you to be an ethical leader.
                </div>

                <div className="mt-4">Find a way.</div>

                <div className="mt-4">—Sam</div>
                <div>https://rswfire.com/honeyman</div>
            </Email>

            <h3 className="mt-8 text-lg font-semibold">📧 Original Email Thread</h3>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="WATSON Allison * OPRD <allison.watson@oprd.oregon.gov>"
                date="Monday, May 26, 2025 7:08:05 PM"
                subject="For the Record - March 20 Field Encounter"
            >
                <div>Allison,</div>

                <div className="mt-4">This email chain may appear mundane on the surface.</div>
                <div>It is not.</div>

                <div className="mt-4">
                    What it documents is the outer shell of an orchestrated event — a baited encounter that
                    I now know, without doubt, was sent by Kati.
                </div>

                <div className="mt-4">
                    A man appeared while I was cleaning. No identification. No uniform.
                </div>
                <div>
                    He claimed to be taking photos of the yurts — which were still dirty, mid-clean, doors
                    propped open. No one does that. That was the first tell.
                </div>

                <div className="mt-4">
                    He confronted me immediately with invasive, personal questions — not park-related, not
                    procedural.
                </div>
                <div>When I didn't engage, he turned and left quickly.</div>

                <div className="mt-4">
                    Later, Kati confirmed he was "with IT" and praised how I "handled it."
                </div>
                <div>That wasn't a compliment. It was a data point. A probe that failed.</div>

                <div className="mt-4">This wasn't routine.</div>
                <div>It was covert assessment, masked as operations.</div>

                <div className="mt-4">And I see now what it was meant to be:</div>
                <div>A pretext. A setup.</div>
                <div>An attempt to provoke a misstep that could justify my removal.</div>
                <div>It didn't work. I didn't take the bait.</div>

                <div className="mt-4">This email chain remains — a quiet record of that moment.</div>
                <div>You may want to review it with clearer eyes.</div>

                <div className="mt-4">Because what happened at that park is larger than policy.</div>
                <div>
                    It speaks to the architecture of how authenticity is policed, how nonconformity is
                    treated as threat, and how systems recruit silence to cover their own fractures.
                </div>

                <div className="mt-4">I am not asking for response.</div>
                <div>I am not seeking closure.</div>
                <div>But I will not let distortion have the last word.</div>

                <div className="mt-4">This message is not about me.</div>
                <div>It is about what your park service has become.</div>

                <div className="mt-4">—Sam</div>
                <div>rswfire.com</div>
            </Email>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>"
                date="Thursday, March 20, 2025 3:48:24 PM"
                subject="Re: Question About Unidentified Visitor"
            >
                <div>
                    Thanks, Kati. Hope it's not a problem he took the photos before I'd cleaned them. All
                    three of my sites were in the little alcove so I had all three open at the same time
                    while I moved around all three doing my different tasks. Like, I had the sanitizer going
                    in all three whole I blowed the sites, etc. The trash cans were propping all the doors
                    open. I'd want the photos to look nice of course!
                </div>
            </Email>

            <Email
                from="Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>"
                to="Robert Samuel White <rsw@rswfire.com>"
                date="Thursday, March 20, 2025 3:43:44 PM"
                subject="RE: Question About Unidentified Visitor"
            >
                <div>Sam,</div>

                <div className="mt-4">
                    Just wanted to let you know I did reach out to the I.T. employee who is spearheading the
                    site photo updates and it was indeed them who was out getting photos of yurts in A loop 😊
                </div>

                <div className="mt-4">Have a great afternoon!</div>
            </Email>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>"
                date="Tuesday, March 18, 2025 5:35 PM"
                subject="Re: Question About Unidentified Visitor"
            >
                <div>Thanks for confirming!</div>
            </Email>

            <Email
                from="Baker Kati * OPRD <Kati.BAKER@oprd.oregon.gov>"
                to="Robert Samuel White <rsw@rswfire.com>"
                date="Tuesday, March 18, 2025 5:31:49 PM"
                subject="Re: Question About Unidentified Visitor"
            >
                <div>Hi Sam,</div>

                <div className="mt-4">
                    We have had some staff from I.T. working on getting updated photos of sites all over the
                    state. I think you handled it wonderfully asking if they had any other questions. It's
                    not unusual for folks to want to take a look inside especially if they haven't seen a
                    yurt before. I can follow up with folks in I.T. to see if anyone was out today :)
                </div>

                <div className="mt-4">-Kati</div>
            </Email>

            <Email
                from="Robert Samuel White <rsw@rswfire.com>"
                to="Baker Kati * OPRD <kati.baker@oprd.oregon.gov>"
                date="Tuesday, March 18, 2025 4:35 PM"
                subject="Question About Unidentified Visitor"
            >
                <div>Hi Kati,</div>

                <div className="mt-4">I wanted to check in about something from today.</div>

                <div className="mt-4">
                    While I was working, a man showed up, said he was with the park service, and started
                    taking photos of the yurts while they were still dirty, since I was in the process of
                    cleaning them. I engaged him briefly — asked if he had any questions—but the interaction
                    felt a little off.
                </div>

                <div className="mt-4">
                    He didn't introduce himself by name, wasn't in uniform, and had no visible identification.
                    He only said he was with the park service and that they "needed photos of some of them
                    still." Then he started asking me questions — how I like the park, how I'm being treated
                    here. It stood out, especially with the timing, since all the rangers were away for
                    meetings.
                </div>

                <div className="mt-4">
                    Was this an official visit that you're aware of? If so, no problem — just seemed a bit
                    odd, and I wasn't sure if I should have handled it differently. If not, I wanted to flag
                    it in case it's something to be aware of. Let me know if you have any insight.
                </div>

                <div className="mt-4">Thanks,</div>

                <div className="mt-4">Sam</div>
            </Email>

        </SectionPage>
    );
}