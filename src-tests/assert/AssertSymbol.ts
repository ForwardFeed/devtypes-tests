import type {AssertSymbol} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertSymbol< symbol >;  // ✓
type B = AssertSymbol< string >;  // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
