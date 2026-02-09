import type {RequireAtLeastOne} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type Test = { a?: string; b?: number };
type Result = RequireAtLeastOne< Test, 'a' | 'b' >;
// { a: string; b?: number } | { a?: string; b: number } | { a: string; b: number }

// Manually written content.
