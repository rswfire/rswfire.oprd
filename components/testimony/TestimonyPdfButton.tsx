import Icon from "@/components/Icon";
import { CURRENT_VERSION } from "@/data/testimonyVersions";

export default function TestimonyPdfButton({
    variant = "analysis",
    version = CURRENT_VERSION.version,
}: {
    variant?: "analysis" | "homepage";
    version?: string;
}) {
    const homepage = variant === "homepage";

    return (
        <a
            href={`/testimony-of-robert-samuel-white-v${version}.pdf`}
            download
            title="Download the complete testimony as a PDF"
            className={homepage
                ? "inline-flex items-center gap-2 rounded-lg bg-red-700 px-3 py-2 font-mono text-[10px] font-bold uppercase leading-none tracking-[0.14em] text-white shadow-sm hover:bg-red-800"
                : "inline-flex w-28 flex-col items-center gap-1 rounded-xl border border-red-200 bg-red-50 px-3 py-2 font-mono text-[9px] font-bold uppercase leading-none tracking-[0.18em] text-red-700 hover:border-red-300 hover:bg-red-100"
            }
        >
            <Icon name="Download" size={homepage ? 18 : 22} strokeWidth={1.75} aria-hidden />
            {homepage ? (
                <span>Download PDF</span>
            ) : (
                <>
                    <span>Download</span>
                    <span>PDF</span>
                </>
            )}
        </a>
    );
}
