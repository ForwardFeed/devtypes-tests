import type {AssertString} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertString< '42' >;  // ✓
type B = AssertString< 42 >;    // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
