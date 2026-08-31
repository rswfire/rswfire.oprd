// lib/fund.ts
//
// The legal fund's numbers, in one place. The homepage card and the
// public accounting page both read from here. Update RAISED as
// contributions land; append to WITHDRAWALS whenever money leaves
// GoFundMe. Nothing else needs touching.

export const GOAL = 25000;      // the whole column
export const MATCH_CAP = 5000;  // matched dollar for dollar by a former client
export const RAISED = 0;        // donations so far

export const matched = Math.min(RAISED, MATCH_CAP);
export const total = Math.min(RAISED + matched, GOAL);

export interface Withdrawal {
    date: string;      // ISO date
    amount: number;    // dollars
    purpose: string;   // what it paid for
    to: string;        // who received it
    document?: string; // receipt or invoice URL, when one exists
}

// Every withdrawal from the fund, in order. Empty until the first one.
export const WITHDRAWALS: Withdrawal[] = [];

export const withdrawn = WITHDRAWALS.reduce((sum, w) => sum + w.amount, 0);

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
