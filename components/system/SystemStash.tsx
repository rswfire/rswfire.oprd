// components/system/SystemStash.tsx
//
// Stashed from the System page, to come back later: the patterns and the
// tactics side by side. Not rendered anywhere.
import Patterns from "@/components/system/Patterns";
import SideBySide from "@/components/system/SideBySide";

function Head({ n, id, title }: { n: string; id: string; title: string }) {
    return (
        <div className="mb-8">
            <div className="font-mono text-[13px] font-bold text-emerald-700">{n}</div>
            <h2 id={id} className="m-0 mt-1 text-[28px] font-semibold leading-tight tracking-tight text-slate-950 sm:text-[32px]">{title}</h2>
        </div>
    );
}

export default function SystemStash() {
    return (
        <>
            <section aria-labelledby="the-patterns" className="mt-16 sm:mt-20">
                <Head n="01" id="the-patterns" title="The patterns" />
                <Patterns />
            </section>

            <section aria-labelledby="side-by-side" className="mt-20 sm:mt-24">
                <Head n="02" id="side-by-side" title="Side by side" />
                <SideBySide />
            </section>
        </>
    );
}
