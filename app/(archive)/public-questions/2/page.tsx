// app/(archive)/public-questions/2/page.tsx
//
// Question 2, put to the three custodians of the answer. The table follows
// each request from the day it is sent to its production.

import type { Metadata } from "next";
import Link from "next/link";
import SectionPage from "@/components/SectionPage";
import TrackerTable from "@/components/TrackerTable";
import QuestionNav from "@/components/QuestionNav";
import { QUESTION_2_AGENCIES, questionBySlug } from "@/data/questions";
import { rowsFor } from "@/lib/questionRows";

const Q = questionBySlug("public-question-2");

export const metadata: Metadata = {
    title: "Public Question 2",
    description: Q.question,
};

const link = "underline text-emerald-800 hover:text-emerald-600";

// The state's own documents, cited where the sentence rests on them.
const SRC = {
    report: "https://olis.oregonlegislature.gov/liz/2020R1/Downloads/CommitteeMeetingDocument/216317",
    digest: "https://content.govdelivery.com/accounts/ORDAS/bulletins/3c6649e",
    ntt: "https://www.highergov.com/sl/contract-opportunity/or-eis-ntt-pro-services-special-procurement-51980448/",
    survey: "https://www.oregon.gov/pra/SiteAssets/Pages/advisory-council-past-meetings/Findings%20and%20Recommendations%20from%20the%202025%20Oregon%20Public%20Records%20Transparency%20Survey.pdf",
};
const ROWS = rowsFor("public-question-2", QUESTION_2_AGENCIES);

export default function PublicQuestion2Page() {
    return (
        <SectionPage
            emblem="MailQuestionMark" tone="sky"
            title="PUBLIC QUESTION 2"
            subtitle="RECORDS REQUESTS"
        >
            <QuestionNav n={2} />
            <h2 className="mb-8 text-2xl sm:text-3xl font-semibold leading-snug text-gray-900">
                {Q.question}
            </h2>

            <div className="mb-10 space-y-4 text-base">
                <div>
                    In 2019 the Legislature{" "}
                    <a href={SRC.report} className={link} target="_blank" rel="noopener noreferrer">ordered every executive branch agency onto one email system</a>, run by Enterprise Information Services inside the Department of Administrative Services. The February 2020 progress report to Ways and Means{" "}
                    <a href={SRC.report} className={link} target="_blank" rel="noopener noreferrer">listed what the state was buying with it</a>: “Advanced Compliance: Advanced eDiscovery.” On November 21, 2024,{" "}
                    <a href={SRC.digest} className={link} target="_blank" rel="noopener noreferrer">the last on-premises mail server was shut off</a>, with 46 agencies moved. The vendor that supports the system today{" "}
                    <a href={SRC.ntt} className={link} target="_blank" rel="noopener noreferrer">lists “eDiscovery”</a>{" "}
                    among the services it maintains.
                </div>
                <div>
                    Under{" "}
                    <Link href="/public-questions/1" className={link}>Public Question 1</Link>, I am asking every state agency in Oregon the same question about its email. The first requests went out on October 22 and October 27, 2026. Before the day was out, one agency had its{" "}
                    <Link href="/record/public-question-1/01M5ZMSTZG2CY6QT8SJTNGPSQW" className={link}>twelve staff searching their own inboxes</Link>, and another was{" "}
                    <Link href="/record/public-question-1/01M5ZPMTNRMPG3CRR9XYTPXM0H" className={link}>drawing up an invoice</Link>{" "}
                    for “many hours of staff labor.” The Public Records Advocate’s own{" "}
                    <a href={SRC.survey} className={link} target="_blank" rel="noopener noreferrer">2025 survey of public bodies</a>{" "}
                    says “modernized email search tools” brought “significant improvements,” and tells the state to “provide shared software licenses for search tools.”
                </div>
                <div>
                    So the question went to the three offices that hold the answer. The{" "}
                    <Link href="/record/public-question-2/01M605SNAGRDKGYDW7JRFWQGN0" className={link}>Department of Administrative Services</Link>: which agencies are on the system, what eDiscovery it carries, how often it has been used for a public records request, and what it costs an agency to ask. The{" "}
                    <Link href="/record/public-question-2/01M606SRNGCZCQEYTQ9XH2NP7Q" className={link}>Department of Justice</Link>: what the Attorney General’s manual and training tell public bodies about searching email, and how the Department searches its own. The{" "}
                    <Link href="/record/public-question-2/01M60799QRA2499B23F73Z6JRX" className={link}>Secretary of State</Link>: what the State Archivist has told agencies about keeping and finding email, and which agencies capture it into a system that can be searched.
                </div>
                <div>
                    Every denial, cost imposed, and/or production is published here in full.
                </div>
            </div>

            <TrackerTable rows={ROWS} register={{ slug: "public-question-2", label: "Public Question 2" }} />
        </SectionPage>
    );
}
