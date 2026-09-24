// Moved with its parent to /volunteers/what-it-means.

const target = "/volunteers/what-it-means";

export const metadata = {
    title: "What It Means",
    alternates: { canonical: target },
};

export default function WhatItMeansRedirect() {
    return (
        <>
            <meta httpEquiv="refresh" content={`0; url=${target}`} />
            <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(target)});` }} />
        </>
    );
}
