// One source for the invitation and the contact details. The volunteers page
// and the contact page both render it, so the words are edited in one place.

export default function IfThisIsHappening({ headingId }: { headingId?: string }) {
    return (
        <>
            <h2 id={headingId} className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-48">
                IF THIS IS HAPPENING TO YOU
            </h2>

            <p className="text-base text-gray-700 leading-relaxed mb-4">
                I built this because there was no one for me to turn to. There can be one for
                you. If you recognize your situation in this record &mdash; whether it is
                unfolding now or ended years ago &mdash; you can write to me directly. I am not
                a lawyer and cannot give legal advice. What I can do is help you understand
                what you are looking at, how to document it so it holds, and that you are not
                imagining it and not alone. There is no cost, and nothing you send is
                published without your word.
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
