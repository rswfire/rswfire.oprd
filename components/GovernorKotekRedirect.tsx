const target = "/testimony/#the-governor-s-silence";

export const metadata = {
    title: "The Governor's Silence",
    alternates: { canonical: target },
};

export default function GovernorKotekRedirect() {
    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${target}`} />
            <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)});` }} />
        </>
    );
}
