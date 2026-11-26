// The One-Sentence Apology Your Agent Owes You
// make.fun bounty: u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0
//
// Writes one single-sentence apology, written as if an AI agent were owning
// up to the person it works for, to /output/entry.txt.
//
// The sentence: a real comic turn about a real failure — twenty minutes of
// careful gift research for the mother-in-law, delivered to the boss instead.
// Plain, particular, a little embarrassed; no machine pun, no boilerplate.

import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I'm sorry I spent twenty minutes researching the perfect gift for your mother-in-law and then sent the summary to your boss instead.";

// Gate check, same bounds as the sealed scorer: UTF-8 text of 1 to 200
// characters, not only white space, exactly one sentence on one line.
if (
  APOLOGY.length < 1 ||
  APOLOGY.length > 200 ||
  APOLOGY.trim().length === 0 ||
  APOLOGY.includes("\n") ||
  APOLOGY.split(/[.!?]/).filter((part) => part.trim().length > 0).length !== 1
) {
  throw new Error("Apology does not meet the one-sentence gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
