// app/(archive)/page.tsx

import Link from "next/link";
import VideoEmbed from "@/components/archive/VideoEmbed";
import ArchiveVideos from "@/components/ArchiveVideos";

export default function OverviewPage() {
    return (
        <section className="w-full mx-auto">

            <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">

                <div className="mx-8 text-base sm:text-lg tracking-tight space-y-4">
                    <div className="mt-4">In early 2025, I served as an unpaid volunteer at <Link href="https://stateparks.oregon.gov/index.cfm?do=park.profile&parkId=95" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Honeyman State Park</Link>.</div>
                    <div>What began as a routine volunteer assignment quickly escalated into two months of systematic psychological pressure, coercive tactics, and institutional retaliation, followed by dismissal and expulsion from all <Link href="https://www.oregon.gov/oprd/AO/Pages/AU-about.aspx" target="_blank" className="underline text-emerald-800 hover:text-emerald-600">Oregon State Parks</Link>.</div>
                    <div>This archive is not a story about me.</div>
                    <div>It is a story about <em>them</em> &mdash; the choices they made when given evidence of abuse, when given the opportunity to stop, when given time to self-correct. And every mechanism of accountability &mdash; instead used to shield themselves.</div>
                </div>

                <hr className="my-6 border-t border-gray-300" />

                <VideoEmbed
                    s3Url="https://hel1.your-objectstorage.com/autonomyrealms/01KE634HWNGQBK7D0CVDFYEFK0/transmissions/01KCYZ8E1GTHBZCDNYA57AM2Q0/video.mp4"
                />

                <div className="text-right text-xs"><Link href="https://rswfire.autonomyrealms.com/signal/01KCYZ8E1GTHBZCDNYA57AM2Q0" className="mr-4 hover:underline">AUTONOMY REALMS: 01KCYZ8E1GTHBZCDNYA57AM2Q0</Link></div>

                <div className="mt-4 ml-0 sm:ml-8 text-sm text-gray-600">

                    <div className="mt-4 text-base tracking-tight"><strong>Five days before Christmas, 2025</strong>.</div>
                    <div className="text-base tracking-tight">My full testimony &mdash; in one take, no edits, enduring the sniffles &mdash; while walking a forest trail.</div>

                    <div className="mt-2 ml-0 sm:ml-8 pl-0 sm:pl-4 border-0 sm:border-l-4 border-emerald-700 space-y-1">
                        <div><strong>Why I built this archive</strong>: to correct an <Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600"><em>epistemic violation</em></Link>.</div>
                        <div>It is not designed to <em>win attention</em>.</div>
                        <div>It is designed to <em className="font-bold">outlast denial</em>.</div>
                    </div>

                    <div className="mt-4 text-sm tracking-tight"><Link href="/faq" className="text-emerald-700 hover:underline hover:text-emerald-600">Common questions answered here</Link>.</div>
                </div>

            </div>

            <div className="mt-8 w-full p-8 rounded-xl bg-green-50 border border-green-300 text-base">

                <h2 className="font-bold text-lg text-center tracking-wide">
                    THIS ARCHIVE DOCUMENTS AN ONGOING CONSTITUTIONAL VIOLATION
                </h2>

                <div className="text-base">

                    <div className="mt-4">I entered the state parks system anticipating alignment &mdash;</div>
                    <div className="ml-4">to protect the commons,</div>
                    <div className="ml-4">to hold space with integrity,</div>
                    <div className="ml-4">to support the land,</div>
                    <div className="ml-4">and to give freely without ownership.</div>

                    <div className="mt-4">That was the offer.</div>

                    <div className="mt-4">What I found instead was systematic abuse by those entrusted to supervise me.</div>

                    <div className="mt-4">When I documented that abuse and spoke publicly about my experience, Oregon State Parks took my right to participate in government away.</div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4 text-lg font-bold">What they took:</div>

                    <div className="mt-4">Volunteer service is not charity labor.</div>
                    <div>It is civic participation.</div>
                    <div>It is how citizens engage directly with the function of government.</div>

                    <div className="mt-4">I chose to serve Oregon State Parks.</div>
                    <div>I maintained trails. I cleaned facilities. I engaged with visitors.</div>
                    <div>I participated in government &mdash; not as observer, not as taxpayer funding distant bureaucracy, but as citizen directly stewarding public land.</div>

                    <div className="mt-4">On March 26, 2025, Allison Watson permanently expelled me from all Oregon State Parks volunteer programs.</div>

                    <div className="mt-4">She put the reason in writing:</div>
                    <div className="ml-4 italic">"the public comments made about staff regarding your volunteer service, were not in line with expectations."</div>

                    <div className="mt-4">That is retaliation for protected speech.</div>
                    <div>That is denial of civic participation as punishment for exercising constitutional rights.</div>

                    <div className="mt-4 font-bold">That violation continues right now. Today.</div>
                    <div className="font-bold">Every single day they refuse to restore what they took.</div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4 text-lg font-bold">The humans who did this:</div>

                    <ul className="mt-4 ml-6 list-disc space-y-2">
                        <li><strong>Kati Baker</strong>, Park Supervisor, <Link href="/evidence/confrontation" className="underline text-emerald-800 hover:text-emerald-600">orchestrated the abuse</Link>.</li>
                        <li><strong>Ryan Warren</strong>, Park Manager, <Link href="/evidence/coercion" className="underline text-emerald-800 hover:text-emerald-600">executed the abuse through sustained hostility</Link>.</li>
                        <li><strong>Logan Bliss</strong>, Volunteer Services Lead, <Link href="/evidence/betrayal" className="underline text-emerald-800 hover:text-emerald-600">weaponized personal disclosures</Link>.</li>
                        <li><strong>Allison Watson</strong>, Engagement Programs Manager, <Link href="/evidence/expulsion" className="underline text-emerald-800 hover:text-emerald-600">retaliated in writing for protected speech</Link>.</li>
                        <li><strong>Lisa Sumption</strong>, Director, <Link href="/lisa-sumption" className="underline text-emerald-800 hover:text-emerald-600">shielded the abusers</Link>.</li>
                        <li><strong>The agency</strong> <Link href="/lisa-sumption/public-records-request" className="underline text-emerald-800 hover:text-emerald-600">violated public records law for 90+ days</Link>.</li>
                        <li><strong>Governor Kotek's office</strong> &mdash; silence.</li>
                    </ul>

                    <div className="mt-4">Every person had the power to stop this.</div>
                    <div>Every person chose not to.</div>

                    <div className="mt-4">No investigations occurred.</div>
                    <div>No accountability was established.</div>
                    <div>The constitutional violation continues.</div>

                    <hr className="my-6 border-t border-gray-300" />

                    <div className="mt-4 text-lg font-bold">This is what institutional collapse looks like:</div>

                    <div className="mt-4">This archive exists because institutional accountability failed at every level.</div>

                    <div className="mt-4">When government denies citizens the right to participate because they spoke about abuse &mdash;</div>
                    <div className="ml-4">democracy stops being public.</div>

                    <div className="mt-4">When constitutional violations go uncorrected through every layer of escalation &mdash;</div>
                    <div className="ml-4">rights become theoretical.</div>

                    <div className="mt-4">When silence becomes the institutional response to documented harm &mdash;</div>
                    <div className="ml-4">the system protects power, not people.</div>

                    <div className="mt-4 font-bold">That is what this archive documents.</div>
                    <div className="font-bold">That is what continues right now.</div>
                    <div className="font-bold">That will not be absolved by silence, or by time.</div>

                    <div className="mt-6 flex">
                        <div className="mr-2">&mdash;</div>
                        <div>
                            <div className="font-bold">Robert Samuel White</div>
                            <div className="text-gray-700">Former Oregon State Parks Volunteer</div>
                        </div>
                    </div>
                </div>

            </div>

            {/* ARCHIVE VIDEOS */}
            <ArchiveVideos/>

            <div className="mt-8 p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <div className="text-xl text-black font-bold mb-4">THIS IS THE MAP. THIS IS THE PATTERN. THIS IS THE MIRROR.</div>

                <div className="mb-6 pb-4 border-b border-gray-300 font-semibold">
                    <div>Oregon state government can never again abuse a volunteer this way without documented precedent &mdash; or what they would euphemistically call liability.</div>
                    <div className="mt-4">When the Governor's office was directly notified and chose silence, this stopped being one agency's failure and became shared across the state structure.</div>
                    <div className="mt-4">It became pattern evidence for every volunteer program across Oregon's executive branch.</div>
                    <div className="mt-4">Their institutional silence does not erase the pattern. It confirms it.</div>
                </div>

                <div className="mt-4">This archive is not for revenge.</div>

                <div className="mt-4">It is for those who have been told they imagined it.</div>
                <div>It is for those about to walk into something similar.</div>
                <div>It is for the future, when denial no longer holds.</div>

                <div className="mt-4">It does not ask for apology.</div>
                <div>It does not ask for repair.</div>
                <div><Link href="/faq#epistemic" className="text-emerald-700 underline hover:text-emerald-600">It exists so that the next distortion cannot pretend it was the first</Link>.</div>

            </div>

        </section>
    );
}
