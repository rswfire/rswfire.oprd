import { rootManifest } from "@/lib/qpManifest";

export const dynamic = "force-static";

export async function GET() {
    return Response.json(rootManifest());
}
