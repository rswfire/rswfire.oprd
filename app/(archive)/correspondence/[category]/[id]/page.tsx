// app/(archive)/correspondence/[category]/[id]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import PostalMime from "postal-mime";
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import correspondenceData from "@/public/correspondence/index.json";

type Props = {
    params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, id } = await params;

    // Find the correspondence item
    const categoryData = correspondenceData[category as keyof typeof correspondenceData];
    const item = categoryData?.find((i: any) => i.id === id);

    if (!item) {
        return { title: "Not Found" };
    }

    return {
        title: `${item.recipient} - ${item.date}`,
        description: item.description,
    };
}

export default async function CorrespondenceDetailPage({ params }: Props) {
    const { category, id } = await params;

    // Validate category
    if (!["complaints", "institution", "press", "opposition"].includes(category)) {
        notFound();
    }

    // Find the correspondence item
    const categoryData = correspondenceData[category as keyof typeof correspondenceData];
    const item = categoryData?.find((i: any) => i.id === id);

    if (!item) {
        notFound();
    }

    // Read and parse .eml file
    const emlPath = path.join(process.cwd(), "public", "correspondence", category, `${id}.eml`);

    let emailData;
    try {
        const emlContent = await fs.readFile(emlPath, "utf-8");
        const parser = new PostalMime();
        emailData = await parser.parse(emlContent);
    } catch (error) {
        console.error("Error parsing email:", error);
        notFound();
    }

    const { from, to, subject, date, html, text } = emailData;

    return (
        <SectionPage
            title={subject || "No Subject"}
            subtitle={new Date(date || item.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        >
            <div className="mt-8 p-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
                <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
                    <div className="font-semibold">From:</div>
                    <div>{from?.address || "Unknown"}</div>

                    <div className="font-semibold">To:</div>
                    <div>
                        {Array.isArray(to)
                            ? to.map((t: any) => t.address).join(", ")
                            : to?.address || "Unknown"}
                    </div>

                    <div className="font-semibold">Date:</div>
                    <div>
                        {date
                            ? new Date(date).toISOString().split('T')[0] // YYYY-MM-DD
                            : item.date}
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="prose max-w-none">
                {html ? (
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                ) : (
                    <pre className="whitespace-pre-wrap font-sans">{text}</pre>
                )}
            </div>
        </SectionPage>
    );
}

export async function generateStaticParams() {
    const params: { category: string; id: string }[] = [];

    for (const [category, items] of Object.entries(correspondenceData)) {
        for (const item of items as any[]) {
            params.push({
                category,
                id: item.id,
            });
        }
    }

    return params;
}