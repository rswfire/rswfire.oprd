import Icon from "@/components/Icon";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-16 py-10 text-sm text-gray-600 bg-white/90">

            <div className="flex justify-center font-bold text-lg">
                <Link href="/system-map" className="text-emerald-700 hover:text-emerald-900 hover:bg-gray-100 rounded-lg px-4 py-2 transition-colors text-left sm:text-center font-mono">
                    <span className="block sm:inline"><Icon name="Map" className="inline-block mr-1.5 -mt-0.5" size={16} strokeWidth={2} />THIS IS THE MAP.</span>
                    <span className="block sm:inline sm:ml-6"><Icon name="Repeat" className="inline-block mr-1.5 -mt-0.5" size={16} strokeWidth={2} />THIS IS THE PATTERN.</span>
                    <span className="block sm:inline sm:ml-6"><Icon name="Eye" className="inline-block mr-1.5 -mt-0.5" size={16} strokeWidth={2} />THIS IS THE MIRROR.</span>
                </Link>
            </div>

            <div className="mt-6 max-w-6xl mx-auto px-4 space-y-2">

                <div className="text-center space-y-1 text-lg">
                    <div>
                        &copy;&nbsp;
                          <a href="https://rswfire.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">Robert Samuel White</a>
                        , 2025-2026.
                    </div>
                </div>

                <div className="text-center text-sm text-gray-500 leading-relaxed">
                    <div><strong>This website is an independent public-interest documentation project</strong>.</div>
                    <div>It is not affiliated with, endorsed by, or operated by the State of Oregon, Oregon Parks &amp; Recreation Department (OPRD), or any other government entity.</div>
                    <div>All information presented reflects the creator’s firsthand experience, contemporaneous records, and evidence-based documentation.</div>

                </div>

                <hr className="max-w-6xl mx-auto border-t border-gray-200 my-8" />

                <div className="max-w-6xl mx-auto px-4 mb-8">
                    <div className="flex flex-col sm:flex-row gap-6 items-start">
                        <img src="/oregon-state-flag.jpg" alt="Oregon State Flag" className="w-36 h-auto rounded shrink-0" />
                        <div className="space-y-3">
                            <div className="text-sm"><strong>The State of Oregon can never again abuse a volunteer this way without documented precedent.</strong> When the Governor&apos;s office was directly notified and chose silence, this stopped being one agency&apos;s failure and became shared across the state structure.</div>
                            <div className="text-sm italic text-gray-500">Their institutional silence does not erase the pattern. It confirms it.</div>
                            <div className="text-sm pt-3 border-t border-gray-200"><Link href="/governor-kotek" className="underline text-emerald-800 hover:text-emerald-600">Governor Kotek</Link>, does a gay volunteer who documented retaliation and identity-based targeting by state employees deserve an independent investigation? Yes or no?</div>
                        </div>
                    </div>
                </div>

                <hr className="max-w-6xl mx-auto border-t border-gray-200 my-8" />

                <div className="flex justify-center gap-4 text-sm">
                    <a
                        href="https://github.com/rswfire/rswfire.oprd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://rswfire.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        rswfire.com
                    </a>

                    <a
                        href="mailto:rsw@rswfire.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        Contact
                    </a>
                </div>

            </div>
        </footer>
    );
}
