import type {AssertError} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertError< Error >;      // ✓
type B = AssertError< TypeError >;  // ✓
type C = AssertError< string >;     // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✓
const C: C = ✗ TS error

// Manually written content.
