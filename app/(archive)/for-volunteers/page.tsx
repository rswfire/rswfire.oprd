// The page moved to /volunteers. The old address is reachable from the
// testimony PDF and from letters already sent, so it stays and forwards.

const target = "/volunteers";

export const metadata = {
    title: "For Volunteers",
    alternates: { canonical: target },
};

export default function ForVolunteersRedirect() {
    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${target}`} />
            <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)});` }} />
        </>
    );
}
