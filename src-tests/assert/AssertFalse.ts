import type {AssertFalse} from "@devtypes/assert"

// Examples automatically extracted from the documentation.
type A = AssertFalse< false >;  // ✓
type B = AssertFalse< true >;   // ✗ TS error

// Test automatically generated from examples.
const A: A = ✓
const B: B = ✗ TS error

// Manually written content.
