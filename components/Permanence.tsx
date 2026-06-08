// components/Permanence.tsx
import { Github } from "lucide-react";

// Closing declaration in the sidebar: this archive is distributed and
// cannot be quietly removed. The permanence claim rests on it being a
// public git repo — forkable, cloneable, mirrored — not on any single host.
export default function Permanence() {
    return (
        <div className="mt-6 w-full rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden">
            <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2.5 border-b border-slate-200">
                <Github className="h-4 w-4 text-slate-700" aria-hidden="true" />
                <div className="text-sm font-bold uppercase tracking-wide text-slate-900">
                    Permanent Record
                </div>
            </div>

            <div className="px-4 py-4 text-sm leading-relaxed text-slate-700">
                <p>
                    Hosted free and open on GitHub directly. No server to seize.
                    No host to pressure. No invoice to cancel.
                </p>
                <p className="mt-3 font-semibold text-slate-900">
                    It does not come down.<br />It does not go away.<br />It does not need me to stay up.
                </p>
            </div>
        </div>
    );
}
