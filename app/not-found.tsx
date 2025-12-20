// app/not-found.tsx
import Link from "next/link";
import { archiveSections } from "@/lib/sections";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        PAGE NOT FOUND
                    </h1>
                    <p className="text-lg text-gray-600">
                        The page you're looking for doesn't exist.
                    </p>
                </div>

                <div className="border-l-4 border-emerald-600 pl-6">
                    <h2 className="text-xl font-semibold mb-4">
                        NAVIGATE TO:
                    </h2>
                    <nav className="space-y-4">
                        {archiveSections.map((section, index) => {
                            // Skip separators
                            if (section.separator) return null;

                            return (
                                <div key={section.href || index}>
                                    <Link
                                        href={section.href}
                                        className="text-lg font-semibold text-emerald-700 hover:underline"
                                    >
                                        {section.label}
                                    </Link>
                                    {section.subsections && section.subsections.length > 0 && (
                                        <ul className="mt-2 ml-4 space-y-1">
                                            {section.subsections.map((sub) => (
                                                <li key={sub.href}>
                                                    <Link
                                                        href={sub.href}
                                                        className="text-gray-700 hover:text-emerald-700 hover:underline"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                    </nav>
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/"
                        className="text-emerald-700 hover:underline font-semibold"
                    >
                        ← Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}