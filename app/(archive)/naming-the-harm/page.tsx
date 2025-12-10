// app/(archive)/naming-the-harm/page.tsx
import type {Metadata} from "next";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Naming the Harm",
    description: "May-August 2025 - The full scope of institutional harm named with precision. Not a request. A statement of record.",
};

export default function NamingTheHarmPage() {
    return (
        <SectionPage
            title="NAMING THE HARM"
            subtitle="THE LETTERS THEY MUST RECKON WITH"
        >

            <div className="mt-4">
                After months of institutional silence, I sent letters naming the harm directly to those
                who caused it. Not as requests for apology or repair &mdash; but as statements of record.
            </div>

            <div className="mt-4">
                These letters document what they did, how they did it, and what it cost. They ensure the
                harm cannot be minimized, reframed, or disappeared. They are permanent testimony to
                institutional abuse that leadership refused to acknowledge.
            </div>

            <div className="mt-4">
                Each person had the power to choose differently. Each person chose harm. And now that
                choice is attached to their name forever.
            </div>

            {/* ALLISON WATSON LETTER */}

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">
                May 28, 2025: Holding Allison Watson Accountable
            </h2>

            <Email
                from="Sam White"
                to="Allison Watson (Engagement Programs Manager)"
                date="May 28, 2025"
                subject="Naming the Harm"
            >
                <div className="mt-4">Hi Allison,</div>

                <div className="mt-4">This letter is not a request.</div>
                <div>It is not an invitation to respond.</div>
                <div>It is a statement of record.</div>

                <div className="mt-4">
                    I am writing to formally name the harm that occurred under your leadership &mdash; and to
                    inform you that the audio of our March 25 conversation is now public.
                </div>

                <div className="mt-4">That recording is not an accusation. It is a mirror.</div>
                <div>
                    And now, for the first time, others can hear what I heard &mdash; the tone, the silences, the
                    institutional language that reframed lived human experience as "concerning" and
                    "unprofessional." The video speaks for itself.
                </div>

                <div className="mt-4 ml-8">
                    🔗 Watch the recording:{" "}

                    <a href="https://rswfire.com/honeyman/silencing"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://rswfire.com/honeyman/silencing
                    </a>
                </div>
                <div className="ml-8">
                    🔗 YouTube:{" "}

                    <a href="https://youtu.be/Px_pCUo78w4"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://youtu.be/Px_pCUo78w4
                    </a>
                </div>

                <div className="mt-4">
                    I've also included a page that documents the letter I sent to you that night, and a
                    video of me reading it into the public record as testimony:
                </div>
                <div className="ml-8">
                    🔗{" "}

                    <a href="https://rswfire.com/honeyman/escalation/letter"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://rswfire.com/honeyman/escalation/letter
                    </a>
                </div>

                <div className="mt-4">The surrounding events are now documented here:</div>
                <div className="ml-8">
                    🔗{" "}

                    <a href="https://rswfire.com/honeyman/escalation"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://rswfire.com/honeyman/escalation
                    </a>
                </div>

                <div className="mt-4">You asked me to speak openly. I did.</div>

                <div className="mt-4">
                    I told you what Ryan said to me. How he told me to "eat glass." How Logan blurred
                    boundaries. How I was denied the benefit of the doubt from day one. I said all of this
                    calmly, clearly, without hostility, and with the hope that it might matter.
                </div>

                <div className="mt-4">Later that night, I sent you a follow-up letter.</div>

                <div className="mt-4">
                    It added context, detailed evidence, and gave you another opportunity to respond with
                    presence and integrity.
                </div>

                <div className="mt-4">You never acknowledged it.</div>

                <div className="mt-4">
                    Instead, less than twenty-four hours later, you made my dismissal permanent &mdash; a decision
                    that now lives in stark contrast to the content of our recorded call.
                </div>

                <div className="mt-4">
                    So I want to name &mdash; clearly, and for the record &mdash; the full scope of harm:
                </div>

                <div className="mt-4">You dismissed serious misconduct with silence.</div>

                <div className="mt-4">
                    You avoided specificity in order to maintain plausible deniability.
                </div>

                <div className="mt-4">
                    You framed human depth as inappropriate rather than interrogating your own discomfort.
                </div>

                <div className="mt-4">
                    You positioned yourself as a neutral evaluator while executing a pre-determined outcome.
                </div>

                <div className="mt-4">
                    You ignored a vulnerable and sincere follow-up letter, and responded instead with
                    expulsion.
                </div>

                <div className="mt-8">But there is more.</div>

                <div className="mt-4">
                    You shielded misconduct by refusing to investigate or intervene &mdash; permitting coercive
                    behavior and inappropriate power dynamics to persist under your leadership.
                </div>

                <div className="mt-4">
                    You sanctioned erasure &mdash; not only of my role, but of the narrative I offered in good
                    faith.
                </div>

                <div className="mt-4">
                    You endorsed retaliation by validating a removal that originated not in protocol, but
                    in personal offense.
                </div>

                <div className="mt-4">
                    You fractured systemic trust, sending a clear signal to others: that clarity is
                    dangerous, and documented truth will be buried if it threatens internal comfort.
                </div>

                <div className="mt-4">
                    You reinforced harmful patterns by protecting those who distorted, manipulated, and
                    coerced &mdash; ensuring they remain unaccountable.
                </div>

                <div className="mt-4">
                    You disappeared the humanity of this moment. When you had the opportunity to meet it
                    with courage, you met it with closure.
                </div>

                <div className="mt-4">And perhaps most significantly:</div>
                <div>
                    You made yourself the endpoint &mdash; not a bridge, not a voice of integrity, but a terminus.
                    A silence.
                </div>

                <div className="mt-4">This is not about policy. It is about responsibility.</div>

                <div className="mt-4">
                    You had a choice. You could have acted with presence. With reflection. With care.
                </div>
                <div>You didn't.</div>

                <div className="mt-4">I'm not asking you to undo it.</div>
                <div>
                    I'm naming that it happened &mdash; and ensuring that the record will outlast the silence
                    that followed.
                </div>

                <div className="mt-4">The archive is now public.</div>
                <div>You are part of it.</div>
                <div>And that, too, will be permanent.</div>

                <div className="mt-4">&mdash;</div>
                <div>Sam White</div>
                <div>

                    <a href="https://rswfire.com/honeyman"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://rswfire.com/honeyman
                    </a>
                </div>
            </Email>

            {/* KATI BAKER LETTER */}

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">
                August 13, 2025: Holding Kati Baker Accountable
            </h2>

            <Email
                from="Sam White"
                to="Kati Baker (Park Supervisor)"
                cc="Allison Watson (Engagement Programs Manager), Lisa Sumption (Director)"
                date="August 13, 2025, 10:16 PM"
                subject="For the Record &mdash; You Wounded Me Too"
            >
                <div className="mt-4">Kati,</div>

                <div className="mt-4">
                    During that meeting at the day use area, you framed our early interaction as an emotional
                    wound inflicted on you. You were performing, of course &mdash; and I knew this even as I
                    apologized to you a second time for something that didn't warrant an apology, because I
                    was trying to keep the peace.
                </div>

                <div className="mt-4">
                    But you did emotionally wound me, and now I want you to know how.
                </div>

                <div className="mt-4">
                    You took something deeply sincere and read it through the most cynical lens possible. You
                    met vulnerability with suspicion, complexity with projection, and instead of asking a
                    question or seeking to understand, you moved to solidify a narrative that cast me as
                    dangerous. That move &mdash; conscious or not &mdash; disfigured what might have been possible
                    between us.
                </div>

                <div className="mt-4">
                    I wasn't careless with you. I was just myself. And in your role, that should have mattered.
                    That should have been protected. But instead, you used your authority to make me question
                    whether there's any space in this institution for someone like me &mdash; someone unwilling to
                    fragment, to perform, to smile past their truth just to make others feel comfortable.
                </div>

                <div className="mt-4">
                    That experience narrowed my world. It forced me to contract in places I came to serve.
                    And that harm is real. And I'm still metabolizing it. It is why this letter is necessary
                    - because healing requires confrontation with the truth. And now I have delivered it.
                </div>

                <div className="mt-4">
                    You didn't have to understand me. But you could have chosen not to punish what you didn't
                    understand.
                </div>

                <div className="mt-4">
                    In closing: you abused your power. Repeatedly. Covertly. You took a position that should
                    require integrity, humility, and discernment &mdash; and instead, you acted to protect your own
                    authority, regardless of the cost to others. That is why I built the archive. Because even
                    if your institution won't hold you accountable, it will. And it is my sincere hope that it
                    is enough to prevent you from ever inflicting that harm on another person again.
                </div>

                <div className="mt-4">Sam</div>
            </Email>

            {/* LOGAN BLISS LETTER */}

            <hr className="my-6 border-t border-gray-300" />

            <h2 className="text-xl font-semibold">
                December 9, 2025: Holding Logan Bliss Accountable
            </h2>

            <Email
                from="Sam White"
                to="Logan Bliss (Volunteer Services Lead)"
                cc="Allison Watson (Engagement Programs Manager), Ryan Warren (Park Manager), Kati Baker (Park Supervisor), Lisa Sumption (Director)"
                date="December 9, 2025"
                subject="For the Record &mdash; Supervisory Betrayal"
            >
                <div className="mt-4">Logan,</div>

                <div className="mt-4">
                    This letter names the harm you caused through betrayal of supervisory trust and
                    weaponization of vulnerability I shared with you in confidence.
                </div>

                <div className="mt-4">
                    You held authority over me as Volunteer Services Lead. That role requires integrity,
                    discretion, and the protection of those under your supervision. You failed at every level.
                </div>

                <h3 className="mt-6 font-semibold">THE DISCLOSURES</h3>

                <div className="mt-4">
                    During our walk at Honeyman, I shared why I had moved into an RV and relocated to the
                    coast&mdash;my analysis of systemic instability, my strategic thinking about resilience, and my
                    concerns as a queer person about authoritarian targeting through institutional actors.
                </div>

                <div className="mt-4">
                    Before that conversation, I set a clear boundary: I told you explicitly this was not
                    romantic for me.
                </div>

                <div className="mt-4">
                    You took what I shared in confidence and disclosed it to management. That information was
                    then weaponized by Allison Watson to pathologize my character during dismissal
                    proceedings&mdash;reframing reasoned analysis as "apocalyptic thinking" and using my fears about
                    identity-based targeting as evidence of instability.
                </div>

                <div className="mt-4">
                    By now you have seen the videos. You know how they used what I told you. You know the harm
                    that followed.
                </div>

                <h3 className="mt-6 font-semibold">THE DISTORTION</h3>

                <div className="mt-4">
                    Allison Watson claimed I told you "I was worried you would kill me." That is a deliberate
                    distortion.
                </div>

                <div className="mt-4">
                    What I actually said was that in authoritarian contexts, people like you&mdash;institutional
                    actors with authority&mdash;would be the mechanism through which targeting of queer people would
                    occur.
                </div>

                <div className="mt-4">You visibly recoiled when I said this.</div>

                <div className="mt-4">
                    At the time, I interpreted your reaction as discomfort with the subject matter. Later, I
                    understood: you were already doing exactly what I had described&mdash;using your institutional
                    position to target my identity.
                </div>

                <div className="mt-4">
                    And you did this after I explicitly told you the conversation was not romantic. You
                    weaponized a boundary I set with you in good faith.
                </div>

                <h3 className="mt-6 font-semibold">THE PATTERN</h3>

                <div className="mt-4">
                    You elicited trust through reciprocal vulnerability. You spent 90 minutes talking about
                    yourself&mdash;your background, your concerns, your perspectives. The following day, I
                    reciprocated. That is how trust-building works.
                </div>

                <div className="mt-4">
                    But after I opened up, you distanced yourself. Then you disclosed what I shared to people
                    who were already working to remove me.
                </div>

                <div className="mt-4">That is not supervision. That is betrayal.</div>

                <h3 className="mt-6 font-semibold">THE ENABLING</h3>

                <div className="mt-4">
                    Your disclosures gave Ryan Warren, Kati Baker, and Allison Watson the ammunition they
                    needed to justify what they had already decided to do.
                </div>

                <div className="mt-4">
                    Ryan used it to mock me at the day-use meeting&mdash;suggesting I "thought I had a future with
                    you"&mdash;weaponizing my sexuality and distorting ordinary human connection into something
                    inappropriate.
                </div>

                <div className="mt-4">I am certain that insinuation entered the narrative with your consent.</div>

                <div className="mt-4">
                    Kati and Allison used your disclosures to construct a psychological profile justifying my
                    permanent dismissal&mdash;reframing vulnerability as instability, analysis as extremism, and
                    identity-based fears as concerning behavior.
                </div>

                <div className="mt-4">
                    You enabled that. Actively. With full knowledge of what they were doing.
                </div>

                <h3 className="mt-6 font-semibold">WHAT YOU SHOULD UNDERSTAND</h3>

                <div className="mt-4">I treated you with integrity you never had.</div>

                <div className="mt-4">
                    Despite your pattern of intimacy followed by distance, I continued to see the best in you.
                    I made space for the tension between your depth and the institution you serve. I chose to
                    believe you were capable of better.
                </div>

                <div className="mt-4">I was wrong.</div>

                <div className="mt-4">
                    You had every opportunity to protect what I shared with you. Instead, you delivered it to
                    people who used it to harm me.
                </div>

                <div className="mt-4">
                    That choice&mdash;to betray supervisory trust and weaponize queer vulnerability after I
                    explicitly set a boundary with you&mdash;is now part of the permanent record.
                </div>

                <h3 className="mt-6 font-semibold">THE RECORD</h3>

                <div className="mt-4">You are documented by full name in a public archive:</div>

                <div className="ml-8 mt-2">
                    🔗{" "}

                    <a href="https://oprdvolunteerabuse.org/trust-broken"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://oprdvolunteerabuse.org/trust-broken
                    </a>
                </div>

                <div className="ml-8">
                    🔗{" "}

                    <a href="https://oprdvolunteerabuse.org/trust-broken/supplemental"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://oprdvolunteerabuse.org/trust-broken/supplemental
                    </a>
                </div>

                <div className="mt-4">This archive details:</div>
                <ul className="list-disc ml-8 mt-2">
                    <li>Your disclosure of confidential personal information</li>
                    <li>Your participation in identity-based targeting</li>
                    <li>Your weaponization of a boundary I set with you</li>
                    <li>Your role in enabling institutional abuse</li>
                </ul>

                <div className="mt-4">This is not a request for response.</div>
                <div>This is a statement of record.</div>
                <div>Your choices as Volunteer Services Lead are now permanently attached to your name.</div>

                <div className="mt-6">&mdash;</div>
                <div>Sam White</div>
                <div>

                    <a href="https://oprdvolunteerabuse.org"
                       className="text-emerald-700 underline"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        https://oprdvolunteerabuse.org
                    </a>
                </div>

                <div className="mt-4">A copy of this letter is here:</div>
                <div>https://oprdvolunteerabuse.org/naming-the-harm</div>

            </Email>

            {/* CLOSING */}

            <hr className="my-6 border-t border-gray-300" />


                <div className="p-4 bg-green-50 border border-l-4 border-emerald-600 text-sm">
                    <div>
                        None of these letters received a response. None needed one.
                    </div>

                    <div className="mt-4">
                        These are not attempts at reconciliation. They are permanent documentation of harm caused
                        by people in positions of authority who chose institutional protection over human
                        accountability.
                    </div>

                    <div className="mt-4">
                        The archive ensures these letters outlast silence. The record is permanent. And every
                        person named here will carry their choice forward &mdash; whether they acknowledge it or not.
                    </div>
                </div>

        </SectionPage>
    );
}