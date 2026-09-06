"use client";

import { useEffect, useState } from "react";

export default function VolunteersIntro() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section
            className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
        >
            <p className="text-lg sm:text-xl leading-relaxed text-gray-900">
                If you found this page, something happened to you, and you are looking for the
                words for it.
            </p>

            <p className="mt-8 text-xl sm:text-2xl font-semibold leading-relaxed tracking-tight text-gray-900">
                This archive exists for those who have been told they imagined it.
                <span className="block mt-3 text-gray-700">For those about to walk into something similar.</span>
                <span className="block mt-3 text-emerald-800">For the future, when denial no longer holds.</span>
            </p>
        </section>
    );
}
