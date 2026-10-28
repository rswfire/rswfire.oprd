// app/(archive)/trespass/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";
import Moment from "@/components/player/Moment";

export const metadata: Metadata = {
    title: "Trespass",
    description: "What an epistemic violation is, and the person they wrote.",
};

const PICNIC = "01JNK2TKG01JTERAMB7J6AKPK1";
const CALL = "01JQ59R3S0SHQ18E23BC0BM696";
const L = "text-emerald-700 underline hover:text-emerald-600";
const H = "text-xl font-semibold mt-10 mb-3";

export default function TrespassPage() {
    return (
        <SectionPage
            emblem="Footprints" tone="red"
            title="TRESPASS"
            subtitle="NAMING THE HARM"
        >
            <div className="mt-8 space-y-4 text-base text-gray-700 leading-relaxed">
                <div>If you ask the institution, it will tell you I have a grievance with it. That is not true. In making the claim, it is committing the very act this page describes.</div>
                <div>Early in the history of this archive, before this domain existed, while I was still building the record, the homepage carried the reason for its existence:</div>
                <blockquote className="pl-4 border-l-4 border-gray-300 space-y-1 italic text-gray-800">
                    <div>Why I built this archive: to correct an epistemic violation.</div>
                    <div>It is not designed to win attention.</div>
                    <div>It is designed to outlast denial.</div>
                </blockquote>
                <div>There is no word for what was done to me, and that is not an accident. The words that exist belong to them. Grievance. Concern. Perspective. Dispute. Each one turns what they did into something I am doing, and hands it to them to dismiss. The missing word is part of the act. So I did the naming myself. I call it an <em>epistemic violation</em>. Here is what it is:</div>
                <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-800">An epistemic violation is when someone colonizes your interior. They use their standing to trespass where they have none. It is a form of theft, and I do not consent to it.</blockquote>
                <div>Plainly:</div>
                <blockquote className="rounded-lg border border-gray-300 bg-gray-50 px-5 py-4 italic text-gray-800">It is the act of deciding what is inside another person: what they feel, what they believe, what they intend. And then using that fictional account against them.</blockquote>
                <div>This was done to me repeatedly at Honeyman, and then at every level of government after it. The easy answer is that they know, because how else could they exploit it so effectively? The honest answer is that some of them know, and most of them do not.</div>
                <div>The problem is systemic, and probably ancient. That does not erase the harm, and that is why I keep the record.</div>

                <h2 className={H}>How they did it.</h2>
                <div>At the picnic table, with the <PersonLink name="park supervisor" /> beside him and a handwritten page in front of him, the <PersonLink name="park manager" /> spent an hour fabricating the volunteer&rsquo;s interior and then holding him to account for it. He attributed to him conflicts he did not have (<Moment ulid={PICNIC} t="9:12" />), triggers he did not have (<Moment ulid={PICNIC} t="9:22" />), threats he never made (<Moment ulid={PICNIC} t="21:31" />), a desire he never had (<Moment ulid={PICNIC} t="19:49" />), feelings for his supervisor he never had (<Moment ulid={PICNIC} t="36:20" />), an accusation he never made (<Moment ulid={PICNIC} t="45:30" />), and feelings he never felt (<Moment ulid={PICNIC} t="47:27" />), and each time the volunteer said it was not so, the park manager kept it and went on to the next (<Moment ulid={PICNIC} t="9:22" />, <Moment ulid={PICNIC} t="15:45" />, <Moment ulid={PICNIC} t="45:30" />). He opened with praise, closed by pressuring the volunteer, four times in two minutes, to quit (<Moment ulid={PICNIC} t="59:31" />), and in between told him that the way to take it was to &ldquo;chew glass and swallow it&rdquo; (<Moment ulid={PICNIC} t="23:17" />), which is how the interior they wrote gets installed: the person swallows the fiction and carries it as his own.</div>

                <div>In a document Program Manager <PersonLink name="Allison Watson" seat="program" /> spent a year privately editing, she <Link href="/sunlight" className={L}>invented a belief</Link>: &ldquo;he believes the world is going to end and that&rsquo;s one of the reasons he came to Honeyman.&rdquo; She invented a memory: &ldquo;Sam would act like he never said that and has no recollection of saying that.&rdquo; On March 24, 2025, the volunteer <Link href="/record/oprd/01JQ51JFPRZVFQ28F1R1ASPWNE" className={L}>sent her a video</Link>. He had recorded it an hour after the park manager dismissed him, and in it he set out, in order, two months of what the park manager and park supervisor did. He asked her to review the dismissal. The next morning she called him. She said she had watched it (<Moment ulid={CALL} t="1:22" />). She did not say one word about what was on it, then or ever. She said the park manager&rsquo;s dismissal of him was &ldquo;not going to be overturned&rdquo; (<Moment ulid={CALL} t="2:38" />). On March 26, 2025, she <Link href="/record/oprd/01JQA2WM60RX7MSJQ5QPFD8AR2" className={L}>expelled him</Link> from every state parks volunteer program, and the ground she gave was the video, which she called &ldquo;disparaging.&rdquo; She never said what was in it. She decided what it was instead.</div>
                <div>On August 25, 2025, Director <PersonLink name="Lisa Sumption" /> answered an <Link href="/record/oprd/01K3FDT5P09S9N9QSZYWS9KN7A" className={L}>open letter</Link> that documented misconduct with recordings and asked for protections for every volunteer by <Link href="/record/oprd/01K3HPAXBG8F4QZG4DJNDY5QY8" className={L}>inventing a feeling</Link> for the volunteer: &ldquo;I hear the depth of your concern.&rdquo; She converted documented misconduct into &ldquo;your perspective.&rdquo; She converted audio recordings of coercive meetings and video evidence of a dismissal without cause into &ldquo;documenting and expressing your experience.&rdquo; She did all of it to avoid answering any of it: &ldquo;I cannot respond here to the specific claims you have outlined.&rdquo; She never named anywhere else.</div>
                <div>On December 8, 2025, Director <PersonLink name="Lisa Sumption" /> answered an <Link href="/record/oprd/01KBY6KNMGEGV4MZ98QEK6R8JP" className={L}>account</Link> of nine months with the United States Forest Service, trusted with &ldquo;access to their work trucks and a 25 mile daily route,&rdquo; by <Link href="/record/oprd/01KBZ9S95G2W5B44TTGT6HA69N" className={L}>inventing feelings</Link> for the volunteer: &ldquo;deeply painful,&rdquo; &ldquo;the frustration and hurt in your words.&rdquo; She converted a public archive of their own records, every document of it theirs, into something he merely believes: &ldquo;advocating for what you believe is right.&rdquo; She invented an aim for the volunteer, &ldquo;the resolution you&rsquo;re seeking,&rdquo; and closed the correspondence on it.</div>
                <div>On February 13, 2026, Deputy Director <PersonLink name="JR Collier" seat="deputy" /> was given <Link href="/record/oprd/01KGJDNF98R4SNG4Z967DX4BMD" className={L}>notice</Link> of &ldquo;a permanent, system-wide expulsion&rdquo; and &ldquo;documented retaliation for protected speech, under color of law.&rdquo; He answered by <Link href="/record/oprd/01KHCRFBDG3DMYZSSTGV5WC7E7" className={L}>inventing a mood</Link> for the volunteer: &ldquo;We understand you are not satisfied with the decision to end your volunteer service.&rdquo; He converted an expulsion into a &ldquo;decision,&rdquo; and retaliation into &ldquo;not satisfied.&rdquo;</div>
                <div>Then it went to the police. On March 3, 2026, he <Link href="/record/oprd/01KJT9T6V8Q8PATA3JMZ8DD1ZW" className={L}>wrote</Link> Deputy Director <PersonLink name="JR Collier" seat="deputy" />: &ldquo;You will not bury this.&rdquo; Within hours a man he has never met or corresponded with, using a title meant to smuggle the entire act, Oregon State Parks&rsquo; Emergency Manager <PersonLink name="Jamen Lee" seat="emergency-manager" />, copying the deputy director, <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className={L}>sent a link to this archive</Link> to the state police <PersonLink name="press captain" seat="press-captain" />. The reason he gave was &ldquo;since he is now including the Governor as well as our Director.&rdquo; Lee alleged no crime and quoted no threat. The program manager&rsquo;s document followed it.</div>
                <div><PersonLink name="A detective" seat="case-detective" /> read his archive and <a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-SP26096984.pdf" className={L}>invented the rest</a>: &ldquo;upset,&rdquo; &ldquo;perceived grievances,&rdquo; &ldquo;a clear and obvious change in attitude and demeanor.&rdquo; For &ldquo;upset&rdquo; he would need a word of his saying so; there is none. For &ldquo;perceived grievances&rdquo; he would need a grievance named; he names none. For &ldquo;a clear and obvious change in attitude and demeanor&rdquo; he would need a before, an after and a date; he gives none. His report names no threat and no act. The detective came to his door anyway, &ldquo;in an effort to interrupt, deescalate,&rdquo; with nothing on record to interrupt and nothing to de-escalate: armed, through a locked federal gate, on the anniversary of the park manager dismissing him, to tell him he was &ldquo;not in trouble.&rdquo;</div>
                <div>The <PersonLink name="Forest Service Special Agent" seat="forest-service-agent" /> emailed a county deputy with his date of birth and driver&rsquo;s license number. He <a href="/records/osp/attachments/01m1m4wf78xjpejj48d1jz4sj8-Report-and-Attachements-from-Niche-RMS-email-from-FS-SA-Siltcoos-WC-Volunteer.pdf" className={L}>invented threats</a>: &ldquo;due to multiple veil threats.&rdquo; He invented a countdown: &ldquo;he created his own website with a countdown to his one-year anniversary of being fired from Oregon Parks and Rec.&rdquo; The website counts up. It counts the days of an ongoing constitutional violation, and it is still counting. He invented a reason the park manager dismissed him: &ldquo;fired due to his negative interactions with the public while performing his duties.&rdquo; No record says it. No one, in any record, has ever put a single interaction with the public against him.</div>

                <h2 className={H}>Then he asked for the records.</h2>
                <div>The men who hold them did it too.</div>
                <div>The <PersonLink name="Governor&rsquo;s accountability attorney" seat="government-accountability-attorney" /> <Link href="/record/governor/01M35TPA3RXRP0HY3NM9JHDJ8F" className={L}>assigned him a private interest</Link> in the state police threat assessment that had put armed officers at his door: &ldquo;The requester has demonstrated that this request relates to a personal, rather than a public interest.&rdquo; He assigned him a motive he never gave: &ldquo;a general interest in transparency.&rdquo;</div>
                <div>The <PersonLink name="Public Records Counsel" seat="public-records-counsel" /> <Link href="/record/doj/01M50S7NEG8CQV2R6TF6Y6BKXZ" className={L}>assigned him a private interest</Link> in the police file his own government had built on him for writing to it: &ldquo;the records you seek pertain primarily to you and your private interests.&rdquo;</div>
                <div>The <PersonLink name="Public Records Advocate" seat="public-records-advocate" /> <Link href="/record/governor/01M5G1X2X8EEZJZ8R1ZNQRF8CX" className={L}>erased a statutory demand</Link> and wrote a plea in its place: &ldquo;you are seeking assistance.&rdquo; He was handed the statute, and <Link href="/record/governor/01M5MN2F3G7610PG7DJJGQR8KH" className={L}>erased it three more times</Link>. He could not answer the statute, so he invented a tone: his office requires &ldquo;agreeable interactions.&rdquo;</div>
                <div>Every one of them has done something similar to this: when they cannot answer, they fabricate a reason not to. Not one of those sentences is his. Each is someone else speaking for his interior, some in documents he was never shown, the rest in letters addressed to him.</div>

                <h2 className={H}>What it costs.</h2>
                <ul className="list-disc space-y-3 pl-6">
                    <li><strong>It costs you yourself on paper.</strong> The person they wrote becomes the file, and the file is who everyone after meets.</li>
                    <li><strong>It costs you your answer.</strong> Once they hold your interior, everything you do is read through it. Nothing you say corrects the account, because the account is about what is inside you, and they have already decided what that is.</li>
                    <li><strong>It costs you the truth of what is done to you.</strong> Every step stood on the one before it, and none of them stood on anything he did. A link became a police file. A belief assigned to him in a Word document became a reason to search his words. A search that found nothing became armed men at his door. That falsity is the cost: once your interior is theirs, they can act against it without evidence, because the evidence is what they wrote.</li>
                    <li><strong>It costs whoever comes next.</strong> An institution that gives itself standing over one person&rsquo;s interior has given itself standing over every volunteer&rsquo;s.</li>
                </ul>
                <div><em>This archive puts their sentences next to the record. It does not argue with them. It shows who wrote them.</em></div>

                <h2 className={H}>There is one counterexample.</h2>
                <div>After the <Link href="/evidence/origin/" className={L}>origin event</Link>, the <PersonLink name="park manager" /> <Link href="/record/oprd/01JKXHEPAR0PEQMPJXJGG9GZJ4" className={L}>answered his request</Link> for a reset in writing, and kept both of their accounts intact: &ldquo;Thanks for sharing your perspective, my hope [is] you are able to believe what I am sharing about mine.&rdquo; The park manager did not tell him what he meant. He spoke only for himself, and left the volunteer&rsquo;s account as the volunteer&rsquo;s. &ldquo;A reset sounds good to me.&rdquo;</div>
                <div>He respected the park manager immensely for it, and told him so at the picnic table: &ldquo;your email changed my opinion&hellip; it was a big deal to me&rdquo; (<Moment ulid={PICNIC} t="58:01" />). By then the park manager had spent most of an hour fabricating his interior and holding him to account for it. The respect he had given him for keeping his interior intact went when he stopped keeping it.</div>
                <div>That email proves they can do it. Any one of them could have left his account as his and set theirs beside it.</div>
                <div>One of them did, once.</div>

                <hr className="!mt-10 border-t border-gray-300" />
                <div className="!mt-8 pl-4 border-l-4 border-red-700 text-lg leading-relaxed text-gray-800 space-y-4">
                    <p>This is his whole dispute with them. Not the park manager dismissing him, not the program manager expelling him, not the police.</p>
                    <p>It is that they would not leave his interior as his. They replaced it with a fictional one, in official records, and then went silent, or escalated because he would not.</p>
                    <p>That is the harm he has been pointing at. It is a theft, and he does not consent.</p>
                </div>
            </div>
        </SectionPage>
    );
}
