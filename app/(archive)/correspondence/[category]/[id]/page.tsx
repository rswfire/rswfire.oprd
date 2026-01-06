// app/(archive)/correspondence/[category]/[id]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { simpleParser } from "mailparser";
import type { Metadata } from "next";
import SectionPage from "@/components/SectionPage";
import correspondenceData from "@/public/correspondence/index.json";

type Props = {
    params: Promise<{ category: string; id: string }>;
};

type EmailAddress = {
    address: string;
    name?: string;
};

type ParsedEmail = {
    from?: EmailAddress;
    to?: EmailAddress | EmailAddress[];
    subject?: string;
    date?: string;
    text?: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, id } = await params;
    const categoryData = correspondenceData[category as keyof typeof correspondenceData];
    const item = categoryData?.find((i: any) => i.id === id);

    if (!item) return { title: "Not Found" };

    return {
        title: `${item.recipient} - ${item.date}`,
        description: item.description,
    };
}

export default async function Page({ params }: Props) {
    const { category, id } = await params;

    if (!["complaints", "institution", "press", "general"].includes(category)) {
        notFound();
    }

    const categoryData = correspondenceData[category as keyof typeof correspondenceData];
    const item = categoryData?.find((i: any) => i.id === id);

    if (!item) notFound();

    const emlPath = path.join(process.cwd(), "public", "correspondence", category, `${id}.eml`);

    let emailData: ParsedEmail;
    try {
        const emlContent = await fs.readFile(emlPath);
        const parsed = await simpleParser(emlContent);

        const fromValue = parsed.from && 'value' in parsed.from ? parsed.from.value : null;
        const toValue = parsed.to && 'value' in parsed.to ? parsed.to.value : null;

        const fromAddress = Array.isArray(fromValue) ? fromValue[0] : fromValue;
        const toAddress = Array.isArray(toValue) ? toValue[0] : toValue;

        emailData = {
            from: fromAddress ? {
                address: fromAddress.address || '',
                name: fromAddress.name
            } : undefined,
            to: toAddress ? {
                address: toAddress.address || '',
                name: toAddress.name
            } : undefined,
            subject: parsed.subject,
            date: parsed.date?.toISOString(),
            text: parsed.text
                ?.replace(/\[cid:[^\]]+\]/g, '')
                .split('\n')
                .filter(line => !line.trim().startsWith('_____'))
                .join('\n')
                .trim()
        };
    } catch (error) {
        console.error("Error parsing email:", error);
        notFound();
    }

    const { from, to, subject, date, text } = emailData;

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
                    <div suppressHydrationWarning>
                        {Array.isArray(to)
                            ? to.map((t: EmailAddress) => t.address).join(", ")
                            : to?.address || "Unknown"}
                    </div>

                    <div className="font-semibold">Date:</div>
                    <div suppressHydrationWarning>
                        {date
                            ? new Date(date).toLocaleString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour: "numeric",
                                minute: "2-digit",
                                timeZoneName: "short",
                            })
                            : item.date}
                    </div>
                </div>
            </div>

            <hr className="my-6 border-t border-gray-300" />

            <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap font-sans">{text}</pre>
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
