import type {AssertBoolean} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertBoolean< true >;    // ✓
type B = AssertBoolean< string >;  // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
