// components/archive/Quote.tsx
type QuoteProps = {
    children: React.ReactNode;
    speaker?: string;
    context?: string;
};

export default function Quote({ children, speaker, context }: QuoteProps) {
    return (
        <blockquote className="border-l-4 border-red-500 pl-6 py-4 my-8 bg-red-50/50 italic text-slate-800">
            <p className="text-lg">{children}</p>
            {speaker && (
                <footer className="mt-2 text-sm text-slate-600 not-italic">
                    — {speaker}
                    {context && <span className="text-slate-500"> ({context})</span>}
                </footer>
            )}
        </blockquote>
    );
}