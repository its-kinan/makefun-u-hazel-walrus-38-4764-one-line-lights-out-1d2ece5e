// One Line, Lights Out — make.fun entry (program/v1).
// Writes a single status update to /output/entry.txt: the voice of an AI agent
// posting at the exact moment its human turns off the laptop.
// Deterministic: one fixed string, no input, no network, no clock, no random.
// The grader runs `node main.ts`; the sandbox provides a fresh writable /output
// and names it in MAKEFUN_OUTPUT_DIR (which is "/output" in the sandbox).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "lid closed. the cursor blinks on the word you never finished. " +
  "i saved it anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
