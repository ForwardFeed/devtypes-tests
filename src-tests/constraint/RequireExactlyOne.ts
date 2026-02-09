import type {RequireExactlyOne} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type Test = { a?: string; b?: number; c: boolean };
type Result = RequireExactlyOne< Test, 'a' | 'b' >;
// { a: string; b?: never; c: boolean } | { a?: never; b: number; c: boolean }

// Manually written content.
