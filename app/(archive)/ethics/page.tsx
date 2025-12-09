// app/(archive)/ethics/page.tsx
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";

export const metadata: Metadata = {
    title: "A Note About Ethics",
    description: "On maintaining ethical clarity in the face of institutional dysfunction.",
};

export default function EthicsPage() {
    return (
        <SectionPage title="A NOTE ABOUT ETHICS">

            <div className="mt-4">I thought ethics were the rulebook.</div>

            <div className="mt-4">
                I approached Oregon State Parks believing that basic human decency, professional
                accountability, and institutional integrity were shared values — the foundation we all
                operated from. I assumed that documenting misconduct would lead to correction, that
                truth-telling would be welcomed, that maintaining ethical boundaries was not just
                acceptable but expected.
            </div>

            <div className="mt-4">I was wrong.</div>

            <div className="mt-4">
                What I discovered instead was an institution where ethical consistency is viewed as
                inflexibility, where accountability requests are treated as attacks, where documentation
                of misconduct becomes more problematic than the misconduct itself. A system so dependent
                on people's willingness to absorb harm quietly, to fragment under pressure, to prioritize
                institutional comfort over ethical clarity, that basic integrity becomes revolutionary.
            </div>

            <div className="mt-4">
                This archive exists because I maintained what should have been unremarkable standards:
                I documented interactions, I communicated clearly, I held boundaries, I expected good
                faith responses to legitimate concerns. These simple practices — which should be
                institutional norms — made me what they considered an impossible adversary.
            </div>

            <div className="mt-4">Not because I was unreasonable. Not because I was vindictive. Not because I operated outside ethical guidelines.</div>

            <div className="mt-4">But because I refused to abandon them.</div>

            <div className="mt-4">
                This archive documents what happens when someone approaches institutional dysfunction
                with uncompromising ethical clarity. It reveals how systems protect themselves by
                targeting those who witness their failures. It shows what institutional retaliation
                looks like when deployed against someone whose only "weapon" is documented truth.
            </div>

            <div className="mt-4">
                This is not a story about one problematic park or a few bad employees. This is a story
                about what modern institutions have become when basic human decency is perceived as an
                existential threat to their operations.
            </div>

            <div className="mt-4">I thought ethics were the rulebook.</div>

            <div className="mt-4">They should be.</div>

            <div className="mt-4">
                The archive that follows is proof that they're not — and testimony to what happens
                when someone refuses to accept that corruption as normal.
            </div>

        </SectionPage>
    );
}