// app/(archive)/trust-broken/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import Email from "@/components/archive/Email";

export const metadata: Metadata = {
    title: "Trust Broken",
    description: "The moment trust was broken. Documentation of betrayal by a direct supervisor.",
};

export default function TrustBrokenPage() {
    return (
        <SectionPage
            title="TRUST BROKEN"
            subtitle="MARCH 2, 2025 &mdash; THE MOMENT TRUST WAS BROKEN"
        >

            <div className="mt-4 p-4 bg-gray-50 border-l-4 border-emerald-600 text-sm">
                <div>
                    I initially considered leaving Logan's full name out of this archive. He is younger,
                    early in his career, and operating within a demonstrably toxic institutional culture.
                    I wanted to distinguish between those who orchestrated abuse and those who enabled it
                    under pressure.
                </div>

                <div className="mt-3">
                    But the evidence is clear: Logan weaponized supervisory trust, disclosed confidential
                    personal information, and participated in identity-based targeting. His choices had
                    consequences. This archive names those choices.
                </div>

                <div className="mt-3 font-semibold">
                    Logan Bliss, Volunteer Services Lead, betrayed the trust inherent in his
                    supervisory role.
                </div>
            </div>

            <div className="mt-6">
                Logan was my direct supervisor.
            </div>

            <div className="mt-4">From the beginning, we formed something like a friendship.
                I saw in him a mix of depth and integrity, sometimes in quiet tension with the institution
                he serves. I chose to make space for that. What I didn't see &mdash; or didn't want to &mdash; was
                that his integrity is compartmentalized.
            </div>

            <div className="mt-4">
                During the March 5 meeting, Ryan Warren said &mdash; with mocking tone &mdash; that I &quot;thought I had a
                future with Logan.&quot; It was absurd. I laughed. But I understood the insinuation. It was
                an accusation of inappropriate feelings &mdash; a weaponization of my sexuality, and a
                distortion of ordinary human emotion. And I'm nearly certain it only entered the
                narrative with Logan's consent.
            </div>

            <div className="mt-4">
                Logan also disclosed vulnerable, personal information I shared with him in trust &mdash;
                information later used by Allison Watson to pathologize my character during dismissal
                proceedings.
            </div>

            <div className="mt-2">
                <Link href="/trust-broken/supplemental" className="text-emerald-700 underline">
                    Full Supplemental Documentation Here →
                </Link>
            </div>

            <div className="mt-4">That is not just unethical. It is betrayal.</div>

            <div className="mt-4">
                For the record: nothing inappropriate ever happened between us. He was simply someone I
                trusted &mdash; and someone I now understand I never should have.
            </div>

            <div className="mt-4">
                When it became clear the leadership team at Honeyman were actively sabotaging my trajectory, I acted to
                protect myself. I wrote the "Trust" email to sever a dynamic that had become harmful.
            </div>

            <h3 className="mt-8 text-lg font-semibold">
                📝 The &quot;Trust&quot; Email &mdash; Letter to Volunteer Services Lead Logan
            </h3>

            <Email
                from="Samuel White"
                to="Logan Bliss, Volunteer Services Lead"
                date="March 2, 2025"
                subject="Trust."
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
                    application, you reappeared &mdash; spending ninety minutes talking about yourself.
                </div>

                <div className="mt-4">
                    When I finally opened up to you about why I'm here, what I sacrificed to be here, and
                    why this matters to me, you responded by trying to manage my perception instead of
                    actually listening.
                </div>

                <div className="mt-4">And then? You distanced yourself again.</div>

                <div className="mt-4">
                    When I warned you &mdash; privately &mdash; to prevent a repeat of the Kati situation, you assured
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