// components/archive/Email.tsx
import type { ReactNode } from 'react';

type EmailProps = {
    from?: string;
    to?: string;
    cc?: string;
    date?: string;
    subject?: string;
    children: ReactNode;
};

export default function Email({ from, to, cc, date, subject, children }: EmailProps) {
    return (
        <div className="mt-4 border border-gray-300 rounded-md shadow-sm bg-white overflow-hidden">
            {/* Email header metadata */}
            {(from || to || cc || date || subject) && (
                <div className="bg-gray-50 border-b border-gray-300 px-4 py-3 text-sm">
                    {from && (
                        <div className="mb-1">
                            <span className="font-semibold">From:</span> {from}
                        </div>
                    )}
                    {to && (
                        <div className="mb-1">
                            <span className="font-semibold">To:</span> {to}
                        </div>
                    )}
                    {cc && (
                        <div className="mb-1">
                            <span className="font-semibold">CC:</span> {cc}
                        </div>
                    )}
                    {date && (
                        <div className="mb-1">
                            <span className="font-semibold">Date:</span> {date}
                        </div>
                    )}
                    {subject && (
                        <div className="mt-2 font-semibold">
                            Subject: {subject}
                        </div>
                    )}
                </div>
            )}

            {/* Email body */}
            <div className="max-h-[40rem] overflow-y-auto p-4 leading-relaxed font-mono text-sm">
                {children}
            </div>
        </div>
    );
}