import type { CategorySlug } from "@/data/site-content";

export type ToolIconName =
  | "braces"
  | "shield-check"
  | "compare"
  | "compress"
  | "yaml-flow"
  | "token"
  | "binary"
  | "link-code"
  | "percent-link"
  | "angle-brackets"
  | "unicode"
  | "hexagon"
  | "hash"
  | "key-lock"
  | "pulse"
  | "regex";

export type ToolTone = "sky" | "emerald" | "amber" | "violet" | "rose" | "cyan";

export interface ToolVisual {
  icon: ToolIconName;
  tone: ToolTone;
}

const toolVisuals: Record<string, ToolVisual> = {
  "json-formatter": { icon: "braces", tone: "sky" },
  "json-validator": { icon: "shield-check", tone: "emerald" },
  "json-compare": { icon: "compare", tone: "amber" },
  "json-minify": { icon: "compress", tone: "violet" },
  "json-to-yaml": { icon: "yaml-flow", tone: "cyan" },
  "jwt-decoder": { icon: "token", tone: "emerald" },
  "base64": { icon: "binary", tone: "sky" },
  "base64url": { icon: "link-code", tone: "cyan" },
  "urlencode": { icon: "percent-link", tone: "amber" },
  "html-encode": { icon: "angle-brackets", tone: "rose" },
  "unicode-escape": { icon: "unicode", tone: "violet" },
  "hex": { icon: "hexagon", tone: "amber" },
  "hash-generator": { icon: "hash", tone: "sky" },
  "hmac-generator": { icon: "key-lock", tone: "rose" },
  "http-status-checker": { icon: "pulse", tone: "rose" },
  "regex-tester": { icon: "regex", tone: "violet" }
};

const titleToToolId: Record<string, string> = {
  "JSON Formatter": "json-formatter",
  "JSON Validator": "json-validator",
  "JSON Compare": "json-compare",
  "JSON Minify": "json-minify",
  "JSON to YAML": "json-to-yaml",
  "JSON to YAML Converter": "json-to-yaml",
  "JWT Decoder": "jwt-decoder",
  "Base64 Encode / Decode": "base64",
  "Base64URL Encode / Decode": "base64url",
  "URL Encode / Decode": "urlencode",
  "HTML Encode / Decode": "html-encode",
  "Unicode Escape / Unescape": "unicode-escape",
  "Hex Encode / Decode": "hex",
  "Hash Generator": "hash-generator",
  "HMAC Generator": "hmac-generator",
  "HTTP Status Checker": "http-status-checker",
  "Regex Tester": "regex-tester"
};

const categoryFallbacks: Record<CategorySlug, ToolVisual> = {
  json: { icon: "braces", tone: "sky" },
  jwt: { icon: "token", tone: "emerald" },
  api: { icon: "pulse", tone: "rose" },
  encode: { icon: "binary", tone: "amber" },
  regex: { icon: "regex", tone: "violet" }
};

interface ToolVisualLookup {
  id?: string;
  title?: string;
  category?: CategorySlug;
}

export function resolveToolVisual(input: string | ToolVisualLookup): ToolVisual {
  if (typeof input === "string") {
    return toolVisuals[input] ?? categoryFallbacks.json;
  }

  const toolId = input.id ?? (input.title ? titleToToolId[input.title] : undefined);

  if (toolId && toolVisuals[toolId]) {
    return toolVisuals[toolId];
  }

  if (input.category) {
    return categoryFallbacks[input.category];
  }

  return categoryFallbacks.json;
}
