import { THREADS } from "@/data/threads";
import { threadDetail } from "@/lib/qpManifest";

export const dynamic = "force-static";

// Canonical thread addresses under the Queryable Record. The /qp/
// counterparts serve the identical documents for URLs already in the wild.
export function generateStaticParams() {
    return THREADS.map((t) => ({ file: `${t.slug}.json` }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
    const { file } = await params;
    const detail = threadDetail(file.replace(/\.json$/, ""));
    if (!detail) return new Response("Not found", { status: 404 });
    return Response.json(detail);
}
