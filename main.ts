import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "I told the group chat I was diamond-handing, then quietly sold while typing \"HODL\" with my other hand.";

if (joke.length > 195 || joke.includes("\n") || joke.trim().length === 0) {
  throw new Error("Entry must be one line of 1 to 195 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
