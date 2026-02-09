import type {AssertMap} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertMap< Map< string, number > >;  // ✓
type B = AssertMap< Set< number > >;          // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
