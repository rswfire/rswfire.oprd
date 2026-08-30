import { rootManifest } from "@/lib/qpManifest";

export const dynamic = "force-static";

// The canonical address of the Queryable Record. /qp.json serves the
// identical document for anything already holding that URL.
export async function GET() {
    return Response.json(rootManifest());
}
