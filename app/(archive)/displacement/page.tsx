// app/(archive)/displacement/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "The Displacement Framework",
    description: "Displacement is not a single act. It is a sequence — applied in stages, escalating in force, designed to remove a person from the ground they stand on before they can build a record that holds.",
};

const stages = [
    {
        id: "origin",
        number: "1",
        title: "The Origin Event",
        href: "/evidence/origin",
        connection: "Documentation itself became the threat. The record — not the behavior it documented — was what they needed to eliminate. Displacement begins the moment a volunteer creates a paper trail."
    },
    {
        id: "escalation",
        number: "2",
        title: "The Escalation Response",
        href: "/evidence/escalation",
        connection: "Good faith compliance was met with escalation. This is how displacement works: the target's behavior is irrelevant. The decision to remove has already been made. The institution is building justification, not responding to conduct."
    },
    {
        id: "trust",
        number: "3",
        title: "Trust Recruitment",
        href: "/evidence/trust",
        connection: "Personal disclosures were extracted through manufactured intimacy and weaponized to construct a psychological profile. Pathologizing the volunteer is the mechanism that makes displacement look like protection."
    },
    {
        id: "coercion",
        number: "4",
        title: "The Coercion Meeting",
        href: "/evidence/coercion",
        connection: "Sixty-two minutes of sustained pressure designed to produce a resignation. Voluntary displacement — the target removes themselves — is the cleanest outcome for the institution. No paperwork. No process. No record."
    },
    {
        id: "surveillance",
        number: "5",
        title: "Assessment & Surveillance",
        href: "/evidence/surveillance",
        connection: "A covert assessment was conducted to determine whether displacement could be justified. An unidentified man was sent while all rangers were away. The institution needed to know if the case it was building would hold."
    },
    {
        id: "dismissal",
        number: "6",
        title: "Dismissal Without Process",
        href: "/evidence/dismissal",
        connection: "Physical displacement executed without documentation, without cause, with 24 hours to vacate. No paperwork. No process. The absence of process is intentional — it leaves the volunteer with nothing to appeal."
    },
    {
        id: "expulsion",
        number: "7",
        title: "Expulsion & Retaliation",
        href: "/evidence/expulsion",
        connection: "Permanent displacement from all Oregon State Parks — not just Honeyman. The scope of expulsion was designed to eliminate future footholds. And the reason was put in writing: protected speech. That is the mistake that made this case."
    },
    {
        id: "containment",
        number: "8",
        title: "Institutional Containment",
        href: "/evidence/containment",
        connection: "When displacement failed to silence the record, every escalation channel was used to contain it. The director, the deputy director, the governor's office — each chose institutional protection over accountability. Silence is displacement by another name."
    },
    {
        id: "police",
        number: "9",
        title: "Police Intimidation",
        href: "/evidence/police",
        connection: "The final displacement attempt. Three officers at a locked federal gate on the anniversary of dismissal — designed to make the cost of continuing feel unsurvivable. It failed. And in failing, it became the loudest evidence of everything that came before it."
    }
]

export default function DisplacementPage() {
    return (
        <SectionPage
            title="THE DISPLACEMENT FRAMEWORK"
            previousPage={{ href: "/faq", label: "Frequently Asked Questions" }}
            nextPage={{ href: "/lisa-sumption", label: "The Director's Decisions" }}
        >

            <blockquote className="border-l-4 border-red-700 pl-6 py-4 mb-12">
                <p className="text-lg italic text-gray-800 leading-relaxed">
                    &ldquo;The threat of displacement is the institution&rsquo;s ultimate weapon. It is why volunteers stay silent. It is why abuse goes undocumented. It is why this problem persists.&rdquo;
                </p>
                <footer className="mt-3 text-sm text-gray-500 not-italic">
                    — Robert Samuel White, oprdvolunteerabuse.org
                </footer>
            </blockquote>

            <p className="text-base text-gray-700 leading-relaxed mb-12">
                Displacement is not a single act. It is a sequence — applied in stages, escalating in force, designed to remove a person from the ground they stand on before they can build a record that holds. What follows is that sequence, mapped across nine stages of documented institutional conduct.
            </p>

            <nav className="mb-16">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">Jump to stage</p>
                <div className="flex flex-wrap gap-2">
                    {stages.map((stage) => (
                        <Link
                            key={stage.id}
                            href={`#${stage.id}`}
                            className="text-sm border border-gray-300 px-3 py-1 text-gray-600 hover:border-red-700 hover:text-red-700 transition-colors"
                        >
                            {stage.number}. {stage.title}
                        </Link>
                    ))}
                </div>
            </nav>

            <div className="space-y-16">
                {stages.map((stage) => (
                    <section key={stage.id} id={stage.id} className="scroll-mt-8">
                        <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-xs font-mono text-red-700 uppercase tracking-widest">
                                Stage {stage.number}
                            </span>
                        </div>
                        <h2 className="text-xl font-serif font-semibold text-gray-900 mb-4">
                            {stage.title}
                        </h2>
                        <div className="border-l-4 border-red-700 pl-6 mb-4">
                            <p className="text-base text-gray-700 leading-relaxed">
                                {stage.connection}
                            </p>
                        </div>
                        <Link
                            href={stage.href}
                            className="text-sm text-red-700 hover:underline font-mono"
                        >
                            Read the evidence →
                        </Link>
                    </section>
                ))}
            </div>

            <div className="mt-24 border-t border-gray-200 pt-12">
                <p className="text-sm text-gray-500 leading-relaxed">
                    This framework was identified on April 3, 2026 — one year and ten days after the first displacement was executed. It was named on a beach on the Oregon coast. It will not be unnamed.
                </p>
            </div>

        </SectionPage>
    )
}
