// lib/displacementFraming.ts

export type DisplacementEntry = {
    stage: string
    connection: string
    volunteer: {
        title: string
        body: string
    }
}

export const displacementFraming: Record<string, DisplacementEntry> = {
    origin: {
        stage: "1. The Origin Event",
        connection: "Documentation itself became the threat. The record — not the behavior it documented — was what they needed to eliminate. Displacement begins the moment a volunteer creates a paper trail.",
        volunteer: {
            title: "You documented something.",
            body: "A complaint. A concern. A tone in an email. The moment you created a written record, you became a problem to be managed — not because of what you did, but because of what the record could do."
        }
    },
    escalation: {
        stage: "2. The Escalation Response",
        connection: "Good faith compliance was met with escalation. This is how displacement works: the target's behavior is irrelevant. The decision to remove has already been made. The institution is building justification, not responding to conduct.",
        volunteer: {
            title: "You tried to repair it.",
            body: "You apologized. You complied. You offered to reset. You did everything a reasonable person does when they want to stay. The institution escalated anyway. That escalation was not a response to your behavior. The decision had already been made."
        }
    },
    trust: {
        stage: "3. Trust Recruitment",
        connection: "Personal disclosures were extracted through manufactured intimacy and weaponized to construct a psychological profile. Pathologizing the volunteer is the mechanism that makes displacement look like protection.",
        volunteer: {
            title: "Someone got close to you.",
            body: "A supervisor. A coordinator. Someone who asked questions, listened, drew you out. What you shared in confidence was delivered to people who were already building a case against you. That is not a coincidence. That is a tactic."
        }
    },
    coercion: {
        stage: "4. The Coercion Meeting",
        connection: "Sixty-two minutes of sustained pressure designed to produce a resignation. Voluntary displacement — the target removes themselves — is the cleanest outcome for the institution. No paperwork. No process. No record.",
        volunteer: {
            title: "They called a meeting.",
            body: "It was framed as support. As expectations. As a chance to reset. It was sustained pressure designed to make you resign voluntarily. Voluntary departure is the cleanest outcome for the institution — no paperwork, no process, no record."
        }
    },
    surveillance: {
        stage: "5. Assessment & Surveillance",
        connection: "A covert assessment was conducted to determine whether displacement could be justified. An unidentified man was sent while all rangers were away. The institution needed to know if the case it was building would hold.",
        volunteer: {
            title: "Someone came to assess you.",
            body: "You may not have recognized it at the time. An unfamiliar face. Questions that felt personal. The institution needed to know whether the case it was building would hold. This is not standard practice. It requires authorization."
        }
    },
    dismissal: {
        stage: "6. Dismissal Without Process",
        connection: "Physical displacement executed without documentation, without cause, with 24 hours to vacate. No paperwork. No process. The absence of process is intentional — it leaves the volunteer with nothing to appeal.",
        volunteer: {
            title: "You were removed without process.",
            body: "No documentation. No cause. No appeal. You were given hours — not days — to vacate. The absence of process is intentional. It leaves you with nothing to challenge and no record to point to."
        }
    },
    expulsion: {
        stage: "7. Expulsion & Retaliation",
        connection: "Permanent displacement from all Oregon State Parks — not just Honeyman. The scope of expulsion was designed to eliminate future footholds. And the reason was put in writing: protected speech. That is the mistake that made this case.",
        volunteer: {
            title: "The reason was protected speech.",
            body: "They may have buried it in other language. Or they may have written it plainly, as they did here, believing you had no recourse. If you were removed because of what you said — publicly, in writing, on record — that is First Amendment retaliation. That has a legal name."
        }
    },
    containment: {
        stage: "8. Institutional Containment",
        connection: "When displacement failed to silence the record, every escalation channel was used to contain it. The director, the deputy director, the governor's office — each chose institutional protection over accountability. Silence is displacement by another name.",
        volunteer: {
            title: "Every channel failed.",
            body: "You escalated. You contacted leadership. You filed complaints. Each layer protected the one below it. The mechanism that was supposed to correct abuse was used to contain it instead. That is not a malfunction. That is the system working as designed."
        }
    },
    police: {
        stage: "9. Police Intimidation",
        connection: "The final displacement attempt. Three officers at a locked federal gate on the anniversary of dismissal — designed to make the cost of continuing feel unsurvivable. It failed. And in failing, it became the loudest evidence of everything that came before it.",
        volunteer: {
            title: "They used force.",
            body: "Not everyone gets here. But if the record you built was strong enough to threaten them — they may have. A visit. A call. A warning. The goal is to make the cost of continuing feel unsurvivable. It isn't. But they need you to believe it is."
        }
    }
}
