const target = "/testimony/#the-director-and-her-deputy";

export const metadata = {
    title: "The Director and Her Deputy",
    alternates: { canonical: target },
};

export default function LisaSumptionRedirect() {
    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${target}`} />
            <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)});` }} />
        </>
    );
}
