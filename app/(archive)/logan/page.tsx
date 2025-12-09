// app/(archive)/logan/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Logan",
    description: "The moment trust was broken. Documentation of betrayal by a direct supervisor.",
};

export default function LoganPage() {
    return (
        <SectionPage
            title="LOGAN"
            subtitle="MARCH 2, 2025 — THE MOMENT TRUST WAS BROKEN"
        >

            <div className="mt-4">
                Logan was my direct supervisor. From the beginning, we formed something like a friendship.
                I saw in him a mix of depth and integrity, sometimes in quiet tension with the institution
                he served. I chose to make space for that. What I didn't see — or didn't want to — was
                that his integrity is compartmentalized.
            </div>

            <div className="mt-4">
                Logan participated in many of the dynamics detailed in this archive, though his role was
                tertiary — directives seeded by Ryan and Kati. When it became clear they were actively
                sabotaging my trajectory, I acted to protect myself. I wrote the "Trust" email to sever
                a dynamic that had become harmful.
            </div>

            <div className="mt-4">
                This letter requires context — context I would have preferred to leave private. I
                navigated this relationship with care. That care was later used against me.
            </div>

            <div className="mt-4">
                During the March 5 meeting, Ryan said — with mocking tone — that I "thought I had a
                future with Logan." It was absurd. I laughed. But I understood the insinuation. It was
                an accusation of inappropriate feelings — a weaponization of my sexuality, and a
                distortion of ordinary human emotion. And I'm nearly certain it only entered the
                narrative with Logan's consent.
            </div>

            <div className="mt-4">
                He also disclosed vulnerable, personal information I shared with him in trust —
                information later used by Allison Watson to pathologize my character during dismissal
                proceedings.
            </div>

            <div>
                <Link href="/logan/supplemental" className="text-emerald-700 underline">
                    Full documentation here →
                </Link>
            </div>

            <div className="mt-4">That is not just unethical. It is betrayal.</div>
            <div>But I will not center their distortions.</div>

            <div className="mt-4">
                For the record: nothing inappropriate ever happened between us. He was simply someone I
                trusted — and someone I now understand I should not have.
            </div>

            <div className="mt-4">
                I've chosen not to center him — not because his actions were minor, but because they
                were embedded in proximity and trust. That dynamic requires precision, not amplification.
            </div>

            <div className="mt-4">
                I think it deserves consequences — but perhaps private ones. He's a younger ranger, in
                a toxic, fragmented environment. That's not an excuse. But it is part of the system he's
                inside.
            </div>

            <div className="mt-4">
                When Logan lied to me — and there's no other word for it — I saw the writing on the
                wall. They were creating conditions they hoped would lead to my removal.
            </div>

            <div className="mt-4">
                That moment made clear: Logan was acting under instruction from people who were
                persistently unethical. And yet, in a different environment — with support, with
                reflection, and without distortion — I still believe Logan could thrive.
            </div>

            <h3 className="mt-8 text-lg font-semibold">
                📝 The "Trust" Email — Letter to Volunteer Coordinator Logan
            </h3>

            <Email
                from="Samuel White"
                to="Logan, Volunteer Coordinator"
                date="March 2, 2025"
            >
                <div>Logan,</div>

                <div className="mt-4">
                    I don't trust you, and that's because your actions have given me no reason to.
                </div>

                <div className="mt-4">
                    When I confided in you about the situation with Kati, you escalated it instead of
                    protecting me. Then you disappeared.
                </div>

                <div className="mt-4">
                    When I applied for a job here, you distanced yourself again. The moment I withdrew my
                    application, you reappeared — spending ninety minutes talking about yourself.
                </div>

                <div className="mt-4">
                    When I finally opened up to you about why I'm here, what I sacrificed to be here, and
                    why this matters to me, you responded by trying to manage my perception instead of
                    actually listening.
                </div>

                <div className="mt-4">And then? You distanced yourself again.</div>

                <div className="mt-4">
                    When I warned you — privately — to prevent a repeat of the Kati situation, you assured
                    me Leaf would train me. That didn't happen.
                </div>

                <div className="mt-4">At every critical moment, you have failed to act with integrity.</div>
                <div>At every opportunity to lead, you have instead chosen avoidance.</div>

                <div className="mt-4">
                    I will continue to do my job professionally for the next month.
                </div>
                <div>
                    You will ensure that my contributions are recognized appropriately in your system.
                </div>

                <div className="mt-4">
                    I will not allow the dysfunction here to interfere with my larger trajectory.
                </div>
                <div>If there is any pushback on this, understand that I am fully prepared for it.</div>

                <div className="mt-4">Sam</div>
            </Email>

        </SectionPage>
    );
}