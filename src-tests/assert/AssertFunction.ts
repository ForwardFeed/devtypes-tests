import type {AssertFunction} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertFunction< () => void >;  // ✓
type B = AssertFunction< {} >;          // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
