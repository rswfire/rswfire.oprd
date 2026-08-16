// data/faq.ts
//
// The questions, in the order they are answered. The FAQ page builds its
// contents from this and so does the homepage, so a question is written once.

export interface FaqQuestion {
    id: string; // anchor on /faq
    question: string;
}

export const FAQ_QUESTIONS: FaqQuestion[] = [
    { id: "sue", question: "Why didn't you sue them?" },
    { id: "target", question: "Why would they target you?" },
    { id: "leave", question: "Why didn't you leave?" },
    { id: "move-on", question: "Why not move on?" },
    { id: "response", question: "Have they responded to any of this?" },
    { id: "verify", question: "How can people verify this documentation?" },
    { id: "ai", question: "Does any of this use AI?" },
    { id: "accountability", question: "What do you want to happen?" },
    { id: "retaliation", question: "Aren't you worried about retaliation?" },
    { id: "proper-channels", question: "Why make this public instead of going through proper channels?" },
    { id: "silence", question: "What does their silence mean?" },
    { id: "tone", question: "Why is your tone so direct?" },
    { id: "epistemic", question: "What is an epistemic violation?" },
    { id: "egregious", question: "What made this case particularly egregious?" },
    { id: "next", question: "What happens next?" },
];
