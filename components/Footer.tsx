export default function Footer() {
    return (
        <footer className="border-t border-gray-200 mt-16 py-10 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto px-4 space-y-2">

                <div className="text-center space-y-1">
                    <div>
                        &copy;&nbsp;
                          <a href="https://rswfire.com/" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold">Robert Samuel White</a>
                        , 2025+.
                    </div>
                </div>

                <div className="text-center text-sm text-gray-500 leading-relaxed">
                    <div>This website is an independent public-interest documentation project.</div>
                    <div>It is not affiliated with, endorsed by, or operated by the Oregon Parks &amp; Recreation Department (OPRD) or any government entity.</div>
                    <div className="text-xs pt-2">All information presented reflects the creator’s firsthand experience, contemporaneous records, and evidence-based documentation.</div>

                </div>

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
                        href="https://rswfire.com/contact"
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
