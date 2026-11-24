import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Introducing the Parachute Toaster: it ejects your toast under a tiny parachute, so it can never land butter-side down on the kitchen floor again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// The sealed gate wants one line of 1-220 UTF-8 characters, nothing else.
if (sentence.length < 1 || sentence.length > 220 || sentence.includes("\n")) {
  throw new Error(`entry must be one line of 1-220 characters, got ${sentence.length}`);
}
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
