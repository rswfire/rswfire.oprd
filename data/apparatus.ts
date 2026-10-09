// The apparatus, counted, before he says a word.
//
// ONE source. This block appears in two places that cannot see each
// other: the door on the index page (components/TestimonyCard.tsx) and
// page 2 of the testimony PDF (scripts/make-testimony-pdf.py). It was
// hardcoded in both, so an edit to the card left the PDF carrying the
// old wording with nothing to catch it.
//
// The Python reader parses the quoted strings below by key, the same
// way it already reads data/testimonySignals.ts. That means the shape
// matters: keep each value a single double-quoted string on one line.
// Use real typographic quotes and apostrophes rather than HTML
// entities, so the string renders identically in JSX and in the PDF's
// HTML without either side escaping anything.
//
// Every line of it comes from the PR27478 production the Oregon State
// Police released, which is what the citation at the end points to.

export const APPARATUS = {
    count: "Thirteen officials, six agencies, against one unpaid volunteer who wrote letters.",
    roster: "An Oregon State Parks manager and a deputy director. An Oregon State Police press captain. A lieutenant of Criminal Investigations. A Major Crimes detective, a sergeant, and a second detective who is a task force officer on the Portland FBI Joint Terrorism Task Force, who pulled in two FBI personnel. A criminal intelligence analyst at the state’s Department of Justice fusion center. A federal special agent and a patrol captain. Later a sheriff’s deputy.",
    account: "They ran his name through channels built for terrorism, mapped his home using a hunting app, and told his supervisor to say nothing to him. Then they arrived on the anniversary of his dismissal for a “knock and talk” to tell him he was “not in trouble.” There was never a crime alleged. They drove sixty-eight minutes to exercise power anyway.",
    citation: "Every line of this is in their own file.",
    citationUlid: "01M1M4WF78XJPEJJ48D1JZ4SJ8",
    citationThread: "osp",
} as const;
