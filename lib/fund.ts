// lib/fund.ts
//
// The legal fund's numbers, in one place. The homepage card and the
// public accounting page both read from here. Update RAISED as
// contributions land; append to EXPENDITURES whenever fund money
// is spent. Nothing else needs touching.

export const GOAL = 25000;          // the whole column
export const MATCH_CAP = 5000;      // matched dollar for dollar by a former client
export const RAISED = 0;            // donations from others so far
export const MATCH_RECEIVED = 300;  // money actually received from the matcher

// Only money in hand is shown. The matcher's pledge covers the first
// MATCH_CAP of donations; what he has already sent counts as match
// received, whether it arrived before or after the donations it doubles.
export const matched = Math.min(MATCH_RECEIVED, MATCH_CAP);
export const total = Math.min(RAISED + matched, GOAL);

export interface Expenditure {
    date: string;      // ISO date
    amount: number;    // dollars
    purpose: string;   // what it paid for
    to: string;        // who received it
    document?: string; // receipt or invoice URL, when one exists
}

// Every dollar spent from the fund, in order. Empty until the first one.
export const EXPENDITURES: Expenditure[] = [];

export const spent = EXPENDITURES.reduce((sum, e) => sum + e.amount, 0);

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
