"use client";

import { useEffect, useState } from "react";

const recognitionLines = [
  "You sent a professional email. It was used against you.",
  "You tried to fix it. The pressure got worse.",
  "Someone listened. Then reported what you said.",
  "You were called into a meeting with no agenda and no witness.",
  "You were told to leave before your term ended.",
  "No paperwork. No process. No explanation that made sense.",
  "You were told it was a personality conflict.",
  "You started to wonder if you imagined it.",
];

export default function VolunteersIntro() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        fontFamily: "'Georgia', 'Times New Roman', serif",
        margin: "0 auto",
        padding: "0 1.5rem",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      {/* Primary hook */}
      <div
        style={{
          borderLeft: "3px solid #1a1a1a",
          paddingLeft: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.7",
            margin: "0 0 1rem 0",
            color: "#1a1a1a",
            fontWeight: "400",
          }}
        >
          Something happened to you. You are trying to find the words for it.
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.7",
            margin: 0,
            color: "#444",
          }}
        >
          This page exists because what happened to you has a name —
          and because you deserve to find it before you lose the thread
          of what you know was real.
        </p>
      </div>

      {/* Recognition list — the mirror moment */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            margin: "0 0 1.25rem 0",
            fontFamily: "'Georgia', serif",
          }}
        >
          If any of this is familiar
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {recognitionLines.map((line, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75rem",
                padding: "0.65rem 0",
                borderBottom: "1px solid #e8e8e8",
                fontSize: "0.975rem",
                lineHeight: "1.5",
                color: "#2a2a2a",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(6px)",
                transition: `opacity 0.4s ease ${0.1 + i * 0.06}s, transform 0.4s ease ${0.1 + i * 0.06}s`,
              }}
            >
              <span
                style={{
                  color: "#999",
                  fontSize: "0.7rem",
                  flexShrink: 0,
                  userSelect: "none",
                  paddingTop: "2px",
                }}
              >
                —
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>

      {/* Pivot line — from recognition to framework */}
      <div
        style={{
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "#1a1a1a",
            margin: "0 0 0.75rem 0",
          }}
        >
          You did not imagine it.
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "#444",
            margin: "0 0 0.75rem 0",
          }}
        >
          What you experienced is a documented sequence — nine stages,
          applied in order, designed to remove a volunteer who created
          a record before the institution could contain it.
        </p>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.75",
            color: "#444",
            margin: 0,
          }}
        >
          It is called the displacement framework. Every stage below
          is documented in this archive with recordings, correspondence,
          and primary evidence. Your experience may not match every stage.
          But if it matches any of them, you are in the right place.
        </p>
      </div>

    </section>
  );
}
