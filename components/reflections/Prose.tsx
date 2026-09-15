// components/reflections/Prose.tsx
//
// The reflection and analysis prose the realm returns, rendered in the same
// idiom every citation overlay in this archive uses: 13px body, headings as
// small uppercase accent labels, bold kept. It is lightly marked up — `#`/`##`
// headings, `**bold**`, the occasional bullet — so this parses that much
// without a markdown dependency.
import React from "react";

// Inline: **bold**, *italic*, `code`. Everything else passes through as text.
function inline(text: string): React.ReactNode[] {
    const out: React.ReactNode[] = [];
    const re = /\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`/g;
    let last = 0;
    let k = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text))) {
        if (m.index > last) out.push(text.slice(last, m.index));
        if (m[1] !== undefined) out.push(<strong key={k++} className="font-semibold text-slate-900">{m[1]}</strong>);
        else if (m[2] !== undefined) out.push(<em key={k++}>{m[2]}</em>);
        else if (m[3] !== undefined) out.push(<code key={k++} className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.85em] text-slate-700">{m[3]}</code>);
        last = m.index + m[0].length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

export default function Prose({ text, accent = "sky" }: { text: string; accent?: "sky" | "emerald" }) {
    const label = accent === "emerald" ? "text-emerald-700" : "text-sky-700";
    const blocks = text.split(/\n{2,}/).map((b) => b.trim()).filter(Boolean);
    return (
        <div className="text-[13px] leading-relaxed text-slate-700">
            {blocks.map((b, i) => {
                const h = b.match(/^#{1,4}\s+(.*)$/);
                if (h) {
                    return (
                        <div key={i} className={`mb-1 mt-4 text-[10px] font-bold uppercase tracking-widest first:mt-0 ${label}`}>
                            {inline(h[1])}
                        </div>
                    );
                }
                const lines = b.split("\n").map((l) => l.trim());
                if (lines.length && lines.every((l) => /^[-*]\s+/.test(l))) {
                    return (
                        <ul key={i} className="mt-3 list-disc space-y-1 pl-5 first:mt-0">
                            {lines.map((l, j) => <li key={j}>{inline(l.replace(/^[-*]\s+/, ""))}</li>)}
                        </ul>
                    );
                }
                if (lines.every((l) => /^>\s?/.test(l))) {
                    const quoted = lines.map((l) => l.replace(/^>\s?/, "")).join(" ");
                    return (
                        <blockquote key={i} className="mt-3 border-l-2 border-slate-200 pl-3 italic text-slate-600 first:mt-0">
                            {inline(quoted)}
                        </blockquote>
                    );
                }
                return <p key={i} className="mt-3 first:mt-0">{inline(b.replace(/\n/g, " "))}</p>;
            })}
        </div>
    );
}
