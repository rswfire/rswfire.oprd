// app/(archive)/public-questions/page.tsx
//
// One question, put to every state agency on the State of Oregon's own list.
// The table follows each request from the day it is sent to its production.

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import PersonLink from "@/components/PersonLink";
import TrackerTable, { type Letter } from "@/components/TrackerTable";
import { PUBLIC_QUESTION_1_THREAD } from "@/data/threads";
import { AGENCIES, QUESTION, TRACKER_SOURCE } from "@/data/tracker";

export const metadata: Metadata = {
    title: "Public Questions",
    description: QUESTION,
};

const link = "underline text-emerald-800 hover:text-emerald-600";

// Each agency's exchange, resolved from the register: the request, the
// acknowledgment, and every message after, oldest first. A ULID is its time,
// so sorting the ids sorts the messages.
const FILINGS = new Map(PUBLIC_QUESTION_1_THREAD.filings.map((f) => [f.ulid, f]));
const ROWS = AGENCIES.map((a) => {
    const e = a.entry;
    const ids = [e.sent?.doc?.ulid, e.acknowledged?.doc?.ulid, ...(e.correspondence ?? [])]
        .filter((u): u is string => !!u);
    const letters: Letter[] = [...new Set(ids)].sort().map((u) => {
        const f = FILINGS.get(u);
        if (!f) throw new Error(`public questions: ${a.slug} cites ${u}, not in the register`);
        return { ulid: f.ulid, d: f.d, date: f.date, time: f.time, kind: f.kind, from: f.from, to: f.to, title: f.title, summary: f.summary };
    });
    return { ...a, letters };
});

export default function PublicQuestionsPage() {
    return (
        <SectionPage
            emblem="MailQuestionMark" tone="sky"
            title="PUBLIC QUESTIONS"
            subtitle="RECORDS REQUESTS"
            previousPage={{ href: "/records-requests", label: "Records Requests" }}
        >
            <h2 className="mb-8 text-2xl sm:text-3xl font-semibold leading-snug text-gray-900">
                {QUESTION}
            </h2>

            <div className="mb-10 space-y-4 text-base">
                <div>
                    On March 3, 2026,{" "}
                    <PersonLink name="deputy director" seat="deputy" label="a state agency" />{" "}
                    forwarded this archive to{" "}
                    <PersonLink name="press captain" seat="press-captain" label="the captain of Government and Media Relations" />{" "}
                    at Oregon State Police. No crime
                    was alleged. The next day a “threat assessment” was ordered. Three weeks later, behind a locked gate on restricted federal land, the man who keeps it was confronted by three men who had traveled sixty-eight minutes to tell him he was “not in trouble.”
                </div>
                <div>
                    That man{" "}
                    <PersonLink name="me" seat="volunteer" label="was me" />.
                    Those records came out of{" "}
                    <Link href="/record/osp/01M1M4WF78XJPEJJ48D1JZ4SJ8" className={link}>Oregon State Police</Link>,
                    and no public record shows how often it happens to anyone else.
                </div>
                <div>
                    On October 22, 2026, I asked Oregon State Police for{" "}
                    <Link href="/record/public-question-1/01M5JGN4GGQX1SS6GYNYG0NGA5" className={link}>every “threat assessment” that went through the captain’s office</Link>{" "}
                    since January 1, 2023, and I am asking every state agency in Oregon for its correspondence with
                    the public relations office over the same period. Together, their answers will show how agencies use it. The
                    public should know when documenting a state agency makes them a police matter.
                </div>
                <div>
                    Every denial, cost imposed, and/or production is published here in full.
                </div>
            </div>

            <TrackerTable rows={ROWS} />

            <p className="mt-6 text-xs text-gray-500">
                Agency list: State of Oregon,{" "}
                <a href={TRACKER_SOURCE.href} className={link} target="_blank" rel="noopener noreferrer">Find an Oregon Agency</a>,
                as published on {new Date(TRACKER_SOURCE.retrieved + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}.
            </p>
        </SectionPage>
    );
}
