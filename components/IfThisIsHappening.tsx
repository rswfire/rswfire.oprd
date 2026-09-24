// One source for the invitation and the contact details. The volunteers page
// and the contact page both render it, so the words are edited in one place.

export default function IfThisIsHappening({ headingId }: { headingId?: string }) {
    return (
        <>
            <h2 id={headingId} className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-48">
                IF THIS IS HAPPENING TO YOU
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                When this happened to me, the supervisor tried to isolate me and the manager
                tried to gaslight me.{" "}
                <a
                    href="https://rswfire.com/library/signal/01JQ7VZB00NEQK4NYZMW5WYW04"
                    target="_blank"
                    rel="noopener"
                    className="text-emerald-800 underline decoration-emerald-300 hover:text-emerald-600"
                >
                    I held my shape
                </a>
                , and you can too. If you need support, you are welcome to reach out below.
            </p>


            <p className="text-base text-gray-700 mb-2">
                <span className="font-semibold">Robert Samuel White</span>
            </p>
            <p className="text-sm text-gray-500 mb-1">Former Oregon State Parks Volunteer</p>
            <p className="text-sm text-gray-500 mb-4">Current U.S. Forest Service Caretaker</p>
            <p className="text-sm text-gray-500 mb-1">P.O. Box 334</p>
            <p className="text-sm text-gray-500 mb-4">Reedsport, Oregon 97467</p>
            <a href="mailto:rsw@rswfire.com" className="text-red-700 hover:underline text-sm font-mono">
                rsw@rswfire.com
            </a>
        </>
    );
}
