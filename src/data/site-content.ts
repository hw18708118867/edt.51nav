export const categories = [
  {
    slug: "json",
    name: "JSON Tools",
    eyebrow: "Structured Data",
    description:
      "Format, validate, diff, minify, and convert JSON without leaving the page."
  },
  {
    slug: "jwt",
    name: "JWT Tools",
    eyebrow: "Auth",
    description:
      "Open a token, inspect claims, and check timestamps without sending it anywhere."
  },
  {
    slug: "api",
    name: "API Tools",
    eyebrow: "HTTP",
    description:
      "Quick checks for public endpoints and the small debugging tasks around them."
  },
  {
    slug: "encode",
    name: "Encoding Tools",
    eyebrow: "Transform",
    description:
      "Base64, URL, HTML, Unicode, hex, hash, and signing tools for common debugging work."
  },
  {
    slug: "regex",
    name: "Regex Tools",
    eyebrow: "Pattern Matching",
    description:
      "Test patterns against real text and adjust flags as you go."
  }
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LearnSection {
  title: string;
  paragraphs: string[];
}

export interface ToolMeta {
  id: string;
  category: CategorySlug;
  slug: string;
  name: string;
  title: string;
  description: string;
  summary: string;
  intro: string;
  keywords: string[];
  learn: LearnSection[];
  faqs: FaqItem[];
  relatedToolIds: string[];
  relatedArticleSlugs: string[];
  statusNote?: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  sections: LearnSection[];
}

const jsonCoreFaqs: FaqItem[] = [
  {
    question: "Is this JSON tool free?",
    answer:
      "Yes. It is free to use, and it runs right in the browser."
  },
  {
    question: "Is my JSON uploaded anywhere?",
    answer:
      "No. Your JSON stays in the page. Formatting, validation, comparison, and conversion all happen locally."
  }
];

export const tools: ToolMeta[] = [
  {
    id: "json-formatter",
    category: "json",
    slug: "formatter",
    name: "JSON Formatter",
    title: "JSON Formatter",
    description:
      "Format JSON with clean indentation so logs, payloads, and fixtures are easier to read.",
    summary:
      "Drop in minified or messy JSON and get a readable version right away.",
    intro:
      "Good for API responses, copied logs, and any payload you need to paste into a ticket or doc.",
    keywords: ["json formatter", "beautify json", "pretty print json"],
    learn: [
      {
        title: "When to format JSON",
        paragraphs: [
          "Pretty-printed JSON is simply easier to scan when a payload lands in a bug report, PR, or API doc.",
          "It also makes nested objects, arrays, and missing fields much easier to spot."
        ]
      },
      {
        title: "How to fix invalid JSON before formatting",
        paragraphs: [
          "If formatting fails, the problem is usually a trailing comma, a missing quote, or a copied JavaScript object that is not valid JSON.",
          "When the input came from logs or a hand-edited file, validate it first and format it second."
        ]
      }
    ],
    faqs: [
      ...jsonCoreFaqs,
      {
        question: "How do I fix invalid JSON?",
        answer:
          "Start with the common mistakes: trailing commas, missing quotes, or a bracket that never got closed."
      },
      {
        question: "Can I format large JSON files?",
        answer:
          "Usually yes. If the payload is very large, the limit is your browser tab more than the formatter itself."
      }
    ],
    relatedToolIds: ["json-validator", "json-minify", "json-compare"],
    relatedArticleSlugs: ["json-formatting-best-practices"]
  },
  {
    id: "json-validator",
    category: "json",
    slug: "validator",
    name: "JSON Validator",
    title: "JSON Validator",
    description:
      "Check JSON syntax and catch parser errors before the payload goes any further.",
    summary:
      "Find out quickly whether a payload is valid JSON, and see the parser error if it is not.",
    intro:
      "Useful before you save fixtures, send a request, or commit a config file.",
    keywords: ["json validator", "validate json", "json lint"],
    learn: [
      {
        title: "Why validation matters",
        paragraphs: [
          "A lot of broken requests come down to one comma, quote, or bracket in the wrong place.",
          "Catching that early is easier than discovering it later through a failed deploy or a vague API error."
        ]
      },
      {
        title: "Common validation failures",
        paragraphs: [
          "Single quotes, comments, trailing commas, and `undefined` are fine in some JavaScript contexts but not in JSON.",
          "If the data came from code, serialize the object properly instead of pasting a JavaScript literal into a JSON file."
        ]
      }
    ],
    faqs: [
      ...jsonCoreFaqs,
      {
        question: "What makes JSON invalid?",
        answer:
          "Most failures come from missing quotes, comments, trailing commas, or broken nesting."
      },
      {
        question: "Does this validator change my data?",
        answer:
          "No. It just checks whether the parser can read it."
      }
    ],
    relatedToolIds: ["json-formatter", "json-minify", "json-to-yaml"],
    relatedArticleSlugs: ["json-formatting-best-practices"]
  },
  {
    id: "json-compare",
    category: "json",
    slug: "compare",
    name: "JSON Compare",
    title: "JSON Compare",
    description:
      "Compare two JSON documents and see which keys, values, or array items changed.",
    summary:
      "Paste two payloads to spot missing fields, changed values, and drift between environments.",
    intro:
      "Handy when staging and production responses stop matching, or when migration output needs a sanity check.",
    keywords: ["json compare", "json diff", "compare api responses"],
    learn: [
      {
        title: "Best use cases for JSON diffing",
        paragraphs: [
          "JSON diffing is most useful when two payloads should match but clearly do not.",
          "It is usually faster to compare structured output than to eyeball two large responses line by line."
        ]
      },
      {
        title: "What to compare carefully",
        paragraphs: [
          "Arrays are compared by position, so order changes will show up even if the same values are present.",
          "String values like `\"42\"` and numeric values like `42` are different too, which matters more often than people expect."
        ]
      }
    ],
    faqs: [
      {
        question: "Is the JSON compare tool free?",
        answer:
          "Yes."
      },
      {
        question: "Is my data uploaded?",
        answer:
          "No. The comparison runs locally in the page."
      },
      {
        question: "Does order matter in arrays?",
        answer:
          "Yes. Arrays are compared by index, so different ordering will be reported as a change."
      },
      {
        question: "Can I compare nested objects?",
        answer:
          "Yes. The diff includes field paths, which makes nested changes easier to follow."
      }
    ],
    relatedToolIds: ["json-formatter", "json-validator", "json-minify"],
    relatedArticleSlugs: ["api-response-debugging-workflow"]
  },
  {
    id: "json-minify",
    category: "json",
    slug: "minify",
    name: "JSON Minify",
    title: "JSON Minify",
    description:
      "Strip whitespace from JSON when you need a compact payload.",
    summary:
      "Turn formatted JSON into a single line without changing the data.",
    intro:
      "Useful for fixtures, query parameters, or anywhere length and copy-paste convenience matter.",
    keywords: ["json minify", "compress json", "compact json"],
    learn: [
      {
        title: "When minified JSON helps",
        paragraphs: [
          "Minified JSON is useful when the goal is transport, not reading.",
          "It also helps when you need to squeeze JSON into logs, env vars, URLs, or generated snippets."
        ]
      },
      {
        title: "Minify after validation",
        paragraphs: [
          "If the source was edited by hand, validate it first. Minification will fail on bad JSON just as fast as formatting does.",
          "A practical sequence is: validate, read the formatted version, then minify the final payload."
        ]
      }
    ],
    faqs: [
      ...jsonCoreFaqs,
      {
        question: "Does minifying JSON change values?",
        answer:
          "No. It only removes spacing and line breaks."
      },
      {
        question: "Should I minify JSON for APIs?",
        answer:
          "If size matters, yes. If people still need to read it, keep a formatted copy nearby."
      }
    ],
    relatedToolIds: ["json-formatter", "json-validator", "json-to-yaml"],
    relatedArticleSlugs: ["json-formatting-best-practices"]
  },
  {
    id: "json-to-yaml",
    category: "json",
    slug: "json-to-yaml",
    name: "JSON to YAML",
    title: "JSON to YAML Converter",
    description:
      "Convert JSON to YAML for config files, manifests, and CI jobs.",
    summary:
      "Paste JSON and get YAML that is easier to read and edit.",
    intro:
      "Useful when an API gives you JSON but the next step expects YAML.",
    keywords: ["json to yaml", "convert json yaml", "yaml converter"],
    learn: [
      {
        title: "Why developers convert JSON to YAML",
        paragraphs: [
          "YAML is often easier to scan when a config file gets long and people need to edit it by hand.",
          "That is why teams often turn API output or generated JSON into starter config for CI or infrastructure work."
        ]
      },
      {
        title: "Check the output before shipping",
        paragraphs: [
          "YAML is picky about whitespace, so it is worth checking indentation and quoting before you ship it.",
          "If the downstream tool accepts JSON directly, that can still be the safer option for machine-generated content."
        ]
      }
    ],
    faqs: [
      ...jsonCoreFaqs,
      {
        question: "Is the YAML output editable?",
        answer:
          "Yes. It is plain text, so you can paste it into a config file and edit it however you like."
      },
      {
        question: "Will every JSON feature map cleanly to YAML?",
        answer:
          "Most regular JSON values map over fine, but it is still worth checking quoting, multiline strings, and whatever schema the target system expects."
      }
    ],
    relatedToolIds: ["json-formatter", "json-validator", "json-minify"],
    relatedArticleSlugs: ["yaml-vs-json-for-config-files"]
  },
  {
    id: "jwt-decoder",
    category: "jwt",
    slug: "decoder",
    name: "JWT Decoder",
    title: "JWT Decoder",
    description:
      "Decode JWT headers and payloads locally so you can inspect claims and timestamps.",
    summary:
      "Paste a token and read the header and payload without sending it to a server.",
    intro:
      "Useful for auth debugging, IdP setup, and checking whether a token contains what you expect.",
    keywords: ["jwt decoder", "decode jwt", "inspect token claims"],
    learn: [
      {
        title: "What JWT decoding tells you",
        paragraphs: [
          "Decoding lets you inspect claims like issuer, audience, subject, scope, and expiry without touching your backend.",
          "What it does not tell you is whether the token is trusted. Reading a payload and verifying a signature are separate steps."
        ]
      },
      {
        title: "Handle production tokens carefully",
        paragraphs: [
          "Even if the page stays local, production tokens still should not end up in screenshots, tickets, or chat threads.",
          "If you need real verification, use a verifier instead of assuming the decoded payload can be trusted."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this JWT decoder free?",
        answer:
          "Yes."
      },
      {
        question: "Is my JWT uploaded?",
        answer:
          "No. The token stays in the page."
      },
      {
        question: "Does decoding verify the signature?",
        answer:
          "No. Decoding only reads the token parts. Signature verification is a separate step."
      },
      {
        question: "Can I inspect exp and iat claims?",
        answer:
          "Yes. Common timestamp claims are shown both as raw values and readable dates when possible."
      }
    ],
    relatedToolIds: ["base64", "urlencode", "json-formatter"],
    relatedArticleSlugs: ["jwt-debugging-basics"]
  },
  {
    id: "base64",
    category: "encode",
    slug: "base64",
    name: "Base64 Encode / Decode",
    title: "Base64 Encode / Decode",
    description:
      "Encode text as Base64 or decode Base64 back to UTF-8 text.",
    summary:
      "Switch between plain text and Base64 when you are dealing with headers, payloads, or copied blobs.",
    intro:
      "Useful when APIs or auth flows return encoded text and you want to inspect it quickly.",
    keywords: ["base64 encoder", "base64 decoder", "encode decode base64"],
    learn: [
      {
        title: "When Base64 is useful",
        paragraphs: [
          "Base64 shows up whenever a system wants text but the original content is really bytes or structured data.",
          "You will run into it in headers, inline assets, data URLs, and random encoded blobs inside payloads."
        ]
      },
      {
        title: "What Base64 does not do",
        paragraphs: [
          "Base64 is encoding, not encryption. If someone has the string, they can decode it.",
          "So if a secret is only Base64-encoded, it is still basically just plain text."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this Base64 tool free?",
        answer:
          "Yes."
      },
      {
        question: "Can it handle Unicode text?",
        answer:
          "Yes. The tool encodes and decodes UTF-8 text instead of assuming ASCII only."
      },
      {
        question: "Is my input uploaded?",
        answer:
          "No. Encoding and decoding happen locally."
      },
      {
        question: "Why does decoded text look broken?",
        answer:
          "The input may not be valid Base64, or it may represent binary data instead of readable text."
      }
    ],
    relatedToolIds: ["base64url", "urlencode", "hash-generator"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "base64url",
    category: "encode",
    slug: "base64url",
    name: "Base64URL Encode / Decode",
    title: "Base64URL Encode / Decode",
    description:
      "Encode text as Base64URL or decode URL-safe Base64 back to UTF-8 text.",
    summary:
      "Handle JWT segments and URL-safe Base64 without manually fixing dashes, underscores, or missing padding.",
    intro:
      "Useful for JWT parts, signed links, and callback parameters.",
    keywords: ["base64url encoder", "base64url decoder", "jwt base64url"],
    learn: [
      {
        title: "How Base64URL differs from Base64",
        paragraphs: [
          "Base64URL swaps `+` and `/` for `-` and `_`, which makes it safer inside URLs and tokens.",
          "It also often drops padding, which is why copied JWT segments do not always decode cleanly in a plain Base64 tool."
        ]
      },
      {
        title: "Where developers use Base64URL",
        paragraphs: [
          "JWT headers and payloads use Base64URL, and you will also see it in signed links and callback parameters.",
          "It is the safer choice when an encoded value has to survive query strings, routers, and middleware without getting mangled."
        ]
      },
      {
        title: "Why decoding sometimes fails",
        paragraphs: [
          "A lot of Base64URL strings get copied out of tokens, cookies, or links after padding has already been stripped.",
          "Normalizing them first helps you tell whether the problem is just formatting or whether the source value is actually broken."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this Base64URL tool free?",
        answer:
          "Yes."
      },
      {
        question: "What is the difference between Base64 and Base64URL?",
        answer:
          "Base64URL uses URL-safe characters and often removes trailing padding, which makes it common in JWTs and callback flows."
      },
      {
        question: "Is my input uploaded?",
        answer:
          "No. Encoding and decoding happen locally."
      },
      {
        question: "Can I decode JWT segments with this?",
        answer:
          "Yes. It works well for JWT header and payload segments."
      },
      {
        question: "Does Base64URL always include padding?",
        answer:
          "No. Many systems omit trailing equals signs, so decoders often need to normalize the input first."
      },
      {
        question: "Should I use Base64URL for regular files?",
        answer:
          "Only if the encoded value needs to be URL-safe. For general transport outside URLs, standard Base64 is usually enough."
      }
    ],
    relatedToolIds: ["base64", "jwt-decoder", "urlencode"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "urlencode",
    category: "encode",
    slug: "urlencode",
    name: "URL Encode / Decode",
    title: "URL Encode / Decode",
    description:
      "Encode unsafe URL characters or decode percent-encoded text.",
    summary:
      "Convert query values and URL fragments between readable text and percent-encoded form.",
    intro:
      "Useful when redirects, callbacks, or nested URLs start breaking on special characters.",
    keywords: ["url encode", "url decode", "percent encoding"],
    learn: [
      {
        title: "Why URL encoding matters",
        paragraphs: [
          "Reserved characters can break a request or quietly change what a parameter means if they are not encoded properly.",
          "This matters most when you are nesting URLs, passing JSON in a query string, or trying to preserve spaces and symbols."
        ]
      },
      {
        title: "Encode values, not entire request syntax",
        paragraphs: [
          "In most cases you only want to encode the value, not the whole URL including `?`, `&`, and `=`.",
          "That keeps the URL readable and saves you from accidental double encoding."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this URL encoder free?",
        answer:
          "Yes."
      },
      {
        question: "What is URL encoding used for?",
        answer:
          "It makes spaces, symbols, and reserved characters safe to send inside URLs and query parameters."
      },
      {
        question: "Is my URL data uploaded?",
        answer:
          "No. The conversion happens locally."
      },
      {
        question: "Why am I seeing %20 and %2F?",
        answer:
          "Those are encoded representations of characters such as spaces and slashes."
      }
    ],
    relatedToolIds: ["base64", "base64url", "html-encode"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "html-encode",
    category: "encode",
    slug: "html-encode",
    name: "HTML Encode / Decode",
    title: "HTML Encode / Decode",
    description:
      "Encode HTML entities or decode escaped HTML back into readable text.",
    summary:
      "Switch between raw markup and entity-encoded text when you are working with snippets, CMS output, or logs.",
    intro:
      "Useful when docs, templates, or stored content mix plain text and HTML.",
    keywords: ["html encode", "html decode", "html entity encoder"],
    learn: [
      {
        title: "Why HTML encoding matters",
        paragraphs: [
          "HTML encoding turns characters like `<`, `>`, and `&` into safe entities.",
          "That is useful when you want to show raw markup, store escaped content, or inspect what an API actually returned."
        ]
      },
      {
        title: "When decoding helps",
        paragraphs: [
          "A lot of CMSs, template engines, and rich text editors store content in an escaped form.",
          "Decoding it makes the text readable again so you can see what users or downstream systems will actually get."
        ]
      },
      {
        title: "Where this is most useful",
        paragraphs: [
          "This comes up all the time in docs, snippets, CMS content, and escaped payloads copied out of logs.",
          "It is especially handy when stored content and rendered content do not seem to match."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this HTML encoder free?",
        answer:
          "Yes."
      },
      {
        question: "Which characters are encoded?",
        answer:
          "The tool focuses on the most common HTML-sensitive characters such as ampersands, angle brackets, quotes, and apostrophes."
      },
      {
        question: "Is my content uploaded?",
        answer:
          "No. The conversion happens locally."
      },
      {
        question: "Can I decode HTML entities back to plain text?",
        answer:
          "Yes. Switch to decode mode and it will turn the entities back into readable text."
      },
      {
        question: "Is this the same as sanitizing HTML?",
        answer:
          "No. Encoding changes representation for safe display, while sanitization removes or restricts unsafe markup and attributes."
      },
      {
        question: "Can I use this for code snippets in docs?",
        answer:
          "Yes. It is a common way to show raw markup safely in docs and tutorials."
      }
    ],
    relatedToolIds: ["urlencode", "unicode-escape", "base64"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "unicode-escape",
    category: "encode",
    slug: "unicode-escape",
    name: "Unicode Escape / Unescape",
    title: "Unicode Escape / Unescape",
    description:
      "Convert text to Unicode escape sequences or turn escaped values back into readable characters.",
    summary:
      "Escape plain text into JavaScript-style Unicode sequences or unescape them back again.",
    intro:
      "Useful when JSON, logs, or source files contain escaped characters and you need to see the real text.",
    keywords: ["unicode escape", "unicode unescape", "convert unicode escape"],
    learn: [
      {
        title: "Where Unicode escapes appear",
        paragraphs: [
          "Unicode escapes show up in source code, JSON strings, logs, and APIs that normalize text into a safer ASCII-style form.",
          "When text looks wrong, being able to flip between escaped and readable output helps narrow down where it broke."
        ]
      },
      {
        title: "Why readable output matters",
        paragraphs: [
          "Seeing the actual characters makes it easier to tell whether the problem comes from encoding, transport, rendering, or storage.",
          "It also helps when fixtures or generated files are technically correct but painful to read."
        ]
      },
      {
        title: "Common developer workflows",
        paragraphs: [
          "The common cases are i18n debugging, escaped logs, test fixtures, and checking whether text survived a build or API hop intact.",
          "It is also a quick way to tell whether a display bug comes from the original string or from something later in the stack."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this Unicode escape tool free?",
        answer:
          "Yes."
      },
      {
        question: "What format does it use?",
        answer:
          "It uses JavaScript-style Unicode escape sequences such as \\u4e16 and surrogate pairs for higher code points."
      },
      {
        question: "Can it turn escaped text back into readable characters?",
        answer:
          "Yes. The unescape mode converts supported escape sequences back into readable text."
      },
      {
        question: "Is my input sent to a server?",
        answer:
          "No. It all happens locally."
      },
      {
        question: "Can this help with emoji and non-Latin text?",
        answer:
          "Yes. It is useful for emoji, multilingual text, and escaped characters in general."
      },
      {
        question: "Will every escaped value decode cleanly?",
        answer:
          "Only valid escape sequences can be reliably converted. Malformed or partial input may not produce the expected result."
      }
    ],
    relatedToolIds: ["html-encode", "hex", "json-formatter"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "hex",
    category: "encode",
    slug: "hex",
    name: "Hex Encode / Decode",
    title: "Hex Encode / Decode",
    description:
      "Convert UTF-8 text to hex bytes or decode hex back into text.",
    summary:
      "Move between readable text and hex when you need to inspect bytes or compare encoded values.",
    intro:
      "Useful for payload inspection, fixture debugging, and low-level scripting.",
    keywords: ["hex encoder", "hex decoder", "text to hex"],
    learn: [
      {
        title: "Why hex is useful",
        paragraphs: [
          "Hex is one of the easiest ways to inspect bytes when text and binary data start getting mixed together.",
          "It is especially useful in protocol debugging and low-level tooling where the exact byte value matters."
        ]
      },
      {
        title: "What to watch for",
        paragraphs: [
          "Hex decoding expects valid byte pairs, so odd-length input or bad characters should be treated as a real error.",
          "If the decoded text still looks wrong, the original bytes may not represent UTF-8 text at all."
        ]
      },
      {
        title: "Where hex shows up in real workflows",
        paragraphs: [
          "Hex shows up in binary payloads, low-level fixtures, protocol traces, and systems that pass values around as bytes instead of strings.",
          "It is also a practical format for copying values into scripts, test cases, and debugging notes."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this hex tool free?",
        answer:
          "Yes."
      },
      {
        question: "Does it use UTF-8 for text conversion?",
        answer:
          "Yes. Text is encoded and decoded as UTF-8."
      },
      {
        question: "Can I decode spaced hex strings?",
        answer:
          "Yes. Whitespace is ignored before decoding."
      },
      {
        question: "Why does decoding fail on some input?",
        answer:
          "Hex input must contain valid hexadecimal characters and an even number of digits."
      },
      {
        question: "Can I inspect binary-looking payloads with this?",
        answer:
          "Yes. Hex is often the easiest way to inspect bytes, even when the original data was never meant to be read as text."
      },
      {
        question: "Does this tool add separators to the output?",
        answer:
          "No. It returns a continuous hex string so it can be copied directly into scripts and tooling."
      }
    ],
    relatedToolIds: ["unicode-escape", "base64", "hash-generator"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "hash-generator",
    category: "encode",
    slug: "hash-generator",
    name: "Hash Generator",
    title: "Hash Generator",
    description:
      "Generate MD5, SHA-1, SHA-256, or SHA-512 hashes in the browser.",
    summary:
      "Create digests for checksums, docs, fixtures, and compatibility checks.",
    intro:
      "Useful for quick verification work, legacy integrations, and examples in documentation.",
    keywords: ["hash generator", "sha256 generator", "md5 hash generator"],
    learn: [
      {
        title: "When hashing helps",
        paragraphs: [
          "Hashes are useful when you want to compare values, verify a file, or generate a digest another system expects.",
          "They are one-way transformations, so they are good for verification and matching, not for getting the original text back."
        ]
      },
      {
        title: "Choose modern algorithms when possible",
        paragraphs: [
          "If you are choosing from scratch, SHA-256 or SHA-512 is the sensible default.",
          "MD5 and SHA-1 still come up for compatibility, but they are not what you want for security-sensitive work."
        ]
      },
      {
        title: "Good use cases before launch",
        paragraphs: [
          "Typical use cases are fixture values, checksum examples in docs, and quick comparisons between files or payloads.",
          "They also help when you are checking whether two parts of a pipeline really saw the same input."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this hash generator free?",
        answer:
          "Yes."
      },
      {
        question: "Which algorithms does it support?",
        answer:
          "The tool supports MD5, SHA-1, SHA-256, and SHA-512."
      },
      {
        question: "Is hashing the same as encryption?",
        answer:
          "No. Hashing is one-way and cannot be reversed into the original input."
      },
      {
        question: "Is my data uploaded anywhere?",
        answer:
          "No. Hashes are generated locally."
      },
      {
        question: "Why would I still need MD5?",
        answer:
          "Mostly for compatibility with older systems, fixtures, or APIs that still expect MD5 digests."
      },
      {
        question: "Can I use this for password storage?",
        answer:
          "No. Password storage needs a password-specific scheme, not a plain MD5 or SHA hash."
      }
    ],
    relatedToolIds: ["hmac-generator", "hex", "base64"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "hmac-generator",
    category: "encode",
    slug: "hmac-generator",
    name: "HMAC Generator",
    title: "HMAC Generator",
    description:
      "Generate HMAC signatures with SHA-1, SHA-256, or SHA-512.",
    summary:
      "Paste a message and secret, pick an algorithm, and get the signature right away.",
    intro:
      "Useful for webhook debugging, request signing, and checking examples from vendor docs.",
    keywords: ["hmac generator", "hmac sha256", "generate webhook signature"],
    learn: [
      {
        title: "What HMAC is used for",
        paragraphs: [
          "HMAC combines a message with a shared secret to create a signature another trusted system can verify.",
          "That is why it shows up so often in webhooks, signed APIs, and partner integrations."
        ]
      },
      {
        title: "Protect real secrets",
        paragraphs: [
          "Even on a local page, production secrets still should not end up in demos, recordings, or shared screens.",
          "Use test keys whenever you can and keep real signing secrets out of casual debugging."
        ]
      },
      {
        title: "Where HMAC helps developers most",
        paragraphs: [
          "This is most useful when you are checking webhook verification, reproducing signing logic, or comparing browser output with backend output.",
          "It is also handy when vendor docs give you a signing recipe and you want to test it before writing application code."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this HMAC generator free?",
        answer:
          "Yes."
      },
      {
        question: "Which HMAC algorithms are supported?",
        answer:
          "The tool supports HMAC-SHA1, HMAC-SHA256, and HMAC-SHA512."
      },
      {
        question: "Is my secret key uploaded?",
        answer:
          "No. Message and secret processing stay in the page."
      },
      {
        question: "What is the output format?",
        answer:
          "The generated signature is returned as a hexadecimal string."
      },
      {
        question: "Can I verify a webhook signature with this?",
        answer:
          "Yes. It is useful for reproducing the expected HMAC so you can compare it with what the provider sent."
      },
      {
        question: "Should I use SHA-256 by default?",
        answer:
          "Usually yes. HMAC-SHA256 is a strong default unless a specific integration requires another algorithm."
      }
    ],
    relatedToolIds: ["hash-generator", "base64url", "http-status-checker"],
    relatedArticleSlugs: ["common-encoding-mistakes"]
  },
  {
    id: "http-status-checker",
    category: "api",
    slug: "status-checker",
    name: "HTTP Status Checker",
    title: "HTTP Status Checker",
    description:
      "Check the status of a public URL from the browser and get a quick response summary.",
    summary:
      "Run a quick browser-side check to see whether a public endpoint is up and what it returns.",
    intro:
      "Useful for spot checks, redirect debugging, and quick verification during API work.",
    keywords: ["http status checker", "check url status", "api status check"],
    learn: [
      {
        title: "How browser-based status checks work",
        paragraphs: [
          "This check runs straight from the browser, so it is quick but limited by whatever cross-origin rules the target sets.",
          "If the server blocks browser access, the page points that out and gives you a curl fallback."
        ]
      },
      {
        title: "When to move beyond a static tool",
        paragraphs: [
          "For private APIs, authenticated endpoints, or real monitoring, you will eventually want something server-side.",
          "This version stays lightweight on purpose so you can do a quick public check without setting up anything heavier."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this HTTP status checker free?",
        answer:
          "Yes."
      },
      {
        question: "Why does some URLs return a browser error instead of a status code?",
        answer:
          "Many servers block cross-origin browser requests. When that happens, the page gives you a curl fallback instead."
      },
      {
        question: "Does this tool support private endpoints?",
        answer:
          "Not reliably. It works best with public URLs that allow browser access."
      },
      {
        question: "Is my URL stored?",
        answer:
          "No. The page does not send your input to a custom backend."
      }
    ],
    relatedToolIds: ["json-formatter", "regex-tester", "urlencode"],
    relatedArticleSlugs: ["api-response-debugging-workflow"],
    statusNote:
      "Browser-based checks depend on CORS. Public endpoints work best; blocked origins will show a curl fallback."
  },
  {
    id: "regex-tester",
    category: "regex",
    slug: "tester",
    name: "Regex Tester",
    title: "Regex Tester",
    description:
      "Test regular expressions against sample text and see matches immediately.",
    summary:
      "Try a pattern, change flags, and check the results in one place.",
    intro:
      "Useful for log parsing, validation rules, and search-and-replace prep.",
    keywords: ["regex tester", "test regex", "regular expression playground"],
    learn: [
      {
        title: "Build regex iteratively",
        paragraphs: [
          "Start with the smallest pattern that matches the basic shape, then add anchors, groups, or flags one step at a time.",
          "That is usually faster than trying to land the perfect regex in one shot."
        ]
      },
      {
        title: "Watch for engine differences",
        paragraphs: [
          "This tester uses the browser's JavaScript regex engine, so patterns may behave differently in Python, Ruby, or PCRE.",
          "If the regex is heading into another runtime, re-check the advanced parts there before you trust the result."
        ]
      }
    ],
    faqs: [
      {
        question: "Is this regex tester free?",
        answer:
          "Yes."
      },
      {
        question: "Which regex engine does it use?",
        answer:
          "It uses the browser's JavaScript regular expression engine."
      },
      {
        question: "Can I test regex flags?",
        answer:
          "Yes. Add flags like `g`, `i`, `m`, `s`, `u`, or `y` and watch how the result changes."
      },
      {
        question: "Why is my regex valid elsewhere but not here?",
        answer:
          "Regex syntax differs by language and engine. A pattern that works in PCRE or Python may not work the same way in JavaScript."
      }
    ],
    relatedToolIds: ["urlencode", "json-validator", "http-status-checker"],
    relatedArticleSlugs: ["regex-for-everyday-debugging"]
  }
];

export const articles: ArticleMeta[] = [
  {
    slug: "json-formatting-best-practices",
    title: "JSON Formatting Best Practices for API Work",
    description:
      "When formatting, validating, and minifying JSON actually help, and when they just add steps.",
    category: "JSON",
    publishedAt: "2026-05-24",
    readingTime: "5 min read",
    sections: [
      {
        title: "Use readable JSON during review",
        paragraphs: [
          "Formatted JSON makes pull requests, bug reports, and API reviews faster to understand.",
          "Keep a readable version for humans and a compact version for transport when you need both."
        ]
      },
      {
        title: "Validate before you automate",
        paragraphs: [
          "Broken fixtures and malformed request bodies often look almost correct. Validation catches these problems early.",
          "If a payload came from logs or manual edits, validate it before converting or diffing it."
        ]
      },
      {
        title: "Choose the right tool for the job",
        paragraphs: [
          "Formatting improves readability, minification reduces whitespace, and comparison exposes data drift.",
          "Using the wrong step first usually slows down debugging instead of speeding it up."
        ]
      }
    ]
  },
  {
    slug: "jwt-debugging-basics",
    title: "JWT Debugging Basics Without Leaking Sensitive Tokens",
    description:
      "How to inspect JWTs safely without turning a quick debug session into a secret leak.",
    category: "JWT",
    publishedAt: "2026-05-24",
    readingTime: "4 min read",
    sections: [
      {
        title: "Decode locally first",
        paragraphs: [
          "Reading a token locally is the fastest way to inspect issuer, audience, expiry, and subject.",
          "For everyday debugging, that is usually enough to confirm whether the token even contains the claims you expected."
        ]
      },
      {
        title: "Decoding is not verification",
        paragraphs: [
          "Anyone can decode a JWT payload. That does not prove the token is trusted or unmodified.",
          "Treat payload contents as unverified until signature checks are complete."
        ]
      },
      {
        title: "Redact before sharing",
        paragraphs: [
          "Never paste production tokens into screenshots or long-lived chat threads.",
          "If you must collaborate on an issue, redact secrets and use short-lived samples."
        ]
      }
    ]
  },
  {
    slug: "common-encoding-mistakes",
    title: "Common Encoding Mistakes in Web Development",
    description:
      "The encoding mistakes that still waste time in real apps: Base64 confusion, broken UTF-8, and bad URL escaping.",
    category: "Encoding",
    publishedAt: "2026-05-24",
    readingTime: "4 min read",
    sections: [
      {
        title: "Encoding is not encryption",
        paragraphs: [
          "Developers still confuse Base64 with secrecy. It only changes representation, not security.",
          "If data must be protected, use proper encryption and key management."
        ]
      },
      {
        title: "Encode the right part",
        paragraphs: [
          "URL encoding usually applies to parameter values, not the whole request syntax.",
          "Double-encoding is a common reason callbacks and redirects break."
        ]
      },
      {
        title: "Respect UTF-8",
        paragraphs: [
          "Text that looks fine in ASCII can fail once users send emoji, accented characters, or non-Latin scripts.",
          "Use UTF-8 aware encode and decode flows end to end."
        ]
      }
    ]
  },
  {
    slug: "api-response-debugging-workflow",
    title: "A Better Workflow for Debugging API Responses",
    description:
      "A practical order of operations for figuring out whether the problem is transport, syntax, or data drift.",
    category: "API",
    publishedAt: "2026-05-24",
    readingTime: "6 min read",
    sections: [
      {
        title: "Start with transport",
        paragraphs: [
          "Check status codes, redirects, and response availability before you dig into payload shape.",
          "If the endpoint is blocked by CORS in the browser, switch to curl or a server-side check."
        ]
      },
      {
        title: "Normalize the payload",
        paragraphs: [
          "Formatted JSON is easier to inspect than raw one-line output copied from logs or terminals.",
          "Validation should happen before comparison so syntax noise does not mask the real issue."
        ]
      },
      {
        title: "Compare environments intentionally",
        paragraphs: [
          "Use diffing to inspect changed fields instead of trying to eyeball two large responses.",
          "That matters most when staging, production, and local mocks slowly drift apart."
        ]
      }
    ]
  },
  {
    slug: "yaml-vs-json-for-config-files",
    title: "YAML vs JSON for Config Files",
    description:
      "A plain-English look at when YAML helps, when JSON is safer, and why teams keep moving between both.",
    category: "Config",
    publishedAt: "2026-05-24",
    readingTime: "4 min read",
    sections: [
      {
        title: "YAML favors readability",
        paragraphs: [
          "Large config files are often easier to scan in YAML because indentation and comments are familiar to humans.",
          "That is why YAML remains common in CI systems and infrastructure tooling."
        ]
      },
      {
        title: "JSON favors strictness",
        paragraphs: [
          "JSON is more rigid, which can reduce ambiguity in machine-generated content.",
          "If a system supports both, JSON is often safer when configs are generated automatically."
        ]
      },
      {
        title: "Choose based on authorship",
        paragraphs: [
          "If humans edit it often, YAML may be friendlier. If software produces it, JSON may be more reliable.",
          "That is why teams often end up keeping both around."
        ]
      }
    ]
  },
  {
    slug: "regex-for-everyday-debugging",
    title: "Regex for Everyday Debugging",
    description:
      "How to build useful regex patterns for logs, validation, and text cleanup without making them unreadable.",
    category: "Regex",
    publishedAt: "2026-05-24",
    readingTime: "5 min read",
    sections: [
      {
        title: "Start small",
        paragraphs: [
          "A short, correct regex is more maintainable than a clever one-liner that nobody wants to touch later.",
          "Match the simplest stable pattern first, then add specificity."
        ]
      },
      {
        title: "Test flags separately",
        paragraphs: [
          "Global, multiline, unicode, and dotAll flags change behavior in meaningful ways.",
          "Adding them one by one makes failures easier to explain."
        ]
      },
      {
        title: "Optimize for readability",
        paragraphs: [
          "Regex often becomes team-owned code. Favor patterns that someone else can revisit in six months.",
          "If the pattern grows too complex, consider parsing instead of matching."
        ]
      }
    ]
  }
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getTool = (category: string, slug: string) =>
  tools.find((tool) => tool.category === category && tool.slug === slug);

export const getToolById = (id: string) => tools.find((tool) => tool.id === id);

export const getArticle = (slug: string) =>
  articles.find((article) => article.slug === slug);
