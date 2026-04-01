// components/PrimaryDocuments.tsx
import Link from "next/link";
import Icon from "@/components/Icon";

export default function PrimaryDocuments() {
    return (
        <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white">
            {/* Recordings */}
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-4 sm:border-r border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-700">
                            <Icon name="Mic" className="text-white" size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Primary Recording</div>
                            <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">The Coercion Meeting</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-700 mt-3 pt-3 border-t border-gray-200"><strong>62 minutes at a public picnic table.</strong> The park manager told me to <em>chew glass and swallow it</em>. He admitted I was never given the benefit of the doubt from day one. I recorded every word.</div>
                    <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                        <Link href="/evidence/coercion" className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">Watch the Recording →</Link>
                    </div>
                </div>
                <div className="p-4 border-t sm:border-t-0 border-slate-200">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-700">
                            <Icon name="Mic" className="text-white" size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Primary Recording</div>
                            <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">The Containment Call</div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-700 mt-3 pt-3 border-t border-gray-200"><strong>30 minutes and 56 seconds.</strong> The regional coordinator weaponized personal disclosures to frame me as paranoid and delusional. She ignored every declaration of inappropriate treatment.</div>
                    <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                        <Link href="/evidence/expulsion" className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">Watch the Recording →</Link>
                    </div>
                </div>
            </div>
            {/* Dismissal Letter */}
            <div className="p-4 border-t-2 border-slate-300">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-700">
                        <Icon name="FileText" className="text-white" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Primary Document</div>
                        <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">The Dismissal Letter</div>
                    </div>
                </div>
                <div className="text-sm text-emerald-800 mt-3 pt-3 border-t border-gray-200"><strong>March 26, 2025.</strong> Allison Watson permanently expelled a volunteer from all Oregon State Parks &mdash; in writing &mdash; for speaking publicly about abuse. That is First Amendment retaliation. On agency letterhead. With a signature.</div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-3 pt-3 border-t border-gray-200 text-sm">
                    <Link href="/evidence/expulsion" className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">Read the Letter →</Link>
                    <a href="/oprd-dismissal.pdf" download className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">Download PDF ↓</a>
                </div>
            </div>
            {/* Police Intimidation */}
            <div className="p-4 border-t-2 border-slate-300">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-700">
                        <Icon name="Video" className="text-white" size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-emerald-700">Primary Recording</div>
                        <div className="text-sm font-semibold uppercase tracking-widest text-emerald-900">Police Intimidation</div>
                    </div>
                </div>
                <div className="text-sm text-gray-700 mt-3 pt-3 border-t border-gray-200"><strong>March 24, 2026 &mdash; the one-year anniversary of my dismissal.</strong> A U.S. Forest Service Special Agent and two unidentified state officers arrived at a locked federal gate on restricted federal land where I serve as caretaker. They stated concern about what I was posting online about Oregon State Parks. I declined to speak without an attorney and recorded them leaving.</div>
                <div className="mt-3 pt-3 border-t border-gray-200 text-sm">
                    <Link href="/evidence/police-intimidation" className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">Watch the Recording →</Link>
                </div>
            </div>
        </div>
    );
}
