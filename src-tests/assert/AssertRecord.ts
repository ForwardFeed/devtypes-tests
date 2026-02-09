import type {AssertRecord} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertRecord< Record< string, number > >;  // ✓
type B = AssertRecord< { a: number } >;             // ✓
type C = AssertRecord< string >;                    // ✗ TS error

// Manually written content.
