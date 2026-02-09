import type {AssertRecord} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertRecord< Record< string, number > >;  // ✓
type B = AssertRecord< { a: number } >;             // ✓
type C = AssertRecord< string >;                    // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✓
const C: C = ✗ TS error

// Manually written content.
