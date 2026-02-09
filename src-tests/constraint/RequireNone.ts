import type {RequireNone} from "@devtypes/constraint"

// Examples automatically extracted from the documentation.
type Test = { a?: string; b?: number; c: boolean };
type Result = RequireNone< Test, 'a' | 'b' >;
// { c: boolean; a?: never; b?: never }

// Manually written content.
