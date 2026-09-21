import Icon from "@/components/Icon";

export default function TestimonyPdfButton() {
    return (
        <a
            href="/testimony-of-robert-samuel-white-v1.8.pdf"
            download
            title="Download the complete testimony as a PDF"
            className="inline-flex w-28 flex-col items-center gap-1 rounded-xl border border-red-200 bg-red-50 px-3 py-2 font-mono text-[9px] font-bold uppercase leading-none tracking-[0.18em] text-red-700 hover:border-red-300 hover:bg-red-100"
        >
            <Icon name="Download" size={22} strokeWidth={1.75} aria-hidden />
            <span>Download</span>
            <span>PDF</span>
        </a>
    );
}
