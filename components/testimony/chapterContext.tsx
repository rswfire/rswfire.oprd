"use client";

// components/testimony/chapterContext.tsx
//
// Which chapter a paragraph sits in, provided by the chapter and read by the
// paragraph's share overlay, so a citation can say where it is:
// "Chapter One, The Shedding, ¶3". Paragraph numbers stay global to the
// document; the chapter is context, not a numbering scheme.
import { createContext, useContext } from "react";

export interface Chapter {
    word: string;   // "One"
    title: string;  // "The Shedding"
}

const ChapterContext = createContext<Chapter | null>(null);

export function ChapterProvider({ value, children }: { value: Chapter; children: React.ReactNode }) {
    return <ChapterContext.Provider value={value}>{children}</ChapterContext.Provider>;
}

export function useChapter(): Chapter | null {
    return useContext(ChapterContext);
}
