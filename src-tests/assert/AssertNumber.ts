import type {AssertNumber} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertNumber< number >;   // ✓
type B = AssertNumber< boolean >;  // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
